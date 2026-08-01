# OpenCode AI Reviewer Setup — Design Spec

**Date:** 2026-08-01
**Project:** nexify-webworks
**Status:** Approved

## Goal

Set up a complete AI-powered code review system on the nexify-webworks repository using the opencode-ai-reviewer framework (`nilesh32236/opencode-ai-reviewer@v1`). The system will provide PR review, full codebase audits, and automated fix PRs.

## Architecture

### Files Created

```
nexify-webworks/
├── .opencode-reviewer.yml          # Main config: project rules, conventions, behavior
├── .opencode/
│   └── prompts/
│       ├── review-prompt.md        # PR review prompt (React/TS/Vite/Tailwind aware)
│       ├── audit-prompt.md         # Full codebase audit prompt
│       └── autofix-prompt.md       # Autofix PR creation prompt
├── .github/
│   └── workflows/
│       ├── ai-review.yml           # PR review trigger (on pull_request)
│       ├── ai-audit.yml            # Audit trigger (weekly schedule + manual)
│       └── ai-autofix.yml          # Autofix trigger (on audit issues)
└── docs/superpowers/specs/
    └── 2026-08-01-opencode-ai-reviewer-setup-design.md
```

### How It Works

1. **PR Review**: When a PR is opened/updated, GitHub Actions calls the reusable `review.yml` from `nilesh32236/opencode-ai-reviewer@v1`, which reads the custom prompt + config, analyzes the diff, and posts review comments.
2. **Audit**: Runs weekly (Monday) + manual dispatch. Scans entire `src/` for code quality, security, performance, and convention issues. Creates GitHub Issues for findings.
3. **Autofix**: When audit issues are created, AI analyzes them, creates a branch, applies fixes, and opens a PR for manual review.

## Configuration: `.opencode-reviewer.yml`

- **Project conventions**: React 19, TypeScript strict, Vite 6, Tailwind v4, `@/*` path alias maps to `./*` (project root)
- **Allowed commands**: `npm run build`, `npm run lint` (tsc --noEmit)
- **Audit targets**: `src/` directory
- **Autofix**: enabled, creates PRs (not direct pushes)
- **Model**: `opencode/deepseek-v4-flash-free`
- **fix.runChecks**: `npm run build` + `npm run lint`
- **audit.createIssues**: true
- **audit.autoFix**: false (issues are created, autofix workflow handles them separately)

## Custom Prompts

### `review-prompt.md` (PR Review)
- React 19 best practices (hooks rules, component patterns)
- TypeScript type safety (no `any`, proper generics, strict null checks)
- Vite-specific concerns (import.meta.env usage, asset handling)
- Tailwind v4 patterns (utility classes, no deprecated v3 syntax)
- Code organization (component size, file structure, naming)
- Performance (unnecessary re-renders, missing memoization, large bundles)
- Security (XSS in JSX, unsafe `dangerouslySetInnerHTML`, env leaks)
- Accessibility (ARIA attributes, semantic HTML, keyboard navigation)

### `audit-prompt.md` (Full Codebase Audit)
- Dead code detection (unused imports, unreachable components)
- Type coverage gaps (implicit `any`, missing return types)
- Tailwind consistency (duplicate class patterns, missing `@apply` opportunities)
- Component complexity (too many props, deeply nested JSX)
- Data flow issues (prop drilling without context, missing error boundaries)
- SEO/Schema.org correctness (marketing site)
- Bundle size risks (large imports, missing lazy loading)

### `autofix-prompt.md` (Auto-fix PRs)
- Only fixes safe, mechanical issues (unused imports, formatting, type annotations)
- Never changes business logic or component behavior
- Creates one PR per issue category (not one giant PR)
- Includes before/after explanation in PR description
- Runs `npm run build` and `npm run lint` to verify fixes don't break anything

## Workflow Triggers

| Workflow | Trigger | Model |
|---|---|---|
| `ai-review.yml` | `pull_request` (opened, synchronize, reopened) | `opencode/deepseek-v4-flash-free` |
| `ai-audit.yml` | `schedule: cron (weekly Monday)` + `workflow_dispatch` (manual) | `opencode/deepseek-v4-flash-free` |
| `ai-autofix.yml` | `issues` (labeled `ai-audit-fix`) | `opencode/deepseek-v4-flash-free` |

## Error Handling

- **Build/lint failures during autofix**: If `npm run build` or `npm run lint` fails after applying fixes, the autofix PR is NOT created. A comment is added to the audit issue explaining the failure.
- **Model unavailability**: Workflow fails gracefully with a clear error message.
- **Permission issues**: Workflows use `secrets: inherit` for `GITHUB_TOKEN` write access.
- **Large diffs**: If PR diff exceeds model context, review focuses on recent changes and notes skipped files.

## Safety Guards

- Autofix PRs target branches like `ai-autofix/<issue-number>-<category>`, never `main`
- All autofix PRs require manual review and approval before merge
- Audit issues labeled `ai-audit` for easy filtering
- Review comments posted as suggestions, not demands

## Approach

**Hybrid approach**: Uses reusable workflows from `nilesh32236/opencode-ai-reviewer@v1` as the base engine, with custom `.opencode-reviewer.yml` config and custom prompt files in `.opencode/prompts/` tailored to React 19, TypeScript, Vite, and Tailwind v4 patterns.
