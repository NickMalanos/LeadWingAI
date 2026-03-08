"use client";

import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    num: "01",
    label: "Capture",
    subtitle: "24/7 Intake",
    body: "Every enquiry — web, phone, form — is captured and engaged instantly. Whether it\u2019s a public holiday or 2:00\u00A0AM, the response gap is zero.",
  },
  {
    num: "02",
    label: "Qualify",
    subtitle: "Deep Logic Filtering",
    body: "Our AI qualifies scope, budget, and urgency — filtering out the uncommitted so your franchisees only receive leads that are ready to convert.",
  },
  {
    num: "03",
    label: "Route",
    subtitle: "Automated Handoff",
    body: "Qualified data pushed directly to the right franchisee via CRM, SMS, or email. Speed to Lead: seconds. Every time, without exception.",
  },
];

export default function HowItWorksSection() {
  return (
    <AnimatedSection className="bg-navy text-white" id="how-it-works">
      <Container className="space-y-14">
        <div className="animate-on-scroll max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            The Leadwing Engine
          </p>
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            Three steps.{" "}
            <span className="italic text-brandGreen">
              Measured in seconds.
            </span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`animate-on-scroll stagger-${Math.min(i + 1, 4)} rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur`}
            >
              <p className="text-[11px] font-bold uppercase tracking-wider text-brandGreen">
                Step {s.num} — {s.label}
              </p>
              <h3 className="mt-3 text-lg font-bold text-white">
                {s.subtitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
