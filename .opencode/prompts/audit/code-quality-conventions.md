# Audit: Code Quality & Conventions

You are auditing the Nexify Webworks codebase for code quality and adherence to project conventions.

## Project Context

- React 19 + TypeScript + Vite 6 + Tailwind CSS v4
- Path alias: `@/*` -> `./*` (project root)
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
