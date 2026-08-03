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
import maulikImg from '../assets/images/maulik-interns.webp';
import kishanImg from '../assets/images/kishan.webp';

const toSrc = (img: unknown): string => img as string;

export const SERVICES: Service[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX Figma Design',
    iconName: 'Layout',
    description: 'User-centric wireframes, high-fidelity prototypes, and component design systems built in Figma with developer handoff perfection.',
    deliverables: ['Figma Design Systems', 'Interactive Prototypes', 'User Journey Maps', 'Micro-interactions'],
    badge: 'Figma Specialist'
  },
  {
    id: 'react-apps',
    title: 'Website Development using React',
    iconName: 'Zap',
    description: 'High-speed React applications with fluid Motion animations, Tailwind CSS v4, and resilient API backend integrations.',
    deliverables: ['Vite / Next.js Apps', 'Framer Motion FX', 'REST & GraphQL APIs', 'Component Libraries'],
    badge: 'React Specialist'
  },
  {
    id: 'wordpress',
    title: 'WordPress Website Design',
    iconName: 'Code2',
    description: 'Custom WordPress websites built with Elementor for product display, contact forms, service pages, and simple content management.',
    deliverables: ['Elementor Page Templates', 'Responsive Product Showcase', 'Contact Form Integration', 'SEO-Friendly Structure'],
    badge: 'Elementor Expert'
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
    author: 'Maulik',
    role: 'Head of Product',
    company: 'Novo Studio',
    avatar: toSrc(maulikImg),
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
