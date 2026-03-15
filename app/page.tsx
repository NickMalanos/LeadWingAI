import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import DemoSection from "@/components/sections/DemoSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import EnterpriseSection from "@/components/sections/EnterpriseSection";

export const metadata: Metadata = {
  title: "Leadwing | Lead Infrastructure for Trade Networks",
  description:
    "Lead infrastructure for trade networks losing jobs after hours. Every lead captured, qualified, and routed in under 90 seconds. 24/7.",
  openGraph: {
    title: "Leadwing",
    description:
      "Lead infrastructure for trade networks losing jobs after hours. Every lead. Every location. Responded to in under 90 seconds.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <DemoSection />
      <HowItWorksSection />
      <EnterpriseSection />
    </>
  );
}
