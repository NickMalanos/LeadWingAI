"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const faqs = [
  {
    question: "Do I need tech skills to run this?",
    answer:
      "No. We handle the setup and you can update answers anytime without code."
  },
  {
    question: "Will it replace my phone calls?",
    answer:
      "It captures and qualifies leads, then hands over the important ones so you still control the job."
  },
  {
    question: "Can it handle after-hours leads?",
    answer:
      "Yes, the bot runs 24/7 and sends you instant summaries via SMS and email."
  },
  {
    question: "What if the chatbot gets a question wrong?",
    answer:
      "We build guardrails and a fallback to capture details and request a callback."
  },
  {
    question: "How quickly can I go live?",
    answer:
      "Most tradies are live within 7 to 14 days depending on the workflow."
  },
  {
    question: "Does it work for other trades?",
    answer:
      "Yes, we tailor flows for electricians, landscapers, roofers, and more."
  },
  {
    question: "Can I integrate with my CRM?",
    answer:
      "Yes, CRM and calendar integrations are available on Growth and Pro."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section>
      <Container>
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate/60">
            FAQ
          </p>
          <h2 className="text-3xl font-extrabold text-ink">
            Common questions from tradies.
          </h2>
        </div>
        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <Card key={faq.question} className="cursor-pointer">
              <button
                type="button"
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-sm text-slate">{faq.answer}</p>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
