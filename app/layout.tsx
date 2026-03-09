import type { Metadata } from "next";
import "./globals.css";
import "./demo-section.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnalyticsPlaceholder from "@/components/metrics/AnalyticsPlaceholder";
import VoiceflowWidget from "@/components/chat/VoiceflowWidget";

export const metadata: Metadata = {
  title: "Leadwing | Lead Infrastructure for Franchise Networks",
  description:
    "Leadwing closes the Response Gap across your franchise network. Every lead captured, qualified, and routed in under 90 seconds. 24/7.",
  openGraph: {
    title: "Leadwing",
    description:
      "Lead infrastructure for franchise networks. Every lead. Every location. Responded to in under 90 seconds.",
    type: "website",
    locale: "en_AU",
  },
  metadataBase: new URL("https://leadwing.ai"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@400;500&family=Geist:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
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
