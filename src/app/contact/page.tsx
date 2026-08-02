import type { Metadata } from "next";
import { ContactView } from "@/components/ContactView";

export const metadata: Metadata = {
  title: { absolute: "Contact — Nexify Webworks" },
  description:
    "Contact Nexify Webworks — Rajkot, India freelance React & WordPress developer. Send your project goals and get a personal response within 4 business hours.",
  openGraph: {
    title: "Contact — Nexify Webworks",
    description:
      "Send your project goals to Nexify Webworks, a Rajkot, India freelance web developer. Response SLA under 4 hours.",
    type: "website",
    url: "/contact",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Nexify Webworks",
    description:
      "Send your project goals to Nexify Webworks, a Rajkot, India freelance web developer. Response SLA under 4 hours.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return <ContactView />;
}
