"use client";

import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { openVoiceflow } from "@/lib/voiceflow";

export default function Hero() {
  return (
    <AnimatedSection className="bg-gradient-to-br from-navy via-navy/95 to-brandBlue/20 text-white">
      <Container className="flex flex-col items-center text-center">
        <p className="animate-on-scroll text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
          Network-Wide Lead Infrastructure&nbsp;&nbsp;·&nbsp;&nbsp;AU &amp; NZ
        </p>

        <h1 className="animate-on-scroll stagger-1 mt-6 max-w-4xl text-balance text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
          Your franchisees are losing jobs{" "}
          <span className="italic text-brandOrange">
            between Friday and Monday.
          </span>
        </h1>

        <p className="animate-on-scroll stagger-2 mt-6 max-w-3xl text-balance text-lg leading-relaxed text-white/65">
          The <strong className="text-white">Response Gap</strong> — the silence
          between an enquiry arriving and a franchisee responding — is the #1
          driver of Lead-to-Appointment conversion friction in your network.
          Respond in 5&nbsp;minutes and you&apos;re 100× more likely to convert.
          Wait 30 and the job is gone.{" "}
          <strong className="text-white">
            Leadwing responds in under 90&nbsp;seconds. Every lead. Every
            location. 24/7.
          </strong>
        </p>

        <div className="animate-on-scroll stagger-3 mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            onClick={openVoiceflow}
            className="inline-flex items-center justify-center rounded-full bg-brandGreen px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
          >
            Request a Network Audit
          </button>
          <button
            onClick={openVoiceflow}
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Calculate Your Response Gap
          </button>
        </div>

        <button
          onClick={openVoiceflow}
          className="animate-on-scroll stagger-4 mt-8 inline-flex items-center gap-2.5 text-sm text-white/50 transition hover:text-white/80"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brandGreen opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brandGreen" />
          </span>
          Our AI will qualify your network and book a time — in under
          2&nbsp;minutes&nbsp;↗
        </button>
      </Container>
    </AnimatedSection>
  );
}
