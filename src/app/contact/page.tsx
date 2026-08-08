import type { Metadata } from "next";
import { ContactView } from "@/components/ContactView";

export const metadata: Metadata = {
  title: "Hire Freelance React, WordPress (Elementor & ACF) & UI/UX Developer — Contact",
  description:
    "Hire Nexify Webworks for website development using React, custom website design in WordPress with Elementor & ACF, or Figma UI/UX design. Get a detailed proposal in under 4 hours.",
  keywords: [
    "hire React developer",
    "hire WordPress Elementor developer",
    "hire ACF developer",
    "freelance UI UX designer contact",
    "website development quote",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Hire Freelance React, WordPress & UI/UX Developer | Nexify Webworks",
    description:
      "Send your project goals for React development, WordPress Elementor & ACF design, or Figma UI/UX design. SLA under 4 hours.",
    type: "website",
    url: "/contact",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Freelance React, WordPress & UI/UX Developer | Nexify Webworks",
    description:
      "Send your project goals for React development, WordPress Elementor & ACF design, or Figma UI/UX design. SLA under 4 hours.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return <ContactView />;
}
