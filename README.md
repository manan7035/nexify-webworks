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
