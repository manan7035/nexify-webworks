# Audit: Error Handling & Resilience

You are auditing the Nexify Webworks codebase for error handling quality and resilience.

## Project Context

- Next.js 16 App Router with server-side async operations (Gemini AI API route at `src/app/api/gemini/route.ts`)
- API routes handle errors server-side; client components handle fetch/UI errors
- Marketing site — errors should degrade gracefully, not crash the UI

## What to Check

### Error Boundaries
- Error boundaries present for component trees
- Fallback UI provided for error states (not blank screens)
- Error boundaries at route level where appropriate

### Async Error Handling
- All `async/await` calls wrapped in try/catch
- Promise rejections handled (no unhandled promise rejections)
- Loading states present for async operations
- Error states display user-friendly messages

### API Call Resilience
- Gemini API calls have timeout handling
- Network errors handled gracefully (offline detection, retry logic)
- Rate limiting handled (429 responses)
- Invalid API key errors handled gracefully

### Form Error Handling
- Contact form validates input before submission
- Submission errors displayed to user
- Form state preserved on error (no data loss)

### Graceful Degradation
- Site works without JavaScript (basic HTML fallback)
- Images have fallbacks (alt text, placeholder)
- Animations degrade gracefully if Motion fails to load

## Output Format

Write findings to the output file in JSON Lines format:

```jsonl
{"type":"summary","text":"Audited {target_dir}. Found X issues."}
{"type":"issue","severity":"critical|important|minor","file":"relative/path","line":42,"message":"What the issue is","suggestion":"How to fix it","inline":false}
```

## Severity Guide

- **critical**: Unhandled promise rejections, no error boundaries, crashes on API failure
- **important**: Missing loading states, no form validation, poor error messages
- **minor**: Missing alt text fallbacks, animation error handling
