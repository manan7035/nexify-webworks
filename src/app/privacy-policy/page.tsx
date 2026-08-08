import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL, CONTACT_EMAIL } from "@/src/app/constants";
import { Shield, ArrowLeft, Lock, Mail, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: "Learn how Nexify Webworks collects, uses, and protects your personal information when booking web development and UI/UX design services.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  openGraph: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: "Transparent privacy guidelines for Nexify Webworks freelance web development services.",
    url: `${SITE_URL}/privacy-policy`,
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "August 08, 2026";

  return (
    <div className="bg-[#0b0f17] text-slate-100 min-h-screen pt-12 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Header Title */}
        <div className="space-y-4 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Transparent Client Privacy</span>
          </div>

          <h1 className="font-syne text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-slate-400 text-xs sm:text-sm font-mono">
            Last Updated: <span className="text-indigo-300">{lastUpdated}</span>
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
          
          {/* Section 1 */}
          <section className="space-y-3 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8">
            <div className="flex items-center gap-3 text-white font-bold font-syne text-lg">
              <FileText className="w-5 h-5 text-indigo-400" />
              <h2>1. Introduction & Overview</h2>
            </div>
            <p>
              Welcome to <strong>{SITE_NAME}</strong>. As an independent freelance web development and UI/UX design studio, I value your trust and am committed to respecting your privacy. This policy outlines how information is collected, used, and protected when you visit this website or reach out for project inquiries.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8">
            <div className="flex items-center gap-3 text-white font-bold font-syne text-lg">
              <Lock className="w-5 h-5 text-emerald-400" />
              <h2>2. Information We Collect</h2>
            </div>
            <p>We only collect personal information that you voluntarily provide to us when submitting a contact form or booking a discovery call:</p>
            <ul className="space-y-2 pt-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Contact Information:</strong> Your name, work email address, and project requirements.</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Project Details:</strong> Estimated budget, desired tech stack (React, WordPress, Figma), and project scope.</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Basic Web Analytics:</strong> Anonymous technical browser details (page visit counts, device type) used purely to optimize site performance and loading speeds.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8">
            <div className="flex items-center gap-3 text-white font-bold font-syne text-lg">
              <Shield className="w-5 h-5 text-indigo-400" />
              <h2>3. How Your Information Is Used</h2>
            </div>
            <p>The information collected is used strictly for legitimate project communication purposes:</p>
            <ul className="space-y-2 pt-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>To respond to your inquiries and schedule initial discovery calls.</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>To prepare tailored proposals, scopes of work, and project estimates.</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>To send project progress updates during web engineering and design phases.</span>
              </li>
            </ul>
            <p className="pt-2 text-xs text-emerald-400 font-mono">
              ✓ We NEVER sell, rent, or share your personal data with third-party marketers or advertisers.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8">
            <div className="flex items-center gap-3 text-white font-bold font-syne text-lg">
              <Lock className="w-5 h-5 text-purple-400" />
              <h2>4. Data Protection & Security</h2>
            </div>
            <p>
              Your contact form submissions and emails are processed over secure SSL/TLS encrypted connections. We implement reasonable technical precautions to prevent unauthorized access, data loss, or disclosure.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8">
            <div className="flex items-center gap-3 text-white font-bold font-syne text-lg">
              <Mail className="w-5 h-5 text-indigo-400" />
              <h2>5. Your Rights & Contact Information</h2>
            </div>
            <p>
              You have the right to request access to the personal information you have submitted or ask for your contact details to be updated or deleted from our project inquiry logs.
            </p>
            <p className="pt-2 text-xs sm:text-sm">
              If you have any questions about this Privacy Policy, please reach out via email at:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-400 hover:underline font-mono">
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>

        </div>

        {/* Bottom Contact CTA */}
        <div className="pt-6 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500 font-mono">
          <span>© {new Date().getFullYear()} Nexify Webworks</span>
          <Link href="/contact" className="text-indigo-400 hover:underline">
            Go to Contact Page &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
}
