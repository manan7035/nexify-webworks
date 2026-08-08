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
    id: 'website-development-using-react-guide',
    title: 'Why Website Development using React & Next.js Delivers 3x Higher Business Conversions',
    category: 'React Development',
    excerpt: 'Discover how modern website development using React and Next.js reduces page bounce rates, optimizes Core Web Vitals, and provides sub-second page rendering for high-growth businesses.',
    content: `
      ### The Business Advantage of React & Next.js Development

      In modern digital commerce, website performance directly dictates revenue. Traditional monolithic websites often suffer from bloated client bundles, slow initial page loads, and layout shifts that frustrate users. **Website development using React & Next.js** solves these performance hurdles by decoupling the frontend rendering engine from backend data dependencies.

      #### 1. Lightning-Fast Core Web Vitals
      Google's search algorithm heavily rewards websites that meet strict **Core Web Vitals** benchmarks:
      * **Largest Contentful Paint (LCP):** Under 1.2 seconds using Next.js Server Components and automated image optimization.
      * **Interaction to Next Paint (INP):** Sub-50ms responsiveness by keeping interactive state isolated within lightweight client components.
      * **Cumulative Layout Shift (CLS):** Zero shift through strict CSS grid/flexbox component containers.

      #### 2. SEO Pre-Rendering: SSG vs SSR
      With Next.js App Router, every page is pre-rendered at build time (Static Site Generation) or rendered on-demand at the edge (Server-Side Rendering). This ensures search engine crawlers (Googlebot, Bingbot) receive complete HTML markup immediately, boosting indexing speed and keyword rankings.

      #### 3. Scalable Component Architecture
      React's modular component ecosystem allows developers to construct reusable design tokens, interactive CTA forms, and rich visual showcases without code duplication. This leads to faster feature releases, seamless maintenance, and long-term business scalability.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'React Engineering Lead',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    date: 'August 08, 2026',
    readTime: '6 min read',
    featured: true,
    image: '/images/react_blog.jpg'
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
    title: 'From Figma UI/UX Design to Production Code: A Step-by-Step Blueprint for Modern Websites',
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
    readTime: '5 min read',
    featured: true,
    image: '/images/uiux_blog.jpg'
  },
  {
    id: 'future-digital-craftsmanship',
    title: 'The Future of Digital Craftsmanship: Balancing WebGL, Speed, and Usability',
    category: 'Engineering & UX',
    excerpt: 'In an era dominated by template engines and bloated frameworks, true digital craft lies in custom visual motion engineered for sub-second delivery.',
    content: `
      ### The State of Modern Web Performance

      When building high-end brand experiences, most providers force a compromise between rich visual motion and rapid core web vitals. I reject that compromise.

      #### 1. Shader Offloading to WebGL

      Traditional CSS animations frequently block the DOM render thread during complex scrolling calculations. By delegating background graphics and continuous particle effects to isolated HTML5 WebGL fragment shaders, the UI layout engine remains operating at a locked 60 frames per second.

      #### 2. Headless WordPress vs Single Page React

      For marketing teams, WordPress remains the gold standard for content management. However, rendering traditional monolithic themes often introduces excessive DOM depth and legacy scripts. 

      Our hybrid approach pairs headless WordPress content repositories with high-speed React static regeneration, guaranteeing both content editor freedom and lightning-fast reader delivery.

      #### 3. Micro-Interactions that Convert

      A successful interaction is not just decorative; it guides user attention toward intent signals. Whether hovering over a primary button or sliding through project estimates, subtle spring physics reinforce tactile responsiveness.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'Digital Marketing Team',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    },
    date: 'July 18, 2024',
    readTime: '6 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'psychology-micro-interactions',
    title: 'The Psychology of Micro-Interactions in Luxury E-commerce',
    category: 'UI/UX Design',
    excerpt: 'How 120ms animation curves and haptic visual feedback drive 40%+ higher conversion rates in modern fashion retail.',
    content: `
      ### Why Details Determine Value Perception

      In luxury e-commerce, buyers do not simply purchase products—they purchase an emotional identity. Micro-interactions communicate craft, precision, and reliability before the user even clicks 'Add to Cart'.

      #### Key Principles of Haptic UI Motion:
      * **Easing Curves:** Use custom cubic-bezier curves (e.g. \`cubic-bezier(0.16, 1, 0.3, 1)\`) instead of generic \`ease-in-out\`.
      * **Feedback Delay:** Maintain interactive latency below 50 milliseconds to preserve natural tactile perception.
      * **Progressive Disclosure:** Display item options fluidly without reloading page containers.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'Digital Marketing Team',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    date: 'June 28, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sub-second-loads-wordpress',
    title: 'Beyond Vitals: Achieving Sub-Second Loads on WordPress',
    category: 'WordPress Engineering',
    excerpt: 'A deep dive into server-side object caching, custom ACF Pro block compiling, and asset pruning for enterprise sites.',
    content: `
      ### Dissecting the WordPress Bottlenecks

      Standard WordPress sites suffer from database query bloat and unoptimized plugin assets. By stripping redundant hooks and compiling ACF Pro block definitions directly to optimized Blade/PHP templates with Redis object caching, page generation drops to under 30 milliseconds.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'Digital Marketing Team',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    },
    date: 'June 14, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'react-server-components-shift',
    title: 'React Server Components: A Paradigm Shift in Rendering Strategy',
    category: 'React Architecture',
    excerpt: 'How server components eliminate client-side JavaScript bundles and accelerate initial interactive state.',
    content: `
      ### The Next Era of React Applications

      React Server Components (RSC) enable developers to write rich components that render on the server without shipping JavaScript to the client browser. This article explores practical implementation patterns for production web products.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'Digital Marketing Team',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    date: 'May 22, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'seo-website-boost',
    title: 'How a Fast, SEO-Friendly Website Boosts Growth for India & Beyond',
    category: 'SEO Strategy',
    excerpt: 'A practical guide to building websites that load quickly, rank better, and convert more visitors for India-based and international clients.',
    content: `
      ### Why SEO-Friendly Websites Win in 2026

      An SEO-friendly website is more than keywords; it is structure, speed, and relevance. For businesses in India and abroad, a fast site with clean metadata helps search engines crawl pages better and users stay longer.

      #### 1. Optimize for Search Intent
      Focus your page copy on the services your target clients search for. Use headings, short paragraphs, and local phrases such as "India web development" and "WordPress Elementor website" to capture both domestic and international interest.

      #### 2. Keep Page Speed High
      Slow pages lose visitors. Compress images, lazy-load below-the-fold content, and choose lightweight React or WordPress templates so the site feels fast on both desktop and mobile.

      #### 3. Build Trust with Clear Contact Paths
      International clients need confidence. Show your India delivery capability, testimonials, and a strong contact section so visitors understand they can work with you globally.

      #### 4. Use a Blog to Boost Visibility
      Regularly publish short articles about web performance, SEO, and WordPress design. These pages help Google understand your expertise and attract clients searching for website development services in India.

      #### 5. Add Robots & Sitemap Support
      For better crawlability, publish a 'robots.txt' and 'sitemap.xml' so Google can discover and index your most important pages quickly.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'Digital Marketing Team',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    date: 'August 01, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'elementor-seo-wordpress',
    title: 'How Elementor-Powered WordPress Sites Rank Better in 2026',
    category: 'SEO Strategy',
    excerpt: 'WordPress sites built with Elementor, clean schema markup, and fast hosting perform better in Google search and local India SEO.',
    content: `
      ### Elementor SEO Best Practices for Business Sites

      Elementor is a powerful visual builder, but performance depends on how the page is structured. Avoid plugin bloat, use optimized images, and build one shared global header/footer for consistent markup.

      #### 1. Structured Content for Crawlers
      Search engines love predictable page structure. Use heading hierarchies, descriptive alt text, and semantic sections for your services, products, and contact information.

      #### 2. Keep CSS and JS Minimal
      Elementor can add extra styles, so remove unused widgets and enable asset optimization. The faster your WordPress pages load, the higher they rank for local search queries like "Rajkot WordPress developer".

      #### 3. Local SEO and Google My Business
      If you serve clients from Rajkot and India, include location-specific pages, service areas, and contact details. This helps Google map your business to regional search intent while still attracting remote clients.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'Digital Marketing Team',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    },
    date: 'July 22, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'seo-rich-portfolio-content',
    title: 'Creating SEO-Rich Portfolio and Service Pages for Freelance Developers',
    category: 'SEO Strategy',
    excerpt: 'A portfolio that speaks to search intent improves ranking and converts clients searching for React, WordPress, and Elementor development in India.',
    content: `
      ### Portfolio Pages That Rank and Convert

      Freelance developers need portfolio pages that are both discoverable and persuasive. Start with clear service keywords, local signals, and client results.

      #### 1. Service Pages with Intent
      Build separate pages or sections for React development, WordPress websites, Elementor builds, and SEO optimization. Each page should target a unique keyword phrase.

      #### 2. Publish Case Studies and Blog Posts
      Case studies and blogs help Google understand your expertise. Link them to your service pages, use rich snippets, and include project outcomes in bullets.

      #### 3. Optimize for Google Crawl
      Keep navigation simple, avoid hidden content, and add a 'robots.txt' file plus 'sitemap.xml'. Search bots should discover your site quickly and index your key pages.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'Digital Marketing Team',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    date: 'July 30, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'local-seo-for-indian-developers',
    title: 'Local SEO for Indian Freelance Developers: Capture Rajkot and Global Clients',
    category: 'SEO Strategy',
    excerpt: 'Practical local SEO tips for India-based freelance developers to rank for regional and international web development searches.',
    content: `
      ### Local SEO for Freelancers in India

      Local SEO is essential for freelance developers who want to attract both nearby clients and international leads. Google uses location signals, service keywords, and contact trust signals to rank small businesses.

      #### 1. Add Structured Contact Details
      Use clear office location, service areas, and local contact pages. This helps search engines map your business to Rajkot and wider Gujarat searches.

      #### 2. Write Location-Focused Service Copy
      Phrases like "Rajkot web developer", "India WordPress developer", and "Elementor freelancer" improve relevance for local searches while still supporting export clients.

      #### 3. Use Trust Signals
      Add testimonials, project case studies, business hours, and secure certificates. Google rewards sites that look authoritative and accessible.
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'Digital Marketing Team',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    },
    date: 'July 31, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'google-friendly-wordpress-seo',
    title: 'Google-Friendly WordPress SEO: Schema, Speed, and Content Structure',
    category: 'WordPress Engineering',
    excerpt: 'Build WordPress websites that rank faster by using schema markup, lightweight Elementor templates, and optimized content structure.',
    content: `
      ### Google-Friendly WordPress Websites

      Google rewards WordPress websites that are fast, structured, and easy to crawl. The right combination of schema markup and content organization makes a big difference.

      #### 1. Use Schema Markup for Business and Services
      Add JSON-LD for your business, services, and articles. This helps Google understand your page purpose and improves rich result chances.

      #### 2. Keep Elementor Pages Lean
      Avoid unnecessary widgets and third-party scripts. Use optimized images, deferred loading, and a single shared header/footer to reduce page weight.

      #### 3. Publish SEO-Focused Service Pages
      Each service page should target a clear keyword and offer relevant answers. For example, "Elementor website development" and "WordPress lead capture site".
    `,
    author: {
      name: 'Nexify Webworks',
      role: 'Digital Marketing Team',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    date: 'August 01, 2026',
    readTime: '6 min read',
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
