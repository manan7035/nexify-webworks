import type { Metadata } from "next";
import { AboutView } from "@/components/AboutView";

export const metadata: Metadata = {
  title: "About — Freelance React, WordPress (Elementor & ACF) & UI/UX Specialist",
  description:
    "Learn about Nexify Webworks — a freelance web engineering studio specializing in website development using React, custom WordPress website design with Elementor & ACF, and Figma UI/UX design.",
  keywords: [
    "about Nexify Webworks",
    "freelance React developer",
    "WordPress Elementor developer",
    "ACF custom fields expert",
    "UI UX designer profile",
    "web development methodology",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — Freelance React, WordPress & UI/UX Specialist | Nexify Webworks",
    description:
      "Meet Nexify Webworks: Expert website development using React, custom WordPress design (Elementor & ACF), and Figma UI/UX design.",
    type: "website",
    url: "/about",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Freelance React, WordPress & UI/UX Specialist | Nexify Webworks",
    description:
      "Meet Nexify Webworks: Expert website development using React, custom WordPress design (Elementor & ACF), and Figma UI/UX design.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
