import type { Metadata } from "next";
import { PortfolioView } from "@/components/PortfolioView";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore the Nexify Webworks portfolio — custom WordPress themes, animated React applications, and high-performance Web3 platforms engineered for growing brands.",
  keywords: [
    "web design portfolio",
    "React web application examples",
    "WordPress themes portfolio",
    "web3 platform development",
    "case studies web developer",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio | Nexify Webworks",
    description:
      "Custom WordPress themes, animated React applications, and high-performance Web3 platforms engineered by Nexify Webworks.",
    type: "website",
    url: "/portfolio",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Nexify Webworks",
    description:
      "Custom WordPress themes, animated React applications, and high-performance Web3 platforms engineered by Nexify Webworks.",
    images: ["/og-image.png"],
  },
};

export default function PortfolioPage() {
  return <PortfolioView />;
}
