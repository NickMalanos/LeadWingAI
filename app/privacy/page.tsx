import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy | LeadWing AI",
  description: "Privacy policy for LeadWing AI."
};

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="max-w-3xl space-y-4">
        <h1>Privacy Policy</h1>
        <p>
          LeadWing AI respects your privacy. This policy explains how we collect,
          use, and protect personal information.
        </p>
        <h2>What we collect</h2>
        <p>
          We collect contact details submitted via our forms, including name,
          business name, email, phone, and enquiry details.
        </p>
        <h2>How we use it</h2>
        <p>
          Information is used to respond to your enquiry, provide demos, and
          improve our services.
        </p>
        <h2>Data storage</h2>
        <p>
          This website currently stores form submissions in a temporary mock
          system for demonstration purposes.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy questions, email us at hello@leadwing.ai.
        </p>
      </Container>
    </Section>
  );
}
