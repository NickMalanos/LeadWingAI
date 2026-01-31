import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const tiers = [
  {
    name: "Starter",
    price: "from $X",
    description: "Lead capture + FAQ handling",
    features: [
      "Website chatbot setup",
      "FAQs and job qualification",
      "Lead summary via SMS/email"
    ]
  },
  {
    name: "Growth",
    price: "from $X",
    description: "Lead capture + appointment setting",
    features: [
      "Everything in Starter",
      "Appointment booking workflow",
      "Follow-up automations"
    ],
    highlight: true
  },
  {
    name: "Pro",
    price: "from $X",
    description: "Multi-channel + CRM integration",
    features: [
      "Messenger or WhatsApp add-on",
      "CRM + calendar integrations",
      "Custom reporting dashboard"
    ]
  }
];

export default function PricingTable() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate/60">
            Pricing
          </p>
          <h2 className="text-3xl font-extrabold text-ink">
            Simple packages that scale with your jobs.
          </h2>
          <p className="text-slate">
            Start lean, upgrade when your call volume grows.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => {
            const isHighlight = tier.highlight;
            return (
              <Card
                key={tier.name}
                className={
                  isHighlight
                    ? "border-ink/30 bg-ink text-white"
                    : "border-steel/20 bg-white"
                }
              >
                <p
                  className={`text-sm font-semibold uppercase tracking-widest ${
                    isHighlight ? "text-sun" : "text-slate/60"
                  }`}
                >
                  {tier.name}
                </p>
                <p className="mt-2 text-3xl font-extrabold">{tier.price}</p>
                <p className={`mt-2 text-sm ${isHighlight ? "text-mist/80" : "text-slate"}`}>
                  {tier.description}
                </p>
              <ul className="mt-4 space-y-2 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
                <Button
                  href="/demo"
                  className={`mt-6 w-full ${
                    isHighlight ? "bg-sun text-ink" : ""
                  }`}
                  variant={isHighlight ? "primary" : "secondary"}
                >
                  Book Free Demo
                </Button>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
