import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Vergo for AP Managers | Vergo",
  description: "AI-powered invoice processing, configurable approval workflows, and centralized expense management. From receipt to ledger in minutes.",
};

const IMAGES = "/images/solutions/ap-manager/sol";

const features = [
  {
    title: "AI-Powered Invoice Processing",
    description: "Receive invoices via email or upload and let AI handle the rest. Vergo extracts vendor, amount, line items, and due dates automatically -- then suggests GL codes based on vendor history. Duplicates are caught before they become double payments.",
    image: `${IMAGES}-1.png`,
    bullets: [
      "AI extracts all key fields from every invoice",
      "Smart GL coding based on vendor history",
      "Automatic duplicate detection and flagging",
    ],
  },
  {
    title: "Configurable Approval Workflows",
    description: "Build multi-step approval chains based on amount, vendor, or department. Approvers are notified automatically and can review and act in one click -- no email threads, no lost approvals.",
    image: `${IMAGES}-2.png`,
    bullets: [
      "Multi-step chains by amount, vendor, or department",
      "One-click approve or reject with audit trail",
      "Automatic routing and escalation for stalled approvals",
    ],
  },
  {
    title: "Centralized Expense Management",
    description: "Centralize every expense submission with receipt OCR, automatic categorization, and configurable reimbursement workflows. Maintain a clean vendor directory with payment terms, contact info, and full interaction history.",
    image: `${IMAGES}-3.png`,
    bullets: [
      "Receipt OCR with automatic categorization",
      "Vendor directory with terms and history",
      "Configurable reimbursement workflows",
    ],
  },
];

export default function APManagerPage() {
  return (
    <FeatureLandingPage
      badge="For AP Managers"
      title="Invoices and expenses, under control."
      subtitle="AI-powered invoice processing, configurable approval workflows, and centralized expense management -- from receipt to ledger in minutes."
      features={features}
    />
  );
}
