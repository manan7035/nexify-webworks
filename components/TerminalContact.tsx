"use client";

import React, { useState } from 'react';
import { Terminal, Send, CheckCircle2, MapPin, Mail, ShieldCheck } from 'lucide-react';
import { CONTACT_EMAIL } from '@/app/constants';

interface TerminalContactProps {
  prefilledScope?: string;
  prefilledCost?: number;
}

export const TerminalContact: React.FC<TerminalContactProps> = ({ prefilledScope }) => {
  const [selectedScopes, setSelectedScopes] = useState<string[]>(
    prefilledScope ? [prefilledScope] : ['UI/UX Figma Design', 'Website Development using React']
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'executing' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const availableScopes = [
    'UI/UX Figma Design',
    'Website Development using React',
    'WordPress Custom Website Design'
  ];

  const toggleScope = (scope: string) => {
    if (selectedScopes.includes(scope)) {
      setSelectedScopes(selectedScopes.filter((s) => s !== scope));
    } else {
      setSelectedScopes([...selectedScopes, scope]);
    }
  };

  const updateField = (field: 'name' | 'email' | 'message', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const nextErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name or organization.';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      nextErrors.message = 'Please describe your project goals and requirements.';
    }
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setStatus('executing');

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          scopes: selectedScopes
        })
      });

      if (!response.ok) {
        let message = 'Transmission failed. Please try again later.';
        if (response.status === 429) {
          message = 'Too many transmissions. Please wait a moment and try again.';
        }
        setErrorMessage(message);
        setStatus('idle');
        return;
      }

      setStatus('success');
    } catch {
      setErrorMessage('Transmission failed. Please check your connection and try again.');
      setStatus('idle');
    }
  };

  return (
    <div id="contact-terminal" className="py-20 bg-[#070a10] border-t border-slate-800 relative">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            <span>CONTACT_INITIATE // TERMINAL PROTOCOL</span>
          </div>
          <h2 className="font-space text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let&apos;s Build The <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">Future Together</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Send your project goals and timeline directly to me for fast freelance delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl border border-slate-800 p-6 sm:p-10 relative overflow-hidden">

              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>INQUIRY_PROTOCOL_V2.1</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">ENCRYPTED 256-BIT</span>
              </div>

              {status === 'success' ? (
                <div role="status" aria-live="polite" className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-space text-2xl font-bold text-white">Connection Established</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your inquiry has been securely received. I will respond personally within 4 business hours.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setErrorMessage(null); }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Select Scope Chips */}
                  <fieldset className="border-0 p-0 mb-6">
                    <legend className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                      Select Project Scope:
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {availableScopes.map((scope) => {
                        const active = selectedScopes.includes(scope);
                        return (
                          <button
                            type="button"
                            key={scope}
                            onClick={() => toggleScope(scope)}
                            aria-pressed={active}
                            className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                              active
                                ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-500/20'
                                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            {scope}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  {/* Name & Email inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Your Name / Organization
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={errors.name ? true : undefined}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        placeholder="e.g. Marcus Thorne"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                      {errors.name && (
                        <p id="contact-name-error" role="alert" className="text-xs text-rose-400 mt-1.5">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Electronic Mail
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        aria-required="true"
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="m.thorne@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                      {errors.email && (
                        <p id="contact-email-error" role="alert" className="text-xs text-rose-400 mt-1.5">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Project Goals & Requirements
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      aria-required="true"
                      aria-invalid={errors.message ? true : undefined}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      value={formData.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      placeholder="Briefly describe your objectives, target launch date, and key features..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    ></textarea>
                    {errors.message && (
                      <p id="contact-message-error" role="alert" className="text-xs text-rose-400 mt-1.5">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'executing'}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === 'executing' ? (
                      <span className="font-mono text-xs animate-pulse">EXECUTING TRANSMISSION...</span>
                    ) : (
                      <>
                        <span>Execute Connection</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {errorMessage && (
                    <p role="alert" className="text-xs text-rose-400 text-center mt-3">
                      {errorMessage}
                    </p>
                  )}

                </form>
              )}

            </div>
          </div>

          {/* Side Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Direct Contact Cards */}
            <div className="glass-card rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-6">
              <h3 className="font-space font-bold text-white text-lg border-b border-slate-800 pb-3">
                India Web Development Base
              </h3>

              <div className="space-y-5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Rajkot, India</div>
                    <div className="text-slate-400 mt-0.5">Remote freelance development from Rajkot, India with client delivery across India and international markets.</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <div>
                    <span className="text-slate-400">Email:</span>{' '}
                    <a href="mailto:info@nexifywebworks.in" className="text-indigo-300 hover:underline">info@nexifywebworks.in</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Guarantee */}
            <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex items-center gap-3.5">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
              <p className="text-xs sm:text-sm text-emerald-300 leading-snug">
                <strong>Response SLA:</strong> All inbound technical inquiries receive a direct response from an engineer in under 4 hours.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
