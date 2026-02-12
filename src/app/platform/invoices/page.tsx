import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "AP Automation | Vergo",
  description: "Automate invoice processing, approval workflows, and accounting software sync. From receipt to ledger in minutes.",
};

const features = [
  {
    title: "Invoice Capture",
    description: "Receive invoices via email, form upload, or manual entry. AI extracts vendor, amount, line items, and due dates automatically.",
    image: "/images/platform/invoices/invoices-1.png",
    bullets: [
      "Email, upload, and manual capture",
      "AI extracts all key fields",
      "Automatic vendor matching",
    ],
  },
  {
    title: "AI Data Extraction",
    description: "Vergo AI reads invoices and extracts structured data -- vendor name, invoice number, line items, tax amounts, and payment terms.",
    image: "/images/platform/invoices/invoices-2.png",
    bullets: [
      "Line item extraction",
      "Tax and payment term detection",
      "Confidence scoring per field",
    ],
  },
  {
    title: "Approval Workflows",
    description: "Route invoices through configurable approval chains based on amount, vendor, or department. Approvers get notifications and can act in one click.",
    image: "/images/platform/invoices/invoices-3.png",
    bullets: [
      "Configurable approval chains",
      "Amount and vendor-based routing",
      "One-click approve or reject",
    ],
  },
];

export default function InvoicesPage() {
  return (
    <FeatureLandingPage
      badge="AP Automation"
      title="From inbox to ledger, automated."
      subtitle="AI-powered invoice processing with data extraction, smart coding, approval workflows, and accounting software sync."
      features={features}
    />
  );
}
