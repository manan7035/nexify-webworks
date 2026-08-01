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
