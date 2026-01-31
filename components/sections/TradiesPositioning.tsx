import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const points = [
  {
    title: "Built for tradies",
    description:
      "We design conversations around real job types, call-outs, and quoting."
  },
  {
    title: "Specialists beat generalists",
    description:
      "Generic bots miss the details. LeadWing focuses on service businesses."
  },
  {
    title: "Reliable and tradie-friendly",
    description:
      "Clear prompts, fast handoff, and zero fluff — just leads ready to go."
  }
];

export default function TradiesPositioning() {
  return (
    <Section>
      <Container>
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate/60">
            Built for tradies
          </p>
          <h2 className="text-3xl font-extrabold text-ink">
            Specialists who understand real jobs.
          </h2>
          <p className="text-slate">
            LeadWing is made for plumbers, electricians, landscapers, and
            service pros who need leads captured without extra admin.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {points.map((point) => (
            <Card key={point.title}>
              <h3 className="text-lg font-bold">{point.title}</h3>
              <p className="mt-2 text-sm text-slate">{point.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
