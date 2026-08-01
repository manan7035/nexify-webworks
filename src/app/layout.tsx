import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL ?? "https://nexify-webworks.vercel.app"
  ),
  title: {
    template: "%s | Nexify Webworks",
    default:
      "Nexify Webworks | Rajkot, India Freelance React & WordPress Developer | SEO-Friendly Sites",
  },
  description:
    "Nexify Webworks is a Rajkot, India freelance web developer building SEO-friendly React, Elementor WordPress, and Figma websites for local and international clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0b0f17] text-slate-100 antialiased min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:left-4 focus:top-4 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-indigo-600 focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main
          id="main-content"
          tabIndex={-1}
          className="flex-grow flex flex-col"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
