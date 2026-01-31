import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const steps = [
  {
    title: "Connect your channels",
    description:
      "We add LeadWing to your website and set up the intake flow for your trade."
  },
  {
    title: "Capture and qualify",
    description:
      "The bot asks the right questions, filters serious leads, and books the job."
  },
  {
    title: "Get instant handoff",
    description:
      "You receive SMS + email summaries so you can respond faster than competitors."
  }
];

export default function HowItWorksSteps() {
  return (
    <Section>
      <Container>
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate/60">
            How it works
          </p>
          <h2 className="text-3xl font-extrabold text-ink">
            A simple 3-step setup for real-world trades.
          </h2>
          <p className="text-slate">
            No tech skills needed — plug in and start converting leads.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title}>
              <p className="text-sm font-semibold text-slate/60">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-slate">{step.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
