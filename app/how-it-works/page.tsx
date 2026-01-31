import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import HowItWorksSteps from "@/components/sections/HowItWorksSteps";
import FeatureGrid from "@/components/sections/FeatureGrid";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "How It Works | LeadWing AI",
  description:
    "See how LeadWing AI captures, qualifies, and books leads for tradies."
};

export default function HowItWorksPage() {
  return (
    <>
      <Section className="bg-ink text-white">
        <Container className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-sun">
            How it works
          </p>
          <h1 className="text-4xl font-extrabold md:text-5xl">
            A fast setup that keeps your lead pipeline full.
          </h1>
          <p className="max-w-2xl text-lg text-mist/80">
            From first enquiry to confirmed booking, LeadWing handles the admin
            while you stay on the tools.
          </p>
        </Container>
      </Section>
      <HowItWorksSteps />
      <FeatureGrid />
      <Section>
        <Container className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-steel/20 bg-white p-6">
            <h3 className="text-lg font-bold">Lead capture + CRM</h3>
            <p className="mt-2 text-sm text-slate">
              Capture every enquiry and send details straight into your lead
              system.
            </p>
          </div>
          <div className="rounded-2xl border border-steel/20 bg-white p-6">
            <h3 className="text-lg font-bold">Customer support handling</h3>
            <p className="mt-2 text-sm text-slate">
              Answer FAQs instantly so customers stay confident and ready to
              book.
            </p>
          </div>
          <div className="rounded-2xl border border-steel/20 bg-white p-6">
            <h3 className="text-lg font-bold">Appointment setting</h3>
            <p className="mt-2 text-sm text-slate">
              Secure callbacks and job bookings while you are on-site.
            </p>
          </div>
        </Container>
      </Section>
      <FinalCTA />
    </>
  );
}
