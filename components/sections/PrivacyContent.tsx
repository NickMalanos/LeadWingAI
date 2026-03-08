"use client";

import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function PrivacyContent() {
  return (
    <AnimatedSection className="bg-white">
      <Container className="max-w-3xl space-y-10">
        <div className="animate-on-scroll space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-brandBlue">
            Legal
          </p>
          <h1 className="text-4xl font-extrabold text-ink md:text-5xl">
            LEADWING Privacy Policy
          </h1>
          <p className="text-sm text-slate">
            ABN: 34 695 083 642 — Last Updated: 6/03/2026
          </p>
        </div>

        <div className="animate-on-scroll stagger-1 space-y-4 text-sm leading-relaxed text-slate">
          <p>
            Leadwing Pty Ltd ABN 34 695 083 642 (&ldquo;Leadwing&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting
            personal information in accordance with the Privacy Act 1988 (Cth)
            and the Australian Privacy Principles (APPs).
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and
            securely store personal information through our proprietary
            AI-powered lead orchestration infrastructure. This policy applies
            to our business clients (&ldquo;Clients&rdquo;) and the end-users
            who interact with our Services via our Clients&apos; platforms
            (&ldquo;End-Customers&rdquo;).
          </p>
        </div>

        <PolicySection number="1" title="Information We Collect">
          <PolicySubSection title="1.1 Personal Information">
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Names, phone numbers, email addresses, and physical
                addresses/postcodes.
              </li>
              <li>
                Enquiry details, service requirements, and interaction history
                (chat logs).
              </li>
              <li>
                Website interaction data, usage patterns, and technical data (IP
                addresses, device info).
              </li>
              <li>Business contact and billing information from our Clients.</li>
            </ul>
          </PolicySubSection>
          <PolicySubSection title="1.2 Interactive AI Collection">
            <p>
              Information is collected through our proprietary AI
              assistant embedded on Client websites. By
              interacting with the AI, you consent to the real-time processing
              of your data to qualify your service request and facilitate
              routing to the appropriate service provider within our network.
            </p>
          </PolicySubSection>
        </PolicySection>

        <PolicySection
          number="2"
          title="How We Use & Route Personal Information"
        >
          <PolicySubSection title="2.1 Primary Purposes">
            <p>We use personal information to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Operate and deliver our Services to Clients.</li>
              <li>
                Accurately qualify and route enquiries to the correct
                geographical service provider.
              </li>
              <li>
                Improve AI conversational accuracy and routing performance.
              </li>
              <li>
                Provide network-wide analytics and reporting to Client Head
                Offices.
              </li>
            </ul>
          </PolicySubSection>
          <PolicySubSection title="2.2 Network Distribution & Routing (Franchise & Multi-Location Clients)">
            <p>
              Leadwing operates a centralized lead orchestration system.
              Depending on the postcode or location data provided,
              End-Customer information will be disclosed directly to the
              specific, independent franchisee or authorized service partner
              responsible for that geographic area. These partners are
              independent entities; however, they are required by the Client
              Head Office to handle data in accordance with the Australian
              Privacy Act 1988.
            </p>
          </PolicySubSection>
          <PolicySubSection title="2.3 Direct Marketing">
            <p>
              We do not use End-Customer information for our own marketing
              purposes. We may contact our business Clients regarding service
              updates; Clients may opt out at any time.
            </p>
          </PolicySubSection>
        </PolicySection>

        <PolicySection
          number="3"
          title="AI Processing & Our Role as Data Processor"
        >
          <PolicySubSection title="3.1 Client Responsibility (Data Controller)">
            <p>
              Leadwing acts as a Data Processor. Our Clients are the Data
              Controllers. The Client warrants that they have obtained all
              necessary consents to allow Leadwing to process End-Customer data.
            </p>
          </PolicySubSection>
          <PolicySubSection title="3.2 Use of Artificial Intelligence & LLMs">
            <p>
              We utilize Large Language Models (LLMs) and Natural Language
              Processing (NLP) to interpret and categorize enquiries. While the
              AI analyzes message content to provide accurate responses and
              route leads, this data is used strictly for fulfilling the
              immediate request and is never used to train public AI models.
            </p>
          </PolicySubSection>
        </PolicySection>

        <PolicySection
          number="4"
          title="Data Storage, Security & Proprietary Infrastructure"
        >
          <PolicySubSection title="4.1 Custom-Coded Infrastructure & Security">
            <p>
              Unlike standard agencies that rely on third-party automation
              &ldquo;middleware&rdquo; (which increases data vulnerability),
              Leadwing utilizes a custom-coded, serverless infrastructure. We
              implement commercially reasonable technical measures, including:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>Encrypted Storage:</strong> All data is stored in
                secure, relational databases (Supabase) encrypted at rest
                (AES-256).
              </li>
              <li>
                <strong>Secure Transit:</strong> Data is transmitted directly
                from our core logic engine to the end service provider via
                encrypted channels (HTTPS/TLS 1.3), minimizing the attack
                surface.
              </li>
            </ul>
          </PolicySubSection>
          <PolicySubSection title="4.2 Storage Location">
            <p>
              Data is primarily stored and processed securely within Australian
              data centers. However, data may briefly pass through overseas
              jurisdictions where our specific AI model providers operate.
            </p>
          </PolicySubSection>
          <PolicySubSection title="4.3 Retention Periods">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>End-Customer Enquiry Data:</strong> Data is retained
                securely within our database to facilitate lead delivery,
                verify routing accuracy, and generate aggregated performance
                analytics for the Client&apos;s Head Office. Data is retained
                only as long as necessary for these operational requirements or
                until the Client requests its deletion.
              </li>
              <li>
                <strong>Client Business Data:</strong> Retained for the
                duration of the Client relationship plus 7 years for legal and
                accounting purposes.
              </li>
            </ul>
          </PolicySubSection>
        </PolicySection>

        <PolicySection number="5" title="Third-Party Service Providers">
          <PolicySubSection title="5.1 Providers We Use">
            <p>
              Leadwing deliberately bypasses fragile third-party automation
              tools to protect your data. We only utilize enterprise-grade
              infrastructure, including:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                AI model and logic providers (e.g., OpenAI, Anthropic,
                Voiceflow).
              </li>
              <li>
                Secure Database and Cloud hosting (e.g., Supabase, AWS, Google
                Cloud).
              </li>
              <li>Direct API SMS/Email communication gateways.</li>
            </ul>
          </PolicySubSection>
          <PolicySubSection title="5.2 Overseas Disclosure">
            <p>
              By using the Services, you acknowledge that data may be
              processed by the above enterprise providers in the United States
              and other jurisdictions to facilitate the AI logic.
            </p>
          </PolicySubSection>
        </PolicySection>

        <PolicySection number="6" title="Your Rights & Choices">
          <PolicySubSection title="6.1 Access & Correction">
            <p>
              Individuals have the right to request access to or correction of
              their personal information held by Leadwing.
            </p>
          </PolicySubSection>
          <PolicySubSection title="6.2 End-Customer Requests">
            <p>
              Because Leadwing operates strictly as a Data Processor
              infrastructure, End-Customers seeking to access, correct, or
              delete their data should contact the specific Client business
              (e.g., the franchise Head Office) directly. Leadwing will execute
              these deletion/correction requests immediately upon instruction
              from the Client.
            </p>
          </PolicySubSection>
        </PolicySection>

        <PolicySection number="7" title="Complaints">
          <p>
            If you believe we have breached the Privacy Act, please contact us
            at{" "}
            <a
              href="mailto:leadwingai@gmail.com"
              className="text-brandBlue underline hover:text-brandBlue/80"
            >
              leadwingai@gmail.com
            </a>
            . We will investigate and respond within 30 days. If you are not
            satisfied with our response, you may contact the Office of the
            Australian Information Commissioner (OAIC) at{" "}
            <a
              href="https://www.oaic.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brandBlue underline hover:text-brandBlue/80"
            >
              www.oaic.gov.au
            </a>
            .
          </p>
        </PolicySection>

        <PolicySection number="8" title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Material
            changes will be notified to Clients via email. Continued use of the
            Services after an update constitutes acceptance of the revised
            policy.
          </p>
        </PolicySection>

        <PolicySection number="9" title="Contact Us">
          <div className="space-y-1">
            <p>Leadwing Pty Ltd</p>
            <p>26 Ormuz Road, Yeronga, Queensland, Australia</p>
            <p>
              Website:{" "}
              <a
                href="https://www.leadwing.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brandBlue underline hover:text-brandBlue/80"
              >
                www.leadwing.com.au
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:leadwingai@gmail.com"
                className="text-brandBlue underline hover:text-brandBlue/80"
              >
                leadwingai@gmail.com
              </a>
            </p>
          </div>
        </PolicySection>
      </Container>
    </AnimatedSection>
  );
}

function PolicySection({
  number,
  title,
  children
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="animate-on-scroll space-y-4 text-sm leading-relaxed text-slate">
      <h2 className="text-lg font-bold text-ink">
        {number}. {title}
      </h2>
      {children}
    </div>
  );
}

function PolicySubSection({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-ink">{title}</h3>
      {children}
    </div>
  );
}
