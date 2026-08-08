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
const RESEND_TEST_FROM_EMAIL = 'Nexify Webworks <onboarding@resend.dev>';

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

  // Determine API Keys
  const resendApiKey = process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY;
  const isResendConfigured = Boolean(resendApiKey && !resendApiKey.includes('your_resend_api_key'));

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

  // If RESEND_API_KEY is missing from production environment, fallback gracefully
  if (!isResendConfigured) {
    console.info(`[Contact Intake Fallback] Inquiry received from ${emailData.email} (${emailData.name}). RESEND_API_KEY not configured on server.`);

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your inquiry has been received. Our team will get back to you shortly.',
      reply: aiReply || 'Thank you for reaching out to Nexify Webworks. We have logged your request and will review your project requirements promptly.',
      fallbackMode: true,
    });
  }

  // Send real email via Resend
  const resend = new Resend(resendApiKey);
  const targetAdminEmail = process.env.CONTACT_EMAIL || CONTACT_EMAIL;

  try {
    // 1. Attempt admin email sending with verified domain fromEmail
    let adminEmailResult = await resend.emails.send({
      from: fromEmail,
      to: targetAdminEmail,
      replyTo: emailData.email,
      subject: `🔔 New Contact Submission from ${emailData.name}`,
      html: generateAdminNotificationEmail(emailData),
      text: generateAdminNotificationPlainText(emailData),
    });

    // If domain isn't fully verified yet in Resend DNS, automatic fallback to onboarding@resend.dev
    if (adminEmailResult.error && (adminEmailResult.error.message.includes('domain') || adminEmailResult.error.message.includes('verify'))) {
      console.warn('Retrying email delivery with Resend onboarding domain:', adminEmailResult.error.message);
      adminEmailResult = await resend.emails.send({
        from: RESEND_TEST_FROM_EMAIL,
        to: targetAdminEmail,
        replyTo: emailData.email,
        subject: `🔔 New Contact Submission from ${emailData.name}`,
        html: generateAdminNotificationEmail(emailData),
        text: generateAdminNotificationPlainText(emailData),
      });
    }

    if (adminEmailResult.error) {
      console.error('Resend Admin Email Delivery Error:', adminEmailResult.error);
      return NextResponse.json({
        success: false,
        error: `Resend Email Delivery Error: ${adminEmailResult.error.message}`,
        details: adminEmailResult.error,
        reply: aiReply,
      }, { status: 500 });
    }

    // 2. Attempt user confirmation email sending
    let userEmailId: string | undefined = undefined;
    let userEmailWarning: string | undefined = undefined;

    let userEmailResult = await resend.emails.send({
      from: fromEmail,
      to: emailData.email,
      replyTo: targetAdminEmail,
      subject: '✓ Your Inquiry Received - Nexify Webworks',
      html: generateUserConfirmationEmail(emailData),
      text: generateUserConfirmationPlainText(emailData),
    });

    if (userEmailResult.error && (userEmailResult.error.message.includes('domain') || userEmailResult.error.message.includes('verify'))) {
      userEmailResult = await resend.emails.send({
        from: RESEND_TEST_FROM_EMAIL,
        to: emailData.email,
        replyTo: targetAdminEmail,
        subject: '✓ Your Inquiry Received - Nexify Webworks',
        html: generateUserConfirmationEmail(emailData),
        text: generateUserConfirmationPlainText(emailData),
      });
    }

    if (userEmailResult.error) {
      userEmailWarning = userEmailResult.error.message;
      console.warn('User email warning:', userEmailResult.error.message);
    } else {
      userEmailId = userEmailResult.data?.id;
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully.',
      adminEmailId: adminEmailResult.data?.id,
      userEmailId,
      userEmailWarning,
      reply: aiReply,
    });
  } catch (emailError: unknown) {
    const errMessage = emailError instanceof Error ? emailError.message : 'Unknown email error';
    console.error('Email sending exception:', emailError);
    return NextResponse.json({
      success: false,
      error: `Failed to send inquiry: ${errMessage}`,
    }, { status: 500 });
  }
}
