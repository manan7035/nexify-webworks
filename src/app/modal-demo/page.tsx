import type { Metadata } from "next";
import { ModalShellDemo } from "@/components/ModalShellDemo";

export const metadata: Metadata = {
  title: "Modal Demo",
  description:
    "Interactive component demo page for the Nexify Webworks modal system. This page is excluded from search engine indexes.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ModalDemoPage() {
  return <ModalShellDemo />;
}
