import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const pillars = [
  {
    title: "Simplicity",
    description: "No tech skills needed — plug in and start converting leads."
  },
  {
    title: "Efficiency",
    description: "Automate follow-ups and capture every enquiry."
  },
  {
    title: "Trust",
    description: "Reliable, tradie-friendly conversations that feel human."
  },
  {
    title: "Growth",
    description: "Turn visitors into paying customers with fast handoffs."
  }
];

export default function AttackPlan() {
  return (
    <Section className="bg-mist">
      <Container>
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate/60">
            Attack plan
          </p>
          <h2 className="text-3xl font-extrabold text-ink">
            The LeadWing framework for tradie growth.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <Card key={pillar.title}>
              <h3 className="text-lg font-bold">{pillar.title}</h3>
              <p className="mt-2 text-sm text-slate">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
