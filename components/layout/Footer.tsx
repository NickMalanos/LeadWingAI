import Link from "next/link";
import Container from "@/components/ui/Container";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" }
];

export default function Footer() {
  return (
    <footer className="border-t border-steel/10 bg-white/90">
      <Container className="grid gap-6 py-10 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-3">
          <p className="text-lg font-extrabold text-ink">LeadWing</p>
          <p className="text-sm text-slate">
            AI chatbots that help trades and service businesses capture and
            convert leads automatically.
          </p>
          <p className="text-xs text-slate">
            © {new Date().getFullYear()} LeadWing AI. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
