"use client";

import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const afterHoursTimeline = [
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
    body: 'Your franchisee calls back. The customer is already on\u2011site with someone else. The lead is logged as \u201Cno answer.\u201D',
    highlight: false,
  },
];

const routingTimeline = [
  {
    time: "Tuesday · 10:30 AM",
    body: "A different homeowner fills out the enquiry form on your network\u2019s website. It lands with your central admin team. Someone reads it, identifies the territory, and manually forwards it to the right franchisee \u2014 if they get it right.",
    body2: "By the time it arrives, 40 minutes have passed. Your competitor responded in two.",
    highlight: true,
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
            <span className="italic text-brandOrange">
              generating for competitors.
            </span>
          </h2>
        </div>

        {/* Two columns: timeline + stats */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Timeline */}
          <div className="relative space-y-5">
            {afterHoursTimeline.map((item, i) => (
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

            <p className="animate-on-scroll py-2 text-sm font-semibold italic text-ink">
              But the after-hours gap is only half the problem.
            </p>

            {routingTimeline.map((item, i) => (
              <div
                key={`rt-${i}`}
                className="animate-on-scroll rounded-2xl border border-brandOrange/30 bg-navy p-6 text-white"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-brandOrange" />
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brandOrange">
                    {item.time}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-white/90">
                  {item.body}
                </p>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-white">
                  {item.body2}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <div className="animate-on-scroll rounded-2xl border border-steel/10 bg-mist/60 p-8">
              <p className="text-6xl font-extrabold tracking-tight text-ink">
                100×
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                Respond in 5&nbsp;minutes vs 30 and you&apos;re 100× more
                likely to win the job. That&apos;s HubSpot data across millions
                of B2C leads. Most franchise networks don&apos;t respond in
                30&nbsp;minutes. They respond in hours. On weekends, they
                don&apos;t respond at all.
              </p>
            </div>
            <div className="animate-on-scroll stagger-1 rounded-2xl border border-steel/10 bg-mist/60 p-8">
              <p className="text-6xl font-extrabold tracking-tight text-ink">
                60×
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                Scale this across 60 locations, 365 days a year. The FCA has
                named Lead-to-Appointment conversion as a top priority for 2026.
                This is exactly why. Every location without real-time response
                capability is converting your marketing spend into competitor
                revenue.
              </p>
            </div>
          </div>
        </div>

        {/* Callout */}
        <div className="animate-on-scroll rounded-2xl border-l-4 border-l-brandGreen bg-mist/60 p-8">
          <blockquote className="text-base italic leading-relaxed text-ink">
            &ldquo;It doesn&apos;t really matter how many enquiries are coming
            through after hours anymore because our competition is capturing
            them when we aren&apos;t. An email will come through at 5:05pm on
            Friday and sit there until 9am Monday morning… by then
            they&apos;ve already called someone else.&rdquo;
          </blockquote>
        </div>
      </Container>
    </AnimatedSection>
  );
}
