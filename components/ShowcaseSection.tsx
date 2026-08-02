"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Project } from '@/src/types';
import { PROJECTS } from '@/src/data/mockData';
import {
  Monitor,
  Tablet,
  Smartphone,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Gauge,
  ShieldCheck,
  Zap,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Maximize2
} from 'lucide-react';

interface ShowcaseSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ onSelectProject }) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'overview' | 'vitals' | 'architecture'>('overview');

  const categories = ['All', 'React Apps', 'WordPress'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  // Fallback index guard
  const activeProject = filteredProjects[activeProjectIndex] || filteredProjects[0] || PROJECTS[0];

  const handleNext = () => {
    setActiveProjectIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setActiveProjectIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section className="py-16 md:py-24 bg-[#080d18] border-t border-slate-800/80 relative overflow-hidden">

      {/* Background Ambient Glows & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-mono glow-glass">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>INTERACTIVE SHOWCASE // LIVE DIGITAL LAB</span>
            </div>

            <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Architectural <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent">Showcase</span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Test live interactive device frames, inspect sub-second Core Web Vitals performance benchmarks, and explore custom code architecture.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setActiveProjectIndex(0);
                  }}
                  aria-pressed={active}
                  className={`relative px-4 py-3 rounded-xl text-xs font-medium transition-all duration-300 cursor-pointer z-10 ${
                    active ? 'text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="showcaseCategoryTab"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/25 -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Device Stage Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Main Frame Visualizer (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between glass-card rounded-3xl border border-slate-800/90 p-4 sm:p-6 relative group overflow-hidden">

            {/* Top Toolbar controls: Device View Switcher + Slide Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800/80">

              {/* Device Frame Mode Toggles */}
              <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setDeviceMode('desktop')}
                  aria-pressed={deviceMode === 'desktop'}
                  aria-label="Switch to desktop device view"
                  className={`flex items-center gap-1.5 px-3 py-2.5 rounded-lg transition-all cursor-pointer ${
                    deviceMode === 'desktop' ? 'bg-indigo-600 text-white font-bold shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Desktop</span>
                </button>

                <button
                  onClick={() => setDeviceMode('tablet')}
                  aria-pressed={deviceMode === 'tablet'}
                  aria-label="Switch to tablet device view"
                  className={`flex items-center gap-1.5 px-3 py-2.5 rounded-lg transition-all cursor-pointer ${
                    deviceMode === 'tablet' ? 'bg-indigo-600 text-white font-bold shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tablet</span>
                </button>

                <button
                  onClick={() => setDeviceMode('mobile')}
                  aria-pressed={deviceMode === 'mobile'}
                  aria-label="Switch to mobile device view"
                  className={`flex items-center gap-1.5 px-3 py-2.5 rounded-lg transition-all cursor-pointer ${
                    deviceMode === 'mobile' ? 'bg-indigo-600 text-white font-bold shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mobile</span>
                </button>
              </div>

              {/* Slide Counter & Prev/Next Arrow Buttons */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">
                  <span className="text-indigo-400 font-bold">{activeProjectIndex + 1}</span> / {filteredProjects.length}
                </span>

                <div className="flex items-center gap-1">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
                    aria-label="Previous Showcase"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
                    aria-label="Next Showcase"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Interactive Browser / Device Mockup Screen */}
            <div className="py-6 flex items-center justify-center min-h-[380px] sm:min-h-[440px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeProject.id}-${deviceMode}`}
                  initial={{ opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -10 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className={`mx-auto bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 relative flex flex-col ${
                    deviceMode === 'desktop'
                      ? 'w-full max-w-2xl aspect-[16/10]'
                      : deviceMode === 'tablet'
                      ? 'w-[360px] sm:w-[420px] aspect-[4/3]'
                      : 'w-[220px] sm:w-[260px] aspect-[9/16]'
                  }`}
                >
                  {/* Mock Browser Header Bar */}
                  <div className="h-7 bg-slate-900/90 border-b border-slate-800/80 px-3 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                    </div>

                    {activeProject.liveUrl ? (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-0.5 rounded-md bg-indigo-950/80 hover:bg-indigo-900/90 border border-indigo-500/40 text-xs font-mono text-indigo-300 hover:text-white truncate max-w-[220px] transition-colors flex items-center gap-1"
                      >
                        <span className="truncate">{activeProject.liveUrl}</span>
                        <ExternalLink className="w-2.5 h-2.5 shrink-0 text-emerald-400" />
                      </a>
                    ) : (
                      <div className="px-3 py-0.5 rounded-md bg-slate-950 border border-slate-800/80 text-xs font-mono text-slate-400 truncate max-w-[180px]">
                        Live Preview
                      </div>
                    )}

                    <div className="w-3"></div>
                  </div>

                  {/* Main Screen Preview Content */}
                  <div className="relative flex-1 overflow-hidden group/screen">
                    <Image
                      fill
                      src={activeProject.image}
                      alt={activeProject.title}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 group-hover/screen:scale-105"
                    />

                    {/* Gradient Overlay & Live Badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                    {/* Top Right Score Badge Overlay */}
                    <div className="absolute top-3 right-3 bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-1.5 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>Fast, SEO-aware build</span>
                    </div>

                    {/* Bottom Info Overlay inside Device */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 sm:p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                          {activeProject.category} • {activeProject.client}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{activeProject.year}</span>
                      </div>

                      <h4 className="font-space font-bold text-sm sm:text-base text-white truncate">
                        {activeProject.title}
                      </h4>

                      <p className="text-xs text-slate-300 line-clamp-1">
                        {activeProject.subtitle}
                      </p>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Quick Metric Highlights */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {activeProject.metrics.map((m, idx) => (
                  <div key={idx} className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
                    <span className="text-slate-400 font-mono text-xs">{m.label}: </span>
                    <span className="font-space font-bold text-emerald-400">{m.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors cursor-pointer shadow-md shadow-emerald-500/20"
                  >
                    <span>Visit Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => onSelectProject(activeProject)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors cursor-pointer shadow-md shadow-indigo-500/20"
                >
                  <span>Inspect Spec</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Side Control Panel & Deep Dive Spec Tabs (4 cols) */}
          <div className="lg:col-span-4 glass-card rounded-3xl border border-slate-800/90 p-6 flex flex-col justify-between space-y-6">

            {/* Panel Tabs (Overview / Vitals / Architecture) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="font-syne font-bold text-lg text-white">Project Blueprint</h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                  {activeProject.id}
                </span>
              </div>

              {/* Sub-tab pills */}
              <div className="grid grid-cols-3 gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('overview')}
                  aria-pressed={activeTab === 'overview'}
                  className={`py-2 rounded-lg text-center transition-all cursor-pointer ${
                    activeTab === 'overview' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('vitals')}
                  aria-pressed={activeTab === 'vitals'}
                  className={`py-2 rounded-lg text-center transition-all cursor-pointer ${
                    activeTab === 'vitals' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Vitals
                </button>
                <button
                  onClick={() => setActiveTab('architecture')}
                  aria-pressed={activeTab === 'architecture'}
                  className={`py-2 rounded-lg text-center transition-all cursor-pointer ${
                    activeTab === 'architecture' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Stack
                </button>
              </div>

              {/* Dynamic Content depending on active tab */}
              <div className="pt-2">
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase">Challenge</div>
                      <p className="text-xs text-slate-300 leading-relaxed mt-1">
                        {activeProject.challenge}
                      </p>
                    </div>

                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase">Solution</div>
                      <p className="text-xs text-slate-300 leading-relaxed mt-1">
                        {activeProject.solution}
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'vitals' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-300">
                        <Gauge className="w-4 h-4 text-emerald-400" />
                        <span>Performance</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-emerald-400">Optimized</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-300">
                        <Zap className="w-4 h-4 text-indigo-400" />
                        <span>First Contentful Paint</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-indigo-300">0.3s</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-300">
                        <ShieldCheck className="w-4 h-4 text-cyan-400" />
                        <span>SEO & Accessibility</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-cyan-300">Optimized</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'architecture' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <div className="text-xs font-mono text-slate-400 uppercase">Tech Ecosystem:</div>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 space-y-2 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Tailwind v4 JIT Compiler</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Framer Motion 60fps Hardware Pipeline</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Quick List Selection Thumbnails */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Select Masterpiece:
              </div>

              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {filteredProjects.map((proj, index) => {
                  const isSelected = index === activeProjectIndex;
                  return (
                    <button
                      key={proj.id}
                      onClick={() => setActiveProjectIndex(index)}
                      className={`w-full p-2.5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-950/80 border-indigo-500/60 text-white shadow'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        <Image
                          src={proj.image}
                          alt={proj.title}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-lg object-cover border border-slate-800 shrink-0"
                        />
                        <div className="truncate">
                          <div className="font-space font-bold text-xs truncate text-white">{proj.title}</div>
                          <div className="text-xs text-slate-400 truncate">{proj.category}</div>
                        </div>
                      </div>

                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse"></span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Action Button */}
              <button
                onClick={() => router.push('/portfolio')}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>View Complete Portfolio ({PROJECTS.length})</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
