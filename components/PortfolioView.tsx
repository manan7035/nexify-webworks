"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/src/types';
import { PROJECTS } from '@/src/data/mockData';
import { ProjectModal } from '@/components/ProjectModal';
import { TerminalContact } from '@/components/TerminalContact';
import { ArrowUpRight, Filter, Search } from 'lucide-react';

export const PortfolioView: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'React Apps', 'WordPress'];

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-0">

      {/* Portfolio Hero */}
      <section className="py-16 bg-grid-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
              <Filter className="w-3.5 h-3.5" />
              <span>CASE STUDIES ARCHIVE</span>
            </div>

            <h1 className="font-space text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              Engineering <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent">Digital Masterpieces</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore our full repository of custom WordPress themes, animated React applications, and high-performance Web3 platforms.
            </p>
          </div>

          {/* Filter & Search Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-6 border-t border-slate-800">

            {/* Category Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={selectedCategory === cat}
                  className={`px-4 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-500/20'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <label htmlFor="portfolio-search" className="sr-only">Search portfolio projects</label>
              <input
                id="portfolio-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search stack or title..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-[#0d1322] border-t border-slate-800/80 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="sr-only">Featured Projects</h2>

          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <div className="text-slate-500 text-lg font-space">No matching projects found</div>
              <p className="text-xs text-slate-400">Try adjusting your filter category or search keyword.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-indigo-400 font-mono"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Inspect details for ${project.title}`}
                  className="glass-card rounded-2xl border border-slate-800 hover:border-indigo-500/50 overflow-hidden cursor-pointer group transition-all duration-300 flex flex-col justify-between text-left w-full"
                >
                  <div>
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        fill
                        src={project.image}
                        alt={project.title}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1322] via-transparent to-transparent opacity-80"></div>

                      <div className="absolute top-3 right-3 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-indigo-300 border border-slate-800">
                        {project.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div>
                        <h3 className="font-space font-bold text-xl text-white group-hover:text-indigo-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">{project.subtitle}</p>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map((t, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0 space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-center p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx}>
                          <div className="font-space font-bold text-sm text-emerald-400">{m.value}</div>
                          <div className="text-[10px] text-slate-400 font-mono">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-indigo-400 font-mono font-semibold pt-1">
                      <span>Inspect Details</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                </button>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Project Inspection Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Terminal Contact */}
      <TerminalContact />

    </div>
  );
};
