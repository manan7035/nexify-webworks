import type { Metadata } from "next";
import { InsightsView } from "@/components/InsightsView";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Deep dives from the Nexify Webworks engineering team on web performance, React architecture, WordPress optimization, and luxury UI/UX motion.",
  keywords: [
    "web performance blog",
    "React architecture",
    "WordPress optimization",
    "UI/UX design insights",
    "web development blog",
  ],
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Insights | Nexify Webworks",
    description:
      "Engineering blog covering WebGL performance, sub-second WordPress architectures, React 19 micro-interactions, and UI/UX design.",
    type: "website",
    url: "/insights",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | Nexify Webworks",
    description:
      "Engineering blog covering WebGL performance, sub-second WordPress architectures, React 19 micro-interactions, and UI/UX design.",
    images: ["/og-image.png"],
  },
};

export default function InsightsPage() {
  return <InsightsView />;
}
