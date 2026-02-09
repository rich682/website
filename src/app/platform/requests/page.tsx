import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Auto-Requests | Vergo",
  description: "Send smart auto-requests, track every response with AI, and automate follow-ups. Stop chasing clients and start closing tasks.",
};

const features = [
  {
    title: "Smart Auto-Request Builder",
    description: "Create structured auto-requests with specific line items. Clients see exactly what you need, broken down clearly so nothing gets missed.",
    image: "/images/platform/requests/requests-1.png",
    bullets: [
      "Structured line items per auto-request",
      "Templates for recurring auto-request types",
      "Attach reference documents inline",
    ],
  },
  {
    title: "AI Inbox & Classification",
    description: "Every client reply is automatically ingested and classified by AI. Responses, questions, acknowledgments, and attachments are sorted instantly.",
    image: "/images/platform/requests/requests-2.png",
    bullets: [
      "Automatic email ingestion",
      "AI classifies response type and completeness",
      "Attachments extracted and filed automatically",
    ],
  },
  {
    title: "Completion & Risk Scoring",
    description: "AI analyzes each response against your auto-request and calculates a completion percentage and risk level. Know at a glance what still needs attention.",
    image: "/images/platform/requests/requests-3.png",
    bullets: [
      "Per-item completion tracking",
      "Risk scoring based on responsiveness",
      "Visual status indicators across all auto-requests",
    ],
  },
  {
    title: "Automated Reminders",
    description: "Set follow-up schedules and let Vergo handle the rest. AI drafts polite, context-aware reminder emails on your behalf.",
    image: "/images/platform/requests/requests-4.png",
    bullets: [
      "Configurable reminder schedules",
      "AI-drafted follow-up emails",
      "Escalation rules for overdue items",
    ],
  },
];

export default function RequestsPage() {
  return (
    <FeatureLandingPage
      badge="Auto-Requests"
      title="Send once. AI tracks every response."
      subtitle="Smart auto-requests with automatic follow-ups, AI classification, and completion tracking. Your clients never need to log in."
      features={features}
    />
  );
}
