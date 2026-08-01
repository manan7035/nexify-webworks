import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-3 py-24 text-center">
      <h1 className="text-4xl font-bold text-indigo-500">Contact</h1>
      <p className="max-w-md text-slate-300">
        Placeholder page — the Contact view (with the terminal form) migrates in
        Phase 4.
      </p>
    </section>
  );
}
