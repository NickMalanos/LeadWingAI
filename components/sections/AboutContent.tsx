"use client";

import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutContent() {
  return (
    <AnimatedSection className="bg-white">
      <Container className="space-y-8">
        <div className="animate-on-scroll max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-brandBlue">
            About Us
          </p>
          <h1 className="text-4xl font-extrabold text-ink md:text-5xl">
            Our mission is{" "}
            <span className="text-brandBlue">simple</span>.
          </h1>
          <p className="text-lg text-slate">
            Help local service businesses capture every enquiry and convert
            more leads into booked jobs.
          </p>
          <p className="text-lg text-slate">
            LeadWing builds AI chatbots that answer questions, qualify leads,
            and reduce admin. You spend more time doing the work and less time
            chasing paperwork.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-slate md:grid-cols-3">
          <div className="animate-on-scroll stagger-1 rounded-2xl border border-brandBlue/10 bg-mist/50 p-5 shadow-sm">
            <p className="font-bold text-ink">Simple</p>
            <p className="mt-1">No tech skills needed. We set it up for you.</p>
          </div>
          <div className="animate-on-scroll stagger-2 rounded-2xl border border-brandGreen/10 bg-mist/50 p-5 shadow-sm">
            <p className="font-bold text-ink">Efficient</p>
            <p className="mt-1">Every lead is captured and followed up 24/7.</p>
          </div>
          <div className="animate-on-scroll stagger-3 rounded-2xl border border-brandOrange/10 bg-mist/50 p-5 shadow-sm">
            <p className="font-bold text-ink">Reliable</p>
            <p className="mt-1">Built for businesses that rely on steady work.</p>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
