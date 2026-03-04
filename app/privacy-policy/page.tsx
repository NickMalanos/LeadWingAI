import type { Metadata } from "next";
import PrivacyContent from "@/components/sections/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | LeadWing",
  description:
    "LeadWing privacy policy — how we collect, use, and protect personal information.",
  openGraph: {
    title: "Privacy Policy | LeadWing",
    description:
      "How LeadWing collects, uses, and protects personal information.",
    type: "website"
  }
};

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
