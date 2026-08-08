"use client";

import React from 'react';
import Link from 'next/link';
import { SERVICES } from '@/src/data/mockData';
import { TerminalContact } from '@/components/TerminalContact';
import {
  Zap,
  Code2,
  Layout,
  Gauge,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Code2,
  Layout,
  Gauge
};

export const ServicesView: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Web Engineering & Design Services",
    description: "High-performance website development using React, custom website design in WordPress (Elementor & ACF), custom WordPress block theme development, Figma UI/UX design, and Core Web Vitals SEO optimization.",
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: `https://nexifywebworks.in/services/${service.slug}`
      }
    }))
  };

  return (
    <div className="space-y-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden bg-grid-pattern border-b border-slate-800/80">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SEO Optimized Web Engineering Services</span>
          </div>

          <h1 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Services Engineered for{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent">
              Performance & Search Visibility.
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
            From website development using React to custom WordPress design with Elementor & ACF, custom block theme development, Figma UI/UX prototyping, and Core Web Vitals SEO tuning — built for clean code and search engine indexability.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Core Web Vitals Ready</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <Clock className="w-4 h-4 text-indigo-400" />
              <span>Responsive SLA Support</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>SEO Best Practices</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 sm:py-20 bg-[#0b0f17] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {SERVICES.map((service) => {
              const IconComponent = iconMap[service.iconName] || Zap;
              return (
                <div
                  key={service.id}
                  className="group rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none"></div>

                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono truncate max-w-[200px]">
                        {service.badge}
                      </span>
                    </div>

                    <div>
                      {/* Clickable Title to Single Page */}
                      <h2 className="text-xl sm:text-2xl font-bold font-space text-white">
                        <Link href={`/services/${service.slug}`} className="hover:text-indigo-400 transition-colors cursor-pointer">
                          {service.title}
                        </Link>
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <span className="text-[11px] font-mono uppercase text-slate-500 tracking-wider">Key Deliverables</span>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 relative z-10">
                    <div>
                      <span className="text-xs text-indigo-400 font-mono font-semibold block">Custom Proposal</span>
                      <span className="text-xs text-slate-400">Tailored Scope</span>
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all group-hover:translate-x-1"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terminal Contact Section */}
      <TerminalContact />
    </div>
  );
};
