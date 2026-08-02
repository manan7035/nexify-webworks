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
- Page metadata via the Next.js Metadata API (unique title, description, OG, Twitter, canonical)
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
