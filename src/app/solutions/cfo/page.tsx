import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Vergo for CFOs | Vergo",
  description: "Real-time oversight of your entire accounting operation. Spot risks, track deadlines, and get audit-ready reporting with AI-powered insights.",
};

const IMAGES = "/images/solutions/cfo/sol";

const features = [
  {
    title: "Real-Time Oversight",
    description: "See the status of every engagement, every period, and every team member from a single executive view. No more chasing managers for status updates or waiting until month-end to discover problems.",
    image: `${IMAGES}-1.png`,
    bullets: [
      "One dashboard across all engagements and periods",
      "Team utilization and workload distribution at a glance",
      "Deadline tracking with color-coded urgency indicators",
    ],
  },
  {
    title: "Risk & Audit Visibility",
    description: "AI continuously flags at-risk engagements based on completion rates, overdue auto-requests, and client responsiveness. Every action is logged in a complete audit trail -- so you are always ready for review.",
    image: `${IMAGES}-2.png`,
    bullets: [
      "AI-powered risk scoring across all engagements",
      "Complete audit trail of every action and approval",
      "Proactive alerts before issues become crises",
    ],
  },
  {
    title: "AI-Powered Reporting",
    description: "Period-over-period reports with trend analysis, anomaly detection, and AI-generated commentary. Export to Excel or share with stakeholders in one click -- no manual compilation required.",
    image: `${IMAGES}-3.png`,
    bullets: [
      "Automated trend analysis and anomaly detection",
      "Period-over-period comparisons built in",
      "One-click Excel export for board and stakeholder reporting",
    ],
  },
];

export default function CFOPage() {
  return (
    <FeatureLandingPage
      badge="For CFOs"
      title="Full visibility. Zero surprises."
      subtitle="Real-time oversight of your accounting operation with AI-powered risk detection, audit-ready reporting, and complete control over every engagement."
      features={features}
    />
  );
}
