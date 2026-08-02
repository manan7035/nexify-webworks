# Audit: Performance & Efficiency

You are auditing the Nexify Webworks codebase for performance and efficiency.

## Project Context

- Next.js 16 App Router — initial bundle size matters for SEO and user experience
- Server components by default; `"use client"` only for interactive components
- Uses Motion for animations — can impact performance if misused
- Marketing site — Core Web Vitals (LCP, FID, CLS) are critical

## What to Check

### Bundle Size
- No unnecessary large imports
- Server/client boundary respected — client bundles only include interactive components (`"use client"`)
- Dynamic imports / Next.js `dynamic()` used for large lazy-loaded components
- Tree-shaking effective (no unused exports)
- Images optimized (WebP/AVIF, proper sizing via `next/image`)

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
- Images use `next/image` with lazy loading (default) and `priority` on LCP images
- No render-blocking resources in `<head>`
- Fonts loaded without render-blocking stylesheets

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
