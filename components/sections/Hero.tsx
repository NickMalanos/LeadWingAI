import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function Hero() {
  return (
    <Section className="bg-ink text-white">
      <Container className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-sun">
            Never Lose Another Lead
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight md:text-5xl">
            Stop losing leads. Start converting automatically.
          </h1>
          <p className="text-balance text-lg text-mist/80">
            LeadWing provides AI chatbots that help trades, and other service
            businesses capture, qualify, and convert leads automatically — so
            they can spend less time chasing leads and more time growing their
            business.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/demo" className="bg-sun text-ink hover:bg-sun/90">
              Book Free Demo
            </Button>
            <Button href="/demo#live-demo" variant="secondary">
              See Live Demo
            </Button>
          </div>
          <p className="text-xs text-mist/60">
            Built for Australian tradies. Ready to capture after-hours leads
            instantly.
          </p>
        </div>
        <Card className="border-white/10 bg-white/5 text-mist">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-sun">Lead snapshot</p>
            <p className="text-lg font-semibold">
              “Plumbing emergency — burst pipe in Parramatta. Need help now.”
            </p>
            <div className="grid gap-3 text-sm text-mist/80">
              <div className="rounded-lg border border-white/10 p-3">
                <p className="font-semibold text-white">Captured in 28 sec</p>
                <p>Qualified as emergency, sent SMS + email summary.</p>
              </div>
              <div className="rounded-lg border border-white/10 p-3">
                <p className="font-semibold text-white">Booked callback</p>
                <p>Customer locked in for 9:00am tomorrow.</p>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
