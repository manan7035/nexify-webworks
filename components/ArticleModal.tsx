"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Article } from '@/src/types';
import { ModalShell } from '@/components/ModalShell';
import { ArticleBody } from '@/components/ArticleBody';
import { X, Clock, Bookmark, Check, Share2, ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const articleUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/insights/${article.id}`
    : `/insights/${article.id}`;

  const handleShare = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share({
          title: article.title,
          url: articleUrl,
        });
      } else {
        await navigator.clipboard.writeText(articleUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    } catch {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Nexify Webworks",
      url: "https://nexifywebworks.in",
    },
    datePublished: article.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <ModalShell
      onClose={onClose}
      labelledById="article-modal-title"
      initialFocusRef={closeButtonRef}
      className="max-w-3xl"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* Header bar */}
      <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0d1322]/95 backdrop-blur-md border-b border-slate-800">
        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Insights</span>
        </button>

        <div className="flex items-center gap-2">
          <Link
            href={`/insights/${article.id}`}
            target="_blank"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer hidden sm:inline-flex items-center gap-1.5 text-xs font-mono"
            aria-label="Open full page in new tab"
            title="Open full page"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Full Page</span>
          </Link>

          <button
            type="button"
            onClick={() => setBookmarked(!bookmarked)}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              bookmarked ? 'bg-amber-950/60 border-amber-500/50 text-amber-400' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
            aria-label="Save article"
            aria-pressed={bookmarked}
          >
            <Bookmark className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Share article link"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scrollable Article Body */}
      <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar">

        {/* Category & Title */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-950/80 border border-indigo-500/40 text-indigo-400">
              {article.category}
            </span>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 id="article-modal-title" className="font-space text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
            {article.title}
          </h1>
        </div>

        {/* Author Card */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
          <div>
            <div className="font-semibold text-sm text-white">{article.author.name}</div>
            <div className="text-xs text-slate-400">{article.author.role} • {article.date}</div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800">
          <Image
            fill
            src={article.image}
            alt={article.title}
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        {/* Article Structured Body */}
        <ArticleBody content={article.content} excerpt={article.excerpt} />

        {/* Footer Callout */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-purple-950/60 border border-indigo-500/30 text-center space-y-2">
          <h4 className="font-space font-bold text-white text-base">Enjoyed this technical insight?</h4>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Our engineering team regularly publishes deep dives on web performance, React architecture, and luxury UI/UX motion.
          </p>
        </div>

      </div>
    </ModalShell>
  );
};
