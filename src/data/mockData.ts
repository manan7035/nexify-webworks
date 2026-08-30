import { Project, Article, TeamMember, Testimonial, Service } from '../types';
import convertlyImg from '../assets/images/convertly.webp';
import convertly1Img from '../assets/images/convertly1.webp';
import convertly2Img from '../assets/images/convertly2.webp';
import shreeIndustriesImg from '../assets/images/shreeindustries.webp';
import shreeIndustries1Img from '../assets/images/shreeindusties1.webp';
import hospitalImg from '../assets/images/hospital.webp';
import hospitalHomeImg from '../assets/images/hospital-home.webp';
import hospitalServiceImg from '../assets/images/hospital-service.webp';
import positiveImg from '../assets/images/positive.webp';
import positiveHomeImg from '../assets/images/positive-home.png';
import positiveServiceImg from '../assets/images/positive-service.webp';
import darshakImg from '../assets/images/darshak.webp';
import hardikImg from '../assets/images/hardik.webp';
import kishanImg from '../assets/images/kishan.webp';

const toSrc = (img: unknown): string => img as string;

export const SERVICES: Service[] = [
  {
    id: 'react-apps',
    slug: 'react-development',
    title: 'Website Development using React & Next.js',
    iconName: 'Zap',
    badge: 'React & Next.js Specialist',
    description: 'High-speed custom React applications with fluid Motion animations, Tailwind CSS v4, Next.js App Router architecture, and sub-second Core Web Vitals performance.',
    heroSubtitle: 'Engineer sub-second React websites that rank higher on Google, capture target user intent, and convert site visitors into paying clients.',
    metaTitle: 'Website Development using React & Next.js | Freelance React Developer',
    metaDescription: 'High-converting website development using React & Next.js. Sub-second load times, Tailwind CSS v4, Motion animations, SSG/SSR pre-rendering, and robust API integrations.',
    keywords: [
      'website development using React',
      'React developer India',
      'Next.js developer',
      'freelance React web developer',
      'custom React web application',
      'Core Web Vitals React'
    ],
    deliverables: [
      'Next.js App Router & SSG/SSR Architecture',
      'Tailwind CSS v4 & Motion Micro-Interactions',
      'REST & GraphQL API Backend Integrations',
      'Sub-1s Core Web Vitals & Google Crawl Speed',
      'Interactive State & Responsive Component UI'
    ],
    estimatedDays: '5-10 Days',
    overview: 'In digital commerce, page load speed directly dictates conversions. Traditional monolithic templates slow down user experiences. Website development using React & Next.js decouples frontend rendering from backend bottlenecks, delivering instant interactive states and zero layout shifts.',
    features: [
      {
        title: 'Next.js App Router Architecture',
        description: 'Server Components eliminate heavy client JavaScript bundles while ensuring immediate search engine HTML indexing.',
        iconName: 'Code2'
      },
      {
        title: 'Tailwind CSS v4 & Motion FX',
        description: 'Ultra-lightweight styling framework paired with 60 FPS hardware-accelerated micro-animations.',
        iconName: 'Zap'
      },
      {
        title: 'Core Web Vitals Optimization',
        description: 'Sub-1.2s Largest Contentful Paint (LCP) and sub-50ms Interaction to Next Paint (INP) built into the code.',
        iconName: 'Gauge'
      }
    ],
    workflow: [
      { step: '01', title: 'Architecture Planning', description: 'Defining component boundaries, state trees, and API endpoints tailored to your business goals.' },
      { step: '02', title: 'Component Engineering', description: 'Building atomic React components with TypeScript type-safety and Tailwind styling.' },
      { step: '03', title: 'Pre-rendering & SEO', description: 'Configuring Next.js SSG/SSR static pages, metadata, sitemaps, and OpenGraph tags.' },
      { step: '04', title: 'Speed Audit & Launch', description: 'Running Google Lighthouse audits to lock 95+ performance scores before deployment.' }
    ],
    faqs: [
      {
        question: 'Why choose website development using React over standard WordPress?',
        answer: 'React and Next.js applications decouple frontend rendering from database bottlenecks, producing sub-second page speeds, zero layout shifts, and total immunity to plugin security vulnerabilities.'
      },
      {
        question: 'Is website development using React good for Google SEO?',
        answer: 'Yes! Next.js pre-renders every page to static HTML on the server, ensuring Google search bots index all your content and metadata instantly.'
      },
      {
        question: 'Can you integrate custom backend APIs with React?',
        answer: 'Absolutely. We connect React web apps with REST APIs, GraphQL, headless CMS repositories, and third-party tools like Stripe, Resend, and Firebase.'
      }
    ]
  },
  {
    id: 'wordpress',
    slug: 'wordpress-elementor-acf',
    title: 'Website Design in WordPress (Elementor & ACF)',
    iconName: 'Code2',
    badge: 'Elementor & ACF Expert',
    description: 'Custom WordPress website design powered by Elementor Pro and Advanced Custom Fields (ACF) for dynamic content models, custom blocks, speed optimization, and simple content management.',
    heroSubtitle: 'Build pixel-perfect WordPress websites with Elementor Pro drag-and-drop flexibility and Advanced Custom Fields (ACF) structured content management.',
    metaTitle: 'Website Design in WordPress (Elementor & ACF) | Custom WordPress Developer',
    metaDescription: 'Custom website design in WordPress built with Elementor Pro and Advanced Custom Fields (ACF). Flexible editor controls, custom post types, and enterprise page speed.',
    keywords: [
      'website design in WordPress',
      'website design using Elementor',
      'ACF WordPress developer',
      'Advanced Custom Fields',
      'freelance WordPress developer India',
      'Elementor Pro expert'
    ],
    deliverables: [
      'Elementor Pro Drag-and-Drop Theme Building',
      'Advanced Custom Fields (ACF Pro) Data Models',
      'Custom Post Types & Taxonomy Architecture',
      'Redis Caching & Asset Query Optimization',
      'Mobile-First Responsive Design & SEO Setup'
    ],
    estimatedDays: '4-7 Days',
    overview: 'Get full ownership of your business website with custom WordPress website design powered by Elementor Pro and Advanced Custom Fields (ACF). Non-technical site owners get an effortless content editing experience backed by clean code and fast loading speeds.',
    features: [
      {
        title: 'Elementor Pro Drag & Drop',
        description: 'Design pixel-perfect landing pages, custom headers, footers, and archive layouts visually with zero coding required for future edits.',
        iconName: 'Layout'
      },
      {
        title: 'Advanced Custom Fields (ACF)',
        description: 'Structure complex content—such as team profiles, portfolio items, and service details—into clean, dedicated admin input fields.',
        iconName: 'Code2'
      },
      {
        title: 'Speed & Plugin Optimization',
        description: 'We prune redundant CSS/JS assets and configure database caching so your WordPress site loads in under 1 second.',
        iconName: 'Gauge'
      }
    ],
    workflow: [
      { step: '01', title: 'Content & ACF Modeling', description: 'Designing custom post types and ACF field groups for your business data.' },
      { step: '02', title: 'Elementor Pro Design', description: 'Crafting responsive page layouts, global design tokens, and hover micro-interactions.' },
      { step: '03', title: 'Speed & SEO Optimization', description: 'Configuring Redis object caching, image webp compression, and Schema markup.' },
      { step: '04', title: 'Client Admin Handoff', description: 'Providing video walk-throughs showing how easy it is to update your site content.' }
    ],
    faqs: [
      {
        question: 'What is the benefit of Advanced Custom Fields (ACF) with Elementor?',
        answer: 'ACF lets you structure custom business data into dedicated input fields in WordPress. Elementor then renders that data cleanly, keeping your site structured and easy to maintain.'
      },
      {
        question: 'Will my Elementor WordPress website load quickly on mobile?',
        answer: 'Yes! We disable unused Elementor scripts, lazy-load images, compress styles, and enable server caching so your pages load in under 1 second.'
      },
      {
        question: 'Can I edit the text and images myself after launch?',
        answer: '100% yes. You will have full admin access to edit text, swap images, create blog posts, and add new pages using Elementor.'
      }
    ]
  },
  {
    id: 'wordpress-block-theme',
    slug: 'wordpress-custom-block-theme',
    title: 'Custom WordPress Block Theme Development',
    iconName: 'Layout',
    badge: 'Gutenberg & Block Theme Specialist',
    description: 'Bespoke WordPress block theme development using native Gutenberg blocks, Full Site Editing (FSE), custom block patterns, and ultra-lightweight PHP code.',
    heroSubtitle: 'Build fast, future-proof WordPress websites with custom Gutenberg block themes engineered for speed, clean DOM markup, and native block editor controls.',
    metaTitle: 'Custom WordPress Block Theme Development | Gutenberg FSE Developer',
    metaDescription: 'Bespoke WordPress block theme development using Gutenberg Full Site Editing (FSE). Light asset footprint, custom block patterns, clean PHP, and high page speed.',
    keywords: [
      'custom WordPress block theme development',
      'Gutenberg block theme developer',
      'WordPress Full Site Editing FSE',
      'custom block developer India',
      'WordPress Gutenberg developer'
    ],
    deliverables: [
      'Custom Gutenberg Block Theme Architecture (theme.json)',
      'Bespoke Block Patterns & Reusable Block Variations',
      'Full Site Editing (FSE) Header, Footer & Template Parts',
      'Clean Modular PHP & Asset Loading (Zero Page Builder Bloat)',
      'Google Core Web Vitals Speed & Technical SEO Setup'
    ],
    overview: 'Full Site Editing (FSE) and native Gutenberg blocks represent the modern standard of WordPress theme development. By building custom WordPress block themes from scratch, we eliminate heavy third-party page builders while giving client site administrators native drag-and-drop block editing controls backed by sub-second page performance.',
    features: [
      {
        title: 'Native Gutenberg Block Patterns',
        description: 'Bespoke visual block layouts designed specifically for your brand identity and content editing workflow.',
        iconName: 'Layout'
      },
      {
        title: 'theme.json Design System',
        description: 'Global color palettes, typography scales, spacing tokens, and layout boundaries defined natively in theme configuration.',
        iconName: 'Code2'
      },
      {
        title: 'Zero Page Builder Bloat',
        description: 'Native block rendering produces clean semantic HTML5 code that loads in under 1 second without excess plugin dependencies.',
        iconName: 'Gauge'
      }
    ],
    workflow: [
      { step: '01', title: 'Block Architecture', description: 'Defining theme.json global tokens, template parts, and custom block schema requirements.' },
      { step: '02', title: 'Block Pattern Development', description: 'Coding clean Gutenberg block patterns and FSE template parts in native PHP and JSON.' },
      { step: '03', title: 'Performance Optimization', description: 'Enabling script deferral, critical CSS inline styles, and Redis query caching.' },
      { step: '04', title: 'Client Handoff & Training', description: 'Providing video walk-throughs on managing site templates directly inside the Gutenberg editor.' }
    ],
    faqs: [
      {
        question: 'What is a custom WordPress block theme?',
        answer: 'A custom block theme uses WordPress Full Site Editing (FSE) and native Gutenberg blocks instead of traditional third-party page builders. This results in cleaner HTML code, faster page load speeds, and intuitive native block editing.'
      },
      {
        question: 'Is a block theme faster than traditional page builders?',
        answer: 'Yes! Native Gutenberg block themes load zero heavy page builder scripts, producing ultra-lightweight DOM trees and faster Core Web Vitals metrics.'
      }
    ]
  },
  {
    id: 'ui-ux',
    slug: 'ui-ux-design',
    title: 'Figma UI/UX Design & Prototyping',
    iconName: 'Layout',
    badge: 'Figma UI/UX Specialist',
    description: 'User-centric wireframes, high-fidelity interactive prototypes, and component design systems built in Figma with 1:1 developer handoff perfection.',
    heroSubtitle: 'Transform complex business ideas into beautiful, user-tested digital interfaces with comprehensive Figma design systems and interactive prototypes.',
    metaTitle: 'Figma UI/UX Design & Wireframing Services | Custom Web UI Designer',
    metaDescription: 'User-centered Figma UI/UX design, interactive prototypes, design systems, and mobile wireframes crafted for maximum conversion rates.',
    keywords: [
      'UI UX design',
      'Figma UI UX design',
      'Figma design system',
      'website wireframing',
      'interactive prototype',
      'freelance UI UX designer'
    ],
    deliverables: [
      'Complete Figma Design Systems & Design Tokens',
      'Interactive High-Fidelity Desktop & Mobile Prototypes',
      'User Flow Diagrams & Low-Fidelity Wireframes',
      'Micro-Interactions & Hover Physics Specifications',
      'Developer Handoff Files Ready for React / WordPress'
    ],
    estimatedDays: '3-6 Days',
    overview: 'Great web products begin with great user experience design. Skipping the Figma UI/UX design phase leads to inconsistent visual branding, poor mobile usability, and design debt. We design pixel-perfect UI systems that guide user attention directly to conversion goals.',
    features: [
      {
        title: 'Figma Component Systems',
        description: 'Auto-layout components, color variables, typography hierarchies, and dark/light UI modes organized for scalability.',
        iconName: 'Layout'
      },
      {
        title: 'Clickable Prototypes',
        description: 'Test interactive user flows, popup modals, and navigation drawers before committing to frontend code development.',
        iconName: 'Zap'
      },
      {
        title: '1:1 Code Alignment',
        description: 'All Figma design tokens map directly to Tailwind CSS utility classes and React/WordPress component containers.',
        iconName: 'Code2'
      }
    ],
    workflow: [
      { step: '01', title: 'UX Research & Wireframing', description: 'Mapping user personas, site architecture, and low-fidelity structural layouts.' },
      { step: '02', title: 'Figma Design System', description: 'Establishing color palettes, typography scales, buttons, inputs, and dark mode tokens.' },
      { step: '03', title: 'High-Fidelity Mockups', description: 'Designing complete responsive page interfaces for desktop, tablet, and mobile screens.' },
      { step: '04', title: 'Interactive Handoff', description: 'Delivering organized Figma files with auto-layout and interactive prototype links.' }
    ],
    faqs: [
      {
        question: 'What deliverables do I get with Figma UI/UX Design?',
        answer: 'You receive full ownership of organized Figma source files, reusable design system components, desktop and mobile screens, and clickable prototype links.'
      },
      {
        question: 'Can you convert the Figma UI/UX design into React or WordPress code?',
        answer: 'Yes! We specialize in converting Figma designs into clean React code or Elementor WordPress websites.'
      }
    ]
  },
  {
    id: 'seo-opt',
    slug: 'seo-optimization',
    title: 'SEO & Core Web Vitals Optimization',
    iconName: 'Gauge',
    badge: 'SEO & Speed Specialist',
    description: 'Technical SEO audits, Google Core Web Vitals tuning, JSON-LD Schema markup injection, and search engine crawl speed optimization to rank your business #1 on Google.',
    heroSubtitle: 'Boost search engine visibility, fix slow loading speeds, and rank higher on Google search results for your target service keywords.',
    metaTitle: 'SEO & Core Web Vitals Optimization Services | Rank #1 on Google',
    metaDescription: 'Technical SEO audits, Google crawl speed optimization, Core Web Vitals tuning (LCP, INP, CLS), and JSON-LD Schema markup to rank your business higher.',
    keywords: [
      'SEO optimization',
      'Google crawl speed optimization',
      'Core Web Vitals tuning',
      'JSON LD schema markup',
      'local SEO India',
      'technical SEO audit'
    ],
    deliverables: [
      'Comprehensive Technical SEO & Speed Audit Report',
      'Google Core Web Vitals Tuning (LCP, INP, CLS)',
      'JSON-LD Schema Markup (LocalBusiness, Service, Article)',
      'XML Sitemap & Robots.txt Crawler Optimization',
      'Google Search Console & Analytics Setup'
    ],
    estimatedDays: '2-4 Days',
    overview: 'Search engines reward websites that load quickly and deliver clean structured markup. If your site is slow or missing technical metadata, potential clients will never find you on Google. Our SEO optimization fixes speed bottlenecks and ensures search bots index every page.',
    features: [
      {
        title: 'Core Web Vitals Tuning',
        description: 'Optimizing Largest Contentful Paint (LCP) and Interaction to Next Paint (INP) to achieve 95+ Google Lighthouse scores.',
        iconName: 'Gauge'
      },
      {
        title: 'JSON-LD Schema Markup',
        description: 'Injecting rich structured data graph so your business qualifies for Google Knowledge Graph and search snippets.',
        iconName: 'Code2'
      },
      {
        title: 'Search Indexing & Crawling',
        description: 'Publishing optimized sitemaps, robots.txt directives, and canonical URLs to eliminate duplicate content issues.',
        iconName: 'Zap'
      }
    ],
    workflow: [
      { step: '01', title: 'SEO Audit', description: 'Diagnosing page speed metrics, broken links, metadata gaps, and mobile usability issues.' },
      { step: '02', title: 'Speed Tuning', description: 'Compressing images, lazy-loading below-the-fold assets, and eliminating render-blocking CSS.' },
      { step: '03', title: 'Schema & Meta Injection', description: 'Adding OpenGraph tags, Twitter cards, and JSON-LD structured data graphs.' },
      { step: '04', title: 'Google Re-indexing', description: 'Submitting updated sitemaps to Google Search Console for rapid search re-crawling.' }
    ],
    faqs: [
      {
        question: 'How fast will my site rank after SEO optimization?',
        answer: 'Technical SEO fixes (sitemaps, schema, speed tuning) are usually recognized by Google search crawlers within 24–72 hours, with ranking gains building as bots index your pages.'
      },
      {
        question: 'What are Google Core Web Vitals?',
        answer: 'Core Web Vitals are Google official UX ranking metrics measuring load performance (LCP), interactivity responsiveness (INP), and visual stability (CLS).'
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'convertly-tools',
    title: 'Convertly Tools',
    category: 'React Apps',
    subtitle: 'Client-side converter for PNG, WebP, JPEG and more',
    description: 'A React-based browser tool that converts images and files locally, including PNG to WebP and JPG to WebP, without uploading user content to a server.',
    client: 'Convertly Tools Platform',
    year: '2024',
    liveUrl: 'https://www.convertlytools.in/',
    image: toSrc(convertlyImg),
    secondaryImages: [
      toSrc(convertly1Img),
      toSrc(convertly2Img)
    ],
    metrics: [
      { label: 'Conversion Tools', value: 'PNG, JPG, WebP' },
      { label: 'Local Processing', value: 'Client-side only' },
      { label: 'Use Case', value: 'Image & file optimization' }
    ],
    tags: ['React', 'TypeScript', 'WebAssembly', 'Tailwind CSS'],
    techStack: ['React 19', 'TypeScript', 'WebAssembly', 'Tailwind CSS', 'Vite'],
    challenge: 'Building a fast client-side converter that supports multiple image formats while preserving privacy and avoiding server file uploads.',
    solution: 'Developed a React tool with local file processing and WebAssembly conversion logic to transform image formats entirely in the browser.',
    featured: true,
    bentoSpan: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 'shree-industries',
    title: 'Shree Industries',
    category: 'WordPress',
    subtitle: 'WordPress website built with Elementor for product display and client leads',
    description: 'A WordPress site created with Elementor to showcase client products, services, About Us, and contact form pages for Shree Industries.',
    client: 'Shree Industries',
    year: '2024',
    liveUrl: 'http://shreeindustries.ltd/',
    image: toSrc(shreeIndustriesImg),
    secondaryImages: [
      toSrc(shreeIndustries1Img)
    ],
    metrics: [
      { label: 'Website Type', value: 'WordPress + Elementor' },
      { label: 'Pages', value: 'Home, About, Services, Contact' },
      { label: 'Focus', value: 'Product display & lead capture' }
    ],
    tags: ['WordPress', 'Elementor', 'Contact Form', 'Product Showcase'],
    techStack: ['WordPress', 'Elementor', 'PHP', 'HTML', 'CSS'],
    challenge: 'Creating a polished business website that displays products clearly while keeping content easy to manage through WordPress.',
    solution: 'Built a responsive Elementor site with structured product sections, service pages, and a working contact form.',
    featured: true,
    bentoSpan: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 'hospital-website',
    title: 'Hospital Website',
    category: 'WordPress',
    subtitle: 'WordPress block theme for a modern hospital website',
    description: 'A complete medical website built with a WordPress block theme, featuring dedicated pages for Home, About, Doctor, Service, News, and Contact.',
    client: 'Medical Clinic / Hospital',
    year: '2026',
    liveUrl: 'https://wp-meddical.free.nf/',
    image: toSrc(hospitalImg),
    secondaryImages: [
      toSrc(hospitalHomeImg),
      toSrc(hospitalServiceImg)
    ],
    metrics: [
      { label: 'Theme', value: 'WordPress block theme' },
      { label: 'Pages', value: 'Home, About, Doctor, Service, News, Contact' },
      { label: 'Focus', value: 'Medical presentation & patient inquiries' }
    ],
    tags: ['WordPress', 'Block Theme', 'Gutenberg', 'Medical Website', 'Contact Form'],
    techStack: ['WordPress', 'Block Theme', 'Gutenberg', 'HTML', 'CSS'],
    challenge: 'Creating a trustworthy hospital website that clearly presents doctors, services, news, and contact details while staying easy to update.',
    solution: 'Built a modular WordPress block theme with structured page templates for each core hospital section and a patient-friendly experience.',
    featured: true,
    bentoSpan: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 'positivus',
    title: 'Positivus',
    category: 'WordPress',
    subtitle: 'Elementor page builder website for Home, About, and Service pages',
    description: 'A polished WordPress website built with Elementor, featuring dedicated Home, About, and Service pages for Positivus.',
    client: 'Positivus',
    year: '2026',
    liveUrl: 'https://positivus-wp.free.nf/',
    image: toSrc(positiveImg),
    secondaryImages: [
      toSrc(positiveHomeImg),
      toSrc(positiveServiceImg)
    ],
    metrics: [
      { label: 'Builder', value: 'Elementor' },
      { label: 'Pages', value: 'Home, About, Service' },
      { label: 'Focus', value: 'Agency-style marketing layout' }
    ],
    tags: ['WordPress', 'Elementor', 'Landing Pages', 'Agency Website'],
    techStack: ['WordPress', 'Elementor', 'PHP', 'HTML', 'CSS'],
    challenge: 'Creating a modern marketing website with a clean structure that highlights services and company information without clutter.',
    solution: 'Built a flexible Elementor-based site with clear section layouts, strong visual hierarchy, and easy content editing for future updates.',
    featured: true,
    bentoSpan: 'col-span-1 md:col-span-2 row-span-2'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'wordpress-website-redesign-guide-conversion-speed',
    title: 'The Complete Guide to WordPress Website Redesign in 2026: Modernizing UI/UX, Speed & SEO Without Losing Rankings',
    category: 'Website Redesign',
    excerpt: 'Learn how to redesign an outdated WordPress website into a high-converting, sub-second modern digital powerhouse using Elementor Pro, ACF, and clean Gutenberg block systems without losing your existing Google SEO rankings.',
    content: `
      ### Why Redesigning Your WordPress Website is a High-Impact Business Investment

      In 2026, user attention spans are shorter than ever, and Google's ranking algorithms demand sub-second page performance, flawless mobile responsiveness, and clean semantic architecture. An outdated website built 3 to 5 years ago isn't just an aesthetic issue—it silently bleeds revenue, increases bounce rates, and drags down your search visibility.

      Whether you are running an e-commerce brand, a corporate agency, an African safari operator, or a B2B service firm, a strategic **WordPress website redesign** breathes new life into your brand while turning ordinary visitors into qualified leads.

      #### 1. Critical Signs Your WordPress Site Needs an Immediate Redesign
      * **Slow Loading Times & Core Web Vitals Failure:** If your site takes longer than 2.5 seconds to load on mobile or scores below 85 on Google PageSpeed Insights, you are losing over 40% of potential conversions.
      * **Outdated UI/UX & Non-Responsive Breakpoints:** Cluttered sidebars, inconsistent typography, non-tactile buttons, and awkward horizontal scrolling on tablets or smartphones.
      * **Messy Page Builder Bloat & Broken Plugins:** Older themes weighted down by 30+ legacy plugins, unmaintained shortcodes, and outdated slider scripts that cause security vulnerabilities.
      * **Low Conversion Rates:** High traffic numbers but few form submissions, demo requests, or direct purchases due to unclear Calls-to-Action (CTAs) and friction-heavy user journeys.

      #### 2. The 5-Phase WordPress Redesign Blueprint (Without Losing SEO Rankings)
      At Nexify Webworks, our redesign framework protects your historical Google authority while multiplying conversion rates:

      ##### Phase 1: Comprehensive SEO & URL Architecture Audit
      * We extract all indexed URLs, organic keyword rankings, and high-performing backlinks from Google Search Console and Ahrefs.
      * We construct a rigorous 1:1 301 Redirect Mapping matrix to guarantee zero broken links (404 errors) or lost organic search traffic during DNS migration.

      ##### Phase 2: Figma UI/UX Design System & Mobile-First Wireframing
      * We design bespoke typography tokens, cohesive color palettes, dark/light UI modes, and high-converting CTA containers in Figma.
      * Every interactive component is tested for ergonomic mobile thumb-zone navigation before writing frontend code.

      ##### Phase 3: Modern Theme Engineering (Elementor Pro + ACF or Native Gutenberg FSE)
      * We rebuild your site on a clean, modern foundation using **Elementor Pro paired with Advanced Custom Fields (ACF Pro)** or a custom **Gutenberg Full Site Editing (FSE) block theme**.
      * Content editors receive structured backend custom fields for easy text, image, pricing, and testimonial updates without breaking page layouts.

      ##### Phase 4: Extreme Speed & Database Optimization
      * Convert all media assets to modern WebP/AVIF formats with dynamic responsive \`srcset\` attributes.
      * Clean bloated database tables (pruning old revisions, transient options, and orphaned post meta) and implement Redis object caching with sub-50ms TTFB.

      ##### Phase 5: Zero-Downtime Staging Launch & Search Console Re-Verification
      * The entire redesign is developed and thoroughly QA-tested on an isolated staging server.
      * DNS cutover is performed seamlessly with zero downtime, followed by immediate XML sitemap submission to Google Search Console.

      #### 3. Real-World Redesign Outcomes
      Clients who complete a custom WordPress redesign with Nexify Webworks consistently achieve:
      * **+140% to +220% increase** in lead form submissions and direct inquiries.
      * **95+ Google Lighthouse speed scores** on both Mobile and Desktop.
      * **35% reduction** in bounce rates within 30 days of launch.

      #### 4. Why Hire Nexify Webworks for Your WordPress Redesign
      By partnering with our India-based master engineering studio, you get direct access to senior full-stack WordPress architects who deliver pixel-perfect redesigns in 7 to 14 days at **60%–70% lower investment** than traditional agencies.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'Lead WordPress Redesign Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    },
    date: 'August 30, 2026',
    readTime: '8 min read',
    featured: true,
    image: '/images/wordpress_blog.jpg'
  },
  {
    id: 'wordpress-donation-platform-nonprofit-charity-guide',
    title: 'Building a High-Converting WordPress Donation Platform for Non-Profits, NGOs & Wildlife Charities: Complete 2026 Guide',
    category: 'Donation & Non-Profit Web',
    excerpt: 'How to build a secure, transparent, and high-converting WordPress donation platform for global charities, African wildlife conservation funds, and NGOs with recurring giving, multi-currency gateways, and automated donor tax receipts.',
    content: `
      ### Why Non-Profits and Wildlife Foundations Need a Dedicated Donation Engine

      For charitable non-profits, non-governmental organizations (NGOs), and African wildlife conservation foundations, fundraising is the lifeblood of their mission. Yet research shows that **over 55% of prospective donors abandon donation forms midway** due to slow page speeds, confusing multi-step checkout processes, or lack of preferred local payment gateways.

      Relying solely on third-party crowdfunding portals forces charities to surrender 5%–10% in platform transaction fees while losing direct donor relationships.

      By building a custom **WordPress donation platform**, non-profits and charities gain 100% control over their donor data, automate recurring monthly giving, and maximize fundraising revenue with zero platform middlemen.

      #### 1. What Makes a Modern WordPress Donation Platform Successful?
      * **Frictionless 1-Click Donation Forms:** Simplified single-step donation cards with pre-set suggested donation tiers (e.g. $25, $50, $100, $250) and custom amount inputs.
      * **Recurring Monthly Giving (Donor Sustainer Program):** Seamless toggles between "One-Time" and "Monthly Recurring" contributions that increase donor lifetime value by over 300%.
      * **Donor-Covered Processing Fees:** An optional checkbox allowing generous donors to cover the 2.9% credit card processing fee so 100% of their intended gift reaches the field.
      * **Live Campaign Progress Bars & Impact Metrics:** Visual fundraising meters displaying funds raised against campaign milestones (e.g., "75% of $50,000 raised for Maasai Mara Ranger Patrols").
      * **Concrete Impact Calculators:** Tangible proof of impact showing donors exactly what their gift achieves (e.g., "$35 supplies clean water for a family / $120 funds a solar borehole").

      #### 2. Multi-Currency & Global Payment Gateway Integration
      International charities and African NGOs must accept contributions from donors across North America, Europe, Africa, and Asia. We integrate:
      * **Global Credit/Debit Cards:** Stripe & PayPal with native Apple Pay and Google Pay 1-touch mobile checkout.
      * **African Mobile Money Rails:** Instant M-Pesa (Kenya/Tanzania), Airtel Money, MTN MoMo, Paystack, and Flutterwave integrations for pan-African grassroots support.
      * **Multi-Currency Auto-Detection:** Automatically displaying campaign goals in USD ($), EUR (€), GBP (£), KES (KSh), or ZAR (R) based on donor geolocation.
      * **Cryptocurrency Giving (Optional):** Secure Bitcoin and Ethereum donation widgets for global web3 philanthropists.

      #### 3. Automated Tax Receipts & CRM Synchronization
      Managing donor records manually wastes hundreds of administrative hours. Our WordPress donation architecture automates your entire back-office workflow:
      * **Instant PDF Tax Receipts:** Automatically generates official 501(c)(3), 80G, or registered charity PDF receipts with custom organizational letterheads sent directly via email.
      * **CRM & Email Marketing Sync:** Bi-directional synchronization with donor management CRMs including HubSpot, Salesforce Non-Profit Cloud, Mailchimp, and ActiveCampaign.
      * **Donor Portal:** A secure self-service dashboard where recurring donors can download past tax statements, update credit card details, and adjust their giving frequency.

      #### 4. Ironclad Security, GDPR Compliance & Donor Trust Signals
      Trust is the foundation of digital philanthropy:
      * **PCI-DSS Level 1 Compliance:** Direct tokenized payment transmission ensuring sensitive credit card numbers never touch your WordPress database.
      * **SSL Encryption Badges & Financial Transparency:** Prominent display of charity registration numbers, annual audit summaries, and security trust seals that eliminate donor hesitation.
      * **Sub-Second Speed Optimization:** Fast-loading donation pages hosted on secure CDNs to prevent checkout drop-offs during high-traffic emergency appeal campaigns.

      #### 5. Partner with Nexify Webworks for Your Non-Profit Web Platform
      Nexify Webworks has engineered high-performing donation websites and custom non-profit web solutions for global charities and African conservation trusts. We offer budget-friendly non-profit pricing packages, rapid delivery, and complete documentation so your team can focus on making a world-changing impact.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'Non-Profit Web Systems Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    date: 'August 29, 2026',
    readTime: '9 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'safari-tour-operator-website-design-kenya-tanzania',
    title: 'Custom Safari & Tour Operator Website Design in Kenya, Tanzania & South Africa: How to Drive 3x More Direct International Bookings',
    category: 'Safari & Tourism Web',
    excerpt: 'Discover how custom WordPress and React website development for African safari operators and luxury safari lodges in Kenya, Tanzania, and South Africa turns website visitors into high-ticket direct bookings while eliminating expensive OTA commissions.',
    content: `
      ### Why Safari Tour Operators and Wilderness Lodges Need Custom Web Engineering

      The African safari and luxury experiential travel industry is experiencing an unprecedented surge. Travelers from North America, the United Kingdom, Europe, and Asia are seeking once-in-a-lifetime wildlife expeditions in Kenya’s Maasai Mara, Tanzania’s Serengeti, South Africa’s Kruger National Park, and Botswana’s Okavango Delta.

      However, many tour operators and safari lodges still rely on generic, bloated WordPress themes or surrender 15%–25% commission fees to online travel agencies (OTAs) like SafariBookings, Viator, and TripAdvisor. A slow, poorly structured website causes international travelers to abandon their inquiries and book with competitors instead.

      By investing in **custom safari website design and development**, African tour operators can showcase high-definition wildlife imagery, provide interactive multi-day itinerary builders, and capture high-value direct bookings seamlessly.

      #### 1. The Cost of Outdated Safari Website Templates
      Standard off-the-shelf travel themes suffer from critical design and performance flaws:
      * **Sluggish Load Speeds on International Networks:** Uncompressed wildlife photography and heavy slider plugins result in 6+ second load times, causing impatient international tourists to bounce.
      * **Lack of Custom Safari Itinerary Builders:** Tourists want to visualize day-by-day wildlife drives, accommodation tiers (tented camps vs luxury lodges), and seasonal migration calendars.
      * **Weak Mobile UX for In-Destination Travelers:** More than 65% of itinerary browsing happens on mobile devices. If inquiry buttons, WhatsApp chat triggers, and safari package specs aren't thumb-friendly, you lose the lead.
      * **Heavy Dependence on Middlemen:** Relying on third-party aggregators drains up to a quarter of your booking revenue in broker commissions.

      #### 2. Essential Technical Features for High-Converting Safari Websites
      At Nexify Webworks, we engineer tailored web platforms specifically for African safari companies and luxury lodges:
      * **Interactive Day-by-Day Safari Itineraries:** Structured itinerary tabs displaying game drives, meals, hot air balloon excursions, national park conservation fees, and transfer logistics.
      * **Next-Gen WebP/AVIF Image Optimization with CDN Delivery:** We compress ultra-high-resolution safari photography by 80% without losing visual fidelity, delivering sub-second load times globally.
      * **Dynamic Multi-Currency Inquiry & Booking Flow:** Let international guests view pricing in USD ($), EUR (€), GBP (£), KES (KSh), or ZAR (R), backed by secure inquiry forms and deposit payment integrations (Stripe, PesaPal, Direct Bank Wire).
      * **Direct WhatsApp & Instant Quote Triggers:** High-converting floating contact badges that connect prospective guests directly with your Nairobi, Arusha, or Cape Town safari booking specialists.
      * **Live Wildlife Sightings & Seasonality Guides:** Content modules showcasing Great Migration timings, Big Five tracking seasons, and gorilla trekking permit availability.

      #### 3. Custom WordPress (Elementor & ACF) vs Next.js for Safari Companies
      We offer two proven development pathways depending on your team's operational needs:
      * **WordPress with Elementor Pro & ACF:** Perfect for safari operators who want their internal marketing team to easily add new seasonal tour packages, update lodge rates, and publish travel blog articles without coding.
      * **Next.js & React App Router:** Ideal for large travel conglomerates and multi-country safari brands requiring sub-second edge pre-rendering, interactive custom booking calculators, and zero plugin vulnerability risks.

      #### 4. Why African Safari Operators Partner with Nexify Webworks in India
      Partnering with an experienced Indian web engineering studio gives safari companies a decisive competitive edge:
      * **70% Cost Advantage:** Receive custom, enterprise-grade safari website design at a fraction of the cost charged by Western or large local agencies.
      * **Time Zone Alignment:** India Standard Time (IST) is only 2.5 hours ahead of East Africa Time (EAT - Kenya/Tanzania) and 3.5 hours ahead of South Africa Standard Time (SAST), ensuring seamless real-time collaboration.
      * **Rapid 10-Day Turnaround:** From Figma wireframing to production deployment, we deliver polished, tested websites in record time.
      * **Full Technical SEO Included:** We inject \`TouristTrip\`, \`LodgingBusiness\`, and \`LocalBusiness\` JSON-LD schema so your safari packages rank prominently on Google search.

      #### 5. Transform Your Safari Business Today
      Your website is the digital front door to your African safari experience. Elevate your brand credibility, capture high-ticket international bookings directly, and build an enduring digital asset with Nexify Webworks.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'Travel & Safari Web Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    date: 'August 28, 2026',
    readTime: '8 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'african-neobank-fintech-web-development-ui-ux',
    title: 'Building Next-Generation African Neobank & Fintech Web Applications: Next.js Architecture, M-Pesa Integrations & Ultra-Low Latency UX',
    category: 'African Fintech & Neo',
    excerpt: 'How high-growth African neobanks and fintech startups in Nigeria, Kenya, South Africa, and Ghana use Next.js App Router, bank-grade UI/UX security design, and lightweight mobile money integrations to onboard millions of users effortlessly.',
    content: `
      ### The Fintech Revolution Across Africa: Why Web Experience is Mission-Critical

      Africa is the global epicentre of digital financial innovation. From mobile money pioneers in Kenya and digital neobanks in Nigeria to cross-border remittance providers in Ghana, South Africa, and Rwanda, digital financial institutions are reshaping how over 1.4 billion people save, invest, transfer, and borrow capital.

      However, as competition between African neobanks, micro-lending platforms, and digital payment gateways intensifies, customer acquisition and retention hinge on one factor: **digital web experience, user trust, and lightning-fast frontend performance**.

      Building an African fintech web application is distinctly different from Western banking apps. Engineers must navigate fluctuating cellular data speeds, variable 3G/4G bandwidth, deep mobile money infrastructure (M-Pesa, Paystack, Flutterwave), and rigorous visual trust indicators to convert cautious first-time digital banking users.

      #### 1. Overcoming the Unique Frontend Challenges in African Digital Banking
      * **Data-Saving Architecture:** High mobile data costs in Sub-Saharan Africa mean heavy JavaScript bundles alienate users. Web applications must be engineered with minimal payload footprints and aggressive code-splitting.
      * **Uncompromising Security & Visual Trust Signals:** Neobanks must instantly communicate bank-grade reliability through cryptographic status badges, two-factor authentication (2FA) micro-flows, biometric prompts, and transparent regulatory disclosure.
      * **Frictionless Mobile Money Checkout:** Seamless API integrations with M-Pesa Daraja 2.0, Airtel Money, MTN MoMo, Paystack, Flutterwave, and EFT rails to ensure 99.9% payment success rates.
      * **Sub-50ms Interaction Latency:** Banking dashboards, wallet balance queries, and currency swap calculators must respond instantly without jarring page reloads.

      #### 2. Why Next.js 16 App Router is the Gold Standard for African Neobanks
      Modern fintech engineering teams choose **Next.js with React 19** for mission-critical digital finance portals:
      * **Server-Side Rendering (SSR) for Instant Initial Paint:** Server Components deliver pre-rendered semantic HTML directly to the user's mobile browser, rendering wallet interfaces in under 0.8 seconds even on slow 3G networks.
      * **Edge API Routes & Low-Latency Processing:** Next.js Edge Middleware executes token validation, geo-fencing, and fraud-detection headers at the nearest edge data center (such as Cape Town, Johannesburg, or Lagos nodes).
      * **Tailwind CSS v4 & Motion Physics:** Lightweight, hardware-accelerated micro-animations provide clear tactile feedback for pin entry, balance reveals, transaction progress bars, and money transfer confirmations.
      * **Progressive Web App (PWA) Offline Resilience:** Offline service workers cache account summary screens and local transaction logs so users can inspect receipts even when internet connectivity drops.

      #### 3. Fintech UI/UX Design Principles That Convert in African Markets
      At Nexify Webworks, our Figma UI/UX design workflow adheres to proven regional UX paradigms:
      * **Thumb-Zone Navigation:** Ergonomic bottom-sheet drawers, large tactile input buttons, and simplified numpads designed for one-handed mobile use.
      * **Multi-Language & Multi-Currency Ready:** Seamless switching between USD, NGN, KES, GHS, ZAR, and regional language preferences.
      * **Zero-Friction KYC Onboarding Flows:** Step-by-step identity verification flows with live document camera uploads, national ID validation, and instant progress trackers that prevent drop-offs.
      * **Dark-Mode Luxury Aesthetic:** High-contrast, clean visual design systems with refined typography, neon status accents, and sleek financial charts.

      #### 4. Accelerate Your African Fintech Product with Nexify Webworks
      Whether you are launching a new digital neobank in Lagos, a micro-investment portal in Nairobi, or a cross-border B2B treasury platform in South Africa, Nexify Webworks provides end-to-end frontend engineering and Figma UI/UX design services from India:
      * **Senior Full-Stack Engineers:** Direct pairing with experienced TypeScript, React, and Next.js engineers who understand financial API integrations.
      * **Fast-Track MVP Development:** Go from Figma prototype to live production web app in just 2 to 4 weeks.
      * **Cost-Efficient Offshore Scalability:** Build world-class financial technology with up to 70% cost savings compared to traditional development agencies.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'Fintech & Web Systems Engineer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    },
    date: 'August 26, 2026',
    readTime: '9 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'outsource-web-development-india-africa-businesses',
    title: 'Why African & International Businesses Outsource Web Development to India: Senior React & WordPress Talent at 70% Lower Cost',
    category: 'Global Web Solutions',
    excerpt: 'Explore why startups, SMEs, and safari enterprises across Africa, Europe, and the Middle East partner with Indian freelance developers for custom Next.js, WordPress Elementor, and Figma UI/UX development.',
    content: `
      ### The Strategic Growth Partnership: Why African & Global Brands Choose Indian Web Developers

      In today's interconnected global economy, high-growth startups and established enterprises in Kenya, South Africa, Nigeria, the UK, the UAE, and the US face a common challenge: the soaring cost and scarcity of senior web development talent.

      Hiring a traditional local agency often means paying bloated retainers, enduring months of bureaucratic delays, and dealing with junior developers who lack deep architectural expertise.

      This is why forward-thinking founders and business leaders increasingly choose to **outsource web development to experienced freelance engineers and master agencies in India**. By partnering with Nexify Webworks, businesses unlock enterprise-grade web engineering, sub-second performance, and pixel-perfect UI/UX design at **60%–70% lower investment**.

      #### 1. The Real Advantages of Partnering with Indian Web Engineering Specialists
      * **Direct Access to Senior Talent:** Work one-on-one with the actual software architect writing your React components and designing your custom WordPress themes. No account managers or communication bottlenecks.
      * **Dramatic Cost Efficiency:** Secure senior-level full-stack engineering at transparent, milestone-based rates. Maximize your digital ROI while preserving capital for marketing and operations.
      * **Favorable Time Zone Compatibility:** India Standard Time (IST) aligns exceptionally well with Africa and Europe. For East Africa (Kenya/Tanzania/Uganda), IST is only 2.5 hours ahead; for South Africa (SAST), IST is only 3.5 hours ahead; for the UK (GMT/BST), IST is 4.5 to 5.5 hours ahead. This enables daily real-time standups and rapid turnaround cycles.
      * **Deep Mastery of Modern Stacks:** Access engineers proficient in React 19, Next.js App Router, TypeScript, Tailwind CSS v4, Elementor Pro, Advanced Custom Fields (ACF), and technical Google SEO.

      #### 2. What Sets Nexify Webworks Apart from Freelance Marketplaces
      Generic freelance platforms like Upwork or Fiverr often deliver messy, unmaintainable code or disappear halfway through a project. Nexify Webworks operates with studio-grade accountability:
      * **100% Clean Code Ownership:** All code is written in clean, modular TypeScript or PHP, fully documented, and pushed directly to your private GitHub/GitLab repository.
      * **Sub-Second Speed Guarantee:** Every website we deliver is tuned to score 95+ on Google PageSpeed Insights with sub-1.2s Largest Contentful Paint (LCP) and zero layout shifts.
      * **Complete Turnkey Delivery:** From initial Figma UI/UX wireframes to database configuration, API integrations, Google Search Console indexing, and automated SSL deployment.
      * **Milestone-Based Transparent Pricing:** Clear scopes of work, defined milestone deliverables, and zero surprise fees.

      #### 3. Core Services We Deliver to International & African Clients
      * **High-Speed Next.js & React Web Applications:** Scalable SaaS dashboards, digital banking interfaces, custom web tools, and e-commerce portals.
      * **Bespoke WordPress & Elementor Pro Theme Development:** Easy-to-manage corporate websites, safari lodge showcases, and product catalogs with structured ACF backend fields.
      * **Native Gutenberg Block Themes:** Ultra-lightweight Full Site Editing (FSE) block themes that load in under 500ms without page builder bloat.
      * **Figma UI/UX Design & Clickable Prototypes:** Converting abstract business concepts into intuitive, user-tested visual prototypes ready for engineering handoff.
      * **Comprehensive Technical SEO & Speed Tuning:** Schema markup, XML sitemaps, robots.txt, Core Web Vitals optimization, and Google Search Console setup.

      #### 4. How to Get Started on Your Next Web Project
      Collaborating with Nexify Webworks is simple and efficient:
      * **Step 1: Discovery & Strategy:** Share your project requirements, target audience, and functional specifications via our contact terminal.
      * **Step 2: Architecture & Figma Prototype:** We map out the technical stack, design interactive wireframes, and agree on milestones.
      * **Step 3: Rapid Engineering & Testing:** We build your website in agile sprints with live staging preview links.
      * **Step 4: Global Deployment & SEO Launch:** We configure production hosting, verify Core Web Vitals, submit sitemaps to Google, and hand over full documentation.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'Full-Stack Studio Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    date: 'August 24, 2026',
    readTime: '7 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'safari-company-seo-strategy-core-web-vitals',
    title: 'Technical SEO Strategy for Safari Lodges & Tour Operators: How to Rank #1 on Google for High-Value International Safari Keywords',
    category: 'SEO Strategy',
    excerpt: 'A comprehensive technical SEO and Google Core Web Vitals optimization guide designed specifically for African safari companies, tour operators, and luxury wilderness lodges to capture high-intent travelers from the US, UK, and Europe.',
    content: `
      ### Why Technical SEO is the Most Profitable Marketing Channel for Safari Companies

      For African safari tour operators in Kenya, Tanzania, South Africa, Botswana, and Namibia, a single booked safari package can represent between $4,000 and $30,000 in direct revenue. Yet many safari operators spend thousands of dollars on expensive Google Ads or pay steep OTA commissions because their organic website fails to rank on Google.

      Search engine optimization for safari companies is uniquely competitive. High-intent international travelers from the United States, United Kingdom, Germany, Australia, and Canada search for specific experiences—such as "luxury Serengeti fly-in safari packages", "Maasai Mara Great Migration tour 2026", or "private family safari lodge Kruger".

      To win these top Google rankings, safari companies need a comprehensive **Technical SEO, Structured Schema, and Core Web Vitals strategy**.

      #### 1. The 5 Core Pillars of High-Converting Safari SEO

      ##### Pillar 1: High-Intent Keyword Siloing & Destination Hubs
      Avoid broad keywords like "safari tour" where Wikipedia and national tourism boards dominate. Instead, build dedicated content silos around high-intent transactional search queries:
      * **Destination Hubs:** "Tanzania Safari Itineraries", "Kenya Luxury Safaris", "Okavango Delta Luxury Camps".
      * **Experience-Based Queries:** "Photographic Safari Maasai Mara", "Gorilla Trekking Rwanda Permit Cost", "Serengeti Calving Season Safari".
      * **Audience-Specific Packages:** "Honeymoon Safari South Africa", "Family Friendly Safari Tanzania With Kids".

      ##### Pillar 2: Rich JSON-LD Structured Data Schema Markup
      Google’s search algorithms rely heavily on schema graphs to generate rich search snippets:
      * \`TouristTrip\` & \`OfferCatalog\` **Schema:** Injects itinerary days, inclusions/exclusions, departure cities, and package starting prices directly into Google Search results.
      * \`LodgingBusiness\` **Schema:** For safari lodges and luxury tented camps, highlighting amenities, star ratings, geo-coordinates, and guest reviews.
      * \`FAQPage\` **Schema:** Answers common traveler questions ("Best time to visit Serengeti", "Safari visa requirements") to capture Google Featured Snippets and People Also Ask (PAA) boxes.

      ##### Pillar 3: Google Core Web Vitals Optimization for Safari Imagery
      Safari websites are inherently visual, featuring hundreds of wildlife photos and video clips. If these assets are not optimized, your site fails Google’s Core Web Vitals speed tests:
      * **Largest Contentful Paint (LCP) < 1.2s:** Convert all images to next-gen WebP/AVIF formats, set explicit image dimensions to avoid layout shifts (CLS), and implement responsive image \`srcset\` attributes.
      * **Edge CDN Caching:** Serve safari imagery through global edge content delivery networks (Cloudflare/AWS CloudFront) so users in New York or London experience zero latency.
      * **Lazy Loading Below-the-Fold:** Defer offscreen gallery images and embedded Google Maps until the user scrolls to them.

      ##### Pillar 4: International Geo-Targeting & Multi-Currency Presentation
      Ensure Google Search bots and international guests understand your global reach:
      * Configure canonical URLs to prevent duplicate content across currency-specific package views.
      * Implement geo-targeted metadata and clear international contact channels (international toll-free numbers, direct WhatsApp, and local currency indicators).

      ##### Pillar 5: Authority Building Through Expert Safari Guides
      Publish authoritative, seasonal guides that address traveler anxieties:
      * "Complete Packing List for Kenya Safari in July"
      * "Serengeti vs Maasai Mara: Which is Better for the Great Migration?"
      * "How Far in Advance to Book Gorilla Trekking Permits in Uganda & Rwanda"

      #### 2. How Nexify Webworks Helps Safari Brands Dominate Google
      Our engineering team combines technical speed tuning with deep search engine optimization:
      * Complete technical SEO audits identifying broken links, missing schema, and crawl bottlenecks.
      * Sub-second Core Web Vitals optimization guaranteeing 95+ Google PageSpeed scores.
      * Automated XML sitemap generation and instant indexing submission via Google Search Console.
      * Clean semantic HTML5 markup designed to turn organic search visitors into qualified booking inquiries.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'SEO & Performance Lead',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    },
    date: 'August 21, 2026',
    readTime: '8 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'headless-wordpress-nextjs-african-enterprises',
    title: 'Headless WordPress + Next.js for African Digital Enterprises: Uncompromising Speed on 3G/4G Mobile Networks',
    category: 'React Architecture',
    excerpt: 'Learn why fast-scaling African corporations, media hubs, and e-commerce platforms are adopting Headless WordPress paired with Next.js App Router to achieve sub-second page loads across low-bandwidth mobile connections.',
    content: `
      ### Solving the Performance Challenge in High-Growth African Digital Markets

      Across the African continent, internet connectivity is overwhelmingly mobile-first. Over 85% of all web traffic originates from smartphones, with users frequently navigating fluctuating 3G, 4G, and intermittent public Wi-Fi networks.

      For digital media companies, e-commerce stores, logistics portals, and enterprise businesses in Lagos, Nairobi, Johannesburg, Cairo, and Accra, page load speed is not just a luxury—it directly governs user engagement, conversion rates, and server costs.

      Traditional monolithic WordPress installations often suffer under high traffic volumes, executing heavy PHP database queries for every single visitor. By decoupling the architecture into a **Headless WordPress backend paired with a high-performance Next.js 16 App Router frontend**, enterprises achieve lightning-fast sub-second delivery while preserving effortless content management.

      #### 1. Why Monolithic WordPress Struggles on Mobile Networks
      * **High Server Response Times (TTFB):** Monolithic themes process hundreds of PHP database queries on every page hit, creating bottlenecks when thousands of concurrent users visit during marketing campaigns.
      * **Heavy Plugin Overhead:** Traditional page builders load megabytes of unused CSS and JavaScript that consume user mobile data and cause severe browser rendering lag.
      * **Security Vulnerabilities:** Direct exposure of the WordPress administrative backend makes monolithic sites vulnerable to brute-force attacks and script exploits.

      #### 2. The Decoupled Headless WordPress + Next.js Solution
      In a headless architecture, WordPress operates exclusively as a secure content repository via REST API or WPGraphQL, while Next.js handles the entire user-facing presentation layer:
      * **Instant Static Site Generation (SSG) & Edge Pre-Rendering:** Next.js pre-compiles every article, product catalog, and landing page into lightweight static HTML at build time. When a mobile user clicks a link, the page renders immediately with zero database latency.
      * **Incremental Static Regeneration (ISR):** When your editorial team updates an article or changes pricing in WordPress, Next.js automatically revalidates and rebuilds only that specific page in the background within seconds—without requiring a full site rebuild.
      * **Bandwidth-Optimized Client Bundles:** Next.js Server Components eliminate unnecessary client-side JavaScript, ensuring initial page payloads remain under 40KB.
      * **Complete Backend Isolation & Ironclad Security:** The WordPress CMS is hidden behind a secure private API endpoint, making the public frontend virtually immune to SQL injections, DDoS attacks, and theme vulnerabilities.

      #### 3. Real-World Business Benefits for African Enterprises
      * **40%+ Reduction in Mobile Bounce Rates:** Sub-second page loads keep users engaged, significantly reducing abandonment on mobile networks.
      * **95+ Google Core Web Vitals Scores:** Superior speed directly boosts organic search rankings on Google, driving more unpaid traffic to your portal.
      * **Editorial Freedom Retained:** Marketing and content teams continue using the familiar WordPress Gutenberg and ACF block editor without needing engineering assistance.
      * **Massive Hosting Cost Savings:** Serving cached static HTML from global edge CDN nodes reduces database server load by up to 90%, drastically lowering cloud infrastructure expenses.

      #### 4. Build Your Headless Architecture with Nexify Webworks
      Nexify Webworks specializes in engineering enterprise-grade headless architectures connecting WordPress, Next.js, GraphQL, and Tailwind CSS. We deliver clean, scalable codebases with automated CI/CD deployment pipelines tailored to your business scale.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'Full-Stack Solutions Architect',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    date: 'August 19, 2026',
    readTime: '7 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'freelance-react-js-nextjs-developer-india',
    title: 'Why Hiring a Freelance React JS & Next.js Developer in India Delivers 3x ROI: Budget-Friendly, High-Speed Web Development',
    category: 'React Development',
    excerpt: 'Discover why global businesses hire an expert freelance React JS and Next.js developer in India for budget-friendly website development, sub-second Core Web Vitals, and scalable full-stack web applications.',
    content: `
      ### The Strategic Advantage of Hiring a Freelance React JS & Next.js Developer in India

      In an increasingly competitive digital marketplace, modern businesses need websites that load in under a second, convert visitors into paying clients, and rank at the top of Google Search. Working with bloated agencies often means high markups, slow turnaround times, and junior developers handling your codebase.

      By partnering with an experienced **freelance React JS & Next.js developer in India**, you gain direct access to senior-level engineering talent at **budget-friendly rates**, achieving enterprise-grade performance with zero agency overhead.

      #### 1. Why React JS & Next.js Lead Modern Web Development
      React and Next.js have become the gold standard for high-performance web applications:
      * **Server-Side Rendering (SSR) & Static Site Generation (SSG):** Next.js pre-renders every page into lightweight HTML at build time or on edge servers, ensuring Googlebot indexes your content instantly.
      * **Sub-Second Core Web Vitals:** Next.js Server Components eliminate unnecessary client JavaScript bundles, resulting in an LCP (Largest Contentful Paint) under 1.2s and an INP (Interaction to Next Paint) under 50ms.
      * **Dynamic Interactivity with Tailwind CSS:** Responsive, accessible interfaces that adapt flawlessly across mobile, tablet, and ultra-wide displays.

      #### 2. Budget-Friendly Website Development with 100% Quality
      Hiring a freelance developer from India allows startups, SMEs, and international brands to optimize their development budget:
      * **Direct Communication:** Work one-on-one with the engineer designing and building your application—no middlemen or account managers.
      * **Transparent Milestone Pricing:** Clear deliverables, agreed timelines (typically 4–10 days per milestone), and flexible payment schedules.
      * **Full Code Ownership:** You receive 100% clean, documented TypeScript source code hosted on your private repository with CI/CD deployment pipelines.

      #### 3. Full-Stack SEO & Google Search Console Optimization
      A high-converting website must be discoverable. Every React & Next.js project includes:
      * **Structured JSON-LD Schema:** Organization, Service, BreadcrumbList, and FAQPage schemas injected directly into page headers.
      * **Dynamic Sitemaps & Robots Directives:** Automated XML sitemap generation for rapid Google indexing.
      * **OpenGraph & Social Meta Tags:** High-CTR preview cards for LinkedIn, Twitter, Facebook, and WhatsApp sharing.

      #### 4. How to Hire the Right Freelance React & Next.js Developer
      When selecting a freelance React JS developer in India, look for proven portfolio case studies, strong TypeScript fundamentals, verified client testimonials, and a clear understanding of your business conversion goals.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'Freelance React & Next.js Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    date: 'August 16, 2026',
    readTime: '7 min read',
    featured: true,
    image: '/images/react_blog.jpg'
  },
  {
    id: 'custom-wordpress-theme-development-agency-india',
    title: 'Custom WordPress Theme Development vs Pre-Made Templates: A Master Agency Guide to Budget-Friendly Website Design in India',
    category: 'WordPress Engineering',
    excerpt: 'Discover how custom WordPress theme development using Elementor Pro, ACF, and Gutenberg FSE outranks pre-made themes in Google search, eliminates plugin bloat, and delivers budget-friendly website design in India.',
    content: `
      ### Why Custom WordPress Theme Development Outperforms Off-the-Shelf Templates

      WordPress powers over 43% of the internet. However, many business owners make the mistake of buying cheap, bloated pre-made templates from ThemeForest. These themes come packaged with 40+ unnecessary plugins, sluggish slider scripts, and heavy database queries that drag down your Google Search rankings and frustrate mobile visitors.

      As a dedicated **WordPress master agency** based in India, we engineer **custom theme development** tailored specifically to your brand identity, conversion funnel, and SEO search visibility.

      #### 1. The Dangers of Pre-Made Themes vs Custom Development
      * **Plugin Overload & Security Risks:** Pre-made themes rely on dozens of third-party plugins that create vulnerability risks and break during updates. Custom themes use clean, minimal PHP/React code with zero bloat.
      * **Core Web Vitals Penalty:** Bloated templates score 30–50 on Google PageSpeed. Our custom WordPress themes achieve **95–99/100 speed scores** with TTFB under 100ms.
      * **Messy DOM Structure:** Generic templates clutter HTML markup with nested wrappers that confuse Google search crawlers. Custom builds feature semantic HTML5 tags and automated schema graphs.

      #### 2. The Master Agency Formula: Elementor Pro + ACF + Gutenberg FSE
      We combine visual flexibility with robust backend architecture:
      * **Elementor Pro:** Pixel-perfect visual layouts, fluid responsive breakpoints, and tactile micro-animations designed to convert traffic.
      * **Advanced Custom Fields (ACF Pro):** Custom post types and structured input fields (testimonials, case studies, team members, pricing tables) that make daily content updates effortless for non-technical site owners.
      * **Gutenberg Full Site Editing (FSE):** Native WordPress block themes built with theme.json design tokens for ultra-fast, zero-bloat publishing.

      #### 3. Budget-Friendly Website Design in India for Global Businesses
      Choosing an India-based WordPress specialist offers maximum value for your investment:
      * **Cost Efficiency:** Enterprise-level custom theme development at 60–70% lower cost than Western agencies.
      * **Rapid Turnaround:** Projects delivered within 5 to 12 business days with strict quality assurance and cross-browser testing.
      * **Comprehensive Maintenance & Support:** Security hardening, Redis database caching, daily backups, and ongoing SEO monitoring.

      #### 4. Boost Your Google Search Rankings Today
      Investing in custom WordPress theme development is an investment in your company’s long-term digital asset. Fast-loading, structured, and mobile-first websites earn higher Google search rankings, lower bounce rates, and increased client inquiries.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'WordPress Master Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    },
    date: 'August 15, 2026',
    readTime: '8 min read',
    featured: true,
    image: '/images/wordpress_blog.jpg'
  },
  {
    id: 'wordpress-design-elementor-acf-guide',
    title: 'Mastering WordPress Website Design: How Elementor Pro & ACF (Advanced Custom Fields) Build High-Performance Sites',
    category: 'WordPress & Elementor',
    excerpt: 'Learn how combining website design in WordPress with Elementor Pro and Advanced Custom Fields (ACF) delivers pixel-perfect layouts, flexible editor controls, and sub-second page loading speeds.',
    content: `
      ### The Ultimate Formula for Custom WordPress Websites

      WordPress powers over 40% of the web. However, many business owners struggle with slow WordPress themes and restrictive templates. By combining **website design in WordPress using Elementor Pro** with **Advanced Custom Fields (ACF)**, we create fully customized, high-converting websites that are easy for non-technical site owners to manage.

      #### 1. Why Elementor Pro + ACF is a Game-Changer
      * **Elementor Pro:** Provides fluid pixel-perfect page building, motion effects, and responsive layout control without messy code.
      * **Advanced Custom Fields (ACF):** Empowers business owners to manage custom data fields—such as client testimonials, portfolio items, pricing tiers, and service specifications—directly from the WordPress admin panel without breaking design layouts.

      #### 2. Optimizing WordPress Page Speed & Technical SEO
      Many Elementor sites suffer from plugin bloat. Here is how we guarantee sub-second load times:
      * **Asset Pruning:** Disable unused Elementor widgets and scripts on pages where they aren't needed.
      * **Redis & Object Caching:** Cache database queries to decrease Server Response Time (TTFB) to under 100ms.
      * **Clean Schema Markup:** Inject custom JSON-LD schema for local SEO and Google Knowledge Graph snippets.

      #### 3. Built for Business Growth
      Whether launching a corporate agency site, a local business showcase in India, or an international e-commerce portal, an Elementor & ACF WordPress setup gives you full ownership and unlimited growth potential.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'WordPress Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    },
    date: 'August 05, 2026',
    readTime: '7 min read',
    featured: true,
    image: '/images/wordpress_blog.jpg'
  },
  {
    id: 'figma-ui-ux-design-to-code',
    title: 'From Figma UI/UX Design to Production Code: A Step-by-Step Blueprint for High-Converting Websites',
    category: 'UI/UX Design',
    excerpt: 'How structured Figma UI/UX design systems, interactive prototypes, and atomic component handoffs eliminate design debt and double frontend development speed.',
    content: `
      ### Why Great Websites Begin in Figma

      A successful website is built twice: first in design, then in code. Skipping the **Figma UI/UX design phase** leads to mismatched typography, inconsistent spacing, broken mobile views, and costly client revisions.

      #### 1. The 4 Pillars of Professional UI/UX Design
      * **User Research & Wireframing:** Defining user navigation journeys and conversion goals before drawing visual interfaces.
      * **Figma Design Systems:** Creating reusable color tokens, typography scales, auto-layout components, and dark/light UI modes.
      * **Interactive Prototyping:** Testing user interactions, modal transitions, and button states before writing a single line of code.
      * **Developer Handoff Perfection:** Ensuring CSS styles, vector assets, and responsive breakpoints map 1:1 to React components or Elementor templates.

      #### 2. Mobile-First & Micro-Interactions
      Over 60% of web traffic originates from mobile devices. We design all Figma layouts mobile-first, incorporating tactile visual feedback and smooth micro-animations that increase user engagement and trust.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'UI/UX Design Lead',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    date: 'August 02, 2026',
    readTime: '6 min read',
    featured: true,
    image: '/images/uiux_blog.jpg'
  },
  {
    id: 'technical-seo-core-web-vitals-google-ranking',
    title: 'Google Core Web Vitals & Technical SEO Masterclass: Sub-Second Load Speeds, JSON-LD Schema & Crawl Optimization',
    category: 'SEO Strategy',
    excerpt: 'A comprehensive technical guide to mastering Google Core Web Vitals (LCP, INP, CLS), structured JSON-LD schema graphs, and search crawler optimization to dominate Google search results.',
    content: `
      ### The Anatomy of Search Ranking in 2026

      Modern search engine ranking is determined by three core pillars: content relevance, user experience signals (Core Web Vitals), and clean technical crawlability. Even the best content will fail to rank if search engine bots encounter slow server response times, unoptimized render-blocking scripts, or missing structured data schemas.

      #### 1. Mastering Google Core Web Vitals Benchmarks
      * **Largest Contentful Paint (LCP) < 1.2s:** Optimize server response times (TTFB), inline critical CSS, and serve modern WebP/AVIF images with priority loading on hero elements.
      * **Interaction to Next Paint (INP) < 50ms:** Eliminate heavy main-thread JavaScript execution by breaking up long tasks and isolating interactive states.
      * **Cumulative Layout Shift (CLS) = 0:** Always define explicit \`width\` and \`height\` dimensions on images, video containers, and ad units to prevent unexpected visual jumps.

      #### 2. JSON-LD Structured Data Schema Graphs
      Search engines use structured data graphs to understand entity relationships and reward websites with rich snippets:
      * **Organization & LocalBusiness Schema:** Details company name, logo, contact points, service areas, and geo-coordinates for local map pack visibility.
      * **Service & OfferCatalog Schema:** Defines deliverable scopes, pricing tiers, and service specifications directly in search results.
      * **FAQPage & Article Schema:** Captures Google's People Also Ask (PAA) boxes and Knowledge Graph panels.

      #### 3. Crawl Budget & Indexing Optimization
      Ensure search engine crawlers discover and index your highest-value pages efficiently:
      * Maintain clean, dynamically updated \`sitemap.xml\` and \`robots.txt\` directives.
      * Eliminate duplicate content penalties with self-referencing canonical URLs and consistent HTTPS redirects.
      * Implement internal link siloing to pass PageRank authority directly to high-converting service and landing pages.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'SEO & Performance Lead',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    date: 'August 01, 2026',
    readTime: '8 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'julian-vane',
    name: 'Julian Vane',
    role: 'Lead WordPress Specialist',
    specialty: 'Headless WP & ACF Pro Architecture',
    bio: '10+ years engineering custom WordPress environments for Fortune 500 brands and global media publications.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    stats: [
      { label: 'WP Builds', value: '120+' },
      { label: 'Avg Speed Score', value: '98%' }
    ],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 'elena-thorne',
    name: 'Elena Thorne',
    role: 'Lead React Engineer',
    specialty: 'Motion Graphics & Frontend Architecture',
    bio: 'Specialist in high-performance web applications, motion choreography, and WebGL interactive canvases.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    stats: [
      { label: 'React Systems', value: '85+' },
      { label: 'Framerate Lock', value: '60 FPS' }
    ],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    role: 'UI/UX Lead & Product Architect',
    specialty: 'Design Systems & Motion Prototypes',
    bio: 'Former senior designer crafting dark-mode aesthetics, design systems, and converting SaaS user interfaces.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    stats: [
      { label: 'Design Systems', value: '40+' },
      { label: 'UX Conversion', value: '+180%' }
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'I am very happy with the work done by this team for Shree Industries. They created a custom WordPress theme for our website with great attention to detail, creativity, and professionalism. They understood our requirements perfectly and delivered a modern, user-friendly, and high-quality website. Their dedication, communication, and technical skills made the entire process smooth and enjoyable. I truly appreciate their excellent work and would highly recommend them for custom website development.',
    author: 'Darshak Patel',
    role: 'Chief Executive Officer',
    company: 'Shree Industries',
    avatar: toSrc(darshakImg),
    rating: 5,
    metric: '+142% Sales Conversion'
  },
  {
    id: '2',
    quote: 'Working with this team on our Figma design project was a great experience. They transformed our ideas into a clean, modern, and user-friendly design that perfectly matched our vision. Their attention to detail, creative approach, and understanding of user experience were impressive. The team delivered high-quality designs with excellent communication and professionalism throughout the process. We truly appreciate their work and would highly recommend them for UI/UX design and product design solutions.',
    author: 'Hardik',
    role: 'Head of Product',
    company: 'Novo Studio',
    avatar: toSrc(hardikImg),
    rating: 4,
    metric: ''
  },
  {
    id: '3',
    quote: 'We had a great experience working with this team for the development of Convertly Tools. They created our website using React with excellent functionality, smooth performance, and a modern user interface. The team understood our requirements perfectly and delivered a powerful, user-friendly platform with all the features we needed. Their creativity, technical expertise, and dedication made the entire development process seamless. We truly appreciate their hard work and highly recommend them for React development and custom web solutions.',
    author: 'Kishan',
    role: 'Managing Director',
    company: 'Convertly Tools',
    avatar: toSrc(kishanImg),
    rating: 5,
    metric: ''
  }
];

export const METHODOLOGY_STEPS = [
  {
    number: '01',
    title: 'Deep Audit & Architecture',
    description: 'We perform deep technical audits of your existing infrastructure, core web vitals, user friction points, and competitor positioning.'
  },
  {
    number: '02',
    title: 'Figma System & Wireframing',
    description: 'Crafting pixel-perfect design systems, interactive prototypes, and typography hierarchies before a single line of code is written.'
  },
  {
    number: '03',
    title: 'Clean Engineering & Motion',
    description: 'Building custom React or WordPress codebases equipped with Framer Motion transitions, responsive layouts, and clean API endpoints.'
  },
  {
    number: '04',
    title: 'Global Launch & Tuning',
    description: 'Rigorous cross-browser testing, CDN caching configuration, SEO markup validation, and post-launch performance tuning.'
  }
];
