import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FinalCTA from "@/components/sections/FinalCTA";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "LeadWing | AI Chatbots for Tradies",
  description:
    "AI chatbots that help trades and service businesses capture, qualify, and convert leads automatically.",
  openGraph: {
    title: "LeadWing",
    description:
      "Never lose another lead. AI chatbots for trades and service businesses.",
    type: "website"
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section className="bg-white/80">
        <Container className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-brandBlue/10 bg-white p-6 shadow-sm shadow-brandBlue/10">
            <div className="h-1 w-10 rounded-full bg-brandBlue" />
            <p className="text-sm font-semibold uppercase tracking-widest text-brandBlue">
              Problem
            </p>
            <h2 className="mt-3 text-xl font-bold text-ink">
              Spending hours chasing leads and missing opportunities.
            </h2>
          </div>
          <div className="rounded-3xl border border-brandGreen/10 bg-white p-6 shadow-sm shadow-brandGreen/10">
            <div className="h-1 w-10 rounded-full bg-brandGreen" />
            <p className="text-sm font-semibold uppercase tracking-widest text-brandBlue">
              Solution
            </p>
            <h2 className="mt-3 text-xl font-bold text-ink">
              LeadWing captures and qualifies leads automatically.
            </h2>
          </div>
          <div className="rounded-3xl border border-brandOrange/10 bg-white p-6 shadow-sm shadow-brandOrange/10">
            <div className="h-1 w-10 rounded-full bg-brandOrange" />
            <p className="text-sm font-semibold uppercase tracking-widest text-brandBlue">
              Result
            </p>
            <h2 className="mt-3 text-xl font-bold text-ink">
              More booked jobs, less admin, happier clients.
            </h2>
          </div>
        </Container>
      </Section>
      <FinalCTA />
    </>
  );
}
