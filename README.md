<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Nexify Webworks Website

This project is a marketing/portfolio website built with **Next.js (App Router)**, React 19, TypeScript, and Tailwind CSS v4.

## Run Locally

**Prerequisites:** Node.js 20+

1. Install dependencies:
   `npm install`
2. Copy `.env.example` to `.env.local` and fill in the values:
   `cp .env.example .env.local`
3. Start the development server:
   `npm run dev`
4. Open http://localhost:3000

## Build for Production

1. Build the Next.js app:
   `npm run build`
2. Start the production server:
   `npm run start`

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Next.js dev server on port 3000 |
| `npm run build` | Build the Next.js app for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint over app, components, and config files |
| `npm run typecheck` | Type-check the project with `tsc --noEmit` |
| `npm run clean` | Remove the `.next/` build directory |

## SEO & Metadata

The site ships with full SEO support out of the box:

- **Metadata** — every page exports unique `title`, `description`, Open Graph, Twitter Card, keywords, and canonical URL. The root layout defines site-wide defaults and a `%s — Nexify Webworks` title template.
- **Sitemap** — `/sitemap.xml` is generated from `src/app/sitemap.ts` and lists all public pages.
- **Robots** — `/robots.txt` is generated from `src/app/robots.ts` (allows crawlers, disallows `/api/`, `/modal-demo`, `/_next/`) and references the sitemap.
- **Schema.org JSON-LD** — Organization/ProfessionalService and WebSite structured data is injected from the root layout.
- **Images** — all images use `next/image` with explicit `width`/`height` and lazy loading; remote images from `images.unsplash.com` are allowlisted in `next.config.ts`.

## Environment Variables

| Variable | Required | Description |
| --- | --- | --- |
| `GEMINI_API_KEY` | Yes (for `/api/gemini`) | Server-side Google AI Studio API key. Read only inside the Next.js API route and never exposed to the browser. |
| `GEMINI_MODEL` | No | Gemini model used by the contact form endpoint. Defaults to `gemini-2.5-flash`. |
| `APP_URL` | No | Public URL of the deployed app, used for canonical URLs, sitemap, robots, and Open Graph metadata. Defaults to `https://nexifywebworks.com`. |

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
- **Weekly audit** — a full codebase audit runs every Monday (`.github/workflows/ai-audit.yml`) targeting `src/app/` and opens GitHub Issues for findings.
- **Autofix** — label an issue `ai-audit-fix` to have the AI create a branch, apply fixes, and open a PR (`.github/workflows/ai-autofix.yml`). The upstream action handles PR creation automatically.
- **Review prompts** — category-specific audit prompts live in `.opencode/prompts/audit/`.

### Known Limitations

- **Custom review prompt** — `.opencode/prompts/review-prompt.md` is not currently loaded by the reusable PR review workflow (the upstream `review.yml` doesn't expose a `review_prompt_file` input). The project context and custom rules from `.opencode-reviewer.yml` still reach the model. This file is kept for future use when the framework supports it.
- **Manual audit category selection** — the `audit_category` input on the audit workflow's manual dispatch is not wired through to the upstream action (input name mismatch). Scheduled audits still run with random category selection.
- **Build/lint verification in autofix** — the `run_checks_after_fix` config is used by the upstream action for reporting but may not gate PR creation. The autofix PR description claims checks passed; verify manually before merging.
