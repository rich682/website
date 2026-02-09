import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Vergo for Mid Market | Vergo",
  description: "Scale your accounting operations with multi-entity management, team collaboration, and AI-powered automation that grows with your business.",
};

const IMAGES = "/images/solutions/mid-market/sol";

const features = [
  {
    title: "Multi-Entity Management",
    description: "Manage multiple entities, subsidiaries, or client groups from a single workspace. Separate boards per entity with consolidated reporting -- without the chaos of switching between tools or spreadsheets.",
    image: `${IMAGES}-1.png`,
    bullets: [
      "One workspace across all entities and subsidiaries",
      "Cross-entity reporting and comparisons",
      "Consolidated view without losing per-entity detail",
    ],
  },
  {
    title: "Scale Without Chaos",
    description: "As your client base and team grow, Vergo keeps pace. Auto-requests, reminders, and AI classification handle the volume automatically -- so your team focuses on accounting, not administration.",
    image: `${IMAGES}-2.png`,
    bullets: [
      "AI handles growing volume of client interactions",
      "Automated reminders and follow-ups at scale",
      "Response classification without manual sorting",
    ],
  },
  {
    title: "Team Collaboration & Controls",
    description: "Role-based permissions ensure everyone sees exactly what they need. Configurable approval chains for expenses, invoices, and document reviews keep quality high as your team grows.",
    image: `${IMAGES}-3.png`,
    bullets: [
      "Role-based permissions across teams and entities",
      "Multi-step approval workflows for expenses and invoices",
      "Team workload visibility and task reassignment",
    ],
  },
];

export default function MidMarketPage() {
  return (
    <FeatureLandingPage
      badge="Mid Market"
      title="Scale your operations, not your overhead."
      subtitle="Multi-entity management, AI-powered automation, and team collaboration that grows with your business -- without adding complexity."
      features={features}
    />
  );
}
