import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Pricing Preview | LeadWing",
  description:
    "Preview LeadWing pricing tiers for trade businesses, including missed call recovery and chatbot plans.",
  robots: {
    index: false,
    follow: false
  },
  openGraph: {
    title: "Pricing Preview | LeadWing",
    description:
      "Pricing tiers built for trade businesses that want more booked jobs and less admin.",
    type: "website"
  }
};

export default function PricingPreviewPage() {
  return (
    <>
      <Section className="bg-white/85">
        <Container className="space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-brandBlue">
              Pricing Preview
            </p>
            <h1 className="text-4xl font-extrabold text-ink md:text-5xl">
              AI Chatbot and Missed Call Recovery
            </h1>
            <p className="text-lg text-slate">
              Built for trade businesses that want to capture more jobs, recover
              missed calls, and qualify leads automatically, 24/7.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-brandBlue/10 bg-white p-6 shadow-sm shadow-brandBlue/10">
              <p className="text-sm font-semibold uppercase tracking-widest text-brandBlue">
                Standard
              </p>
              <p className="mt-2 text-3xl font-extrabold text-ink">$299 / month</p>
              <p className="mt-3 text-sm text-slate">
                Best for single-location trade businesses that want to stop
                losing jobs.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate">
                <li>AI chatbot installed on 1 website</li>
                <li>Missed call SMS recovery system (instant text-back)</li>
                <li>Captures job type, suburb and urgency</li>
                <li>Guides customers to book or request a quote</li>
                <li>Connected to 1 booking system or enquiry form</li>
                <li>Basic lead notifications by SMS or email</li>
                <li>Text and email support</li>
              </ul>
              <p className="mt-5 rounded-2xl bg-brandBlue/5 p-4 text-sm font-medium text-ink">
                Perfect for trades who want more booked jobs without hiring
                extra admin staff.
              </p>
            </article>

            <article className="rounded-3xl border border-brandGreen/10 bg-white p-6 shadow-sm shadow-brandGreen/10">
              <p className="text-sm font-semibold uppercase tracking-widest text-brandBlue">
                Enterprise - Full Locations
              </p>
              <p className="mt-2 text-3xl font-extrabold text-ink">
                From $299 / month
              </p>
              <p className="text-sm text-slate">Per location. Volume tiers apply.</p>
              <p className="mt-3 text-sm text-slate">
                Best for multi-location operators, franchise groups, and busy
                trade teams.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate">
                <li>Chatbot and missed call system for each location</li>
                <li>Territory-based lead routing by postcode or suburb</li>
                <li>Advanced CRM and workflow integrations</li>
                <li>Custom automation logic per service or team</li>
                <li>Dedicated onboarding</li>
                <li>Priority support</li>
              </ul>
              <div className="mt-5 space-y-2 rounded-2xl bg-brandGreen/5 p-4 text-sm text-ink">
                <p className="font-semibold">Volume tiers (per location)</p>
                <p>2-3: $299</p>
                <p>4-6: $279</p>
                <p>7-9: $259</p>
                <p>10+: $239</p>
              </div>
              <div className="mt-4 space-y-1 text-sm text-slate">
                <p>2 locations: $598 / month</p>
                <p>5 locations: $1,395 / month</p>
                <p>8 locations: $2,072 / month</p>
                <p>12 locations: $2,868 / month</p>
              </div>
              <p className="mt-5 rounded-2xl bg-brandGreen/5 p-4 text-sm font-medium text-ink">
                Perfect for organisations that need one system to manage
                enquiries across all locations with less admin.
              </p>
            </article>

            <article className="rounded-3xl border border-brandOrange/10 bg-white p-6 shadow-sm shadow-brandOrange/10">
              <p className="text-sm font-semibold uppercase tracking-widest text-brandBlue">
                Enterprise - Central Website + Multi-Number Locations
              </p>
              <p className="mt-2 text-3xl font-extrabold text-ink">
                From $199 / month
              </p>
              <p className="text-sm text-slate">Per location. Volume tiers apply.</p>
              <p className="mt-3 text-sm text-slate">
                Best for franchise groups or multi-location businesses with one
                central website and separate phone numbers per location.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate">
                <li>AI chatbot installed on the central website</li>
                <li>Missed call SMS recovery per location</li>
                <li>Captures job type, suburb and urgency</li>
                <li>Territory-based lead routing per location</li>
                <li>Optional booking or enquiry integrations per location</li>
                <li>Dedicated onboarding and priority support</li>
              </ul>
              <div className="mt-5 space-y-2 rounded-2xl bg-brandOrange/5 p-4 text-sm text-ink">
                <p className="font-semibold">Volume tiers (per location)</p>
                <p>2-3: $199</p>
                <p>4-6: $189</p>
                <p>7-9: $179</p>
                <p>10+: $169</p>
              </div>
              <div className="mt-4 space-y-1 text-sm text-slate">
                <p>1 location: $299 / month</p>
                <p>2 locations: $299 + $199 = $498 / month</p>
                <p>5 locations: $299 + (4 x $189) = $1,055 / month</p>
                <p>8 locations: $299 + (7 x $179) = $1,552 / month</p>
                <p>12 locations: $299 + (11 x $169) = $2,158 / month</p>
              </div>
              <p className="mt-5 rounded-2xl bg-brandOrange/5 p-4 text-sm font-medium text-ink">
                Perfect for organisations that need one central chatbot with
                separate phone-line lead capture per location.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      <Section className="bg-white/75">
        <Container className="space-y-4">
          <h2 className="text-2xl font-extrabold text-ink md:text-3xl">
            Why this works for trades
          </h2>
          <ul className="grid gap-3 text-sm text-slate sm:grid-cols-2">
            <li className="rounded-2xl border border-brandBlue/10 bg-white p-4">
              Instantly texts back missed callers
            </li>
            <li className="rounded-2xl border border-brandBlue/10 bg-white p-4">
              Captures job details before you pick up
            </li>
            <li className="rounded-2xl border border-brandBlue/10 bg-white p-4">
              Qualifies emergency versus standard work
            </li>
            <li className="rounded-2xl border border-brandBlue/10 bg-white p-4">
              Reduces admin time
            </li>
            <li className="rounded-2xl border border-brandBlue/10 bg-white p-4 sm:col-span-2">
              Turns website traffic into booked jobs and scales as your crew
              grows
            </li>
          </ul>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
