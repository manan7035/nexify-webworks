"use client";

import React, { useState } from 'react';
import {
  Globe,
  Mail,
  User,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Gauge,
  Layers,
  Search,
  Check,
  AlertCircle,
  Loader2
} from 'lucide-react';

interface WebsiteAuditLeadMagnetProps {
  articleTitle?: string;
  articleId?: string;
  className?: string;
  compact?: boolean;
}

const FOCUS_OPTIONS = [
  { id: 'speed', label: 'Speed & Core Web Vitals', icon: Gauge },
  { id: 'ux', label: 'Mobile UX & Layout', icon: Layers },
  { id: 'bloat', label: 'WordPress / Code Bloat', icon: Sparkles },
  { id: 'seo', label: 'SEO & Google Crawl', icon: Search },
];

export const WebsiteAuditLeadMagnet: React.FC<WebsiteAuditLeadMagnetProps> = ({
  articleTitle,
  articleId,
  className = '',
  compact = false,
}) => {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [selectedFocus, setSelectedFocus] = useState<string[]>([
    'Speed & Core Web Vitals',
    'Mobile UX & Layout',
  ]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedUrl, setSubmittedUrl] = useState('');

  const toggleFocus = (label: string) => {
    if (selectedFocus.includes(label)) {
      if (selectedFocus.length > 1) {
        setSelectedFocus(selectedFocus.filter((item) => item !== label));
      }
    } else {
      setSelectedFocus([...selectedFocus, label]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const cleanUrl = url.trim();
    const cleanEmail = email.trim();

    if (!cleanUrl) {
      setErrorMessage('Please enter your website URL.');
      return;
    }

    // Basic domain/URL validation
    const domainPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
    if (!domainPattern.test(cleanUrl)) {
      setErrorMessage('Please enter a valid website domain (e.g., yourcompany.com).');
      return;
    }

    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setErrorMessage('Please enter a valid email address to receive your audit.');
      return;
    }

    setStatus('submitting');

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: cleanUrl,
          email: cleanEmail,
          name: name.trim() || undefined,
          focusAreas: selectedFocus,
          articleTitle,
          articleId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data?.error || 'Unable to submit audit request. Please try again.');
        setStatus('idle');
        return;
      }

      setSubmittedUrl(data.normalizedUrl || cleanUrl);
      setStatus('success');
    } catch {
      setErrorMessage('Network connection error. Please try again in a moment.');
      setStatus('idle');
    }
  };

  const handleReset = () => {
    setUrl('');
    setEmail('');
    setName('');
    setStatus('idle');
    setErrorMessage(null);
  };

  if (status === 'success') {
    return (
      <div
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950/80 via-slate-900 to-purple-950/60 border border-emerald-500/40 p-6 sm:p-10 shadow-2xl ${className}`}
      >
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-xl mx-auto text-center space-y-5">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/15 border border-emerald-500/40 text-emerald-300">
              AUDIT QUEUED SUCCESSFULLY
            </span>
            <h3 className="font-space font-bold text-white text-2xl sm:text-3xl tracking-tight">
              We&apos;re preparing your website tear-down!
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Our lead engineers are analyzing <span className="font-mono text-indigo-300 font-semibold">{submittedUrl}</span> for Core Web Vitals, mobile UX friction, and code bottlenecks.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-left space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Turnaround time: <strong>Within 24 business hours</strong></span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Delivery destination: <strong>{email}</strong></span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-mono text-slate-400 hover:text-indigo-400 transition-colors underline cursor-pointer"
          >
            Audit another website
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950/70 via-[#0d1322] to-purple-950/50 border border-indigo-500/30 p-6 sm:p-10 shadow-2xl backdrop-blur-sm ${className}`}
    >
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold bg-indigo-500/15 border border-indigo-500/40 text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>FREE 5-POINT PERFORMANCE & UX AUDIT</span>
          </div>

          <h3 className="font-space font-extrabold text-white text-2xl sm:text-3xl tracking-tight leading-tight">
            Wondering why your website isn&apos;t converting?
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Enter your website URL below. Our senior engineers will analyze your mobile Core Web Vitals, UI/UX bottlenecks, and script bloat — delivering a personalized, actionable 5-point report to your inbox within 24 hours. <strong>100% free, zero spam.</strong>
          </p>
        </div>

        {/* Focus areas selector */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-slate-400 block">
            What should we focus on? <span className="text-slate-500">(Select all that apply)</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {FOCUS_OPTIONS.map((opt) => {
              const active = selectedFocus.includes(opt.label);
              const Icon = opt.icon;
              return (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => toggleFocus(opt.label)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-indigo-600/30 border border-indigo-400 text-indigo-200 shadow-sm'
                      : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${active ? 'text-indigo-400' : 'text-slate-500'}`} />
                  <span>{opt.label}</span>
                  {active && <Check className="w-3 h-3 text-indigo-300 ml-0.5" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* The Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className={`grid grid-cols-1 ${compact ? 'gap-3' : 'sm:grid-cols-2 lg:grid-cols-3 gap-3.5'}`}>
            {/* Website URL */}
            <div className="relative">
              <label htmlFor="audit-url" className="sr-only">
                Website URL
              </label>
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Globe className="w-4 h-4 text-indigo-400" />
              </div>
              <input
                id="audit-url"
                type="text"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                placeholder="yourwebsite.com *"
                required
                disabled={status === 'submitting'}
                className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors font-mono"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label htmlFor="audit-email" className="sr-only">
                Work Email
              </label>
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Mail className="w-4 h-4 text-indigo-400" />
              </div>
              <input
                id="audit-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                placeholder="you@company.com *"
                required
                disabled={status === 'submitting'}
                className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors font-mono"
              />
            </div>

            {/* Name (Optional) */}
            <div className="relative">
              <label htmlFor="audit-name" className="sr-only">
                Your Name
              </label>
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <User className="w-4 h-4 text-slate-500" />
              </div>
              <input
                id="audit-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name (optional)"
                disabled={status === 'submitting'}
                className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors font-mono"
              />
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 flex items-center gap-2.5 text-xs text-red-300">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                24h Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                100% Free & No Spam
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Queueing Audit...</span>
                </>
              ) : (
                <>
                  <span>Get Free 5-Point Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
