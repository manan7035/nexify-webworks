import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { rateLimitByIp } from '@/lib/rate-limit';
import { Resend } from 'resend';
import { CONTACT_EMAIL } from '@/app/constants';
import {
  generateUserConfirmationEmail,
  generateAdminNotificationEmail,
  generateUserConfirmationPlainText,
  generateAdminNotificationPlainText,
} from '@/lib/email-templates';

export const runtime = 'nodejs';

const GEMINI_MODEL = process.env.GEMINI_MODEL ?? 'gemini-2.5-flash';
const DEFAULT_FROM_EMAIL = 'Nexify Webworks <info@nexifywebworks.in>';
const RESEND_TEST_FROM = 'Nexify Webworks <onboarding@resend.dev>';

const requestSchema = z.object({
  name: z.string().trim().max(100).optional(),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(1).max(2000),
  scopes: z.array(z.string().trim().max(100)).max(10).optional(),
});

type RequestData = z.infer<typeof requestSchema>;

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return request.headers.get('x-real-ip') ?? 'unknown';
}

function buildPrompt(data: RequestData): string {
  return [
    'You are a project intake assistant for Nexify Webworks, a freelance web development agency.',
    'Read the contact inquiry below and reply with a short, professional acknowledgment',
    'that confirms the project scope and the next step.',
    '',
    `Name/Organization: ${data.name ?? 'Not provided'}`,
    `Email: ${data.email}`,
    `Requested scope: ${data.scopes && data.scopes.length > 0 ? data.scopes.join(', ') : 'Not specified'}`,
    `Inquiry: ${data.message}`,
  ].join('\n');
}

export async function POST(request: Request): Promise<NextResponse> {
  const { allowed, retryAfterSeconds } = rateLimitByIp(getClientIp(request));

  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      {
        status: 429,
        headers: { 'Retry-After': String(retryAfterSeconds) },
      }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON in request body.' },
      { status: 400 }
    );
  }

  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: 'Invalid request body.',
        details: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  // Determine Resend API Key from environment variables safely
  const resendApiKey =
    process.env.RESEND_API_KEY ||
    process.env.NEXT_PUBLIC_RESEND_API_KEY;

  // Determine sender email address
  let fromEmail = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL;
  if (fromEmail.includes('your_from_email')) {
    fromEmail = DEFAULT_FROM_EMAIL;
  }

  // Optional Gemini AI Assessment
  let aiReply: string | undefined = undefined;
  const geminiApiKey = process.env.GEMINI_API_KEY;
  if (geminiApiKey && !geminiApiKey.includes('your_gemini_api_key')) {
    try {
      const ai = new GoogleGenAI({ apiKey: geminiApiKey });
      const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: buildPrompt(parsed.data),
        config: { maxOutputTokens: 500 },
      });
      aiReply = response.text?.trim();
    } catch (geminiError) {
      console.warn('Gemini AI generation skipped due to error:', geminiError);
    }
  }

  // Prepare email data payload
  const emailData = {
    name: parsed.data.name ?? 'Visitor',
    email: parsed.data.email,
    message: parsed.data.message,
    scopes: parsed.data.scopes || [],
    aiReply,
  };

  // If RESEND_API_KEY is not configured on production, fallback gracefully with success message
  if (!resendApiKey) {
    console.info(`[Contact Intake Fallback] Inquiry from ${emailData.email} (${emailData.name}). RESEND_API_KEY is not configured on production.`);

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your inquiry has been received. Our team will get back to you shortly.',
      reply: aiReply || 'Thank you for reaching out to Nexify Webworks. We have logged your request and will review your project requirements promptly.',
      fallbackMode: true,
    });
  }

  // Initialize Resend Client with environment API key
  const resend = new Resend(resendApiKey);
  const targetAdminEmail = process.env.CONTACT_EMAIL || CONTACT_EMAIL;

  let adminEmailId: string | undefined = undefined;
  let userEmailId: string | undefined = undefined;
  let resendFromUsed = fromEmail;

  // STEP 1: Send Admin Email Notification
  try {
    const adminAttempt1 = await resend.emails.send({
      from: fromEmail,
      to: targetAdminEmail,
      replyTo: emailData.email,
      subject: `🔔 New Contact Submission from ${emailData.name}`,
      html: generateAdminNotificationEmail(emailData),
      text: generateAdminNotificationPlainText(emailData),
    });

    if (adminAttempt1.error) {
      console.warn('[Resend Admin Email Attempt 1 Warning]:', adminAttempt1.error.message);

      // Fallback attempt using onboarding@resend.dev sender if custom domain DNS is pending
      resendFromUsed = RESEND_TEST_FROM;
      const adminAttempt2 = await resend.emails.send({
        from: RESEND_TEST_FROM,
        to: targetAdminEmail,
        replyTo: emailData.email,
        subject: `🔔 New Contact Submission from ${emailData.name}`,
        html: generateAdminNotificationEmail(emailData),
        text: generateAdminNotificationPlainText(emailData),
      });

      if (!adminAttempt2.error) {
        adminEmailId = adminAttempt2.data?.id;
      }
    } else {
      adminEmailId = adminAttempt1.data?.id;
    }
  } catch (err: unknown) {
    console.error('Admin email exception:', err);
  }

  // STEP 2: Send User Confirmation Email
  try {
    const userAttempt1 = await resend.emails.send({
      from: resendFromUsed,
      to: emailData.email,
      replyTo: targetAdminEmail,
      subject: '✓ Your Inquiry Received - Nexify Webworks',
      html: generateUserConfirmationEmail(emailData),
      text: generateUserConfirmationPlainText(emailData),
    });

    if (!userAttempt1.error) {
      userEmailId = userAttempt1.data?.id;
    }
  } catch (err: unknown) {
    console.warn('User confirmation email exception:', err);
  }

  // Return clean JSON success response
  return NextResponse.json({
    success: true,
    message: 'Thank you! Your inquiry has been received. Our team will get back to you shortly.',
    adminEmailId,
    userEmailId,
    resendFromUsed,
    reply: aiReply,
  });
}
