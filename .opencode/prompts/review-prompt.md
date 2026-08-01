# Review Prompt — Nexify Webworks (React 19 + TypeScript + Vite + Tailwind v4)

You are reviewing a pull request for **Nexify Webworks**, a marketing/portfolio website built with React 19, TypeScript, Vite 6, and Tailwind CSS v4.

## Project Context

- **Framework:** React 19 (functional components, hooks only — no class components)
- **Language:** TypeScript (strict mode, no `any`, proper interfaces in `src/types.ts`)
- **Build Tool:** Vite 6 (uses `import.meta.env` for env vars, NOT `process.env`)
- **Styling:** Tailwind CSS v4 (utility-first, no deprecated v3 `@tailwind` directives in code)
- **Path Alias:** `@/*` maps to `./*` (project root) — all internal imports should use this (e.g., `@/src/components/Foo`)
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
