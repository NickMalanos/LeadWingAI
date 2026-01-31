import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const pains = [
  {
    title: "Missed calls = missed jobs",
    description:
      "If you're on-site, every unanswered call is money left on the table."
  },
  {
    title: "After-hours leads go cold",
    description:
      "Customers want answers now. Waiting until morning means losing the job."
  },
  {
    title: "Admin eats your week",
    description:
      "Chasing forms, quoting, and booking calls takes time away from real work."
  }
];

export default function PainPoints() {
  return (
    <Section>
      <Container>
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate/60">
            The pain
          </p>
          <h2 className="text-3xl font-extrabold text-ink">
            Leads are calling. You’re on the tools.
          </h2>
          <p className="text-slate">
            Tradies lose jobs every day because enquiries go unanswered and
            follow-ups slip. LeadWing keeps every lead warm and moving.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pains.map((pain) => (
            <Card key={pain.title}>
              <h3 className="text-lg font-bold">{pain.title}</h3>
              <p className="mt-2 text-sm text-slate">{pain.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
