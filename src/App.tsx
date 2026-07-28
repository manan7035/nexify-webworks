import React, { useState } from 'react';
import { NavigationPage, Project } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { PortfolioView } from './views/PortfolioView';
import { InsightsView } from './views/InsightsView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // State passed from Budget Estimator to Contact Form
  const [prefilledScope, setPrefilledScope] = useState<string | undefined>(undefined);
  const [prefilledCost, setPrefilledCost] = useState<number | undefined>(undefined);

  const handleNavigate = (page: NavigationPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLaunchCalculation = (summary: {
    platform: string;
    features: string[];
    timelineWeeks: number;
    estimatedCost: number;
  }) => {
    setPrefilledScope(summary.platform);
    setPrefilledCost(summary.estimatedCost);
    setCurrentPage('contact');
    
    setTimeout(() => {
      const el = document.getElementById('contact-terminal');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleInquireFromModal = (projectName: string) => {
    setPrefilledScope(`Architecture for ${projectName}`);
    setCurrentPage('contact');
    setTimeout(() => {
      const el = document.getElementById('contact-terminal');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-['Outfit',sans-serif] selection:bg-indigo-500 selection:text-white">
      
      {/* Top Glass Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => {
          setCurrentPage('contact');
          setTimeout(() => {
            const el = document.getElementById('contact-terminal');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      />

      {/* Main Dynamic View Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectProject={(project) => setSelectedProject(project)}
            onLaunchCalculation={handleLaunchCalculation}
            prefilledScope={prefilledScope}
            prefilledCost={prefilledCost}
          />
        )}

        {currentPage === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioView
            onSelectProject={(project) => setSelectedProject(project)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'insights' && (
          <InsightsView onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactView
            prefilledScope={prefilledScope}
            prefilledCost={prefilledCost}
          />
        )}
      </main>

      {/* Project Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={handleInquireFromModal}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
