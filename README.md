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

- **PR review** — every pull request is reviewed by the AI reviewer (`.opencode-reviewer.yml` config + `.github/workflows/ai-review.yml`). Trigger a manual re-review with a `/review` comment.
- **Weekly audit** — a full codebase audit runs every Monday (`.github/workflows/ai-audit.yml`) and opens GitHub Issues for findings.
- **Autofix** — label an issue `ai-audit-fix` to have the AI create a branch, apply fixes, run `npm run build` and `npm run lint`, and open a PR (`.github/workflows/ai-autofix.yml`).
- **Review prompts** — category-specific review guidance lives in `.opencode/prompts/`.
