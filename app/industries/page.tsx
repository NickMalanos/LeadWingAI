import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Industries | LeadWing AI",
  description: "LeadWing AI chatbots for plumbers and service businesses."
};

export default function IndustriesPage() {
  return (
    <>
      <Section className="bg-ink text-white">
        <Container className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-sun">
            Industries
          </p>
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Built for plumbers first. Ready for more trades.
          </h1>
          <p className="max-w-2xl text-lg text-mist/80">
            We start with high-intent service businesses where every call
            matters and expand from there.
          </p>
        </Container>
      </Section>
      <IndustriesGrid />
      <FinalCTA />
    </>
  );
}
