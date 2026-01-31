import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import PainPoints from "@/components/sections/PainPoints";
import FeatureGrid from "@/components/sections/FeatureGrid";
import AttackPlan from "@/components/sections/AttackPlan";
import TradiesPositioning from "@/components/sections/TradiesPositioning";
import FlowPreview from "@/components/sections/FlowPreview";
import Integrations from "@/components/sections/Integrations";
import PricingTable from "@/components/sections/PricingTable";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "LeadWing AI | AI Chatbots for Tradies",
  description:
    "Capture, qualify, and convert leads automatically with LeadWing AI — built for Australian tradies.",
  openGraph: {
    title: "LeadWing AI",
    description:
      "Never lose another lead. AI chatbots for plumbers and service businesses.",
    type: "website"
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PainPoints />
      <FeatureGrid />
      <AttackPlan />
      <TradiesPositioning />
      <FlowPreview />
      <Integrations />
      <PricingTable />
      <FAQAccordion />
      <FinalCTA />
    </>
  );
}
