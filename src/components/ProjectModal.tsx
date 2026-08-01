import React, { useRef } from 'react';
import { Project } from '../types';
import { ModalShell } from './ModalShell';
import { X, ExternalLink, ShieldCheck, Zap, Layers, Calendar, User, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  if (!project) return null;

  return (
    <ModalShell
      onClose={onClose}
      labelledById="project-modal-title"
      initialFocusRef={closeButtonRef}
      className="max-w-4xl"
    >
      {/* Header bar */}
      <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0d1322]/90 backdrop-blur-md border-b border-slate-800">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-950/80 border border-indigo-500/40 text-indigo-400">
            {project.category}
          </span>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">ID: {project.id}</span>
        </div>

        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close Case Study Modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto custom-scrollbar">
          
          {/* Main Visual */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1322] via-transparent to-transparent opacity-80"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <h2 id="project-modal-title" className="font-space text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-slate-300 text-sm mt-1">{project.subtitle}</p>
            </div>
          </div>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <div className="font-space font-extrabold text-xl sm:text-2xl text-emerald-400">{m.value}</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800/80 text-xs">
            <div>
              <span className="text-slate-400 block">CLIENT</span>
              <span className="font-semibold text-slate-200 mt-0.5 block">{project.client}</span>
            </div>
            <div>
              <span className="text-slate-400 block">YEAR</span>
              <span className="font-semibold text-slate-200 mt-0.5 block">{project.year}</span>
            </div>
            <div>
              <span className="text-slate-400 block">ROLE</span>
              <span className="font-semibold text-slate-200 mt-0.5 block">Full Architecture</span>
            </div>
            <div>
              <span className="text-slate-400 block">DELIVERY</span>
              <span className="font-semibold text-emerald-400 mt-0.5 block">Completed</span>
            </div>
          </div>

          {/* Narrative Challenge & Solution */}
          <div className="space-y-6">
            <div>
              <h3 className="font-space text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                The Challenge
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
                {project.challenge || project.description}
              </p>
            </div>

            <div>
              <h3 className="font-space text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                The Solution & Architecture
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
                {project.solution || 'We built a bespoke, sub-second web architecture with customized animation components and clean backend API endpoints.'}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-space text-sm font-semibold text-white uppercase tracking-wider mb-3">Tech Stack & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-indigo-300 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Secondary Visuals if available */}
          {project.secondaryImages && project.secondaryImages.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.secondaryImages.map((img, idx) => (
                <div key={idx} className="aspect-video rounded-xl overflow-hidden border border-slate-800">
                  <img src={img} alt={`${project.title} detail ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20"
              >
                <span>Visit Live Application ({project.liveUrl.replace('https://', '').replace('/', '')})</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <p className="text-xs text-slate-400">
                Need a similar architecture built for your platform?
              </p>
            )}

            <button
              onClick={() => {
                onInquire(project.title);
                onClose();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>Build Similar Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </button>
        </div>

      </div>
    </ModalShell>
  );
};
