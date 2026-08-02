import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { rateLimitByIp } from '@/lib/rate-limit';

export const runtime = 'nodejs';

const GEMINI_MODEL = process.env.GEMINI_MODEL ?? 'gemini-2.5-flash';

const requestSchema = z.object({
  name: z.string().trim().max(100).optional(),
  email: z.string().trim().email().max(254).optional(),
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
    `Email: ${data.email ?? 'Not provided'}`,
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

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'The server is missing a valid Gemini API key.' },
      { status: 500 }
    );
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: buildPrompt(parsed.data),
      config: { maxOutputTokens: 500 },
    });

    const reply = response.text?.trim();
    if (!reply) {
      return NextResponse.json(
        { error: 'Gemini returned an empty response.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, reply });
  } catch {
    return NextResponse.json(
      { error: 'Failed to generate response. Please try again later.' },
      { status: 500 }
    );
  }
}
