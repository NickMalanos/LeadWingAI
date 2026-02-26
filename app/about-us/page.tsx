import type { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About Us | LeadWing",
  description:
    "Our mission is to help local service businesses capture every lead and grow with less admin.",
  openGraph: {
    title: "About Us | LeadWing",
    description:
      "LeadWing helps local service businesses capture every lead and grow with less admin.",
    type: "website"
  }
};

export default function AboutUsPage() {
  return <AboutContent />;
}
