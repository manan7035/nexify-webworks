import type { Metadata } from "next";
import { HomeView } from "@/components/HomeView";

export const metadata: Metadata = {
  title: {
    absolute:
      "Website Developer & WordPress Master Agency | Budget-Friendly Website Design in India | Freelance React JS & Next.js",
  },
  description:
    "Hire an expert freelance React JS & Next.js website developer and WordPress master agency. Delivering budget-friendly website design in India, custom theme development (Elementor Pro & ACF), sub-second page loads, and top Google SEO rankings for global businesses.",
  keywords: [
    "freelance react js developer",
    "freelance nextjs developer",
    "freelance react developer",
    "freelance react next.js",
    "website developer",
    "website design in india",
    "budget friendly website development",
    "custom theme development",
    "custom wordpress theme development",
    "wordpress master agency",
    "website development using React",
    "website design in WordPress",
    "website design using Elementor",
    "ACF WordPress developer",
    "UI UX design",
    "SEO optimized website",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Website Developer & WordPress Master Agency | Budget-Friendly Website Design in India",
    description:
      "Hire an expert freelance React JS & Next.js website developer and WordPress master agency. Delivering budget-friendly website design in India, custom theme development, and sub-second Google Core Web Vitals.",
    type: "website",
    url: "/",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Developer & WordPress Master Agency | Budget-Friendly Website Design in India",
    description:
      "Hire an expert freelance React JS & Next.js website developer and WordPress master agency. Delivering budget-friendly website design in India, custom theme development, and sub-second Google Core Web Vitals.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return <HomeView />;
}
