import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import BookingForm from "@/components/forms/BookingForm";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Book a Demo | LeadWing AI",
  description: "Book a free demo of LeadWing AI for your trade business."
};

export default function DemoPage() {
  return (
    <>
      <Section className="bg-ink text-white">
        <Container className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-sun">
            Book a demo
          </p>
          <h1 className="text-4xl font-extrabold md:text-5xl">
            See how LeadWing captures leads while you work.
          </h1>
          <p className="max-w-2xl text-lg text-mist/80">
            Tell us about your trade and we will build a tailored demo flow.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-ink">Book your free demo</h2>
            <BookingForm />
          </div>
          <Card className="h-fit">
            <h3 className="text-lg font-bold">What happens next</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate">
              <li>• We review your lead flow and current enquiry channels.</li>
              <li>• We build a tradie-ready chatbot flow for your trade.</li>
              <li>• You get a walkthrough demo within 1 business day.</li>
            </ul>
            <div className="mt-6 rounded-xl bg-mist p-4 text-sm text-slate">
              Prefer social? DM “DEMO” and we will follow up fast.
            </div>
          </Card>
        </Container>
      </Section>

      <Section className="bg-white" id="live-demo">
        <Container className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate/60">
            Live demo preview
          </p>
          <h2 className="text-3xl font-extrabold text-ink">
            Watch a lead get captured in under 60 seconds.
          </h2>
          <p className="max-w-2xl text-slate">
            We will show you the full chat flow, qualification questions, and
            the SMS summary you receive.
          </p>
          <div className="rounded-2xl border border-dashed border-steel/30 bg-mist p-8 text-center text-sm text-slate">
            Live demo video placeholder.
          </div>
        </Container>
      </Section>
    </>
  );
}
