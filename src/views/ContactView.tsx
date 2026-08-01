import React from 'react';
import { TerminalContact } from '../components/TerminalContact';
import { MapPin, Globe, Clock, ShieldCheck, Mail, Phone, ExternalLink } from 'lucide-react';

interface ContactViewProps {
  prefilledScope?: string;
  prefilledCost?: number;
}

export const ContactView: React.FC<ContactViewProps> = ({ prefilledScope, prefilledCost }) => {
  return (
    <div className="space-y-0">
      
      {/* Terminal Contact Main Form */}
      <TerminalContact prefilledScope={prefilledScope} prefilledCost={prefilledCost} />

      {/* Headquarters Location & Map Preview */}
      <section className="py-16 bg-[#0d1322] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider">INDIA WEB DEVELOPMENT STUDIO</div>
            <h2 className="font-space text-3xl font-extrabold text-white">
              Remote Web Development from <span className="text-indigo-400">Rajkot, India</span>
            </h2>
            <p className="text-slate-400 text-sm">
              A freelance developer based in Rajkot, India, delivering custom websites and digital products for clients across India and international markets.
            </p>
          </div>

          {/* Map Image Graphic */}
          <div className="glass-card rounded-3xl border border-slate-800 p-4 relative overflow-hidden group">
            <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden relative border border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=80"
                alt="Rajkot freelance developer location image"
                className="w-full h-full object-cover filter brightness-75 contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1322] via-[#0d1322]/40 to-transparent"></div>

              {/* Pin Callout */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950/90 border border-indigo-500/80 p-4 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/50 text-indigo-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-indigo-400 animate-bounce" />
                </div>
                <div>
                  <div className="font-space font-bold text-white text-sm">Rajkot, India</div>
                  <div className="text-[11px] text-slate-300 font-mono">Remote freelance development with local Rajkot delivery.</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
