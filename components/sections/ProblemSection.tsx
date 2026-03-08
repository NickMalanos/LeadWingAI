"use client";

import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const timeline = [
  {
    time: "Friday · 5:05 PM",
    body: "A homeowner submits an enquiry — urgent job, ready to commit. It hits a local branch inbox.",
    highlight: false,
  },
  {
    time: "Friday · 5:06 PM",
    body: "The business is closed. The phone rings out. The email sits unread.",
    highlight: false,
  },
  {
    time: "Friday · 5:09 PM",
    body: "The homeowner Googles the next option. Your competitor answers on the first ring. The job is booked.",
    highlight: true,
  },
  {
    time: "Monday · 9:00 AM",
    body: 'Your franchisee calls back. The customer is already on\u2011site with someone else. The lead is logged as "no answer."',
    highlight: false,
  },
];

export default function ProblemSection() {
  return (
    <AnimatedSection className="bg-white" id="problem">
      <Container className="space-y-14">
        {/* Header */}
        <div className="animate-on-scroll max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brandBlue">
            The Problem
          </p>
          <h2 className="text-3xl font-extrabold leading-tight text-ink md:text-4xl lg:text-5xl">
            The revenue your network is{" "}
            <span className="italic text-brandGreen">
              generating for competitors.
            </span>
          </h2>
        </div>

        {/* Two columns: timeline + stats */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Timeline */}
          <div className="relative space-y-5">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`animate-on-scroll stagger-${Math.min(i + 1, 4)} rounded-2xl border p-6 ${
                  item.highlight
                    ? "border-brandGreen/30 bg-navy text-white"
                    : "border-steel/10 bg-mist/60"
                }`}
              >
                <div className="mb-2 flex items-center gap-2">
                  {item.highlight && (
                    <span className="h-2.5 w-2.5 rounded-full bg-brandGreen" />
                  )}
                  <p
                    className={`text-[11px] font-bold uppercase tracking-wider ${
                      item.highlight ? "text-brandGreen" : "text-steel/50"
                    }`}
                  >
                    {item.time}
                  </p>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    item.highlight ? "text-white/90" : "text-slate"
                  }`}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <div className="animate-on-scroll rounded-2xl border border-steel/10 bg-mist/60 p-8">
              <p className="text-6xl font-extrabold tracking-tight text-ink">
                78%
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                of high-intent customers book with the first business that
                responds. Not the best price. Not the best reviews. The fastest
                response.
              </p>
            </div>
            <div className="animate-on-scroll stagger-1 rounded-2xl border border-steel/10 bg-mist/60 p-8">
              <p className="text-6xl font-extrabold tracking-tight text-ink">
                60×
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                Multiply this scenario across 60 locations, every weekend, every
                public holiday. This isn&apos;t a franchisee problem — it&apos;s
                a structural flaw in how your network operates.
              </p>
            </div>
          </div>
        </div>

        {/* Callout */}
        <div className="animate-on-scroll rounded-2xl border-l-4 border-l-brandGreen bg-mist/60 p-8">
          <blockquote className="text-base italic leading-relaxed text-ink">
            &ldquo;This isn&apos;t a missed call problem. It&apos;s a systemic
            revenue leak that compounds with every location you add — and
            headquarters doesn&apos;t see it until the quarterly review.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-steel/60">
            — The Leadwing Network Response Audit
          </p>
        </div>
      </Container>
    </AnimatedSection>
  );
}
