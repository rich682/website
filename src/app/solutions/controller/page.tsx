import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Vergo for Controllers | Vergo",
  description: "Manage every close with precision. Repeatable checklists, AI-powered accuracy checks, and approval gates that enforce quality every period.",
};

const IMAGES = "/images/solutions/controller/sol";

const features = [
  {
    title: "Repeatable Close Process",
    description: "Build close checklists tied to accounting periods and roll them forward with one click. Every task, deliverable, and review step is tracked -- so nothing falls through the cracks, period after period.",
    image: `${IMAGES}-1.png`,
    bullets: [
      "Period-based checklists for monthly, quarterly, and annual closes",
      "One-click roll forward of tasks and auto-requests",
      "Period-over-period comparison to track process improvement",
    ],
  },
  {
    title: "AI-Powered Accuracy",
    description: "AI flags discrepancies and anomalies across reports during the close -- not after the books are published. Reconciliation completeness is verified automatically so you know exactly what is matched, pending, or flagged.",
    image: `${IMAGES}-2.png`,
    bullets: [
      "Automatic anomaly and discrepancy detection",
      "AI-verified reconciliation completeness per engagement",
      "Catch errors during close, not after publication",
    ],
  },
  {
    title: "Review & Approval Gates",
    description: "Enforce quality standards with configurable approval gates. Review every auto-request, response, and reconciliation before tasks are marked complete. Nothing moves forward without your sign-off.",
    image: `${IMAGES}-3.png`,
    bullets: [
      "Configurable approval gates at every stage",
      "Full review of responses and reconciliations before close",
      "Audit trail of every review decision and approval",
    ],
  },
];

export default function ControllerPage() {
  return (
    <FeatureLandingPage
      badge="For Controllers"
      title="Close with precision, every period."
      subtitle="Repeatable close checklists, AI-powered accuracy checks, and approval gates that enforce quality -- so every close is clean, complete, and on time."
      features={features}
    />
  );
}
