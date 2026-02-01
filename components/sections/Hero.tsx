import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section className="bg-gradient-to-br from-brandBlue/15 via-white to-brandGreen/10">
      <Container className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-brandBlue">
            Never Lose Another Lead
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight md:text-5xl">
            Capture every enquiry and book more jobs.
          </h1>
          <p className="text-balance text-lg text-slate">
            LeadWing provides AI chatbots that help trades and service
            businesses capture, qualify, and convert leads automatically. Spend
            less time chasing leads and more time growing your business.
          </p>
          <div className="grid gap-3 text-sm text-slate">
            <p>Replies 24/7 so you never miss a lead.</p>
            <p>Answers questions and books jobs automatically.</p>
            <p>Reduces admin without hiring more staff.</p>
          </div>
          <Button href="/about-us" variant="secondary">
            About Us
          </Button>
          <p className="text-xs text-slate">
            Works on your website, Facebook Messenger, and WhatsApp.
          </p>
        </div>
        <div className="rounded-3xl border border-brandBlue/10 bg-white/90 p-8 shadow-lg shadow-brandBlue/10">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-brandGreen">What you get</p>
            <p className="text-lg font-semibold text-ink">
              “Spending hours chasing leads and missing opportunities?”
            </p>
            <div className="grid gap-3 text-sm text-slate">
              <div className="rounded-2xl border border-brandBlue/10 bg-white p-4">
                <p className="font-semibold text-ink">LeadWing captures</p>
                <p>Every enquiry is saved, qualified, and sent to you.</p>
              </div>
              <div className="rounded-2xl border border-brandGreen/10 bg-white p-4">
                <p className="font-semibold text-ink">You get the job</p>
                <p>More booked jobs, less admin, happier clients.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
