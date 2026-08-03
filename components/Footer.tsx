"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Terminal, Send, CheckCircle2, Activity } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const navLinks: { href: string; label: string }[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/insights', label: 'Insights' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-[#070a10] border-t border-slate-800/80 text-slate-400 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow spot */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-emerald-400 p-[1px]">
                <div className="w-full h-full bg-[#0d1322] rounded-[11px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="font-space font-bold text-xl text-white tracking-tight">
                NEXIFY <span className="text-indigo-400">WEBWORKS</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              India-based freelance developer delivering custom React websites, WordPress themes, and polished Figma UI/UX designs with attention to speed and real business results.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400 bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 max-w-sm">
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Experience: <strong className="text-white">3+ years</strong></span>
              <span className="text-slate-600">|</span>
              <span>Projects: <strong className="text-white">10+</strong></span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-space font-semibold text-white text-sm tracking-wider uppercase mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-indigo-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Scope */}
          <div>
            <h4 className="font-space font-semibold text-white text-sm tracking-wider uppercase mb-4">Core Expertise</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="text-slate-300">Elementor WordPress Design</li>
              <li className="text-slate-300">React 19 & Next.js Apps</li>
              <li className="text-slate-300">Figma Design Systems</li>
              <li className="text-slate-300">Custom Block Theme</li>
              <li className="text-slate-300">Fast performance with basic SEO</li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="max-lg:col-span-2 space-y-5">
            <h4 className="font-space font-semibold text-white text-sm tracking-wider uppercase mb-3">Newsletter</h4>
            <p className="text-xs text-slate-400 mb-4">
              Get monthly engineering breakdowns & UI design insights straight to your inbox.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed to updates!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <label htmlFor="newsletter-email" className="sr-only">Subscribe to newsletter</label>
                <div className="relative">
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 font-mono">
            <span>© {new Date().getFullYear()} Nexify Webworks. India-based freelance developer.</span>
          </div>
          {/* TODO: Add real Nexify Webworks social profiles (GitHub, Twitter/X, LinkedIn)
              here once they exist — do not link to generic platform homepages. */}
        </div>

      </div>
    </footer>
  );
};
