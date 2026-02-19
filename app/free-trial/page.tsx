import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import BookingForm from "@/components/forms/BookingForm";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Book a Free Discovery Call | LeadWing",
  description:
    "Book a free discovery call to see how LeadWing captures leads and reduces admin for your trade business."
};

export default function FreeTrialPage() {
  return (
    <>
      <Section className="bg-white/85">
        <Container className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-brandBlue">
              Book a Free Discovery Call
            </p>
            <h1 className="text-4xl font-extrabold text-ink md:text-5xl">
              See how LeadWing captures leads while you work.
            </h1>
            <p className="text-lg text-slate">
              Tell us a little about your business and we will show you how
              this can work for your team.
            </p>
            <div className="rounded-2xl border border-brandBlue/10 bg-white p-5 text-sm text-slate shadow-sm shadow-brandBlue/10">
              <p className="font-semibold text-ink">What happens next</p>
              <ul className="mt-2 space-y-2">
                <li>We review your lead flow and enquiry channels.</li>
                <li>We walk you through a live discovery call.</li>
                <li>We map the best setup for your team.</li>
              </ul>
            </div>
          </div>
          <div className="rounded-3xl border border-brandBlue/10 bg-white p-6 shadow-lg shadow-brandBlue/10">
            <BookingForm />
          </div>
        </Container>
      </Section>
      <FinalCTA />
    </>
  );
}
