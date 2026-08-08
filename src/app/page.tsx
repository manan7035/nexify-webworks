import type { Metadata } from "next";
import { HomeView } from "@/components/HomeView";

export const metadata: Metadata = {
  title: {
    absolute:
      "Website Development using React, WordPress Design (Elementor & ACF) & UI/UX Design | Nexify Webworks",
  },
  description:
    "Nexify Webworks delivers high-ranking website development using React, custom website design in WordPress with Elementor & ACF (Advanced Custom Fields), and Figma UI/UX design. Boost your freelance business with fast, SEO-optimized websites.",
  keywords: [
    "website development using React",
    "website design in WordPress",
    "website design using Elementor",
    "ACF WordPress developer",
    "Advanced Custom Fields",
    "UI UX design",
    "freelance web developer",
    "SEO optimized website",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "React, WordPress (Elementor & ACF) & UI/UX Web Design | Nexify Webworks",
    description:
      "High-converting website development using React, custom WordPress design (Elementor & ACF), and Figma UI/UX design.",
    type: "website",
    url: "/",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "React, WordPress (Elementor & ACF) & UI/UX Web Design | Nexify Webworks",
    description:
      "High-converting website development using React, custom WordPress design (Elementor & ACF), and Figma UI/UX design.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return <HomeView />;
}
