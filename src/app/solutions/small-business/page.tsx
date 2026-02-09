import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Vergo for Small Business | Vergo",
  description: "Scale your accounting practice without hiring. AI handles the follow-ups, classification, and reminders so you can focus on the work that matters.",
};

const IMAGES = "/images/solutions/small-business/sol";

const features = [
  {
    title: "Scale Without Hiring",
    description: "AI handles client follow-ups, response classification, and reconciliation reminders automatically. Take on more clients without adding headcount -- Vergo does the work that used to require another person.",
    image: `${IMAGES}-1.png`,
    bullets: [
      "Automated follow-ups free up hours every week",
      "AI classifies and organizes client responses",
      "Handle more clients with the same team",
    ],
  },
  {
    title: "Setup in Minutes, Not Months",
    description: "No complex onboarding, no training, no IT department required. Connect your email, create your first board, and send your first auto-request in under 10 minutes. Clients respond via email -- they never need to log in.",
    image: `${IMAGES}-2.png`,
    bullets: [
      "Up and running in under 10 minutes",
      "Zero training required for your team or clients",
      "Full audit trail from day one -- no extra setup",
    ],
  },
  {
    title: "One Platform, Not Ten Tools",
    description: "Replace the patchwork of spreadsheets, email folders, shared drives, and sticky notes with one integrated platform. Tasks, auto-requests, reconciliations, expenses, and invoices -- all in one place.",
    image: `${IMAGES}-3.png`,
    bullets: [
      "Everything in one place instead of scattered tools",
      "Grows with you from solo practitioner to firm",
      "Affordable pricing without enterprise complexity",
    ],
  },
];

export default function SmallBusinessPage() {
  return (
    <FeatureLandingPage
      badge="Small Business"
      title="Do more with less. Scale without hiring."
      subtitle="AI-powered automation that lets you take on more clients without adding headcount. Set up in minutes, not months."
      features={features}
    />
  );
}
