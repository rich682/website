import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Vergo for Controllers | Vergo",
  description: "Manage every close with precision. Track tasks, enforce processes, and ensure accuracy across every period with AI-powered oversight.",
};

const IMAGES = "/images/solutions/controller/sol";

const features = [
  {
    title: "Close Management",
    description: "Build repeatable close checklists tied to accounting periods. Every task, every deliverable, every review step tracked in one place.",
    image: `${IMAGES}-1.png`,
  },
  {
    title: "Accuracy & Reconciliation",
    description: "AI flags discrepancies and anomalies across reports and databases. Catch errors during the close, not after the books are published.",
    image: `${IMAGES}-2.png`,
  },
  {
    title: "Review & Oversight",
    description: "Review every request, response, and document before tasks are marked complete. Set approval gates to enforce quality standards.",
    image: `${IMAGES}-3.png`,
  },
  {
    title: "Recurring Period Templates",
    description: "Create templates for monthly, quarterly, and annual closes. Roll forward tasks, requests, and checklists with one click.",
    image: `${IMAGES}-4.png`,
  },
  {
    title: "Document Completeness",
    description: "See at a glance which documents have been received, which are pending, and which are overdue. AI verifies documents match what was requested.",
    image: `${IMAGES}-5.png`,
  },
  {
    title: "Period-Over-Period Comparison",
    description: "Compare current close progress against prior periods. Identify which areas are improving and which need process changes.",
    image: `${IMAGES}-6.png`,
  },
];

export default function ControllerPage() {
  return (
    <FeatureLandingPage
      badge="For Controllers"
      title="Close with precision, every period."
      subtitle="Manage every step of the close process with repeatable checklists, AI-powered accuracy checks, and full oversight of your team's work."
      features={features}
    />
  );
}
