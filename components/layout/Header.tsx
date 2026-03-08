import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate/5 bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/leadwing-logo.png"
            alt="Leadwing"
            width={190}
            height={55}
            className="h-12 w-auto md:h-14"
          />
          <span className="sr-only">Leadwing</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-semibold text-slate">
          <Link href="/about-us" className="hover:text-brandBlue transition">
            About
          </Link>
        </nav>
      </Container>
    </header>
  );
}
