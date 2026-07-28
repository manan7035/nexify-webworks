import { Project, Article, TeamMember, Testimonial, Service } from '../types';
import convertlyImg from '../assets/images/convertly_tools_preview_1785081763686.jpg';

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
    title: 'WordPress Custom Website Design',
    iconName: 'Code2',
    description: 'Bespoke WordPress themes tailored for marketing teams with sub-second page loads, custom ACF Pro blocks, and Gutenberg editor flexibility.',
    deliverables: ['ACF Pro Architectures', 'Custom Gutenberg Blocks', 'Speed & SEO Optimization', 'Headless WP Options'],
    badge: 'Enterprise WP'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'convertly-tools',
    title: 'Convertly Tools',
    category: 'React Apps',
    subtitle: 'All-in-one client-side file & image converter (PNG to WebP, JPEG, etc.)',
    description: 'A high-performance online file transformation utility built with React, WebAssembly, and Canvas API allowing instant client-side format conversion for PNG, WebP, JPEG, SVG, GIF, and PDFs with zero server upload latency.',
    client: 'Convertly Tools Platform',
    year: '2024',
    liveUrl: 'https://www.convertlytools.in/',
    image: convertlyImg,
    secondaryImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80'
    ],
    metrics: [
      { label: 'Conversion Time', value: '<50ms' },
      { label: 'File Privacy', value: '100% Local' },
      { label: 'Lighthouse Score', value: '100/100' }
    ],
    tags: ['React', 'TypeScript', 'WebAssembly', 'Tailwind CSS', 'Canvas API'],
    techStack: ['React 19', 'TypeScript', 'Canvas API', 'Tailwind CSS', 'Vite'],
    challenge: 'Converting large images and documents between formats (such as PNG to WebP) without sending sensitive files to third-party servers or degrading mobile performance.',
    solution: 'Engineered a multi-threaded web worker and browser-native Canvas transformation pipeline in React that processes image files entirely within the client browser in under 50ms.',
    featured: true,
    bentoSpan: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 'vantgarde',
    title: 'Vantgarde Fashion House',
    category: 'React Apps',
    subtitle: 'High-end e-commerce experience with WebGL canvas',
    description: 'A bespoke fashion e-commerce platform engineered with React, WebGL shader transitions, and headless architecture.',
    client: 'Vantgarde Atelier',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80'
    ],
    metrics: [
      { label: 'Conversion Increase', value: '+142%' },
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Avg Load Time', value: '0.42s' }
    ],
    tags: ['React', 'WebGL', 'Tailwind CSS', 'Framer Motion'],
    techStack: ['React 19', 'Three.js', 'Tailwind', 'Node.js API'],
    challenge: 'Vantgarde needed a ultra-luxurious digital flagship that matched their physical runway shows without compromising mobile responsiveness or load speeds.',
    solution: 'We engineered a hybrid React frontend utilizing lightweight WebGL shaders for fluid apparel transitions and real-time 3D rotation, backed by a sub-second serverless API.',
    featured: true,
    bentoSpan: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 'nova-crypto',
    title: 'Nova Crypto Wallet',
    category: 'UI Redesigns',
    subtitle: 'Next-gen Web3 dashboard & trading interface',
    description: 'Intuitive dark-mode crypto asset manager with real-time WebSocket ticker updates and multi-chain swap flows.',
    client: 'Nova Labs Ltd',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?auto=format&fit=crop&w=800&q=80'
    ],
    metrics: [
      { label: 'Daily Active Users', value: '250K+' },
      { label: 'Latency', value: '12ms' },
      { label: 'User Retention', value: '88%' }
    ],
    tags: ['Web3', 'React', 'TypeScript', 'Tailwind'],
    techStack: ['React', 'TypeScript', 'Ethers.js', 'Recharts'],
    challenge: 'Simplifying complex cross-chain gas estimations and staking transactions into an interface usable by both newcomers and veteran traders.',
    solution: 'Designed a unified dark terminal aesthetic with contextual micro-visualizations, reducing transaction drop-off by 64%.',
    featured: true,
    bentoSpan: 'col-span-1 row-span-1'
  },
  {
    id: 'datapulse',
    title: 'DataPulse Analytics',
    category: 'WordPress',
    subtitle: 'Enterprise SaaS marketing platform with custom ACF Pro',
    description: 'High-converting WordPress platform built with modular custom block components and instant search filtering.',
    client: 'DataPulse Inc.',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Lead Generation', value: '+310%' },
      { label: 'Page Speed Index', value: '0.6s' }
    ],
    tags: ['WordPress', 'PHP 8.2', 'ACF Pro', 'Tailwind'],
    techStack: ['WordPress', 'ACF Pro', 'SCSS', 'Vite'],
    challenge: 'DataPulse needed complete editorial control for their 50+ content creators while maintaining ultra-fast core web vitals.',
    solution: 'Built a modular Gutenberg block library with ACF Pro and automated critical CSS rendering, achieving a 100/100 desktop performance rating.',
    featured: true,
    bentoSpan: 'col-span-1 row-span-1'
  },
  {
    id: 'nebula-studio',
    title: 'Nebula Interactive Studio',
    category: 'Safari Solutions',
    subtitle: 'Interactive 3D agency portfolio & brand experience',
    description: 'Custom creative agency portfolio showcasing award-winning motion graphics, sound design, and 3D web experiences.',
    client: 'Nebula Creative Group',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Awwwards Score', value: '8.9/10' },
      { label: 'Avg Session Time', value: '4m 12s' }
    ],
    tags: ['Three.js', 'React', 'GSAP', 'Audio API'],
    techStack: ['React', 'Three.js', 'GSAP', 'Web Audio API'],
    challenge: 'Creating a sensory web experience with custom audio synthesis that remains battery-efficient across mobile devices.',
    solution: 'Implemented hardware-accelerated canvas pipelines and lazy-loaded audio buffers for seamless mobile and desktop rendering.',
    featured: true,
    bentoSpan: 'col-span-1 md:col-span-2 row-span-1'
  },
  {
    id: 'fintech-core',
    title: 'FinTech Core System',
    category: 'React Apps',
    subtitle: 'Institutional banking console & risk monitor',
    description: 'Mission-critical institutional financial risk assessment console handling multi-billion dollar daily liquidity checks.',
    client: 'Aegis Global Capital',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'System Uptime', value: '99.99%' },
      { label: 'Order Processing', value: '<5ms' }
    ],
    tags: ['React', 'TypeScript', 'WebSockets', 'Chart.js'],
    techStack: ['React 19', 'TypeScript', 'D3.js', 'RxJS'],
    challenge: 'Eliminating UI freezing during high-volatility market events when thousands of price tickers update per second.',
    solution: 'Utilized React 19 Concurrent Rendering and off-thread Web Worker calculations to sustain smooth 60fps chart rendering.',
    featured: false
  },
  {
    id: 'lumina-estate',
    title: 'Lumina Estate Portal',
    category: 'WordPress',
    subtitle: 'Luxury real estate search & virtual tour portal',
    description: 'High-end architectural listings site with interactive floorplan viewer, neighborhood demographic maps, and instant tour booking.',
    client: 'Lumina Global Realty',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Inquiries Handled', value: '15,000+' },
      { label: 'Load Time Reduction', value: '70%' }
    ],
    tags: ['WordPress', 'Custom API', 'Algolia', 'Mapbox'],
    techStack: ['WordPress', 'Algolia', 'Mapbox GL', 'Tailwind'],
    challenge: 'Handling multi-gigabyte property media galleries without degrading search filter speed.',
    solution: 'Deployed edge media optimization and instant client-side Algolia search indexing with geo-spatial clustering.',
    featured: false
  },
  {
    id: 'savanna-guard',
    title: 'Savanna Guard Initiative',
    category: 'UI Redesigns',
    subtitle: 'Non-profit conservation map & live tracking console',
    description: 'Interactive wildlife protection tracking dashboard providing real-time ranger GPS dispatch and anti-poaching heatmaps.',
    client: 'Savanna Guard Foundation',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Funds Raised', value: '$12M+' },
      { label: 'Ranger Alert Speed', value: '1.2s' }
    ],
    tags: ['React', 'Mapbox', 'Tailwind CSS', 'Recharts'],
    techStack: ['React', 'Mapbox', 'Node.js', 'Tailwind'],
    challenge: 'Operating reliably in satellite low-bandwidth rural environments.',
    solution: 'PWA offline-first architecture storing operational tiles locally and synchronizing state over lightweight packet payloads.',
    featured: false
  },
  {
    id: 'cloudops-dashboard',
    title: 'CloudOps Infrastructure',
    category: 'React Apps',
    subtitle: 'DevOps server health monitoring platform',
    description: 'Real-time server node status monitor with anomaly detection and automated alert escalation workflows.',
    client: 'CloudOps Systems',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Incident Prevention', value: '45%' },
      { label: 'Mean Time To Detect', value: '18s' }
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'WebSockets'],
    techStack: ['React', 'TypeScript', 'Tailwind', 'Express'],
    challenge: 'Creating a multi-tenant monitoring suite with zero clutter.',
    solution: 'Minimalist high-density dark UI with keyboard shortcuts and customizable dashboard widgets.',
    featured: false
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

      When building high-end brand experiences, agencies are frequently forced into a false compromise: choose between rich visual animations or rapid core web vitals. At **Nexify Studio**, we reject this compromise.

      #### 1. Shader Offloading to WebGL

      Traditional CSS animations frequently block the DOM render thread during complex scrolling calculations. By delegating background graphics and continuous particle effects to isolated HTML5 WebGL fragment shaders, the UI layout engine remains operating at a locked 60 frames per second.

      #### 2. Headless WordPress vs Single Page React

      For marketing teams, WordPress remains the gold standard for content management. However, rendering traditional monolithic themes often introduces excessive DOM depth and legacy scripts. 

      Our hybrid approach pairs headless WordPress content repositories with high-speed React static regeneration, guaranteeing both content editor freedom and lightning-fast reader delivery.

      #### 3. Micro-Interactions that Convert

      A successful interaction is not just decorative; it guides user attention toward intent signals. Whether hovering over a primary button or sliding through project estimates, subtle spring physics reinforce tactile responsiveness.
    `,
    author: {
      name: 'Marcus Thorne',
      role: 'Creative Tech Lead',
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
      name: 'Elena Thorne',
      role: 'Lead UI/UX Architect',
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
      name: 'Julian Vane',
      role: 'Lead WordPress Specialist',
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

      React Server Components (RSC) enable developers to write rich components that render on the server without shipping JavaScript to the client browser. We explore practical implementation patterns for production agency apps.
    `,
    author: {
      name: 'Marcus Chen',
      role: 'Senior Frontend Engineer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    date: 'May 22, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
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
    quote: 'Nexify Studio transformed our digital brand into a showstopper. The site loads in under half a second and our conversion rate jumped by 142% in the first quarter post-launch.',
    author: 'Marcus Thorne',
    role: 'Chief Executive Officer',
    company: 'Vantgarde Fashion House',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    metric: '+142% Sales Conversion'
  },
  {
    id: '2',
    quote: 'Their technical mastery of both custom WordPress backends and complex React web applications is unmatched. They delivered ahead of schedule with flawless code.',
    author: 'Elena Rodriguez',
    role: 'Head of Engineering',
    company: 'Nova Crypto Wallet',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    metric: '250,000 Active Users'
  },
  {
    id: '3',
    quote: 'Working with Nexify was a breath of fresh air. They treated our brand like their own child. The budget estimator gave us instant clarity before we even kicked off.',
    author: 'Julian Vance',
    role: 'Managing Director',
    company: 'DataPulse Analytics',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    metric: '100/100 Lighthouse'
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
    description: 'Rigorous cross-browser testing, CDN caching configuration, SEO markup validation, and post-launch Lighthouse optimization.'
  }
];
