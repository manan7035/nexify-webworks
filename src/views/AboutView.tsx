import React from 'react';
import { NavigationPage } from '../types';
import { TEAM, METHODOLOGY_STEPS } from '../data/mockData';
import { TerminalContact } from '../components/TerminalContact';
import { ShieldCheck, Award, Zap, Code2, Users, ArrowUpRight, Github, Linkedin, Twitter, CheckCircle2 } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: NavigationPage) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      
      {/* Hero Narrative */}
      <section className="py-20 bg-grid-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
              <Users className="w-3.5 h-3.5" />
              <span>ABOUT NEXIFY STUDIO</span>
            </div>

            <h1 className="font-space text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Architecting the <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent">Future of Digital</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Founded by veteran WordPress specialists and React engineers, Nexify Studio is an elite digital craftsmanship unit. We refuse generic templates, slow page loads, and uninspired interfaces.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-800">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="font-space font-extrabold text-3xl sm:text-4xl text-indigo-400">150+</div>
              <div className="text-xs text-slate-400 font-mono mt-1">Global Client Launches</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="font-space font-extrabold text-3xl sm:text-4xl text-emerald-400">99%</div>
              <div className="text-xs text-slate-400 font-mono mt-1">Avg Core Vitals Score</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="font-space font-extrabold text-3xl sm:text-4xl text-purple-400">60 FPS</div>
              <div className="text-xs text-slate-400 font-mono mt-1">Motion Framerate Lock</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="font-space font-extrabold text-3xl sm:text-4xl text-amber-400">4.9/5.0</div>
              <div className="text-xs text-slate-400 font-mono mt-1">Client Satisfaction Rate</div>
            </div>
          </div>

        </div>
      </section>

      {/* The Architects / Team Grid */}
      <section className="py-20 bg-[#0d1322] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider">THE ARCHITECTS</div>
            <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Meet Our <span className="text-indigo-400">Engineering Leads</span>
            </h2>
            <p className="text-slate-400 text-sm">
              Hands-on senior practitioners overseeing every line of code and visual pixel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.id} className="glass-card rounded-3xl border border-slate-800 overflow-hidden group space-y-6 p-6 flex flex-col justify-between">
                
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-700">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1322] via-transparent to-transparent opacity-60"></div>
                  </div>

                  <div>
                    <h3 className="font-space font-bold text-xl text-white">{member.name}</h3>
                    <div className="text-xs font-semibold text-indigo-400 mt-0.5">{member.role}</div>
                    <div className="text-[11px] font-mono text-emerald-400 mt-1">{member.specialty}</div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-800">
                  <div className="grid grid-cols-2 gap-2 text-center">
                    {member.stats.map((s, idx) => (
                      <div key={idx} className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="font-space font-bold text-sm text-white">{s.value}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-4 text-slate-400 pt-2">
                    {member.socials.github && (
                      <a href={member.socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* The Methodology / Four Pillars */}
      <section className="py-20 bg-[#070a10] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">OUR METHODOLOGY</div>
            <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Four Pillars of <span className="text-emerald-400">Execution</span>
            </h2>
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
