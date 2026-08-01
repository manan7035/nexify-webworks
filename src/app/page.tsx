import { SITE_NAME } from "@/src/app/constants";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold text-indigo-500">{SITE_NAME}</h1>
      <p className="text-slate-300">
        Next.js (App Router) placeholder — Phase 1 of the Vite → Next.js
        migration.
      </p>
    </main>
  );
}
