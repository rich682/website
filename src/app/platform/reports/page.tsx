import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Reports | Vergo",
  description: "Generate period-based reports with formulas, comparisons, and AI-powered insights. Pull data directly from auto-requests and other modules.",
};

const features = [
  {
    title: "Period-Based Reporting",
    description: "Generate reports tied to specific accounting periods. Compare month-over-month or year-over-year with structured layouts.",
    image: "/images/platform/reports/reports-1.png",
    bullets: [
      "Reports tied to accounting periods",
      "Month-over-month and YoY comparisons",
      "Structured, repeatable layouts",
    ],
  },
  {
    title: "AI Insights & Anomalies",
    description: "Vergo AI flags anomalies, highlights trends, and surfaces insights. Catch issues before they become problems.",
    image: "/images/platform/reports/reports-3.png",
    bullets: [
      "Automatic anomaly detection",
      "Trend analysis across periods",
      "AI-generated commentary and flags",
    ],
  },
  {
    title: "Excel Export",
    description: "Export any report to Excel with a single click. Formatting, formulas, and structure are preserved for easy sharing with clients and partners.",
    image: "/images/platform/reports/reports-4.png",
    bullets: [
      "One-click Excel export",
      "Formatting and formulas preserved",
      "Shareable links for read-only access",
    ],
  },
];

export default function ReportsPage() {
  return (
    <FeatureLandingPage
      badge="Reports"
      title="Reports that build themselves."
      subtitle="Period-based reporting with AI insights and one-click Excel export."
      features={features}
    />
  );
}
