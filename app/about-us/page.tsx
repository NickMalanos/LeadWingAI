import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About Us | LeadWing",
  description:
    "Our mission is to help trades and service businesses capture every lead and grow with less admin.",
  openGraph: {
    title: "About Us | LeadWing",
    description:
      "LeadWing helps trades and service businesses capture every lead and grow with less admin.",
    type: "website"
  }
};

export default function AboutUsPage() {
  return (
    <>
      <Section className="bg-white/85">
        <Container className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-brandBlue">
            About Us
          </p>
          <h1 className="text-4xl font-extrabold text-ink md:text-5xl">
            Our mission is{" "}
            <span className="text-brandBlue">simple</span>.
          </h1>
          <div className="max-w-2xl space-y-4 text-lg text-slate">
            <p>
              Help trades and service businesses capture every enquiry and
              convert more leads into booked jobs.
            </p>
            <p>
              LeadWing builds AI chatbots that answer questions, qualify leads,
              and reduce admin. You spend more time on the tools and less time
              chasing paperwork.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-slate md:grid-cols-3">
            <div className="rounded-2xl border border-brandBlue/10 bg-white p-4 shadow-sm shadow-brandBlue/10">
              <p className="font-semibold text-ink">Simple</p>
              <p>No tech skills needed. We set it up for you.</p>
            </div>
            <div className="rounded-2xl border border-brandGreen/10 bg-white p-4 shadow-sm shadow-brandGreen/10">
              <p className="font-semibold text-ink">Efficient</p>
              <p>Every lead is captured and followed up 24/7.</p>
            </div>
            <div className="rounded-2xl border border-brandOrange/10 bg-white p-4 shadow-sm shadow-brandOrange/10">
              <p className="font-semibold text-ink">Reliable</p>
              <p>Built for small businesses that rely on steady work.</p>
            </div>
          </div>
        </Container>
      </Section>
      <FinalCTA />
    </>
  );
}
