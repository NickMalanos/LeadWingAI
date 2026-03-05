import Link from "next/link";
import Container from "@/components/ui/Container";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "MSA", href: "/msa" }
];

export default function Footer() {
  return (
    <footer className="border-t border-slate/5 bg-navy text-white/80">
      <Container className="grid gap-6 py-10 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-3">
          <p className="text-lg font-extrabold text-white">LeadWing</p>
          <p className="text-sm">
            AI chatbots that help local service businesses capture and convert
            leads automatically.
          </p>
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} LeadWing AI. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
