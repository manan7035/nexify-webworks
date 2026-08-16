"use client";

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/src/types';
import { SERVICES, TESTIMONIALS } from '@/src/data/mockData';
import { ShowcaseSection } from '@/components/ShowcaseSection';
import { TerminalContact } from '@/components/TerminalContact';
import { ProjectModal } from '@/components/ProjectModal';
import {
  ArrowUpRight,
  Zap,
  Code2,
  Layout,
  Gauge,
  Star,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Quote,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  TrendingUp,
  Search,
  Award
} from 'lucide-react';

const HOME_FAQS = [
  {
    question: "Why should I hire a freelance React JS & Next.js developer over a bloated agency?",
    answer: "Hiring an experienced freelance React JS and Next.js developer gives you direct 1-on-1 communication with the senior engineer building your application, rapid turnarounds, sub-second Core Web Vitals, and budget-friendly pricing without bloated agency overheads."
  },
  {
    question: "What is custom WordPress theme development and why is it better than pre-made templates?",
    answer: "Pre-made WordPress templates are notoriously bloated with 40+ plugins, sluggish slider scripts, and heavy database queries that drag down your Google Search rankings. As a WordPress master agency, our custom theme development (using Elementor Pro + ACF or native Gutenberg FSE) delivers clean code, sub-second page loads, and 100% bespoke styling tailored to your conversion funnel."
  },
  {
    question: "Do you offer budget-friendly website design in India for global and local clients?",
    answer: "Yes. Based in Rajkot, India, we provide competitive, budget-friendly website development rates for businesses across India, the United States, the United Kingdom, Malaysia, and worldwide. You receive enterprise-grade code, responsive UI/UX design, and dedicated support at transparent milestone pricing."
  },
  {
    question: "How do you ensure my website achieves top rankings in Google Search?",
    answer: "Every project incorporates full-stack technical SEO: semantic HTML5 DOM markup, pre-rendered Next.js server components, structured JSON-LD schema graphs (Organization, Service, FAQPage, BreadcrumbList), WebP image compression, XML sitemaps, robots.txt directives, and Core Web Vitals 95+ speed tuning."
  },
  {
    question: "Can I easily edit and manage my custom website content after launch?",
    answer: "Yes, 100%. Whether we build in WordPress (using custom ACF fields & Elementor Pro) or React/Next.js with a headless CMS, we provide full client admin controls and step-by-step video walkthroughs so you can update text, images, blog posts, and portfolio items effortlessly."
  }
];

export const HomeView: React.FC = () => {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  // Structured Data FAQ Schema for Google Search Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": HOME_FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="space-y-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-16 pb-20 overflow-hidden bg-grid-pattern">
        {/* Ambient Pulsing Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-indigo-600/20 rounded-full blur-[150px] pointer-events-none animate-pulse-glow"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[130px] pointer-events-none animate-float-slow"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono shadow-2xl glow-glass animate-float-slow"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-emerald-400 font-bold">Freelance React JS & Next.js Developer • India & Global</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.2] max-w-5xl mx-auto"
          >
            Website Developer &{' '}
            <span className="luxury-text-gradient">
              WordPress Master Agency.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-xl max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Delivering budget-friendly website design in India, high-converting freelance React JS & Next.js development, and bespoke custom theme development engineered for sub-second speeds and top Google rankings.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-1 md:pt-4"
          >
            <button
              onClick={() => {
                const el = document.getElementById('contact-terminal');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else router.push('/contact');
              }}
              className="w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/50 hover:scale-[1.03] transition-all flex items-center justify-center gap-2 cursor-pointer animate-shimmer"
            >
              <span>Initiate Project Terminal</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => router.push('/portfolio')}
              className="w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
            >
              <span>Explore Case Studies</span>
            </button>
          </motion.div>

          {/* SEO Value Badges Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 max-w-5xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 space-y-1 hover:border-indigo-500/40 transition-colors">
              <div className="text-indigo-400 font-mono text-[11px] font-bold uppercase tracking-wider">Budget-Friendly</div>
              <div className="text-white text-xs sm:text-sm font-semibold">Website Design in India</div>
              <div className="text-[11px] text-slate-400">Affordable pricing with zero agency markup.</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 space-y-1 hover:border-indigo-500/40 transition-colors">
              <div className="text-emerald-400 font-mono text-[11px] font-bold uppercase tracking-wider">React JS & Next.js</div>
              <div className="text-white text-xs sm:text-sm font-semibold">Freelance Developer</div>
              <div className="text-[11px] text-slate-400">Sub-second INP & pre-rendered SSG/SSR.</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 space-y-1 hover:border-indigo-500/40 transition-colors">
              <div className="text-purple-400 font-mono text-[11px] font-bold uppercase tracking-wider">Custom Themes</div>
              <div className="text-white text-xs sm:text-sm font-semibold">WordPress Master Agency</div>
              <div className="text-[11px] text-slate-400">Elementor Pro, ACF & Gutenberg FSE.</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 space-y-1 hover:border-indigo-500/40 transition-colors">
              <div className="text-cyan-400 font-mono text-[11px] font-bold uppercase tracking-wider">Google Crawl Ready</div>
              <div className="text-white text-xs sm:text-sm font-semibold">Technical SEO Tuning</div>
              <div className="text-[11px] text-slate-400">Schema JSON-LD & 98+ Core Web Vitals.</div>
            </div>
          </div>

          {/* Tech Ticker */}
          <div className="pt-8 border-t border-slate-800/60 max-w-4xl mx-auto">
            <p className="text-xs text-slate-500 uppercase tracking-widest font-mono mb-4">Core Technology Stack</p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-80 text-slate-300 font-mono text-xs">
              <span className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"><Code2 className="w-4 h-4 text-indigo-400" /> React 19 & Next.js</span>
              <span className="flex items-center gap-1.5 hover:text-purple-400 transition-colors"><Layout className="w-4 h-4 text-purple-400" /> WordPress & Elementor</span>
              <span className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"><Zap className="w-4 h-4 text-emerald-400" /> ACF Pro & Gutenberg</span>
              <span className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"><Gauge className="w-4 h-4 text-cyan-400" /> Tailwind CSS v4</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24 bg-[#090d16] border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ENGINEERED SERVICES</span>
              </div>
              <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.4]">
                Services Built for Growth & Search Visibility
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <span>Explore All 5 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((srv, idx) => (
              <motion.div
                key={srv.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-800/90 hover:border-indigo-500/50 space-y-5 flex flex-col justify-between group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-[11px] font-mono">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="font-syne font-bold text-xl text-white group-hover:text-indigo-300 transition-colors leading-[1.5]">
                    <Link href={`/services/${srv.slug}`} className="hover:underline">
                      {srv.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <ul className="space-y-1.5 text-[11px] text-slate-300 font-mono">
                    {srv.deliverables.slice(0, 3).map((d, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / SEO Authority Section */}
      <section className="py-16 md:py-24 bg-[#0b0f19] border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>WHY CHOOSE NEXIFY WEBWORKS</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
              Your Dedicated <span className="luxury-text-gradient">Website Developer & Theme Agency</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We bridge the gap between freelance flexibility and enterprise craftsmanship, offering budget-friendly website design in India with global quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 space-y-4 hover:border-indigo-500/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-syne font-bold text-lg text-white group-hover:text-indigo-300 transition-colors">
                Budget-Friendly Pricing
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Get premium custom website development at competitive rates. Clear milestones, no surprise charges, and zero bloated agency overhead.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 space-y-4 hover:border-indigo-500/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="font-syne font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">
                Freelance React & Next.js
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Senior engineering with React 19, TypeScript, and Next.js App Router for sub-second page loads and seamless user interactions.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 space-y-4 hover:border-indigo-500/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="font-syne font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                WordPress Master Agency
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Bespoke custom theme development using Elementor Pro, Advanced Custom Fields (ACF), and Gutenberg FSE without sluggish template bloat.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 space-y-4 hover:border-indigo-500/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-syne font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                Top Google Ranking SEO
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Built-in JSON-LD structured schemas, dynamic XML sitemaps, semantic tags, and 98+ Google Core Web Vitals performance tuning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Showcase Section */}
      <ShowcaseSection onSelectProject={setSelectedProject} />

      {/* Client Impact / Testimonials */}
      <section className="py-16 md:py-24 bg-[#070a10] border-t border-slate-800/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TESTIMONIALS & REVIEWS</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.25]">
              Trusted by <span className="text-indigo-400">Growth-Focused Brands</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              See how freelance React, WordPress, and Figma work converts traffic into stronger brand credibility and revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.article
                key={t.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={prefersReducedMotion ? undefined : { y: -6, transition: { duration: 0.25 } }}
                className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-800/90 space-y-6 flex flex-col justify-between relative group hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
              >
                <div className="space-y-4 relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-indigo-500/40 group-hover:text-indigo-400/80 transition-colors" />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <Image
                      src={t.avatar}
                      alt={`${t.author} — ${t.role} at ${t.company}`}
                      width={44}
                      height={44}
                      className="w-11 h-11 rounded-full object-cover border-2 border-slate-700 group-hover:border-indigo-500/60 shrink-0 shadow-md shadow-indigo-500/10 transition-colors"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="font-syne font-bold text-xs sm:text-sm text-white truncate">{t.author}</div>
                      <div className="text-[11px] text-slate-400 truncate">{t.role} • {t.company}</div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Home Page FAQ Accordion Section */}
      <section className="py-16 md:py-24 bg-[#090d16] border-t border-slate-800/80 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
              <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Got Questions? <span className="text-indigo-400">We Have Answers.</span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Everything you need to know about working with a freelance React, WordPress, and UI/UX developer.
            </p>
          </div>

          {/* Accordion Items */}
          <div className="space-y-4">
            {HOME_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-900/70 border border-slate-800/90 overflow-hidden transition-all duration-200 hover:border-indigo-500/40"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-space font-bold text-base sm:text-lg text-white hover:text-indigo-400 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-indigo-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Terminal Contact Section */}
      <TerminalContact />

      {/* Project Inspection Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
