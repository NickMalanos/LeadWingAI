"use client";

import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const features = [
  {
    num: "01",
    label: "Capture",
    subtitle: "Always-on intake. No exceptions.",
    body: "2:00 AM on a Sunday. Public holiday. Every lead is greeted and engaged the moment it arrives — without a single human involved. No voicemail black holes. Immediate, intelligent response, every time.",
  },
  {
    num: "02",
    label: "Qualify",
    subtitle: "Only ready-to-work leads hit your franchisees.",
    body: "We handle complex, high-ticket intake across trades and service businesses, qualifying scope, budget, and urgency before any human touches the lead. Your franchisees start the day with a desk full of real jobs — not tyre-kickers.",
  },
  {
    num: "03",
    label: "Route",
    subtitle: "Territory-matched. CRM-delivered. In seconds.",
    body: "Most networks route manually — form to admin team to territory check to forward. Every step is a delay. Every handoff is a point of failure. Leadwing replaces the entire chain: qualified lead data is pushed directly to the right franchisee via CRM, SMS, or email — identified by territory, automatically, in seconds. No admin overhead. No routing errors. Your franchisees close. Leadwing handles everything before that.",
  },
  {
    num: "04",
    label: "Visibility",
    subtitle: "Network-wide intelligence, finally in one place.",
    body: "A centralised dashboard gives your leadership real-time data on response times and lead health across every territory. Your Head of Marketing gets full-funnel attribution. Your CEO sees exactly where the network is performing — and where it isn\u2019t.",
  },
];

export default function SolutionSection() {
  return (
    <AnimatedSection className="bg-mist/50" id="solution">
      <Container className="space-y-14">
        <div className="animate-on-scroll max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brandBlue">
            The Solution
          </p>
          <h2 className="text-3xl font-extrabold leading-tight text-ink md:text-4xl lg:text-5xl">
            Not a chatbot.{" "}
            <span className="italic text-brandGreen">
              Lead infrastructure.
            </span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate">
            Leadwing replaces the manual intake gap with a proprietary AI engine
            that sits behind your existing operations.{" "}
            <strong>
              Every enquiry — regardless of hour, location, or day — is
              captured, qualified, and routed to the right franchisee before your
              competitor&apos;s phone even rings.
            </strong>{" "}
            No added headcount. No new process for your franchisees to adopt.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={f.num}
              className={`animate-on-scroll stagger-${Math.min(i + 1, 4)} rounded-2xl border border-steel/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <p className="text-[11px] font-bold uppercase tracking-wider text-brandGreen">
                {f.num} — {f.label}
              </p>
              <h3 className="mt-3 text-lg font-bold text-ink">{f.subtitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
