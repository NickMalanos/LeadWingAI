import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import LeadForm from "@/components/forms/LeadForm";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Contact | LeadWing AI",
  description: "Contact LeadWing AI to book a demo or request a callback."
};

const contactFaq = [
  {
    question: "How fast can we start?",
    answer: "Most tradies go live in 7 to 14 days."
  },
  {
    question: "Do you support after-hours leads?",
    answer: "Yes. The bot runs 24/7 and sends instant alerts."
  },
  {
    question: "Can you integrate with our CRM?",
    answer: "Yes, CRM and calendar integrations are available."
  }
];

export default function ContactPage() {
  return (
    <>
      <Section className="bg-ink text-white">
        <Container className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-sun">
            Contact
          </p>
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Request a callback from LeadWing.
          </h1>
          <p className="max-w-2xl text-lg text-mist/80">
            Tell us about your trade business and we will follow up quickly.
          </p>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-ink">Send us a message</h2>
            <LeadForm />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-ink">FAQ</h3>
            {contactFaq.map((item) => (
              <Card key={item.question}>
                <p className="text-sm font-semibold text-ink">
                  {item.question}
                </p>
                <p className="mt-2 text-sm text-slate">{item.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
