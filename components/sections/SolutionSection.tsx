"use client";

import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const features = [
  {
    num: "01",
    label: "Capture",
    subtitle: "Zero Response Gap. Every enquiry. Every hour.",
    body: "2:00 AM on a Sunday. Public holiday. Grand Final weekend. Every lead is greeted and engaged the moment it arrives \u2014 without a single human involved. No voicemail black holes. No Monday morning inbox pile-up. The Response Gap drops to zero, and your Lead-to-Appointment conversion starts at the first touchpoint.",
  },
  {
    num: "02",
    label: "Qualify",
    subtitle: "Lead quality over lead quantity.",
    body: "The smartest networks have stopped chasing lead volume and started fixing lead quality. This is where that shift starts. We handle complex, high-ticket intake across trades and services \u2014 qualifying scope, budget, urgency, and timeline before any human touches the lead. Your franchisees don\u2019t waste time on tyre-kickers. They start each day with a pipeline of qualified, ready-to-convert jobs.",
  },
  {
    num: "03",
    label: "Route",
    subtitle: "Territory-matched. CRM-delivered. In seconds.",
    body: "Most networks route manually \u2014 form to admin team to territory check to forward. Every step adds conversion friction. Every handoff is a point of failure. Leadwing replaces the entire chain: qualified lead data pushed directly to the right franchisee via CRM, SMS, or email \u2014 identified by territory, automatically, in seconds. No admin overhead. No routing errors.",
  },
  {
    num: "04",
    label: "Visibility",
    subtitle: "Prove franchisee revenue uplift. Network-wide.",
    body: "Your CEO gets real-time data on response times and lead health across every territory. Your Head of Marketing gets full-funnel attribution \u2014 from first touchpoint to closed job. No more leads going dark before they\u2019re tracked. No more quarterly reviews that reveal problems three months too late. The data your network needs to prove ROI and support franchisee profitability.",
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
              Network-wide lead infrastructure.
            </span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate">
            Franchise networks don&apos;t need another AI pilot. They need
            operational infrastructure that delivers measurable franchisee
            revenue uplift from day one. That&apos;s exactly what we built.{" "}
            <strong>
              Every enquiry — regardless of hour, location, or day — captured,
              qualified, and routed to the right franchisee before your
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
