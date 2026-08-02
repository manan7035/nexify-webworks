import type { Metadata } from "next";
import { ModalShellDemo } from "@/components/ModalShellDemo";

export const metadata: Metadata = {
  title: "Modal Demo",
};

export default function ModalDemoPage() {
  return <ModalShellDemo />;
}
