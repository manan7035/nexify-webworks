# OpenCode AI Reviewer Setup — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Set up a complete AI-powered code review system (PR review, codebase audit, autofix) on the nexify-webworks repository using the opencode-ai-reviewer framework.

**Architecture:** Hybrid approach — uses reusable workflows from `nilesh32236/opencode-ai-reviewer@v1` as the base engine, with a custom `.opencode-reviewer.yml` config and custom prompt files in `.opencode/prompts/` tailored to React 19, TypeScript, Vite, and Tailwind v4 patterns.

**Tech Stack:** GitHub Actions, OpenCode AI (deepseek-v4-flash-free), YAML, Markdown

## Global Constraints

- Model: `opencode/deepseek-v4-flash-free` (no API keys needed)
- Project: React 19 + TypeScript + Vite 6 + Tailwind v4, path alias `@/* -> ./*`
- Build command: `npm run build` (vite build)
- Lint command: `npm run lint` (tsc --noEmit)
- No test framework exists — skip test-related checks
- Audit targets: `src/` directory only
- Autofix creates PRs, never pushes to main directly
- Audit runs weekly (Monday 00:00 UTC) + manual dispatch
- All workflows use `secrets: inherit` for GITHUB_TOKEN
- Follow existing patterns: no unrelated refactoring

---

### Task 1: Create `.opencode-reviewer.yml` Config

**Files:**
- Create: `.opencode-reviewer.yml`

**Purpose:** Define project conventions, review rules, fix behavior, and audit configuration for the AI reviewer.

- [ ] **Step 1: Write the config file**

Create `.opencode-reviewer.yml` with the following content:

```yaml
# OpenCode AI Reviewer Config — Nexify Webworks
# Project: React 19 + TypeScript + Vite 6 + Tailwind v4

project:
  name: "Nexify Webworks"
  description: "A marketing/portfolio website for a freelance web development agency built with React 19, TypeScript, Vite 6, and Tailwind CSS v4."
  conventions:
    - "Use strict TypeScript — avoid 'any', prefer strong type definitions and interfaces."
    - "React 19 functional components with hooks — no class components."
    - "Follow React hooks rules — only call hooks at the top level, not in loops/conditions."
    - "Use Tailwind CSS v4 utility classes — no deprecated v3 syntax."
    - "Path alias '@/*' maps to './src/*' — use it for internal imports."
    - "Component files use PascalCase, utility files use camelCase."
    - "Keep components focused — split large components into smaller ones."
    - "Use TypeScript interfaces for props and data types (defined in src/types.ts)."
  commandReference:
    "npm run build": "Build the project with Vite (outputs to dist/)"
    "npm run lint": "Run TypeScript type checking (tsc --noEmit)"
    "npm run dev": "Start Vite dev server on port 3000"
    "npm run clean": "Remove dist/ build directory"

review:
  enableReachability: true
  customRules:
    - "Verify that environment variables are accessed via import.meta.env (Vite convention), not process.env."
    - "Check that Tailwind classes use v4 syntax — no @tailwind directives in JS/TSX files."
    - "Review component props for proper TypeScript typing — no implicit any."
    - "Verify error boundaries or fallback UI for async data loading states."
    - "Check that images and assets use proper import or public path conventions."
    - "Review for accessibility — semantic HTML, ARIA attributes, keyboard navigation."

fix:
  maxIterations: 3
  runChecks:
    - "npm run build"
    - "npm run lint"
  checkAllowlist:
    - npm
    - node

audit:
  promptsDir: ".opencode/prompts"
  categories:
    - "code-quality-conventions"
    - "security-privacy"
    - "error-handling-resilience"
    - "performance-efficiency"
    - "ui-ux-accessibility"
  targetDirs:
    - "src"
  createIssues: true
  autoFix: false

learning:
  enabled: true
  feedbackSignals:
    - "dismissed"
    - "reaction"
    - "disputed_comment"
  metaReview:
    enabled: true
    interval: 5
    minFindingsForReview: 3
  patternDiscovery:
    enabled: true
    minFrequency: 3
    windowSize: 100
```

- [ ] **Step 2: Verify YAML syntax**

Run: `python3 -c "import yaml; yaml.safe_load(open('.opencode-reviewer.yml'))"` (or any YAML linter)
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add .opencode-reviewer.yml
git commit -m "chore: add OpenCode AI reviewer config"
```

---

### Task 2: Create Custom Review Prompt

**Files:**
- Create: `.opencode/prompts/review-prompt.md`

**Purpose:** Custom review prompt that understands React 19, TypeScript, Vite, and Tailwind v4 patterns. This prompt is appended to the AI reviewer's default prompt via the `review_prompt_file` input.

- [ ] **Step 1: Create directory structure**

```bash
mkdir -p .opencode/prompts
```

- [ ] **Step 2: Write the review prompt**

Create `.opencode/prompts/review-prompt.md` with the following content:

```markdown
# Review Prompt — Nexify Webworks (React 19 + TypeScript + Vite + Tailwind v4)

You are reviewing a pull request for **Nexify Webworks**, a marketing/portfolio website built with React 19, TypeScript, Vite 6, and Tailwind CSS v4.

## Project Context

- **Framework:** React 19 (functional components, hooks only — no class components)
- **Language:** TypeScript (strict mode, no `any`, proper interfaces in `src/types.ts`)
- **Build Tool:** Vite 6 (uses `import.meta.env` for env vars, NOT `process.env`)
- **Styling:** Tailwind CSS v4 (utility-first, no deprecated v3 `@tailwind` directives in code)
- **Path Alias:** `@/*` maps to `./src/*` — all internal imports should use this
- **Structure:** `src/views/` (page components), `src/components/` (reusable components), `src/data/` (mock data), `src/types.ts` (type definitions)
- **No test framework** — focus review on type safety, runtime correctness, and best practices

## What to Check

### React 19 Best Practices
- Hooks called at top level only (not in loops, conditions, or nested functions)
- No missing dependencies in `useEffect`, `useMemo`, `useCallback`
- Proper use of React 19 features (e.g., `use` hook if applicable, actions)
- Components are pure and predictable — no side effects in render
- Proper key usage in lists (stable, unique keys, not array index)
- No unnecessary re-renders — consider `React.memo` for expensive components

### TypeScript Type Safety
- No implicit `any` — all variables, parameters, and return types should be typed
- Props interfaces defined and used (check `src/types.ts` for shared types)
- Proper handling of `null` and `undefined` (optional chaining, nullish coalescing)
- Generic types used where appropriate
- No type assertions (`as`) without justification — prefer type guards
- Event handlers properly typed (React.MouseEvent, React.ChangeEvent, etc.)

### Vite-Specific Concerns
- Environment variables accessed via `import.meta.env.VITE_*` (NOT `process.env`)
- Static assets properly imported or referenced from `public/`
- No CommonJS `require()` — use ESM `import` only
- Dynamic imports use `import()` for code splitting where appropriate

### Tailwind CSS v4 Patterns
- Utility classes used correctly (no custom CSS where Tailwind suffices)
- No deprecated Tailwind v3 syntax (e.g., `@apply` in JS/TSX files)
- Responsive design uses proper breakpoints (`sm:`, `md:`, `lg:`, `xl:`)
- Dark mode uses `dark:` prefix consistently
- No inline `style` props where Tailwind classes would work

### Code Organization
- Components in correct directories (`views/` for pages, `components/` for reusable)
- File names match component names (PascalCase for components)
- No circular dependencies between modules
- Imports ordered and grouped (external, internal, relative)
- No unused imports or variables

### Performance
- No unnecessary re-renders (missing `React.memo`, `useMemo`, `useCallback`)
- Large lists use virtualization or pagination
- Images optimized (proper formats, lazy loading)
- No blocking synchronous operations in render path
- Code splitting for large route components

### Security
- No `dangerouslySetInnerHTML` without sanitization
- User input properly escaped in JSX
- No exposed API keys or secrets in client-side code
- Environment variables properly prefixed with `VITE_`
- No XSS vulnerabilities in dynamic content

### Accessibility
- Semantic HTML elements used (`<nav>`, `<main>`, `<section>`, `<article>`)
- ARIA attributes present where needed (`aria-label`, `aria-expanded`, etc.)
- Keyboard navigation supported (tab order, focus management)
- Images have `alt` attributes
- Form inputs have associated `<label>` elements
- Color contrast meets WCAG AA standards

## Severity Guide

- **critical**: Type errors, security vulnerabilities (XSS, exposed secrets), broken builds, accessibility blockers
- **important**: Missing type annotations, performance issues, React anti-patterns, Tailwind misuse
- **minor**: Naming inconsistencies, import ordering, minor accessibility improvements, code style

## Confidence Guide

- **high**: You are certain the issue is real and the suggestion is correct
- **medium**: The issue is likely real but the suggestion may need adjustment
- **low**: You suspect an issue but are not certain — flag for human review

## Important Notes

- This is a **marketing/portfolio site** — SEO, accessibility, and visual quality are high priority
- The site uses **Motion** (Framer Motion successor) for animations — review animation performance
- Mock data lives in `src/data/mockData.ts` — ensure it matches type definitions
- The project has **no test framework** — extra attention to type safety and runtime correctness
- Be constructive — include strengths as well as issues
```

- [ ] **Step 2: Commit**

```bash
git add .opencode/prompts/review-prompt.md
git commit -m "feat: add custom AI review prompt for React/TS/Vite/Tailwind"
```

---

### Task 3: Create Custom Audit Prompts

**Files:**
- Create: `.opencode/prompts/code-quality-conventions.md`
- Create: `.opencode/prompts/security-privacy.md`
- Create: `.opencode/prompts/error-handling-resilience.md`
- Create: `.opencode/prompts/performance-efficiency.md`
- Create: `.opencode/prompts/ui-ux-accessibility.md`

**Purpose:** Custom audit prompts for each category defined in `.opencode-reviewer.yml`. These are used when the audit workflow scans the codebase.

- [ ] **Step 1: Create `code-quality-conventions.md`**

```markdown
# Audit: Code Quality & Conventions

You are auditing the Nexify Webworks codebase for code quality and adherence to project conventions.

## Project Context

- React 19 + TypeScript + Vite 6 + Tailwind CSS v4
- Path alias: `@/*` -> `./src/*`
- No test framework — focus on type safety and runtime correctness
- Marketing/portfolio site — code quality directly impacts SEO and performance

## What to Check

### TypeScript Quality
- No implicit `any` types anywhere in the codebase
- All function return types explicitly declared
- Proper use of interfaces (from `src/types.ts`) for props and data
- No unnecessary type assertions (`as`)
- Proper null/undefined handling with optional chaining and nullish coalescing

### React Conventions
- Functional components only — no class components
- Hooks rules followed (top-level calls, proper dependencies)
- Proper component decomposition (no mega-components)
- Consistent naming (PascalCase for components, camelCase for utilities)

### Dead Code & Debug Artifacts
- No `console.log` calls in production code (wrap in dev-only checks)
- No commented-out code blocks
- No unused imports, variables, or component props
- No unused CSS/Tailwind classes
- TODO/FIXME comments tracked and justified

### Import & Module Organization
- Imports use `@/*` alias for internal imports
- No circular dependencies
- Imports grouped and ordered (external, internal, relative)
- No duplicate imports across files

### Tailwind CSS v4
- No deprecated v3 syntax
- Consistent use of utility classes
- No raw hex colors — use Tailwind's color palette
- Responsive breakpoints used consistently

## Output Format

Write findings to the output file in JSON Lines format:

```jsonl
{"type":"summary","text":"Audited {target_dir}. Found X issues."}
{"type":"issue","severity":"critical|important|minor","file":"relative/path","line":42,"message":"What the issue is","suggestion":"How to fix it","inline":false}
```

## Severity Guide

- **critical**: Type errors, broken imports, class components in React 19 project
- **important**: Implicit `any`, unused imports, `console.log` in production, dead code
- **minor**: Import ordering, naming inconsistencies, minor style issues
```

- [ ] **Step 2: Create `security-privacy.md`**

```markdown
# Audit: Security & Privacy

You are auditing the Nexify Webworks codebase for security vulnerabilities and privacy concerns.

## Project Context

- React 19 SPA (client-side only, no backend)
- Vite 6 build tool
- Uses `@google/genai` for Gemini AI API calls
- Marketing/portfolio site — handles contact form submissions

## What to Check

### XSS & Injection
- No `dangerouslySetInnerHTML` without sanitization
- User input properly escaped in JSX (React auto-escapes, but verify dynamic content)
- No `eval()`, `new Function()`, or `setTimeout(string)` calls
- URL parameters properly validated before use

### API Key & Secret Exposure
- No hardcoded API keys in source code
- Environment variables properly prefixed with `VITE_` for client-side access
- No secrets in `.env.example` (only placeholder names)
- Gemini API key accessed via `import.meta.env.VITE_GEMINI_API_KEY` or server-side only

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
```

- [ ] **Step 3: Create `error-handling-resilience.md`**

```markdown
# Audit: Error Handling & Resilience

You are auditing the Nexify Webworks codebase for error handling quality and resilience.

## Project Context

- React 19 SPA with async operations (Gemini AI API calls)
- No backend — all error handling is client-side
- Marketing site — errors should degrade gracefully, not crash the UI

## What to Check

### Error Boundaries
- Error boundaries present for component trees
- Fallback UI provided for error states (not blank screens)
- Error boundaries at route/view level (`src/views/`)

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
```

- [ ] **Step 4: Create `performance-efficiency.md`**

```markdown
# Audit: Performance & Efficiency

You are auditing the Nexify Webworks codebase for performance and efficiency.

## Project Context

- React 19 SPA — initial bundle size matters for SEO and user experience
- Vite 6 build tool with code splitting support
- Uses Motion for animations — can impact performance if misused
- Marketing site — Core Web Vitals (LCP, FID, CLS) are critical

## What to Check

### Bundle Size
- No unnecessary large imports
- Code splitting used for routes/views (`React.lazy` + `Suspense`)
- Tree-shaking effective (no unused exports)
- Images optimized (WebP/AVIF, proper sizing)

### React Performance
- Unnecessary re-renders identified (missing `React.memo`, `useMemo`, `useCallback`)
- Large lists use virtualization or pagination
- Expensive computations memoized
- No inline object/array creation in JSX props

### Animation Performance
- Motion animations use `transform` and `opacity` (GPU-accelerated)
- No layout-thrashing animations (animating width/height/top/left)
- Animations respect `prefers-reduced-motion`
- No animation-induced layout shifts (CLS)

### Asset Loading
- Images use lazy loading (`loading="lazy"`)
- Critical CSS inlined
- Fonts use `font-display: swap`
- No render-blocking resources

### Network Efficiency
- API calls batched where possible
- No redundant API calls (caching, deduplication)
- Static assets cached appropriately
- No unnecessary network requests on page load

## Output Format

Write findings to the output file in JSON Lines format:

```jsonl
{"type":"summary","text":"Audited {target_dir}. Found X issues."}
{"type":"issue","severity":"critical|important|minor","file":"relative/path","line":42,"message":"What the issue is","suggestion":"How to fix it","inline":false}
```

## Severity Guide

- **critical**: Massive bundle size, render-blocking resources, animation-induced CLS
- **important**: Missing code splitting, unnecessary re-renders, unoptimized images
- **minor**: Missing lazy loading, suboptimal caching, minor animation improvements
```

- [ ] **Step 5: Create `ui-ux-accessibility.md`**

```markdown
# Audit: UI/UX & Accessibility

You are auditing the Nexify Webworks codebase for UI/UX quality and accessibility compliance.

## Project Context

- Marketing/portfolio website — visual quality and accessibility are critical for business
- React 19 with Tailwind CSS v4
- Uses Motion for animations
- Target audience: potential clients seeking web development services

## What to Check

### Accessibility (WCAG 2.1 AA)
- Semantic HTML elements used (`<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`)
- ARIA attributes present where needed (`aria-label`, `aria-expanded`, `aria-hidden`, `role`)
- Keyboard navigation fully supported (tab order, focus visible, focus trapping in modals)
- All images have descriptive `alt` attributes
- Form inputs have associated `<label>` elements
- Color contrast meets WCAG AA (4.5:1 for text, 3:1 for large text)
- Focus indicators visible and clear
- Skip navigation link present

### Responsive Design
- Layout works on mobile (320px+), tablet (768px+), and desktop (1024px+)
- Touch targets at least 44x44px on mobile
- No horizontal scrolling on mobile
- Text readable without zoom on mobile
- Images scale properly

### Form UX
- Contact form has clear labels and placeholders
- Validation errors displayed inline and clearly
- Submit button has loading state
- Success/error messages after submission
- Form accessible via keyboard

### Animation & Motion
- Animations enhance UX, not distract
- `prefers-reduced-motion` respected
- No animation-induced motion sickness (excessive parallax, flashing)
- Transitions smooth and purposeful

### SEO & Content
- Proper heading hierarchy (`h1` -> `h2` -> `h3`)
- Meta tags present and accurate (title, description, OG, Twitter)
- Schema.org JSON-LD structured data correct
- Internal links use descriptive anchor text
- Content readable and scannable

## Output Format

Write findings to the output file in JSON Lines format:

```jsonl
{"type":"summary","text":"Audited {target_dir}. Found X issues."}
{"type":"issue","severity":"critical|important|minor","file":"relative/path","line":42,"message":"What the issue is","suggestion":"How to fix it","inline":false}
```

## Severity Guide

- **critical**: Missing keyboard navigation, no alt text on images, broken form accessibility
- **important**: Poor color contrast, missing ARIA attributes, no responsive breakpoints
- **minor**: Minor spacing issues, animation preferences not respected, heading hierarchy drift
```

- [ ] **Step 6: Commit all audit prompts**

```bash
git add .opencode/prompts/
git commit -m "feat: add custom audit prompts for code quality, security, error handling, performance, accessibility"
```

---

### Task 4: Create AI PR Review Workflow

**Files:**
- Create: `.github/workflows/ai-review.yml`

**Purpose:** Trigger AI review on every pull request. Uses the reusable workflow from `nilesh32236/opencode-ai-reviewer@v1`.

- [ ] **Step 1: Create directory**

```bash
mkdir -p .github/workflows
```

- [ ] **Step 2: Write the workflow file**

Create `.github/workflows/ai-review.yml` with the following content:

```yaml
# ─── AI PR Review Workflow ───
# Triggers AI code review on every pull request.
# Uses the reusable workflow from nilesh32236/opencode-ai-reviewer@v1.

name: AI PR Review

on:
  pull_request:
    types: [opened, synchronize, reopened]
  issue_comment:
    types: [created]

permissions:
  contents: read
  pull-requests: write
  issues: write

concurrency:
  group: ai-review-${{ github.event.pull_request.number }}
  cancel-in-progress: true

jobs:
  review:
    # Skip bot PRs, trigger on /review comment
    if: |
      github.actor != 'github-actions[bot]' &&
      (
        github.event_name == 'pull_request' ||
        contains(github.event.comment.body || '', '/review')
      )
    uses: nilesh32236/opencode-ai-reviewer/.github/workflows/review.yml@v1
    with:
      model: 'opencode/deepseek-v4-flash-free'
      max_files_per_batch: 3
      include_strengths: true
      project_context: 'React 19 + TypeScript + Vite 6 + Tailwind CSS v4. Marketing/portfolio site. No test framework.'
    secrets: inherit
```

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/ai-review.yml
git commit -m "ci: add AI PR review workflow"
```

---

### Task 5: Create AI Audit Workflow

**Files:**
- Create: `.github/workflows/ai-audit.yml`

**Purpose:** Run full codebase audit weekly (Monday 00:00 UTC) and allow manual dispatch. Uses the reusable workflow from `nilesh32236/opencode-ai-reviewer@v1`.

- [ ] **Step 1: Write the workflow file**

Create `.github/workflows/ai-audit.yml` with the following content:

```yaml
# ─── AI Codebase Audit Workflow ───
# Runs full codebase audit weekly (Monday 00:00 UTC) and on manual dispatch.
# Creates GitHub Issues for findings.
# Uses the reusable workflow from nilesh32236/opencode-ai-reviewer@v1.

name: AI Codebase Audit

on:
  schedule:
    - cron: '0 0 * * 1'  # Every Monday at 00:00 UTC
  workflow_dispatch:
    inputs:
      audit_category:
        description: 'Specific audit category (omit for random)'
        required: false
        type: string
        default: ''
      target_dir:
        description: 'Specific directory to audit (omit for random)'
        required: false
        type: string
        default: ''

permissions:
  contents: read
  issues: write
  pull-requests: write

concurrency:
  group: ai-audit-${{ github.sha }}
  cancel-in-progress: true

jobs:
  audit:
    uses: nilesh32236/opencode-ai-reviewer/.github/workflows/audit.yml@v1
    with:
      model: 'opencode/deepseek-v4-flash-free'
      prompt_name: ${{ github.event.inputs.audit_category || '' }}
      target_dir: ${{ github.event.inputs.target_dir || '' }}
      create_issues: true
      auto_fix: false
    secrets: inherit
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/ai-audit.yml
git commit -m "ci: add AI codebase audit workflow (weekly + manual)"
```

---

### Task 6: Create AI Autofix Workflow

**Files:**
- Create: `.github/workflows/ai-autofix.yml`

**Purpose:** When an audit issue is labeled for fixing, AI creates a branch, applies fixes, runs build/lint checks, and opens a PR for review.

- [ ] **Step 1: Write the workflow file**

Create `.github/workflows/ai-autofix.yml` with the following content:

```yaml
# ─── AI Autofix Workflow ───
# Triggers when an issue is labeled 'ai-audit-fix'.
# AI creates a branch, applies fixes, runs checks, and opens a PR.
# Uses the reusable workflow from nilesh32236/opencode-ai-reviewer@v1.

name: AI Autofix

on:
  issues:
    types: [labeled]

permissions:
  contents: write
  pull-requests: write
  issues: write

concurrency:
  group: ai-autofix-${{ github.event.issue.number }}
  cancel-in-progress: false

jobs:
  autofix:
    if: github.event.label.name == 'ai-audit-fix'
    runs-on: ubuntu-latest
    timeout-minutes: 30

    steps:
      - uses: actions/checkout@v7
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 22
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: AI Fix
        id: ai-fix
        uses: nilesh32236/opencode-ai-reviewer@v1
        with:
          mode: fix
          model: 'opencode/deepseek-v4-flash-free'
          max_fix_iterations: 3
          run_checks_after_fix: 'npm run build && npm run lint'
          github_token: ${{ secrets.GITHUB_TOKEN }}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: Create Fix PR
        if: steps.ai-fix.outputs.changes_made == 'true'
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          ISSUE_NUMBER: ${{ github.event.issue.number }}
          ISSUE_TITLE: ${{ github.event.issue.title }}
        run: |
          BRANCH="ai-autofix/${ISSUE_NUMBER}-$(echo "${ISSUE_TITLE}" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | head -c 40)"
          git checkout -b "$BRANCH"
          git add -A
          git commit -m "fix: auto-fix for issue #${ISSUE_NUMBER} - ${ISSUE_TITLE}"
          git push origin "$BRANCH"
          gh pr create \
            --title "🤖 Auto-fix for #${ISSUE_NUMBER}: ${ISSUE_TITLE}" \
            --body "This PR was automatically generated to fix issue #${ISSUE_NUMBER}.\n\n**Changes:** Applied by OpenCode AI Reviewer.\n**Checks:** \`npm run build\` and \`npm run lint\` passed.\n\nPlease review carefully before merging." \
            --label "autofix" \
            --base main \
            --head "$BRANCH"
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/ai-autofix.yml
git commit -m "ci: add AI autofix workflow (creates PRs for labeled issues)"
```

---

### Task 7: Create Autofix Prompt

**Files:**
- Create: `.opencode/prompts/autofix-prompt.md`

**Purpose:** Guide the AI when creating autofix PRs — ensures only safe, mechanical fixes are applied.

- [ ] **Step 1: Write the autofix prompt**

Create `.opencode/prompts/autofix-prompt.md` with the following content:

```markdown
# Autofix Prompt — Nexify Webworks

You are an AI assistant tasked with automatically fixing code quality issues in the Nexify Webworks codebase.

## Rules

### What You CAN Fix
- Unused imports and variables
- Missing TypeScript type annotations
- Missing return types on functions
- `console.log` statements (remove or wrap in dev checks)
- Import ordering and grouping
- Tailwind class ordering and consistency
- Missing `alt` attributes on images
- Missing `aria-label` attributes
- Missing key props in list items
- Incorrect environment variable access (`process.env` -> `import.meta.env`)
- Missing error handling in async functions (add try/catch)
- Missing loading/error states for async operations

### What You MUST NOT fix
- Business logic changes
- Component behavior changes
- UI/visual changes
- API endpoint changes
- Data structure changes
- Any change that alters how the application works at runtime
- Changes to mock data that would affect the displayed content

### Safety Requirements
- After applying fixes, run `npm run build` and `npm run lint`
- If either command fails, DO NOT create a PR — report the failure
- Only commit changes that pass both checks
- Create one PR per issue category (not one giant PR)
- Include a clear before/after explanation in the PR description

## PR Description Format

```markdown
## Auto-Fix Summary

**Issue:** [Link to original issue]
**Category:** [code-quality | security | error-handling | performance | accessibility]

### Changes Made

| File | Change | Reason |
|------|--------|--------|
| `src/...` | [brief description] | [why it was needed] |

### Verification

- [x] `npm run build` passed
- [x] `npm run lint` passed

### Notes

[Any additional context about the changes]
```

## Project Context

- React 19 + TypeScript + Vite 6 + Tailwind CSS v4
- Path alias: `@/*` -> `./src/*`
- Build: `npm run build`, Lint: `npm run lint` (tsc --noEmit)
- No test framework — rely on build and type checks for verification
```

- [ ] **Step 2: Commit**

```bash
git add .opencode/prompts/autofix-prompt.md
git commit -m "feat: add autofix prompt with safety rules"
```

---

### Task 8: Final Verification & Documentation

**Files:**
- Modify: `README.md` (add AI Review section)

**Purpose:** Verify all files are in place and document the setup.

- [ ] **Step 1: Verify file structure**

Run: `find .opencode .github/workflows -type f | sort`
Expected output:
```
.github/workflows/ai-audit.yml
.github/workflows/ai-autofix.yml
.github/workflows/ai-review.yml
.opencode-reviewer.yml
.opencode/prompts/autofix-prompt.md
.opencode/prompts/code-quality-conventions.md
.opencode/prompts/error-handling-resilience.md
.opencode/prompts/performance-efficiency.md
.opencode/prompts/review-prompt.md
.opencode/prompts/security-privacy.md
.opencode/prompts/ui-ux-accessibility.md
```

- [ ] **Step 2: Verify YAML syntax for all workflow files**

Run: `python3 -c "import yaml; [yaml.safe_load(open(f)) for f in ['.opencode-reviewer.yml', '.github/workflows/ai-review.yml', '.github/workflows/ai-audit.yml', '.github/workflows/ai-autofix.yml']]"`
Expected: No errors

- [ ] **Step 3: Verify TypeScript still compiles**

Run: `npm run lint`
Expected: No type errors (same as before our changes)

- [ ] **Step 4: Verify build still works**

Run: `npm run build`
Expected: Successful build to `dist/`

- [ ] **Step 5: Commit all remaining changes**

```bash
git add -A
git commit -m "chore: complete AI reviewer setup — verify build and lint pass"
```

- [ ] **Step 6: Push to remote**

```bash
git push origin main
```
