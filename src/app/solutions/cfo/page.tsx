import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Vergo for CFOs | Vergo",
  description: "Get real-time visibility into your entire accounting operation. Track deadlines, spot risks, and make confident decisions with AI-powered insights.",
};

const IMAGES = "/images/solutions/cfo/sol";

const features = [
  {
    title: "Executive Dashboard",
    description: "See the status of every engagement, every period, and every team member from a single view. No more chasing managers for updates.",
    image: `${IMAGES}-1.png`,
  },
  {
    title: "Risk Visibility",
    description: "AI flags at-risk engagements based on completion rates, overdue requests, and client responsiveness. See problems before they become crises.",
    image: `${IMAGES}-2.png`,
  },
  {
    title: "Period Reports & Insights",
    description: "AI-powered reports with trend analysis, anomaly detection, and period-over-period comparisons. Export to Excel or share with stakeholders.",
    image: `${IMAGES}-3.png`,
  },
  {
    title: "Deadline Tracking",
    description: "Every filing deadline, every client deliverable, and every internal milestone in one timeline. Never be surprised by a missed deadline.",
    image: `${IMAGES}-4.png`,
  },
  {
    title: "Audit Trail",
    description: "Complete visibility into who did what and when. Every request, response, approval, and document change is logged and searchable.",
    image: `${IMAGES}-5.png`,
  },
  {
    title: "Team Utilization",
    description: "Understand workload distribution across your accounting team. Identify bottlenecks and reallocate resources before deadlines are at risk.",
    image: `${IMAGES}-6.png`,
  },
];

export default function CFOPage() {
  return (
    <FeatureLandingPage
      badge="For CFOs"
      title="Full visibility into your accounting operation."
      subtitle="Track every engagement, spot risks early, and make confident decisions with real-time data and AI-powered insights."
      features={features}
    />
  );
}
