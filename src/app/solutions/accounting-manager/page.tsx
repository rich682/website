import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Vergo for Accounting Managers | Vergo",
  description: "Keep your team on track with clear task assignments, automated request tracking, and real-time visibility into every deadline.",
};

const IMAGES = "/images/solutions/accounting-manager/sol";

const features = [
  {
    title: "Team Workload Management",
    description: "See who is working on what across every client and period. Balance workloads, reassign tasks, and prevent burnout before deadlines hit.",
    image: `${IMAGES}-1.png`,
  },
  {
    title: "Request Tracking",
    description: "Send requests to clients and track every response automatically. AI classifies replies, flags missing items, and drafts follow-ups.",
    image: `${IMAGES}-2.png`,
  },
  {
    title: "Deadline Dashboard",
    description: "Every deadline for every client in one view. Filter by team member, client, or period. Color-coded urgency so nothing gets missed.",
    image: `${IMAGES}-3.png`,
  },
  {
    title: "Automated Follow-Ups",
    description: "Stop manually chasing clients. Set reminder schedules and let Vergo AI send polite, context-aware follow-up emails on your team's behalf.",
    image: `${IMAGES}-4.png`,
  },
  {
    title: "Kanban Task Boards",
    description: "Drag-and-drop task boards for every engagement. Your team sees exactly what to work on next, with clear stages from start to close.",
    image: `${IMAGES}-5.png`,
  },
  {
    title: "Completion Tracking",
    description: "Real-time progress bars per client, per task, and per period. Know exactly where you stand without asking anyone for a status update.",
    image: `${IMAGES}-6.png`,
  },
];

export default function AccountingManagerPage() {
  return (
    <FeatureLandingPage
      badge="For Accounting Managers"
      title="Keep your team on track, every day."
      subtitle="Manage workloads, automate client follow-ups, and see real-time progress across every engagement and deadline."
      features={features}
    />
  );
}
