"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Article } from '@/src/types';
import { ARTICLES } from '@/src/data/mockData';
import { ArticleModal } from '@/components/ArticleModal';
import { TerminalContact } from '@/components/TerminalContact';
import { Clock, ArrowUpRight, BookOpen, Search } from 'lucide-react';

export const InsightsView: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  const categories = ['All', 'Engineering & UX', 'UI/UX Design', 'WordPress Engineering', 'React Architecture'];

  const filteredArticles = ARTICLES.filter((a) => {
    const matchesCat = selectedCategory === 'All' || a.category === selectedCategory;
    const matchesSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-0">

      {/* Featured Insight Hero */}
      <section className="py-16 bg-grid-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
              <BookOpen className="w-3.5 h-3.5" />
              <span>STUDIO INSIGHTS & ENGINEERING BLOG</span>
            </div>

            <h1 className="font-space text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              The Future of <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent">Digital Craftsmanship</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Deep dives on WebGL canvas performance, sub-second WordPress architectures, and React 19 micro-interactions written by our engineering leads.
            </p>
          </div>

          {/* Featured Hero Article Banner */}
          {featuredArticle && (
            <button
              type="button"
              onClick={() => setSelectedArticle(featuredArticle)}
              aria-label={`Read featured essay: ${featuredArticle.title}`}
              className="glass-card rounded-3xl border border-indigo-500/40 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 cursor-pointer group hover:border-indigo-500 transition-all shadow-2xl relative overflow-hidden text-left w-full"
            >
              <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-950 border border-indigo-500/50 text-indigo-300">
                      Featured Insight
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="font-space text-2xl sm:text-3xl font-extrabold text-white group-hover:text-indigo-300 transition-colors leading-tight">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div>
                    <div className="font-semibold text-xs text-white">{featuredArticle.author.name}</div>
                    <div className="text-[10px] text-slate-400">{featuredArticle.author.role} • {featuredArticle.date}</div>
                  </div>

                  <span className="text-xs font-mono text-indigo-400 font-semibold flex items-center gap-1">
                    Read Essay
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 relative aspect-video lg:aspect-auto rounded-2xl overflow-hidden border border-slate-800">
                <Image
                  fill
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  sizes="(max-width: 1024px) 100vw, 41vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </button>
          )}

        </div>
      </section>

      {/* Articles Grid & Filters */}
      <section className="py-16 bg-[#0d1322] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={selectedCategory === cat}
                  className={`px-4 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 border-indigo-500 text-white'
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
              <label htmlFor="insights-search" className="sr-only">Search insights articles</label>
              <input
                id="insights-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics or keywords..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <button
                key={article.id}
                type="button"
                onClick={() => setSelectedArticle(article)}
                aria-label={`Read article: ${article.title}`}
                className="glass-card rounded-2xl border border-slate-800 hover:border-indigo-500/50 overflow-hidden cursor-pointer group transition-all duration-300 flex flex-col justify-between text-left w-full"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      fill
                      src={article.image}
                      alt={article.title}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-indigo-300 border border-slate-800">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    <h3 className="font-space font-bold text-lg text-white group-hover:text-indigo-300 transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-medium">{article.author.name}</span>

                  <ArrowUpRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Article Reader Modal */}
      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />

      {/* Terminal Contact */}
      <TerminalContact />

    </div>
  );
};
