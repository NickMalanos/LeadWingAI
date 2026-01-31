import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const industries = [
  {
    title: "Plumbers",
    description: "Capture emergency calls, quotes, and bookings automatically.",
    href: "/industries/plumbers"
  },
  {
    title: "Electricians",
    description: "Qualify job type and urgency, then book onsite visits.",
    href: "/industries"
  },
  {
    title: "Landscapers",
    description: "Turn website visits into site inspection bookings.",
    href: "/industries"
  }
];

export default function IndustriesGrid() {
  return (
    <Section>
      <Container>
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate/60">
            Industries
          </p>
          <h2 className="text-3xl font-extrabold text-ink">
            Built for plumbers now. More trades coming.
          </h2>
          <p className="text-slate">
            LeadWing adapts to your job types, schedules, and customer FAQs.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {industries.map((industry) => (
            <Link key={industry.title} href={industry.href}>
              <Card className="h-full transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-lg font-bold">{industry.title}</h3>
                <p className="mt-2 text-sm text-slate">{industry.description}</p>
                <p className="mt-4 text-sm font-semibold text-ocean">
                  View details →
                </p>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-steel/15 bg-mist p-6 text-sm text-slate">
          More trades are launching soon. Ask us about electricians, roofers,
          HVAC, and home services.
        </div>
      </Container>
    </Section>
  );
}
