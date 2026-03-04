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
            Privacy Policy
          </h1>
          <p className="text-sm text-slate">
            Leadwing Pty Ltd — ABN 34 695 083 642 — Last Updated: 4 March 2026
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
            store personal information when providing our AI-powered customer
            engagement services. This policy applies to our business clients
            (&ldquo;Clients&rdquo;) and, where applicable, the end-users who
            interact with our Services via Client platforms
            (&ldquo;End-Customers&rdquo;).
          </p>
        </div>

        <PolicySection number="1" title="Information We Collect">
          <PolicySubSection title="1.1 Personal Information">
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Names, phone numbers, and email addresses</li>
              <li>Enquiry details and interaction history (chat logs)</li>
              <li>
                Website interaction data, usage patterns, and technical data (IP
                addresses, device info)
              </li>
              <li>Business contact and billing information from our Clients</li>
            </ul>
          </PolicySubSection>
          <PolicySubSection title="1.2 How We Collect Information">
            <p>
              Information is collected through the Lead Wingman AI assistant
              embedded on Client websites, forms, and third-party integrations
              (e.g., CRMs) authorised by our Clients.
            </p>
          </PolicySubSection>
        </PolicySection>

        <PolicySection number="2" title="How We Use Personal Information">
          <PolicySubSection title="2.1 Primary Purposes">
            <p>We use personal information to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Operate and deliver our Services to Clients</li>
              <li>Route enquiries and leads to the appropriate Client</li>
              <li>Improve Lead Wingman AI accuracy and performance</li>
              <li>Manage Client accounts and billing</li>
            </ul>
          </PolicySubSection>
          <PolicySubSection title="2.2 Direct Marketing">
            <p>
              We do not use End-Customer information for our own marketing
              purposes. We may contact our business Clients regarding service
              updates; Clients may opt out at any time.
            </p>
          </PolicySubSection>
        </PolicySection>

        <PolicySection number="3" title="Our Role as Data Processor">
          <PolicySubSection title="3.1 Client Responsibility (Data Controller)">
            <p>
              Leadwing acts as a Data Processor. Our Clients are the Data
              Controllers. The Client warrants that they have obtained all
              necessary consents and provided all required notices to
              End-Customers to allow Leadwing to process such data.
            </p>
          </PolicySubSection>
          <PolicySubSection title="3.2 AI Outputs">
            <p>
              The Client acknowledges that Leadwing processes data using
              automated AI models. The Client is responsible for ensuring that
              the data provided does not violate any privacy rights or
              third-party intellectual property.
            </p>
          </PolicySubSection>
        </PolicySection>

        <PolicySection number="4" title="Data Storage, Security and Retention">
          <PolicySubSection title="4.1 Storage Location">
            <p>
              Data is primarily stored and processed in Australia. However, data
              may be processed in overseas jurisdictions where our third-party
              providers (such as AI model providers) operate.
            </p>
          </PolicySubSection>
          <PolicySubSection title="4.2 Security Measures">
            <p>
              We implement commercially reasonable technical and organisational
              measures, including encryption in transit and at rest, to protect
              data from unauthorised access.
            </p>
          </PolicySubSection>
          <PolicySubSection title="4.3 Retention Periods">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>End-Customer Enquiry Data:</strong> We operate as a
                pass-through service. We do not retain End-Customer data beyond
                operational requirements (typically deleted within 48–72 hours
                after successful routing to the Client).
              </li>
              <li>
                <strong>Client Business Data:</strong> Retained for the duration
                of the Client relationship plus 7 years for legal and accounting
                purposes.
              </li>
            </ul>
          </PolicySubSection>
        </PolicySection>

        <PolicySection number="5" title="Third-Party Service Providers">
          <PolicySubSection title="5.1 Providers We Use">
            <p>
              Leadwing utilises carefully selected third-party infrastructure,
              including:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                AI model providers (e.g., OpenAI, Anthropic, Voiceflow, Google)
              </li>
              <li>Cloud hosting (e.g., AWS, Google Cloud)</li>
              <li>Communication and integration platforms</li>
            </ul>
          </PolicySubSection>
          <PolicySubSection title="5.2 Overseas Disclosure">
            <p>
              By using the Services, the Client and End-Customers acknowledge
              that data may be disclosed to recipients in the United States and
              other jurisdictions where these providers operate.
            </p>
          </PolicySubSection>
        </PolicySection>

        <PolicySection number="6" title="Your Rights and Choices">
          <PolicySubSection title="6.1 Access and Correction">
            <p>
              Individuals have the right to request access to or correction of
              their personal information held by Leadwing.
            </p>
          </PolicySubSection>
          <PolicySubSection title="6.2 End-Customer Requests">
            <p>
              Because Leadwing is a Data Processor, End-Customers seeking to
              access, correct, or delete data should contact the Client business
              directly. Leadwing will assist Clients in fulfilling these requests
              where possible and required by law.
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
