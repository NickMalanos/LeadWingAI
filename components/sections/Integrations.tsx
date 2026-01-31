import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const integrations = [
  { title: "Website embed", description: "Drop in a simple widget on any site." },
  { title: "Messenger", description: "Available on request for social leads." },
  { title: "WhatsApp", description: "Available for customers who prefer chat." }
];

export default function Integrations() {
  return (
    <Section>
      <Container>
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate/60">
            Integrations
          </p>
          <h2 className="text-3xl font-extrabold text-ink">
            Meet customers wherever they are.
          </h2>
          <p className="text-slate">
            Start with a website embed and expand to Messenger or WhatsApp when
            you are ready.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {integrations.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
