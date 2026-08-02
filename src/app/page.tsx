import type { Metadata } from "next";
import { HomeView } from "@/components/HomeView";

export const metadata: Metadata = {
  title: {
    absolute:
      "Nexify Webworks | Rajkot, India Freelance React & WordPress Developer | SEO-Friendly Sites",
  },
  description:
    "Nexify Webworks builds high-converting React websites, custom WordPress themes, and polished Figma UI/UX designs for growing brands — fast, SEO-friendly, and crafted by a Rajkot, India freelance web developer.",
  keywords: [
    "Rajkot web developer",
    "React website developer",
    "WordPress developer India",
    "Figma UI/UX design",
    "freelance web developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rajkot Freelance Web Developer | Nexify Webworks",
    description:
      "High-converting React websites, WordPress themes, and Figma UI/UX design from a Rajkot, India freelance web developer.",
    type: "website",
    url: "/",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajkot Freelance Web Developer | Nexify Webworks",
    description:
      "High-converting React websites, WordPress themes, and Figma UI/UX design from a Rajkot, India freelance web developer.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return <HomeView />;
}
