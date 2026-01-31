import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const features = [
  {
    title: "Answer FAQs instantly",
    description:
      "Customers get clear answers about pricing, services, and availability 24/7."
  },
  {
    title: "Qualify every job",
    description:
      "Collect the right details upfront so you only chase leads that fit."
  },
  {
    title: "Book appointments",
    description:
      "Lock in a callback or on-site visit while the lead is still hot."
  },
  {
    title: "Send leads straight to you",
    description:
      "Instant SMS and email summaries mean you can act fast."
  }
];

export default function FeatureGrid() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate/60">
            What it does
          </p>
          <h2 className="text-3xl font-extrabold text-ink">
            AI that captures, qualifies, and books — while you work.
          </h2>
          <p className="text-slate">
            No tech skills needed — plug in and start converting leads.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title}>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
