import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Vergo for Accounting Managers | Vergo",
  description: "Keep your team on track with workload visibility, automated client follow-ups, and real-time progress tracking across every engagement.",
};

const IMAGES = "/images/solutions/accounting-manager/sol";

const features = [
  {
    title: "Team Workload Visibility",
    description: "See who is working on what across every client and period from a single view. Balance workloads, reassign tasks, and prevent burnout before deadlines hit -- without asking your team for status updates.",
    image: `${IMAGES}-1.png`,
    bullets: [
      "Per-team-member workload across all engagements",
      "Drag-and-drop task reassignment",
      "Prevent bottlenecks before they affect deadlines",
    ],
  },
  {
    title: "Automated Client Follow-Ups",
    description: "Stop spending hours chasing clients for documents and responses. Send auto-requests once and let Vergo AI handle the rest -- classifying replies, flagging missing items, and sending polite, context-aware reminders.",
    image: `${IMAGES}-2.png`,
    bullets: [
      "AI classifies every client response automatically",
      "Context-aware reminder emails on your team's behalf",
      "Escalation rules for overdue and unresponsive clients",
    ],
  },
  {
    title: "Deadline & Progress Tracking",
    description: "Every deadline for every client in one view with real-time completion percentages. Filter by team member, client, or period. Know exactly where you stand without asking anyone.",
    image: `${IMAGES}-3.png`,
    bullets: [
      "Real-time progress bars per client and per period",
      "Color-coded urgency so nothing gets missed",
      "Filter and sort by team member, client, or deadline",
    ],
  },
];

export default function AccountingManagerPage() {
  return (
    <FeatureLandingPage
      badge="For Accounting Managers"
      title="Keep your team on track, every day."
      subtitle="Workload visibility, automated client follow-ups, and real-time progress tracking -- so your team hits every deadline without the chaos."
      features={features}
    />
  );
}
