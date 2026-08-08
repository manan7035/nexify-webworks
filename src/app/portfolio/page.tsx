import type { Metadata } from "next";
import { PortfolioView } from "@/components/PortfolioView";

export const metadata: Metadata = {
  title: "Portfolio — React Applications, WordPress Elementor ACF & UI/UX Projects",
  description:
    "Browse our web design portfolio featuring website development using React, custom WordPress theme design with Elementor Pro & ACF, and interactive Figma UI/UX prototypes.",
  keywords: [
    "web design portfolio",
    "React website development portfolio",
    "WordPress Elementor ACF examples",
    "Figma UI UX design portfolio",
    "freelance developer case studies",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio — React, WordPress (Elementor & ACF) & UI/UX Projects",
    description:
      "Explore client case studies featuring React website development, Elementor WordPress themes, and Figma UI/UX design.",
    type: "website",
    url: "/portfolio",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — React, WordPress (Elementor & ACF) & UI/UX Projects",
    description:
      "Explore client case studies featuring React website development, Elementor WordPress themes, and Figma UI/UX design.",
    images: ["/og-image.png"],
  },
};

export default function PortfolioPage() {
  return <PortfolioView />;
}
