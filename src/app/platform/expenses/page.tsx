import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Expense Management | Vergo",
  description: "Streamline expense tracking, approvals, and reimbursements with AI coding and automated workflows.",
};

const features = [
  {
    title: "Expense Submission",
    description: "Team members submit expenses with receipts, descriptions, and categories. Clients can submit via email or a simple web form.",
    image: "/images/platform/expenses/expenses-1.png",
    bullets: [
      "Submit via web, email, or mobile",
      "Attach receipts and supporting docs",
      "Category and description fields",
    ],
  },
  {
    title: "AI Coding & Categorization",
    description: "Vergo AI reads receipts and bank descriptions to suggest GL codes, departments, and expense categories. Review and approve with one click.",
    image: "/images/platform/expenses/expenses-2.png",
    bullets: [
      "AI suggests GL codes and departments",
      "Learn from your coding patterns over time",
      "One-click approve or override",
    ],
  },
  {
    title: "Approval Workflows",
    description: "Configure multi-step approval chains. Set dollar thresholds, required approvers, and automatic routing rules for different expense types.",
    image: "/images/platform/expenses/expenses-3.png",
    bullets: [
      "Multi-step approval chains",
      "Dollar threshold routing",
      "Automatic notifications to approvers",
    ],
  },
];

export default function ExpensesPage() {
  return (
    <FeatureLandingPage
      badge="Expense Management"
      title="Expenses, coded and approved in minutes."
      subtitle="AI-powered expense management with receipt OCR, automatic coding, and configurable approval workflows."
      features={features}
    />
  );
}
