import React, { useEffect, useRef } from 'react';

interface ModalShellProps {
  onClose: () => void;
  labelledById: string;
  initialFocusRef?: React.RefObject<HTMLButtonElement | null>;
  className?: string;
  children: React.ReactNode;
}

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea',
  'input',
  'select',
  '[tabindex]:not([tabindex="-1"])'
].join(', ');

export const ModalShell: React.FC<ModalShellProps> = ({
  onClose,
  labelledById,
  initialFocusRef,
  className = 'max-w-4xl',
  children
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const fallbackFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    document.body.style.overflow = 'hidden';

    const focusTarget = initialFocusRef?.current ?? fallbackFocusRef.current;
    (
      focusTarget ??
      overlayRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR) ??
      null
    )?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const container = overlayRef.current;
      if (!container) return;
      const focusable: HTMLElement[] = Array.from(
        container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, [onClose, initialFocusRef]);

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledById}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
    >
      <div
        className={`relative w-full ${className} bg-[#0d1322] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col`}
      >
        {children}

        <button
          ref={fallbackFocusRef}
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          tabIndex={-1}
          className="sr-only"
        />
      </div>
    </div>
  );
};
