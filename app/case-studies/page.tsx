import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Case Studies | LeadWing AI",
  description: "Real results from LeadWing AI chatbot deployments."
};

export default function CaseStudiesPage() {
  return (
    <>
      <Section className="bg-ink text-white">
        <Container className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-sun">
            Case studies
          </p>
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Real stories from tradies using LeadWing.
          </h1>
          <p className="max-w-2xl text-lg text-mist/80">
            We are collecting customer wins now. Check back soon.
          </p>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-6 md:grid-cols-3">
          {["Plumber - Sydney", "Electrician - Brisbane", "Landscaper - Perth"].map(
            (title) => (
              <Card key={title} className="h-full text-center">
                <p className="text-sm font-semibold text-slate">{title}</p>
                <p className="mt-3 text-sm text-slate">
                  Coming soon. We are preparing detailed results and lead data.
                </p>
              </Card>
            )
          )}
        </Container>
      </Section>
    </>
  );
}
