import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-steel/10 bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/leadwing-logo.png"
            alt="LeadWing"
            width={190}
            height={55}
            className="h-12 w-auto md:h-14"
          />
          <span className="sr-only">LeadWing</span>
        </Link>
        <div className="hidden md:flex" />
        <div className="flex items-center gap-3">
          <Button href="/free-trial">Book a Free Discovery Call</Button>
        </div>
      </Container>
    </header>
  );
}
