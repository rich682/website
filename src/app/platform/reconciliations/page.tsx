import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Auto-Reconcile | Vergo",
  description: "Automate account reconciliations with AI-powered matching, variance detection, and period-end sign-off. Close faster with confidence.",
};

const features = [
  {
    title: "AI-Powered Reconciliations",
    description: "Vergo automatically matches transactions across bank statements, general ledgers, and subledgers. AI learns your patterns and handles routine matching -- your team only reviews the exceptions.",
    image: "/images/platform/reconciliations/reconciliations-1.png",
    bullets: [
      "94% auto-match rate across bank feeds and GL",
      "AI learns your matching rules over time",
      "Exception-only review workflow",
    ],
  },
  {
    title: "PDF vs. Excel Capabilities",
    description: "Import data from any source -- PDF bank statements, Excel exports, CSV files. Vergo AI extracts, structures, and normalizes the data automatically so you can reconcile without manual data entry.",
    image: "/images/platform/reconciliations/reconciliations-2.png",
    bullets: [
      "AI extracts line items from PDF statements",
      "Direct Excel and CSV import with auto-mapping",
      "Normalize data across formats in seconds",
    ],
  },
  {
    title: "AI Analysis & Risk Report",
    description: "Every reconciliation generates an AI-powered risk report. Surface unusual variances, missing entries, and duplicate transactions before the books close -- not after.",
    image: "/images/platform/reconciliations/reconciliations-3.png",
    bullets: [
      "Risk scoring across all reconciled accounts",
      "Flag unusual variances and duplicate transactions",
      "Period-over-period trend analysis and audit trail",
    ],
  },
];

export default function ReconciliationsPage() {
  return (
    <FeatureLandingPage
      badge="Auto-Reconcile"
      title="Reconcile faster. Close with confidence."
      subtitle="AI-powered transaction matching, real-time variance detection, and structured sign-off workflows that make every close cleaner and faster."
      features={features}
    />
  );
}
