import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navItems = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Industries", href: "/industries" },
  { label: "Demo", href: "/demo" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-steel/10 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-extrabold text-ink">
          LeadWing AI
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button href="/demo" className="hidden md:inline-flex">
            Book Free Demo
          </Button>
          <Button href="/demo" variant="secondary" className="md:hidden">
            Demo
          </Button>
        </div>
      </Container>
    </header>
  );
}
