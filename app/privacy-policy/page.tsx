import type { Metadata } from "next";
import PrivacyContent from "@/components/sections/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | LeadWing",
  description:
    "LeadWing privacy policy — how we collect, use, disclose, and securely store personal information through our AI-powered lead orchestration infrastructure. Last updated 6/03/2026.",
  openGraph: {
    title: "Privacy Policy | LeadWing",
    description:
      "How LeadWing collects, uses, discloses, and secures personal information. Australian Privacy Principles. Last updated 6/03/2026.",
    type: "website"
  }
};

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
