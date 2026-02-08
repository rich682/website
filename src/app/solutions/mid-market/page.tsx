import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Vergo for Mid Market | Vergo",
  description: "Scale your accounting operations with team collaboration, multi-entity support, and AI-powered automation across every engagement.",
};

const IMAGES = "/images/solutions/mid-market/sol";

const features = [
  {
    title: "Team Collaboration",
    description: "Assign tasks, share boards, and collaborate on engagements with role-based permissions. Everyone sees exactly what they need.",
    image: `${IMAGES}-1.png`,
  },
  {
    title: "Multi-Entity Management",
    description: "Manage multiple entities, subsidiaries, or client groups from a single workspace. Separate boards and databases per entity with consolidated reporting.",
    image: `${IMAGES}-2.png`,
  },
  {
    title: "Scalable Automation",
    description: "As your client base grows, Vergo keeps pace. Automated requests, reminders, and AI classification handle the volume so your team does not have to.",
    image: `${IMAGES}-3.png`,
  },
  {
    title: "Cross-Entity Reporting",
    description: "Generate reports that span entities, compare performance across subsidiaries, and surface insights that would take hours to compile manually.",
    image: `${IMAGES}-4.png`,
  },
  {
    title: "Shared Databases",
    description: "Build databases that your entire team can access and maintain. Vendor lists, client records, and reference data stay in sync across the platform.",
    image: `${IMAGES}-5.png`,
  },
  {
    title: "Approval Workflows",
    description: "Configure approval chains for expenses, invoices, and document reviews. Multi-step approvals with automatic routing based on your business rules.",
    image: `${IMAGES}-6.png`,
  },
];

export default function MidMarketPage() {
  return (
    <FeatureLandingPage
      badge="Mid Market"
      title="Scale your accounting operations."
      subtitle="Team collaboration, multi-entity management, and AI-powered automation that grows with your business."
      features={features}
    />
  );
}
