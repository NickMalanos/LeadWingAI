"use client";

import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Hero() {
  return (
    <AnimatedSection className="bg-gradient-to-br from-navy via-navy/95 to-brandBlue/20 text-white">
      <Container className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="animate-on-scroll text-sm font-semibold uppercase tracking-widest text-brandGreen">
            Your 24/7 AI Receptionist
          </p>
          <h1 className="animate-on-scroll stagger-1 text-balance text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Capture every lead.{" "}
            <span className="text-brandGreen">Automatically.</span>
          </h1>
          <p className="animate-on-scroll stagger-2 text-balance text-lg text-white/70">
            LeadWing gives local service businesses an AI chatbot that answers
            enquiries, qualifies leads, and books jobs — so you can focus on
            the work, not the phone.
          </p>
          <div className="animate-on-scroll stagger-3 grid gap-3 text-sm text-white/60">
            <p>Replies instantly, 24/7 — even after hours.</p>
            <p>Connects to your website and Instagram.</p>
            <p>Less admin. More booked jobs.</p>
          </div>
        </div>
        <div className="animate-on-scroll stagger-2 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-brandGreen">
              What LeadWing does
            </p>
            <div className="grid gap-3 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Captures every enquiry</p>
                <p>Your chatbot qualifies leads and sends them straight to you.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Works everywhere</p>
                <p>Website, Instagram, and Facebook Messenger — one chatbot.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">You get the job</p>
                <p>More booked jobs, less admin, happier clients.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
