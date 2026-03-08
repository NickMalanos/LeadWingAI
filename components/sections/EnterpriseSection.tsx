"use client";

import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { openVoiceflow } from "@/lib/voiceflow";

const deliverables = [
  "Current response time benchmark across all territories",
  "Estimated annual revenue lost through your Response Gap",
  "Location-by-location breakdown of your weakest points",
  "A bespoke infrastructure recommendation for your network",
];

export default function EnterpriseSection() {
  return (
    <AnimatedSection className="bg-white" id="enterprise">
      <Container className="space-y-0">
        <div className="grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left — copy */}
          <div className="animate-on-scroll space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brandBlue">
              Enterprise Partnership
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-ink md:text-4xl lg:text-5xl">
              Built for networks.{" "}
              <span className="italic text-brandGreen">
                Not solo operators.
              </span>
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-slate">
              <p>
                We don&apos;t do starter plans or per-user subscriptions.{" "}
                <strong>
                  We build bespoke lead infrastructure for franchise networks
                  running 40 to 200+ locations.
                </strong>{" "}
                One engagement. Every territory. Every franchisee covered.
              </p>
              <p>
                No headcount added to your national operations team. No new
                processes for your franchisees to adopt. Leadwing works behind
                your existing operation — and your network simply stops leaking.
              </p>
              <p>
                If your Head of Marketing is struggling to prove channel ROI
                because leads go dark before they&apos;re tracked, Leadwing
                solves that too.{" "}
                <strong>
                  Every enquiry logged. Every outcome attributed.
                </strong>{" "}
                Full-funnel visibility from the first touchpoint to the closed
                job.
              </p>
            </div>
          </div>

          {/* Right — audit card */}
          <div className="animate-on-scroll stagger-2 rounded-3xl border border-steel/10 bg-mist/60 p-8 lg:p-10">
            <p className="text-[11px] font-bold uppercase tracking-wider text-brandGreen">
              Instead of a demo
            </p>
            <h3 className="mt-3 text-2xl font-extrabold text-ink">
              The Network Response Audit
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              We analyse your current Speed to Lead metrics and show you exactly
              where revenue is leaking — location by location. No pitch deck. No
              generic ROI calculator. Real data from your actual network, before
              you spend a cent.
            </p>

            <ul className="mt-6 space-y-3">
              {deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2 text-sm text-ink"
                >
                  <span className="mt-0.5 font-bold text-brandGreen">→</span>
                  {d}
                </li>
              ))}
            </ul>

            <button
              onClick={openVoiceflow}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-brandGreen px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
            >
              Book a Strategic Consultation
            </button>
            <p className="mt-3 text-center text-xs text-steel/60">
              You&apos;ll be connected with our AI — the same technology
              we&apos;d deploy for your network
            </p>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
