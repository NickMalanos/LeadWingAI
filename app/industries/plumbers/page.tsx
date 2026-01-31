import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Plumbers | LeadWing AI",
  description:
    "AI chatbots for plumbers to capture leads, book jobs, and handle FAQs 24/7."
};

export default function PlumbersPage() {
  return (
    <>
      <Section className="bg-ink text-white">
        <Container className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-sun">
            Plumbers
          </p>
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Capture emergency jobs and quotes without missing a call.
          </h1>
          <p className="max-w-2xl text-lg text-mist/80">
            LeadWing handles the questions, qualifies the job, and books the
            next step so you can stay on the tools.
          </p>
          <Button href="/demo" className="bg-sun text-ink hover:bg-sun/90">
            Book Free Demo
          </Button>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-10 max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate/60">
              Pain points we solve
            </p>
            <h2 className="text-3xl font-extrabold text-ink">
              More leads, fewer admin headaches.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Lead gen that dries up after hours",
              "Booking and scheduling chaos",
              "Constant customer enquiries about pricing or availability",
              "Managing reviews and reputation follow-ups"
            ].map((item) => (
              <Card key={item}>
                <p className="text-sm font-semibold text-slate">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mb-10 max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate/60">
              Exact chatbot flow summary
            </p>
            <h2 className="text-3xl font-extrabold text-ink">
              Three branches that end in a qualified lead.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <h3 className="text-lg font-bold">Opening message</h3>
              <p className="mt-2 text-sm text-slate">
                “Hi! I’m the LeadWing assistant. Are you dealing with an
                emergency, looking to book a job, or have a quick question?”
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-bold">Emergency branch</h3>
              <p className="mt-2 text-sm text-slate">
                Capture urgency, address, and contact details. Confirm someone
                will call ASAP. Lead captured with next-step callback.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-bold">Booking / Quote branch</h3>
              <p className="mt-2 text-sm text-slate">
                Collect job details, preferred time, and budget range. Offer
                quote or on-site booking. Lead captured with time request.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-bold">Quick question branch</h3>
              <p className="mt-2 text-sm text-slate">
                Provide FAQ response, then ask for contact details to follow up
                if needed. Lead captured with clear next step.
              </p>
            </Card>
            <Card className="md:col-span-2">
              <h3 className="text-lg font-bold">Lead captured</h3>
              <p className="mt-2 text-sm text-slate">
                The chatbot sends an SMS + email summary with the customer’s
                details, urgency, and requested time. You respond faster and
                close more jobs.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-10 max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate/60">
              What the plumber sees
            </p>
            <h2 className="text-3xl font-extrabold text-ink">
              Clear SMS summaries, ready to action.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <p className="text-sm font-semibold text-ink">
                SMS: Emergency lead
              </p>
              <p className="mt-3 text-sm text-slate">
                “Burst pipe in Parramatta. Customer: Sam, 0400 111 222. Wants
                help ASAP. Address captured. Call now.”
              </p>
            </Card>
            <Card>
              <p className="text-sm font-semibold text-ink">
                SMS: New job request
              </p>
              <p className="mt-3 text-sm text-slate">
                “Hot water system install. Customer: Jaya, 0400 333 444. Prefers
                Thu 10am. Quote requested. Follow up to confirm.”
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
