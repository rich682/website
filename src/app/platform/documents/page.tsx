import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Documents | Vergo",
  description: "Collect, track, and manage every document from email, forms, or manual uploads. Never chase a missing file again.",
};

const features = [
  {
    title: "Multi-Source Collection",
    description: "Collect documents via email reply, form uploads, or manual drag-and-drop. Every file ends up in one organized place.",
    image: "/images/platform/documents/documents-1.png",
    bullets: [
      "Email, form, and drag-and-drop ingestion",
      "Automatic attachment extraction",
      "Centralized document hub per client",
    ],
  },
  {
    title: "Automatic Verification",
    description: "AI checks received documents against your auto-request list. Know immediately whether a client sent the right file or if something is missing.",
    image: "/images/platform/documents/documents-2.png",
    bullets: [
      "AI matches documents to auto-request items",
      "Missing document alerts",
      "Duplicate file detection",
    ],
  },
  {
    title: "Organized by Client & Period",
    description: "Documents are automatically filed by client and accounting period. No more digging through shared drives or inboxes to find what you need.",
    image: "/images/platform/documents/documents-3.png",
    bullets: [
      "Auto-filed by client and period",
      "Folder structure mirrors your workflow",
      "Version history for every document",
    ],
  },
  {
    title: "Search & Preview",
    description: "Full-text search across all documents. Preview PDFs, images, and spreadsheets without leaving Vergo.",
    image: "/images/platform/documents/documents-4.png",
    bullets: [
      "Full-text search across all files",
      "In-app PDF, image, and spreadsheet preview",
      "Filter by client, period, or document type",
    ],
  },
];

export default function DocumentsPage() {
  return (
    <FeatureLandingPage
      badge="Documents"
      title="Every document, one place."
      subtitle="Collect, verify, and organize client documents automatically. From email attachments to form uploads, nothing falls through the cracks."
      features={features}
    />
  );
}
