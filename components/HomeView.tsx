"use client";

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
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
  Quote
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-16 pb-20 overflow-hidden bg-grid-pattern">
        {/* Ambient Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono shadow-2xl glow-glass"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-emerald-400 font-bold">Fast performance and basic SEO</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.25] max-w-5xl mx-auto"
          >
            Digital Performance{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent">
              Excellence.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-xl max-w-3xl mx-auto font-normal leading-relaxed"
          >
            I build high-converting custom React websites, WordPress themes, and polished Figma UI/UX designs with clear business impact.
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
              className="w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Initiate Project Terminal</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => router.push('/portfolio')}
              className="w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Case Studies</span>
            </button>
          </motion.div>

          {/* Tech Ticker */}
          <div className="pt-10 border-t border-slate-800/60 max-w-4xl mx-auto">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
              Core Tech Stack & Ecosystem
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-slate-400 text-xs font-mono">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>React 19</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                <span>Figma UI/UX</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>WordPress Custom Themes</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                <span>Tailwind CSS v4</span>
              </div>
            </div>
          </div>

          {/* Synced Scroll Arrow & Code Icon Motion Animation */}
          <motion.div
            onClick={() => {
              const el = document.getElementById('capabilities-section') || document.getElementById('showcase-interactive');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="pt-8 flex flex-col items-center justify-center cursor-pointer group select-none"
          >
            <div className="text-[11px] font-mono text-slate-400 group-hover:text-indigo-400 transition-colors mb-2 flex items-center gap-1">
              <span>SCROLL TO EXPLORE</span>
            </div>

            <div className="relative w-11 h-20 rounded-full border border-slate-800 group-hover:border-indigo-500/60 bg-slate-900/70 backdrop-blur-md flex items-center justify-center overflow-hidden transition-all duration-300 shadow-lg shadow-indigo-500/10">
              {/* Code icon moving with down arrow in synchronized vertical flow */}
              <motion.div
                animate={
                  prefersReducedMotion
                    ? { y: 0, opacity: 1, scale: 1 }
                    : { y: [-16, 16, -16], opacity: [0.2, 1, 0.2], scale: [0.85, 1.15, 0.85] }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                }
                className="flex flex-col items-center gap-1.5 text-indigo-400 group-hover:text-emerald-400"
              >
                <Code2 className="w-4 h-4 text-indigo-400 group-hover:text-emerald-400 transition-colors" />
                <ArrowRight className="w-3.5 h-3.5 rotate-90 text-purple-400 group-hover:text-emerald-300 transition-colors" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Services Preview Grid */}
      <section id="capabilities-section" className="py-16 md:py-24 bg-[#070a10] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider">PRECISION SERVICES</div>
              <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.25]">
                Core Service <span className="text-indigo-400">Offerings</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed md:max-w-md">
              Specialized in Figma UI/UX design, custom React web development, and fast WordPress theme builds for growing businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv, index) => (
              <motion.div
                key={srv.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 group space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 flex items-center justify-center group-hover:scale-110 group-hover:text-emerald-400 transition-all">
                      {srv.id === 'ui-ux' && <Layout className="w-6 h-6" />}
                      {srv.id === 'wordpress' && <Code2 className="w-6 h-6" />}
                      {srv.id === 'react-apps' && <Zap className="w-6 h-6" />}
                      {srv.id === 'speed-opt' && <Gauge className="w-6 h-6" />}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="font-syne font-bold text-xl text-white group-hover:text-indigo-300 transition-colors leading-[1.25]">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <ul className="space-y-1.5 text-[11px] text-slate-300 font-mono">
                    {srv.deliverables.map((d, i) => (
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

      {/* Interactive Showcase Section */}
      <ShowcaseSection onSelectProject={setSelectedProject} />

      {/* Client Impact / Testimonials — Responsive & Modern Animated */}
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
                {/* Background Subtle Gradient Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/15 transition-colors"></div>

                <div className="space-y-4 relative">
                  {/* Rating Stars & Floating Quote Icon */}
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

                {/* Author Avatar & Details Bar — Flexible & Responsive with shrink-0 image */}
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

      {/* Terminal Contact Section */}
      <TerminalContact />

      {/* Project Inspection Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
