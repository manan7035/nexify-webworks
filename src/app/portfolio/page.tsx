import type { Metadata } from "next";
import { PortfolioView } from "@/components/PortfolioView";

export const metadata: Metadata = {
  title: { absolute: "Portfolio — Nexify Webworks" },
  description:
    "Explore the Nexify Webworks portfolio — custom WordPress themes, animated React applications, and high-performance Web3 platforms engineered for growing brands.",
  openGraph: {
    title: "Portfolio — Nexify Webworks",
    description:
      "Custom WordPress themes, animated React applications, and high-performance Web3 platforms engineered by Nexify Webworks.",
    type: "website",
    url: "/portfolio",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Nexify Webworks",
    description:
      "Custom WordPress themes, animated React applications, and high-performance Web3 platforms engineered by Nexify Webworks.",
    images: ["/og-image.png"],
  },
};

export default function PortfolioPage() {
  return <PortfolioView />;
}
