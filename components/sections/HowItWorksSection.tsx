"use client";

import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    num: "01",
    label: "Capture",
    subtitle: "Always-On Intake",
    body: "Every enquiry \u2014 web, phone, form, after-hours \u2014 is captured and engaged instantly. Whether it\u2019s a public holiday or 2:00\u00A0AM, the Response Gap is zero. Your network never misses another lead.",
  },
  {
    num: "02",
    label: "Qualify",
    subtitle: "Intelligent Filtering",
    body: "Our AI qualifies scope, budget, and urgency in real time \u2014 filtering out tyre-kickers so your franchisees only receive leads that are ready to convert. Lead quality over lead quantity, built into the infrastructure.",
  },
  {
    num: "03",
    label: "Route",
    subtitle: "Automated Handoff",
    body: "Qualified lead data pushed directly to the right franchisee via CRM, SMS, or email \u2014 territory-matched, automatically. Speed to Lead: seconds. Lead-to-Appointment conversion friction: eliminated.",
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
              Under 90&nbsp;seconds.
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
