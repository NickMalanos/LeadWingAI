import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <Section className="bg-ink text-white">
      <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-sun">
            Ready to capture more leads?
          </p>
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Book a free demo and see LeadWing in action.
          </h2>
          <p className="text-mist/80">
            We will map your flow, connect your lead channels, and launch your
            tradie-ready chatbot fast.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button href="/demo" className="bg-sun text-ink hover:bg-sun/90">
            Book Free Demo
          </Button>
          <Button href="/contact" variant="secondary">
            Request a Callback
          </Button>
        </div>
      </Container>
    </Section>
  );
}
