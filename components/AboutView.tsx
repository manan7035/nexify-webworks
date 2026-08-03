"use client";

import React from 'react';
import { METHODOLOGY_STEPS } from '@/src/data/mockData';
import { TerminalContact } from '@/components/TerminalContact';
import { Users } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Narrative */}
      <section className="py-20 bg-grid-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
              <Users className="w-3.5 h-3.5" />
              <span>ABOUT ME</span>
            </div>

            <h1 className="font-space text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Rajkot, India Freelance <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent">Web Developer</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              I am a Rajkot, India-based freelance web developer with over 3 years of professional experience in React, WordPress, and Figma design. I build feature-complete websites focused on speed, conversion, and clear business outcomes for both local and international clients.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-800">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="font-space font-extrabold text-3xl sm:text-4xl text-indigo-400">10+</div>
              <div className="text-xs text-slate-400 font-mono mt-1">Freelance Projects Delivered</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="font-space font-extrabold text-3xl sm:text-4xl text-emerald-400">98%</div>
              <div className="text-xs text-slate-400 font-mono mt-1">Feature-Complete Delivery</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="font-space font-extrabold text-3xl sm:text-4xl text-purple-400">60 FPS</div>
              <div className="text-xs text-slate-400 font-mono mt-1">Motion Framerate Lock</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="font-space font-extrabold text-3xl sm:text-4xl text-amber-400">4.8/5.0</div>
              <div className="text-xs text-slate-400 font-mono mt-1">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Methodology / Four Pillars */}
      <section className="py-20 bg-[#070a10] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">OUR METHODOLOGY</div>
            <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Four Pillars of <span className="text-emerald-400">Execution</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A clear delivery framework that keeps design, development, and performance aligned from the first conversation to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY_STEPS.map((step) => (
              <div key={step.number} className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="font-mono text-3xl font-extrabold text-indigo-500/60">{step.number}</div>
                <h3 className="font-space font-bold text-lg text-white">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <TerminalContact />
    </div>
  );
};
