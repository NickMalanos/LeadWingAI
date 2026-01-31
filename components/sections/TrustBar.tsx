import Container from "@/components/ui/Container";

const logos = ["Aussie Tradies", "Local Plumbers", "Service Pros", "TradeForce"];

export default function TrustBar() {
  return (
    <div className="border-b border-steel/10 bg-white">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-6 text-sm font-semibold text-slate">
        <span className="text-xs uppercase tracking-widest text-slate/70">
          Trusted by tradies Australia-wide
        </span>
        <div className="flex flex-wrap gap-6 text-slate/70">
          {logos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </Container>
    </div>
  );
}
