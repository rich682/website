import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Reconciliations | Vergo",
  description: "Automate account reconciliations with AI-powered matching, variance detection, and period-end sign-off. Close faster with confidence.",
};

const features = [
  {
    title: "AI-Powered Transaction Matching",
    description: "Vergo automatically matches transactions across accounts, bank feeds, and subledgers. AI learns your patterns and handles the routine matching so your team only reviews exceptions.",
    image: "/images/platform/reconciliations/reconciliations-1.png",
    bullets: [
      "Automatic matching across bank feeds and GL",
      "AI learns your matching rules over time",
      "Exception-only review workflow",
    ],
  },
  {
    title: "Variance Detection & Alerts",
    description: "Surface discrepancies the moment they appear, not at the end of the close. AI flags unexpected variances, missing entries, and balance mismatches so your team can investigate before deadlines hit.",
    image: "/images/platform/reconciliations/reconciliations-2.png",
    bullets: [
      "Real-time variance detection across accounts",
      "Threshold-based alerts for material differences",
      "Period-over-period trend analysis",
    ],
  },
  {
    title: "Period-End Sign-Off",
    description: "Track every reconciliation to completion with structured sign-off workflows. Managers review, approve, and lock reconciliations per period -- creating a clean audit trail for every account.",
    image: "/images/platform/reconciliations/reconciliations-3.png",
    bullets: [
      "Structured approval workflows per account",
      "Lock reconciliations after manager sign-off",
      "Complete audit trail of every review and approval",
    ],
  },
];

export default function ReconciliationsPage() {
  return (
    <FeatureLandingPage
      badge="Reconciliations"
      title="Reconcile faster. Close with confidence."
      subtitle="AI-powered transaction matching, real-time variance detection, and structured sign-off workflows that make every close cleaner and faster."
      features={features}
    />
  );
}
