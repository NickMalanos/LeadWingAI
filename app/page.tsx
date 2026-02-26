import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";

export const metadata: Metadata = {
  title: "LeadWing | AI Chatbots for Local Service Businesses",
  description:
    "AI chatbots that help local service businesses capture, qualify, and convert leads automatically.",
  openGraph: {
    title: "LeadWing",
    description:
      "Never lose another lead. AI chatbots for local service businesses.",
    type: "website"
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}
