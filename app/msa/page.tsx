import type { Metadata } from "next";
import MSAContent from "@/components/sections/MSAContent";

export const metadata: Metadata = {
  title: "Master Services Agreement | LeadWing",
  description:
    "LeadWing Master Services Agreement — terms governing our AI-powered customer engagement services.",
  openGraph: {
    title: "Master Services Agreement | LeadWing",
    description:
      "Terms governing LeadWing's AI-powered customer engagement services.",
    type: "website"
  }
};

export default function MSAPage() {
  return <MSAContent />;
}
