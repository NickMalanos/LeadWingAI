import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <Section className="bg-brandBlue text-white" id="book">
      <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-brandOrange">
            Ready to capture more leads
          </p>
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Book a Free Trial and stop missing enquiries.
          </h2>
          <p className="text-mist/90">
            We will set up your chatbot and make sure it captures leads 24/7.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button
            href="/#book"
            className="bg-brandOrange text-ink hover:bg-brandOrange/90 border border-brandOrange"
          >
            Book a Free Trial
          </Button>
        </div>
      </Container>
    </Section>
  );
}
