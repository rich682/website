import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Vergo for AP Managers | Vergo",
  description: "Streamline invoice processing, expense approvals, and vendor management with AI-powered automation and configurable workflows.",
};

const IMAGES = "/images/solutions/ap-manager/sol";

const features = [
  {
    title: "Invoice Processing",
    description: "Receive invoices via email or upload. AI extracts vendor, amount, line items, and due dates automatically -- no manual data entry.",
    image: `${IMAGES}-1.png`,
  },
  {
    title: "AI Coding",
    description: "Vergo AI suggests GL codes, departments, and cost centers based on vendor history and invoice content. Review and approve with one click.",
    image: `${IMAGES}-2.png`,
  },
  {
    title: "Approval Workflows",
    description: "Configure multi-step approval chains based on amount, vendor, or department. Approvers are notified automatically and can act in one click.",
    image: `${IMAGES}-3.png`,
  },
  {
    title: "Expense Management",
    description: "Centralize expense submissions with receipt OCR, automatic categorization, and configurable reimbursement workflows.",
    image: `${IMAGES}-4.png`,
  },
  {
    title: "Duplicate Detection",
    description: "AI checks every incoming invoice against existing records to prevent double payments. Flagged duplicates are held for review.",
    image: `${IMAGES}-5.png`,
  },
  {
    title: "Vendor Database",
    description: "Maintain a structured vendor database with payment terms, contact info, and history. Vergo deduplicates records and tracks every interaction.",
    image: `${IMAGES}-6.png`,
  },
];

export default function APManagerPage() {
  return (
    <FeatureLandingPage
      badge="For AP Managers"
      title="Invoices and expenses, under control."
      subtitle="AI-powered invoice processing, configurable approval workflows, duplicate detection, and a centralized vendor database."
      features={features}
    />
  );
}
