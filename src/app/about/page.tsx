import type { Metadata } from "next";
import { AboutView } from "@/components/AboutView";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Nexify Webworks — a Rajkot, India freelance web developer with 3+ years of experience building fast, conversion-focused React, WordPress, and Figma websites for clients in India and worldwide.",
  openGraph: {
    title: "About | Nexify Webworks",
    description:
      "The story, stats, and four-pillar methodology behind Nexify Webworks, a Rajkot, India freelance web developer.",
    type: "website",
    url: "/about",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Nexify Webworks",
    description:
      "The story, stats, and four-pillar methodology behind Nexify Webworks, a Rajkot, India freelance web developer.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
