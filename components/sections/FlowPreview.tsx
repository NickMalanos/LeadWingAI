import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const paths = [
  {
    title: "Emergency",
    steps: ["Ask location + urgency", "Capture contact", "Trigger SMS alert"]
  },
  {
    title: "Book job / Quote",
    steps: ["Collect job details", "Preferred time", "Confirm callback"]
  },
  {
    title: "Quick question",
    steps: ["Provide FAQ answer", "Offer callback", "Capture details"]
  }
];

export default function FlowPreview() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate/60">
            Plumber bot flow preview
          </p>
          <h2 className="text-3xl font-extrabold text-ink">
            Three entry paths. One clean lead summary.
          </h2>
          <p className="text-slate">
            The chatbot routes customers fast and sends you a full SMS + email
            summary so you can act instantly.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {paths.map((path) => (
            <Card key={path.title}>
              <h3 className="text-lg font-bold">{path.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate">
                {path.steps.map((step) => (
                  <li key={step}>• {step}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-steel/15 bg-mist p-6">
          <p className="text-sm font-semibold text-slate">
            What the plumber receives
          </p>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-white p-4 text-sm text-slate shadow-sm">
              <p className="font-semibold text-ink">SMS: Emergency lead</p>
              <p className="mt-2">
                “Burst pipe in Parramatta. Customer: Sam, 0400 111 222. Wants
                help ASAP. Address captured.”
              </p>
            </div>
            <div className="rounded-xl bg-white p-4 text-sm text-slate shadow-sm">
              <p className="font-semibold text-ink">SMS: New job request</p>
              <p className="mt-2">
                “Hot water system install. Customer: Jaya, 0400 333 444. Prefers
                Thu 10am. Follow up to confirm quote.”
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
