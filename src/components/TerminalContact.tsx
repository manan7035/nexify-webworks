import React, { useState } from 'react';
import { Terminal, Send, CheckCircle2, MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('executing');
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <div id="contact-terminal" className="py-20 bg-[#070a10] border-t border-slate-800 relative">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-4">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            <span>CONTACT_INITIATE // TERMINAL PROTOCOL</span>
          </div>
          <h2 className="font-space text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build The <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">Future Together</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Submit your technical project requirements directly to our team.
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
                <span className="text-[11px] font-mono text-slate-500">ENCRYPTED 256-BIT</span>
              </div>

              {status === 'success' ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-space text-2xl font-bold text-white">Connection Established</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your inquiry payload has been securely transmitted. A lead engineer from Nexify Studio will respond within 4 business hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Select Scope Chips */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                      Select Project Scope:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableScopes.map((scope) => {
                        const active = selectedScopes.includes(scope);
                        return (
                          <button
                            type="button"
                            key={scope}
                            onClick={() => toggleScope(scope)}
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
                  </div>

                  {/* Name & Email inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Your Name / Organization
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Marcus Thorne"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Electronic Mail
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="m.thorne@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Project Goals & Requirements
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your objectives, target launch date, and key features..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    ></textarea>
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

                </form>
              )}

            </div>
          </div>

          {/* Side Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="glass-card rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-6">
              <h3 className="font-space font-bold text-white text-lg border-b border-slate-800 pb-3">
                Global Headquarters
              </h3>

              <div className="space-y-5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Silicon Valley Station</div>
                    <div className="text-slate-400 mt-0.5">500 University Ave, Suite 400<br />Palo Alto, CA 94301, USA</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <div>
                    <span className="text-slate-400">Electronic Mail:</span>{' '}
                    <a href="mailto:hello@nexifystudio.com" className="text-indigo-300 hover:underline">hello@nexifystudio.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                  <div>
                    <span className="text-slate-400">Direct Line:</span>{' '}
                    <span className="text-slate-200 font-mono">+1 (650) 898-0192</span>
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
