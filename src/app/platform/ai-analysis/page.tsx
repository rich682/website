import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "AI Analysis | Vergo",
  description: "Native AI engine that learns from your data to automate coding, detect anomalies, and provide intelligent insights across every module.",
};

const features = [
  {
    title: "Intelligent Automation",
    description: "AI learns from your historical coding patterns, approval workflows, and reconciliation rules to automate routine tasks. The more you use Vergo, the smarter it gets.",
    image: "/images/platform/ai-analysis/ai-analysis-1.png",
    bullets: [
      "Auto-codes transactions based on historical patterns",
      "Predicts GL accounts, departments, and cost centers",
      "Learns from corrections and improves over time",
    ],
  },
  {
    title: "Anomaly Detection",
    description: "Spot unusual patterns, duplicate entries, and potential errors before they become problems. AI continuously monitors your data across all modules for outliers and inconsistencies.",
    image: "/images/platform/ai-analysis/ai-analysis-2.png",
    bullets: [
      "Flags duplicate invoices and suspicious transactions",
      "Detects variance anomalies in reconciliations",
      "Identifies unusual spending patterns in expenses",
    ],
  },
  {
    title: "Smart Insights & Recommendations",
    description: "Get proactive suggestions for process improvements, workflow optimizations, and bottleneck resolution. AI analyzes your close cycle to surface what matters most.",
    image: "/images/platform/ai-analysis/ai-analysis-3.png",
    bullets: [
      "Identifies process bottlenecks and delays",
      "Recommends approval workflow optimizations",
      "Surfaces actionable insights from your close cycle",
    ],
  },
];

export default function AIAnalysisPage() {
  return (
    <FeatureLandingPage
      badge="AI Analysis"
      title="The intelligence layer powering your entire platform."
      subtitle="Native AI that learns from your data, automates routine work, and surfaces insights across every module. Built specifically for accounting workflows."
      features={features}
    />
  );
}
