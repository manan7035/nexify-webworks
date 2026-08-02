<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Nexify Webworks Website

This project is a static Vite website built with React and Tailwind CSS.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Start development server:
   `npm run dev`

## Build for Production

1. Build the static website:
   `npm run build`
2. Deploy the generated `dist/` folder to any static hosting provider.

## Next.js App

The repository also contains a Next.js app (App Router under `src/app/`) that is being migrated in phases. Run it with:

- `npm run dev:next` — start the Next.js dev server on port 3001.
- `npm run build:next` — build the Next.js app.
- `npm run lint:next` — lint/type-check the Next.js app.

## Environment Variables

| Variable | Required | Description |
| --- | --- | --- |
| `GEMINI_API_KEY` | Yes (for `/api/gemini`) | Server-side Google AI Studio API key. Read only inside the Next.js API route and never exposed to the browser. |
| `GEMINI_MODEL` | No | Gemini model used by the contact form endpoint. Defaults to `gemini-2.5-flash`. |
| `APP_URL` | No | Public URL of the deployed app, used for metadata. |

Copy `.env.example` to `.env.local` and fill in the values before running the Next.js app.

## API Routes

### `POST /api/gemini`

Generates a Gemini reply for the contact form. Requires `GEMINI_API_KEY` to be set on the server.

Request body:

```json
{
  "name": "Marcus Thorne",
  "email": "m.thorne@company.com",
  "message": "I need a marketing site built in React.",
  "scopes": ["Website Development using React"]
}
```

- `name` (optional, max 100 chars)
- `email` (optional, must be a valid email, max 254 chars)
- `message` (required, 1–2000 chars)
- `scopes` (optional, array of up to 10 strings, max 100 chars each)

Success response (`200`):

```json
{
  "success": true,
  "reply": "Thanks for reaching out, Marcus! ..."
}
```

Error responses:

- `400` — invalid JSON or failed validation (includes per-field `details`).
- `429` — rate limited. The endpoint allows **10 requests per minute per IP**; a `Retry-After` header indicates when to retry.
- `500` — missing `GEMINI_API_KEY` or the upstream Gemini call failed. Responses never leak the API key or internal details.

The route lives in `src/app/api/gemini/route.ts` and is rate limited per IP with an in-memory sliding window.

## AI Code Review

This repo is wired to the [OpenCode AI Reviewer](https://github.com/nilesh32236/opencode-ai-reviewer) setup for automated, AI-powered code review:

- **PR review** — every pull request is reviewed by the AI reviewer (`.opencode-reviewer.yml` config + `.github/workflows/ai-review.yml`).
- **Weekly audit** — a full codebase audit runs every Monday (`.github/workflows/ai-audit.yml`) targeting `src/` and opens GitHub Issues for findings.
- **Autofix** — label an issue `ai-audit-fix` to have the AI create a branch, apply fixes, and open a PR (`.github/workflows/ai-autofix.yml`). The upstream action handles PR creation automatically.
- **Review prompts** — category-specific audit prompts live in `.opencode/prompts/audit/`.

### Known Limitations

- **Custom review prompt** — `.opencode/prompts/review-prompt.md` is not currently loaded by the reusable PR review workflow (the upstream `review.yml` doesn't expose a `review_prompt_file` input). The project context and custom rules from `.opencode-reviewer.yml` still reach the model. This file is kept for future use when the framework supports it.
- **Manual audit category selection** — the `audit_category` input on the audit workflow's manual dispatch is not wired through to the upstream action (input name mismatch). Scheduled audits still run with random category selection.
- **Build/lint verification in autofix** — the `run_checks_after_fix` config is used by the upstream action for reporting but may not gate PR creation. The autofix PR description claims checks passed; verify manually before merging.
