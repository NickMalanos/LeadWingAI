"use client";

import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function MSAContent() {
  return (
    <AnimatedSection className="bg-white">
      <Container className="max-w-3xl space-y-10">
        <div className="animate-on-scroll space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-brandBlue">
            Legal
          </p>
          <h1 className="text-4xl font-extrabold text-ink md:text-5xl">
            Master Services Agreement
          </h1>
          <p className="text-sm text-slate">
            Leadwing Pty Ltd | ABN 34 695 083 642 | 26 Ormuz Road, Yeronga, QLD
            4104
          </p>
        </div>

        <div className="animate-on-scroll stagger-1 space-y-4 text-sm leading-relaxed text-slate">
          <p>
            This Master Services Agreement (Agreement) is entered into between
            Leadwing Pty Ltd of 26 Ormuz Road, Yeronga, Queensland, Australia
            (Leadwing, we, us) and the entity identified in an order form,
            proposal, or online sign-up (Client, you).
          </p>
          <p>
            The Client warrants that the entity details provided during sign-up
            or in any order form are accurate and current. In the event of a
            conflict or ambiguity between the identification of the Client
            across multiple documents, the details provided in the most recent
            Order Form shall prevail. The individual accepting this Agreement
            warrants they have the legal authority to bind the Client entity. By
            accessing or using the Services, the Client agrees to be bound by
            this Agreement.
          </p>
        </div>

        <MSASection number="1" title="Services">
          <MSASub title="1.1 Services">
            <p>
              Leadwing provides AI-powered customer engagement and lead-capture
              services, including: website-embedded AI Lead Wingman
              (conversational AI assistant), automated customer enquiry
              responses, lead capture, qualification, and routing, and
              integration with third-party booking systems and CRMs.
            </p>
          </MSASub>
          <MSASub title="1.2 Service Model">
            <p>
              The Services are provided as a hybrid software and managed
              service. New subscriptions commence with a Minimum Term of three
              (3) months as set out in clause 11.1, after which the Agreement
              continues on a month-to-month basis unless otherwise agreed in
              writing.
            </p>
          </MSASub>
          <MSASub title="1.3 Service Level Commitments">
            <p>
              Leadwing will use commercially reasonable efforts to maintain:
            </p>
            <p>
              <strong>(a)</strong> 99% uptime for core Lead Wingman
              functionality, measured on a calendar month basis.
            </p>
            <p>
              <strong>&ldquo;Uptime&rdquo;</strong> means the percentage of
              total minutes in a calendar month during which the core Lead
              Wingman functionality is available and operational, calculated as:
              (Total minutes in month &minus; Downtime minutes) / Total minutes
              in month &times; 100.
            </p>
            <p>
              <strong>&ldquo;Downtime&rdquo;</strong> means periods during which
              the core Lead Wingman widget is wholly unavailable to end users due
              to a fault attributable to Leadwing&apos;s infrastructure.
              Downtime excludes: Scheduled Maintenance; force majeure events;
              outages caused by third-party platforms not operated by Leadwing
              (including hosting providers, CRMs, or booking systems); and any
              unavailability caused by Client-side actions, misconfigurations, or
              omissions.
            </p>
            <p>
              <strong>&ldquo;Core Lead Wingman functionality&rdquo;</strong>{" "}
              means the ability of the Lead Wingman widget to: (i) receive and
              respond to inbound customer enquiries via the website interface;
              and (ii) capture and route lead data to the Client&apos;s
              designated CRM or booking system. It expressly excludes ancillary
              features, analytics dashboards, third-party integrations, and any
              beta or preview features.
            </p>
            <p>
              <strong>(b)</strong> Scheduled maintenance windows notified at
              least 48 hours in advance where reasonably practicable.
            </p>
            <p>
              <strong>(c)</strong> Emergency maintenance may occur without
              advance notice. Leadwing will use reasonable endeavours to notify
              the Client as soon as practicable.
            </p>
            <p>
              <strong>Sole Remedy:</strong> If Leadwing fails to meet the 99%
              uptime commitment in any calendar month, the Client&apos;s sole
              and exclusive remedy is a service credit equal to a pro-rata daily
              fee for each full day of qualifying Downtime exceeding the SLA
              threshold, credited against the following month&apos;s invoice.
              Service credits are subject to the Client submitting a written
              request within 14 days of the end of the relevant month.
            </p>
          </MSASub>
          <MSASub title="1.4 No Performance Guarantees">
            <p>
              Leadwing provides the tools and platform; the Client provides the
              underlying business strategy and data. Leadwing does not guarantee
              specific results, including but not limited to: lead volume,
              conversion rates, booking accuracy, or revenue outcomes. The
              Client acknowledges that AI outputs are probabilistic and that
              service fees are for the provision of the platform and managed
              services, not for specific commercial metrics or outcomes.
            </p>
          </MSASub>
        </MSASection>

        <MSASection number="2" title="Enterprise and Franchise Structure">
          <MSASub title="2.1 Contracting Party">
            <p>
              This Agreement is between Leadwing and Head Office only.
            </p>
          </MSASub>
          <MSASub title="2.2 Authorised Users">
            <p>
              Head Office may permit its franchisees, locations, or affiliated
              entities (Authorised Users) to access the Services.
            </p>
          </MSASub>
          <MSASub title="2.3 Responsibility for Authorised Users">
            <p>
              Head Office is solely and materially responsible for: all acts and
              omissions of Authorised Users, ensuring Authorised Users comply
              with this Agreement, and payment of all fees related to use of the
              Services by any Authorised User or location.
            </p>
          </MSASub>
          <MSASub title="2.4 No Direct Relationship">
            <p>
              Authorised Users have no direct contractual relationship with
              Leadwing and may not assert rights or claims against Leadwing.
            </p>
          </MSASub>
        </MSASection>

        <MSASection number="3" title="Client Responsibilities">
          <MSASub title="3.1 Warranties">
            <p>The Client warrants that:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                All information provided to Leadwing for AI training,
                configuration, or service delivery is accurate, current, and
                lawful in all material respects
              </li>
              <li>
                It has all necessary authority and licenses to provide customer
                data and website access to Leadwing
              </li>
              <li>
                All required consents under applicable privacy and marketing
                laws have been obtained for the processing of data by Leadwing
              </li>
            </ul>
          </MSASub>
          <MSASub title="3.2 Ongoing Responsibility">
            <p>The Client remains solely responsible for:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Website content and the accuracy of data fed into the Lead
                Wingman platform
              </li>
              <li>
                Pricing, quotes, and representations made via the Services based
                on Client-provided data
              </li>
              <li>
                Compliance with all applicable laws and regulations in its
                specific industry
              </li>
            </ul>
          </MSASub>
        </MSASection>

        <MSASection number="4" title="Access and Authorisation">
          <MSASub title="4.1">
            <p>The Client authorises Leadwing to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Access websites and systems as reasonably required to perform
                the Services
              </li>
              <li>
                Install scripts, widgets, and integrations on the Client&apos;s
                website
              </li>
              <li>
                Process enquiries and customer data on the Client&apos;s behalf
              </li>
            </ul>
            <p>
              This authorisation continues for the term of this Agreement.
            </p>
          </MSASub>
        </MSASection>

        <MSASection number="5" title="Data, Privacy and Confidentiality">
          <MSASub title="5.1 Confidential Information">
            <p>
              Each party must protect the other&apos;s confidential information
              and use it only for purposes of this Agreement.
            </p>
          </MSASub>
          <MSASub title="5.2 Data Roles">
            <p>
              Leadwing acts as a data processor; the Client acts as the data
              controller. The Client, as data controller, is responsible for
              ensuring that its instructions to Leadwing comply with all
              applicable privacy laws, including the Privacy Act 1988 (Cth) and
              the Australian Privacy Principles (APPs).
            </p>
          </MSASub>
          <MSASub title="5.3 Data Ownership">
            <p>
              All customer and lead data remains the property and responsibility
              of the Client.
            </p>
          </MSASub>
          <MSASub title="5.4 Data Handling">
            <p>
              Leadwing processes data solely to provide the Services and does
              not permanently store end-customer data beyond operational
              requirements. Leadwing will not process Client personal data for
              any purpose other than in accordance with the Client&apos;s
              documented instructions or as required by applicable law.
            </p>
          </MSASub>
          <MSASub title="5.5 Security Standards">
            <p>
              Leadwing will implement and maintain reasonable technical and
              organisational security measures appropriate to the nature of the
              personal data it processes, having regard to the risks involved.
              Such measures include:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Access controls limiting data access to personnel who require it
                to perform the Services
              </li>
              <li>
                Industry-standard encryption of personal data in transit and at
                rest where practicable
              </li>
              <li>
                Reasonable measures to protect against unauthorised access,
                disclosure, alteration, or destruction of personal data
              </li>
            </ul>
            <p>
              These measures represent Leadwing&apos;s reasonable endeavours and
              do not constitute an absolute guarantee of security. Leadwing does
              not warrant that its security measures will prevent all
              unauthorised access or data loss.
            </p>
          </MSASub>
          <MSASub title="5.6 Data Breach Notification">
            <p>
              In the event that Leadwing becomes aware of a confirmed or
              reasonably suspected security incident involving Client personal
              data that it processes:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>(a)</strong> Leadwing will notify the Client without
                undue delay, and in any event within 72 hours of Leadwing
                determining that a breach has occurred or that there are
                reasonable grounds to suspect an eligible data breach under the
                Privacy Act 1988 (Cth)
              </li>
              <li>
                <strong>(b)</strong> Leadwing&apos;s notification will include,
                to the extent then known: a description of the nature of the
                incident; the categories and approximate volume of personal data
                affected; and the steps Leadwing has taken or proposes to take in
                response
              </li>
              <li>
                <strong>(c)</strong> The Client, as data controller, is solely
                responsible for determining whether a notifiable data breach has
                occurred under the Notifiable Data Breaches (NDB) scheme and for
                making any required notifications to affected individuals or the
                Office of the Australian Information Commissioner (OAIC).
                Leadwing will provide reasonable cooperation and assistance to
                the Client in connection with such notifications at no additional
                cost
              </li>
              <li>
                <strong>(d)</strong> Leadwing&apos;s notification obligation
                under this clause is subject to any legal restrictions on
                disclosure, including those imposed by law enforcement agencies
              </li>
            </ul>
          </MSASub>
          <MSASub title="5.7 Client Instructions">
            <p>
              Leadwing is only obliged to process Client personal data in
              accordance with the Client&apos;s lawful and documented
              instructions. If Leadwing reasonably considers that any instruction
              from the Client would cause Leadwing to breach applicable privacy
              laws, Leadwing will promptly notify the Client and may suspend
              performance of the relevant instruction pending resolution,
              without liability to the Client for such suspension.
            </p>
          </MSASub>
          <MSASub title="5.8 Data Handling Upon Termination">
            <p>
              Upon termination, Leadwing will cease processing Client data.
              Client data will be deleted within thirty (30) days of
              termination, except where retention is required by applicable law,
              in which case Leadwing will notify the Client of the basis for
              retention and delete the data as soon as that obligation ceases.
            </p>
            <p>
              Upon written request made within fourteen (14) days of
              termination, Leadwing will provide a data export in CSV or JSON
              format. Leadwing will take reasonable internal steps to ensure that
              data exports are materially complete. Upon completion of deletion,
              Leadwing will, upon request, provide written confirmation that
              deletion has been completed, subject to any lawful retention
              obligations.
            </p>
            <p>
              The Client is responsible for: requesting any export within the
              14-day window; retrieving its data before termination takes effect;
              and verifying that any export meets its requirements within 14 days
              of receipt. Leadwing accepts no liability for data that the Client
              fails to request or retrieve within these timeframes.
            </p>
          </MSASub>
        </MSASection>

        <MSASection number="6" title="Artificial Intelligence Acknowledgement">
          <MSASub title="6.1">
            <p>The Client acknowledges that:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>AI outputs are automated and probabilistic</li>
              <li>
                Responses may occasionally be inaccurate, incomplete, or
                outdated
              </li>
              <li>
                AI outputs are for informational purposes only and do not
                constitute professional advice
              </li>
            </ul>
          </MSASub>
          <MSASub title="6.2 Prohibited Use Cases">
            <p>
              The Services must not be used to provide legal, medical,
              financial, or emergency/safety-critical advice.
            </p>
          </MSASub>
          <MSASub title="6.3 Validation">
            <p>
              The Client is responsible for reviewing and validating all
              AI-generated quotes, bookings, and customer communications before
              they are acted upon or relied upon for business-critical decisions.
            </p>
          </MSASub>
          <MSASub title="6.4 AI Output Limitations">
            <p>The Client acknowledges that:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>(a)</strong> AI systems, including the Lead Wingman
                platform, may produce outputs that are inaccurate, incomplete,
                contextually unsuitable, or inconsistent with the Client&apos;s
                products, services, or regulatory requirements
              </li>
              <li>
                <strong>(b)</strong> Leadwing does not warrant that AI outputs
                will be fit for any specific purpose, accurate, or compliant
                with any regulatory or professional obligation applicable to the
                Client&apos;s business
              </li>
              <li>
                <strong>(c)</strong> The Client must not configure the Services
                in a manner that permits AI outputs to be automatically acted
                upon for legally binding commitments, safety-critical decisions,
                or regulated advice without prior human review
              </li>
              <li>
                <strong>(d)</strong> To the extent permitted by law,
                responsibility for the accuracy of information delivered to end
                customers via the Services rests with the Client where such
                information derives from Client-provided data or results from
                the Client&apos;s failure to configure, review, or validate
                outputs as required by this Agreement
              </li>
            </ul>
            <p>
              Nothing in this clause limits any non-excludable rights the Client
              may have under the Competition and Consumer Act 2010 (Cth)
              (Australian Consumer Law) or other applicable legislation.
            </p>
          </MSASub>
        </MSASection>

        <MSASection number="7" title="Acceptable Use">
          <MSASub title="7.1">
            <p>
              The Client must not use the Services unlawfully, provide
              misleading or harmful content, attempt to reverse engineer the
              platform, or use the Services for any prohibited advisory purposes
              as set out in clause 6.2.
            </p>
          </MSASub>
        </MSASection>

        <MSASection number="8" title="Fees and Payment">
          <MSASub title="8.1">
            <p>Fees are charged monthly in advance.</p>
          </MSASub>
          <MSASub title="8.2">
            <p>
              Non-payment may result in immediate suspension or termination of
              Services.
            </p>
          </MSASub>
          <MSASub title="8.3">
            <p>
              All outstanding fees remain payable upon termination. Fees paid in
              advance are non-refundable.
            </p>
          </MSASub>
          <MSASub title="8.4 Minimum Term Fees">
            <p>
              The Client acknowledges that the setup fee and subscription fees
              for the Minimum Term are committed fees. If the Client terminates
              or ceases using the Services prior to the expiry of the Minimum
              Term for any reason other than Leadwing&apos;s material uncured
              breach, the Client remains liable for all subscription fees for
              the remainder of the Minimum Term, which become immediately due
              and payable.
            </p>
          </MSASub>
        </MSASection>

        <MSASection number="9" title="Limitation of Liability">
          <MSASub title="9.1">
            <p>
              To the maximum extent permitted by law, neither party is liable
              for indirect or consequential loss, lost profits, missed revenue,
              or business interruption.
            </p>
          </MSASub>
          <MSASub title="9.2 Liability Cap">
            <p>
              Leadwing&apos;s total aggregate liability under or in connection
              with this Agreement — including under any indemnity in clause 10 —
              is capped at the fees paid by the Client in the six (6) months
              preceding the event giving rise to the claim. The minimum cap of
              AUD $5,000 shall only apply if the 6-month fee total is lower than
              $5,000 and represents the absolute maximum aggregate liability of
              Leadwing for all claims combined across all locations, whether
              arising in contract, tort (including negligence), statute,
              indemnity, or otherwise.
            </p>
          </MSASub>
          <MSASub title="9.3 Exclusions">
            <p>The liability cap does not apply to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>(a)</strong> Fraud or wilful misconduct by Leadwing
              </li>
              <li>
                <strong>(b)</strong> Liability that cannot be excluded or limited
                by law, including under the Australian Consumer Law
              </li>
              <li>
                <strong>(c)</strong> Death or personal injury caused by
                Leadwing&apos;s negligence
              </li>
            </ul>
            <p>
              For the avoidance of doubt, Leadwing&apos;s indemnity obligations
              under clause 10.2 are subject to and limited by the cap in clause
              9.2, except to the extent that any underlying liability cannot be
              excluded or capped under applicable law.
            </p>
          </MSASub>
        </MSASection>

        <MSASection number="10" title="Indemnities">
          <MSASub title="10.1 Client Indemnity">
            <p>
              The Client must defend and hold Leadwing harmless against all
              claims, costs, and damages arising from:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>(a)</strong> Client or Authorised User content
              </li>
              <li>
                <strong>(b)</strong> Breach of privacy or marketing laws by the
                Client
              </li>
              <li>
                <strong>(c)</strong> The Client&apos;s failure to validate
                AI-generated outputs before they are acted upon
              </li>
            </ul>
          </MSASub>
          <MSASub title="10.2 Leadwing Indemnity">
            <p>
              Subject to clause 9.2 (Liability Cap) and clause 10.3 (Process),
              Leadwing indemnifies the Client against third-party claims arising
              directly from Leadwing&apos;s proven negligence, breach of privacy
              laws in its data processing, or IP infringement by the core
              Leadwing platform. For the avoidance of doubt, Leadwing&apos;s
              aggregate liability under this indemnity — together with all other
              claims under this Agreement — shall not exceed the cap in clause
              9.2.
            </p>
          </MSASub>
          <MSASub title="10.3 Process">
            <p>
              The party seeking indemnification must promptly notify the other,
              cooperate in the defence, and not settle without the indemnifying
              party&apos;s prior written consent (not to be unreasonably
              withheld).
            </p>
          </MSASub>
        </MSASection>

        <MSASection number="11" title="Term and Termination">
          <MSASub title="11.1 Term">
            <p>
              This Agreement commences on the date of sign-up or execution and
              continues for an initial minimum term of three (3) months (Minimum
              Term). Following the expiry of the Minimum Term, this Agreement
              continues on a month-to-month basis until terminated in accordance
              with this clause.
            </p>
          </MSASub>
          <MSASub title="11.2 Termination for Convenience">
            <p>
              After the expiry of the Minimum Term, either party may terminate
              this Agreement with thirty (30) days&apos; written notice. The
              Client may not terminate for convenience during the Minimum Term.
              If the Client purports to terminate during the Minimum Term, all
              fees remaining for the balance of the Minimum Term become
              immediately due and payable.
            </p>
          </MSASub>
          <MSASub title="11.3 Termination for Breach">
            <p>
              Either party may terminate immediately if a material breach is not
              remedied within fourteen (14) days of written notice, or in the
              event of insolvency.
            </p>
          </MSASub>
        </MSASection>

        <MSASection number="12" title="General">
          <MSASub title="12.1 Governing Law">
            <p>
              This Agreement is governed by the laws of Queensland, Australia.
            </p>
          </MSASub>
          <MSASub title="12.2 Entire Agreement">
            <p>
              This Agreement supersedes all prior understandings between the
              parties.
            </p>
          </MSASub>
          <MSASub title="12.3 Amendments">
            <p>
              Leadwing may update this Agreement on thirty (30) days&apos;
              notice. Continued use of the Services after this period
              constitutes acceptance of the updated terms.
            </p>
          </MSASub>
          <MSASub title="12.4 Assignment">
            <p>
              Leadwing may assign or transfer this Agreement at its sole
              discretion (including in the event of a merger or sale). The
              Client may not assign this Agreement without Leadwing&apos;s prior
              written consent, such consent not to be unreasonably withheld or
              delayed.
            </p>
          </MSASub>
          <MSASub title="12.5 Severability">
            <p>
              If any provision is held invalid, the remaining provisions
              continue in full force.
            </p>
          </MSASub>
        </MSASection>

        <div className="animate-on-scroll border-t border-slate/10 pt-6 text-xs text-slate">
          <p>
            Leadwing Pty Ltd | ABN 34 695 083 642 | 26 Ormuz Road, Yeronga, QLD
            4104 |{" "}
            <a
              href="https://www.leadwing.com.au"
              className="text-brandBlue underline hover:text-brandBlue/80"
            >
              leadwing.com.au
            </a>
          </p>
        </div>
      </Container>
    </AnimatedSection>
  );
}

function MSASection({
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

function MSASub({
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
