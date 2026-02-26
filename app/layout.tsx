import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnalyticsPlaceholder from "@/components/metrics/AnalyticsPlaceholder";
import VoiceflowWidget from "@/components/chat/VoiceflowWidget";

export const metadata: Metadata = {
  title: "LeadWing | AI Chatbots for Local Service Businesses",
  description:
    "LeadWing provides AI chatbots that help local service businesses capture, qualify, and convert leads automatically.",
  openGraph: {
    title: "LeadWing",
    description:
      "AI chatbots for local service businesses. Capture leads, book jobs, and answer enquiries 24/7.",
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
      <body className="min-h-screen bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <AnalyticsPlaceholder />
        <VoiceflowWidget />
      </body>
    </html>
  );
}
