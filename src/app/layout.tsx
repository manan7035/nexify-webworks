import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Nexify Webworks | Rajkot, India Freelance React & WordPress Developer | SEO-Friendly Sites",
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
      <body className="bg-[#0b0f17] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
