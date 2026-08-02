"use client";

import React, { useState } from 'react';
import { ModalShell } from '@/components/ModalShell';

export const ModalShellDemo: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-24">
      <h1 id="demo-title" className="text-3xl font-bold text-white">
        ModalShell Demo
      </h1>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 transition-colors cursor-pointer"
      >
        Open Modal
      </button>

      {open && (
        <ModalShell onClose={() => setOpen(false)} labelledById="demo-title">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Demo Dialog</h2>
            <p className="text-slate-300 mb-6">
              This dialog verifies the focus trap, Escape-to-close, and focus
              restore behavior of ModalShell inside the App Router. Press Tab to
              cycle focus and Escape to close.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </ModalShell>
      )}
    </div>
  );
};
