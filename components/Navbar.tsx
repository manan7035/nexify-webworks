"use client";

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Code, Menu, X, ArrowUpRight, ChevronDown, Zap, Code2, Layout, Gauge } from 'lucide-react';
import { SERVICES } from '@/src/data/mockData';

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Code2,
  Layout,
  Gauge
};

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navItems: { href: string; label: string; hasDropdown?: boolean }[] = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services', hasDropdown: true },
    { href: '/about', label: 'About Us' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/insights', label: 'Insights' },
    { href: '/contact', label: 'Contact' }
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard accessibility
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-[#0b0f17]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => {
            setMobileMenuOpen(false);
            setServicesDropdownOpen(false);
          }}
          className="flex items-center gap-3 group text-left cursor-pointer rounded-xl"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/50 group-hover:scale-105 transition-all duration-300">
            <div className="w-full h-full bg-[#0d1322] rounded-[11px] flex items-center justify-center">
              <Code className="w-5 h-5 text-indigo-400 group-hover:text-emerald-400 transition-colors" />
            </div>
          </div>
          <div>
            <div className="font-space font-bold text-xl tracking-tight text-white flex items-center gap-1.5">
              NEXIFY <span className="text-indigo-400 font-extrabold group-hover:text-emerald-400 transition-colors">WEBWORKS</span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">Freelance Web Developer</p>
          </div>
        </Link>

        {/* Desktop Navigation Links (Visible on 1024px+ screens) */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800/90 shadow-2xl relative">
          {navItems.map((item) => {
            const active = isActive(item.href);

            if (item.hasDropdown) {
              return (
                <div
                  key={item.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    onClick={() => setServicesDropdownOpen(false)}
                    aria-expanded={servicesDropdownOpen}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      active
                        ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-500/25'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-white' : 'text-slate-400'}`} />
                  </Link>

                  {/* Services Mega Dropdown */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-[#0d1322]/95 backdrop-blur-2xl border border-slate-800/90 shadow-2xl p-3 grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                      <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-indigo-400 border-b border-slate-800/80 mb-1">
                        Web Engineering Services
                      </div>
                      
                      {SERVICES.map((service) => {
                        const IconComp = iconMap[service.iconName] || Zap;
                        return (
                          <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/70 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:text-emerald-400 group-hover:scale-105 transition-all shrink-0 mt-0.5">
                              <IconComp className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-white group-hover:text-indigo-400 transition-colors">
                                {service.title}
                              </div>
                              <div className="text-[11px] text-slate-400 line-clamp-1">
                                {service.badge}
                              </div>
                            </div>
                          </Link>
                        );
                      })}

                      <div className="pt-2 mt-1 border-t border-slate-800/80">
                        <Link
                          href="/services"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 text-xs font-medium transition-colors"
                        >
                          <span>Explore All Services</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={active ? 'page' : undefined}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all animate-shimmer"
          >
            <span>Book a Call</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button (Triggers at <=1024px / 991px) */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Triggers on 991px / 1024px screens) */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-[#0d1322] border-b border-slate-800 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Status: Available for New Projects</span>
          </div>
          
          <div className="grid gap-2">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.href} className="space-y-1">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? 'bg-indigo-600 text-white font-semibold'
                          : 'text-slate-300 hover:bg-slate-800/60'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {mobileServicesOpen && (
                      <div className="pl-4 space-y-1.5 border-l-2 border-slate-800 ml-3 py-2">
                        <Link
                          href="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded-lg text-sm font-semibold text-indigo-400 hover:bg-slate-800/50"
                        >
                          All Services
                        </Link>
                        {SERVICES.map((s) => (
                          <Link
                            key={s.id}
                            href={`/services/${s.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/50"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 animate-shimmer"
          >
            <span>Book a Discovery Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
};
