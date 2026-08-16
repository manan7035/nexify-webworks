"use client";

import React, { useState } from 'react';
import { Bookmark, Check, Share2, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';

interface ArticleShareActionsProps {
  url: string;
  title: string;
}

export const ArticleShareActions: React.FC<ArticleShareActionsProps> = ({ url, title }) => {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleCopyLink = async () => {
    try {
      const fullUrl = typeof window !== 'undefined' ? (url.startsWith('http') ? url : `${window.location.origin}${url}`) : url;
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    const fullUrl = typeof window !== 'undefined' ? (url.startsWith('http') ? url : `${window.location.origin}${url}`) : url;
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          url: fullUrl,
        });
      } catch {
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  const encodedUrl = encodeURIComponent(typeof window !== 'undefined' ? (url.startsWith('http') ? url : `${window.location.origin}${url}`) : url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => setBookmarked(!bookmarked)}
        className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono border transition-all cursor-pointer ${
          bookmarked
            ? 'bg-amber-950/60 border-amber-500/50 text-amber-300'
            : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
        }`}
        aria-label="Bookmark article"
        aria-pressed={bookmarked}
      >
        <Bookmark className="w-3.5 h-3.5" />
        <span>{bookmarked ? 'Saved' : 'Bookmark'}</span>
      </button>

      <button
        type="button"
        onClick={handleCopyLink}
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
        aria-label="Copy link to clipboard"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400">Link Copied!</span>
          </>
        ) : (
          <>
            <LinkIcon className="w-3.5 h-3.5" />
            <span>Copy Link</span>
          </>
        )}
      </button>

      <button
        type="button"
        onClick={handleNativeShare}
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/60 hover:text-white transition-all cursor-pointer"
        aria-label="Share article"
      >
        <Share2 className="w-3.5 h-3.5" />
        <span>Share</span>
      </button>

      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
        aria-label="Share on X (Twitter)"
      >
        <Twitter className="w-3.5 h-3.5" />
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-3.5 h-3.5" />
      </a>
    </div>
  );
};
