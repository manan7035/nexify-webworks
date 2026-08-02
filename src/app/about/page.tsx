import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-3 py-24 text-center">
      <h1 className="text-4xl font-bold text-indigo-500">About</h1>
      <p className="max-w-md text-slate-300">
        Placeholder page — the About view migrates in Phase 3.
      </p>
    </section>
  );
}
