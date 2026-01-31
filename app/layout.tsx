import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnalyticsPlaceholder from "@/components/metrics/AnalyticsPlaceholder";

export const metadata: Metadata = {
  title: "LeadWing AI | AI Chatbots for Tradies",
  description:
    "LeadWing provides AI chatbots that help trades and service businesses capture, qualify, and convert leads automatically.",
  openGraph: {
    title: "LeadWing AI",
    description:
      "AI chatbots for Australian tradies to capture leads, book jobs, and answer FAQs 24/7.",
    type: "website",
    locale: "en_AU"
  },
  metadataBase: new URL("https://leadwing.ai")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <AnalyticsPlaceholder />
      </body>
    </html>
  );
}
