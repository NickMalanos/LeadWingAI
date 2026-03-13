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
            ABN: 34 695 083 642 — Last Updated: 13/03/2026
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
            AI-powered lead orchestration infrastructure. This policy applies to
            our business clients (&ldquo;Clients&rdquo;) and the end-users who
            interact with our Services via our Clients&apos; platforms
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
              Information is collected through our proprietary AI assistant
              embedded on Client websites. By interacting with the AI, you
              consent to the real-time processing of your data to qualify your
              service request and facilitate routing to the appropriate service
              provider within our network.
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
              Leadwing operates a centralised lead orchestration system.
              Depending on the postcode or location data provided, End-Customer
              information will be disclosed directly to the specific, independent
              franchisee or authorised service partner responsible for that
              geographic area. These partners are independent entities; however,
              they are required by the Client Head Office to handle data in
              accordance with the Australian Privacy Act 1988.
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
              We utilise Large Language Models (LLMs) and Natural Language
              Processing (NLP) to interpret and categorise enquiries. While the
              AI analyses message content to provide accurate responses and route
              leads, this data is used strictly for fulfilling the immediate
              request and is never used to train public AI models.
            </p>
          </PolicySubSection>
        </PolicySection>

        <PolicySection
          number="4"
          title="Data Storage, Security & Proprietary Infrastructure"
        >
          <PolicySubSection title="4.1 Australian Data Storage">
            <p>
              All customer and lead data collected through Leadwing is stored on
              servers located in Sydney, Australia (AWS ap-southeast-2). This
              ensures all data remains within Australian jurisdiction in
              compliance with the Privacy Act 1988 (Cth) and the Australian
              Privacy Principles. Data may only briefly pass through overseas
              jurisdictions where specific AI model providers operate, as noted
              in Section 5.
            </p>
          </PolicySubSection>
          <PolicySubSection title="4.2 Data Encryption">
            <p>
              All data collected and processed by Leadwing is encrypted both at
              rest and in transit using industry-standard encryption protocols,
              including:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>At Rest:</strong> AES-256 encryption applied to all
                stored data within our secure relational database infrastructure
                (Supabase).
              </li>
              <li>
                <strong>In Transit:</strong> All data transmission occurs
                exclusively over encrypted channels using HTTPS/TLS 1.3,
                minimising exposure and preventing interception.
              </li>
            </ul>
          </PolicySubSection>
          <PolicySubSection title="4.3 Row Level Security">
            <p>
              Access to lead data is restricted at the database level using Row
              Level Security (RLS). Each franchise location or authorised service
              partner may only access data belonging to their own assigned
              territory. Cross-territory data access is technically enforced as
              impossible — no franchisee or location can view, access, or
              retrieve lead data assigned to another territory under any
              circumstances.
            </p>
          </PolicySubSection>
          <PolicySubSection title="4.4 Custom-Coded Infrastructure">
            <p>
              Unlike standard agencies that rely on third-party automation
              &ldquo;middleware&rdquo; (which increases data vulnerability),
              Leadwing utilises a custom-coded, serverless infrastructure. We
              implement commercially reasonable technical measures, including
              encrypted storage and secure transit as described above, minimising
              the attack surface and reducing dependency on fragile third-party
              tools.
            </p>
          </PolicySubSection>
          <PolicySubSection title="4.5 API Security">
            <p>
              All API connections used within Leadwing&apos;s infrastructure are
              secured as follows:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                All API keys and sensitive credentials are stored as encrypted
                environment variables.
              </li>
              <li>
                No sensitive credentials, API keys, or tokens are hardcoded
                within application code or publicly accessible repositories.
              </li>
              <li>
                Access to API endpoints is restricted and authenticated, and all
                communications are encrypted in transit per Section 4.2.
              </li>
            </ul>
          </PolicySubSection>
          <PolicySubSection title="4.6 Audit Trail">
            <p>
              All lead interactions processed through Leadwing&apos;s
              infrastructure are logged with full timestamps, creating a
              comprehensive audit trail. This audit log records the date, time,
              and nature of each lead interaction and routing event. The complete
              audit trail is maintained securely and is available to the network
              operator (Client Head Office) upon request.
            </p>
          </PolicySubSection>
        </PolicySection>

        <PolicySection
          number="5"
          title="Data Retention & Third-Party Sharing"
        >
          <PolicySubSection title="5.1 Data Retention">
            <p>
              Leadwing applies the following data retention periods:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>End-Customer Lead Data:</strong> Customer lead data is
                retained for ninety (90) days from the date of collection, after
                which it is permanently and irreversibly deleted from our
                systems, unless a longer retention period has been expressly
                agreed in writing between Leadwing and the Client.
              </li>
              <li>
                <strong>Client Business Data:</strong> Retained for the duration
                of the Client relationship plus seven (7) years for legal and
                accounting purposes.
              </li>
            </ul>
          </PolicySubSection>
          <PolicySubSection title="5.2 No Third-Party Sharing">
            <p>
              Lead data collected through Leadwing is never sold, shared, or
              distributed to any third party outside of the Client&apos;s own
              franchise or service network. Specifically:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Lead data is used solely for the purpose of lead routing and
                reporting within the Client&apos;s franchise or multi-location
                network.
              </li>
              <li>
                Leadwing does not sell, trade, or transfer End-Customer data to
                external parties for any commercial, marketing, or other
                purpose.
              </li>
              <li>
                Data is shared only with the specific, authorised franchisee or
                service partner responsible for the relevant geographic
                territory, as directed by the Client Head Office.
              </li>
            </ul>
          </PolicySubSection>
          <PolicySubSection title="5.3 Third-Party Service Providers (Infrastructure Only)">
            <p>
              Leadwing deliberately bypasses fragile third-party automation tools
              to protect your data. We only utilise enterprise-grade
              infrastructure providers strictly necessary for service delivery,
              including:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                AI model and logic providers (e.g., OpenAI, Anthropic,
                Voiceflow).
              </li>
              <li>
                Secure database and cloud hosting (e.g., Supabase, AWS
                ap-southeast-2).
              </li>
              <li>Direct API SMS/Email communication gateways.</li>
            </ul>
            <p>
              These providers are used solely for infrastructure purposes and are
              not permitted to use your data for their own commercial purposes.
            </p>
          </PolicySubSection>
          <PolicySubSection title="5.4 Overseas Disclosure">
            <p>
              By using the Services, you acknowledge that data may be briefly
              processed by AI model providers operating in the United States and
              other jurisdictions to facilitate AI logic, as described in Section
              4.1. All other data storage and processing occurs within Australia.
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
              href="mailto:admin@leadwing.com.au"
              className="text-brandBlue underline hover:text-brandBlue/80"
            >
              admin@leadwing.com.au
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
                href="mailto:admin@leadwing.com.au"
                className="text-brandBlue underline hover:text-brandBlue/80"
              >
                admin@leadwing.com.au
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
  children,
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
  children,
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
