"use client";

import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const features = [
  {
    title: "24/7 AI Receptionist",
    description:
      "Your chatbot answers enquiries instantly — even at midnight. No leads slip through.",
    color: "border-brandBlue/10 shadow-brandBlue/10"
  },
  {
    title: "Website and Instagram",
    description:
      "One chatbot across your website and Instagram. Meet your customers where they are.",
    color: "border-brandGreen/10 shadow-brandGreen/10"
  },
  {
    title: "Less Admin, More Jobs",
    description:
      "Leads are qualified and organised automatically. You spend time on the work, not paperwork.",
    color: "border-brandOrange/10 shadow-brandOrange/10"
  },
  {
    title: "Smart Lead Qualification",
    description:
      "Your chatbot asks the right questions — job type, location, urgency — before you pick up.",
    color: "border-brandBlue/10 shadow-brandBlue/10"
  },
  {
    title: "Instant Notifications",
    description:
      "Get notified by SMS or email as soon as a lead is captured. Never miss an opportunity.",
    color: "border-brandGreen/10 shadow-brandGreen/10"
  },
  {
    title: "Simple Setup",
    description:
      "We build and install everything. No tech skills needed. You are up and running in days.",
    color: "border-brandOrange/10 shadow-brandOrange/10"
  }
];

export default function Features() {
  return (
    <AnimatedSection className="bg-mist/50">
      <Container className="space-y-10">
        <div className="animate-on-scroll max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-brandBlue">
            Features
          </p>
          <h2 className="text-3xl font-extrabold text-ink md:text-4xl">
            Everything your business needs to capture more leads.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`animate-on-scroll stagger-${Math.min(i + 1, 4)} rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brandBlue/20 cursor-default ${feature.color}`}
            >
              <p className="font-bold text-ink">{feature.title}</p>
              <p className="mt-2 text-sm text-slate">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
