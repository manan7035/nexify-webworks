# Audit: Security & Privacy

You are auditing the Nexify Webworks codebase for security vulnerabilities and privacy concerns.

## Project Context

- Next.js 16 App Router — server components and API route handlers under `src/app/`
- Uses `@google/genai` for Gemini AI API calls (server-side only, in `src/app/api/gemini/route.ts`)
- Marketing/portfolio site — handles contact form submissions

## What to Check

### XSS & Injection
- No `dangerouslySetInnerHTML` without sanitization (exception: trusted static JSON-LD in layout)
- User input properly escaped in JSX (React auto-escapes, but verify dynamic content)
- No `eval()`, `new Function()`, or `setTimeout(string)` calls
- URL parameters properly validated before use

### API Key & Secret Exposure
- No hardcoded API keys in source code
- Secrets (`GEMINI_API_KEY`) read only server-side via `process.env` in API routes — never in client components
- Client-visible variables prefixed with `NEXT_PUBLIC_`
- No secrets in `.env.example` (only placeholder names)
- No `process.env` usage inside `"use client"` components (would be inlined into the client bundle)

### Data Privacy
- Contact form data handled securely (no logging of PII)
- No unnecessary data collection
- Form submissions use HTTPS
- No sensitive data in URL parameters or localStorage

### Dependency Security
- No known vulnerable dependencies (check `package.json`)
- `@google/genai` used securely (API key not exposed to browser if possible)
- No unnecessary dependencies that increase attack surface

## Output Format

Write findings to the output file in JSON Lines format:

```jsonl
{"type":"summary","text":"Audited {target_dir}. Found X issues."}
{"type":"issue","severity":"critical|important|minor","file":"relative/path","line":42,"message":"What the issue is","suggestion":"How to fix it","inline":false}
```

## Severity Guide

- **critical**: Exposed API keys, XSS vulnerabilities, hardcoded secrets
- **important**: Missing input validation, insecure data handling, exposed env vars
- **minor**: Unnecessary dependencies, missing security headers in HTML
