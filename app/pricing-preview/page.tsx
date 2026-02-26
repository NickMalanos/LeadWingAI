import type { Metadata } from "next";
import PricingContent from "@/components/sections/PricingContent";

export const metadata: Metadata = {
  title: "Pricing Preview | LeadWing",
  description:
    "Preview LeadWing pricing tiers for local service businesses — AI chatbot plans that capture leads 24/7.",
  robots: {
    index: false,
    follow: false
  },
  openGraph: {
    title: "Pricing Preview | LeadWing",
    description:
      "Pricing tiers built for local service businesses that want more booked jobs and less admin.",
    type: "website"
  }
};

export default function PricingPreviewPage() {
  return <PricingContent />;
}
