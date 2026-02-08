import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Task Management | Vergo",
  description: "Organize your accounting work into period-based boards with AI-powered task tracking, Kanban views, and smart automation.",
};

const features = [
  {
    title: "Period-Based Boards",
    description: "Organize work by month, quarter, or year-end. Each board maps to an accounting period, giving your team a clear view of deadlines and progress.",
    image: "/images/platform/task-management/task-management-1.png",
    bullets: [
      "Monthly, quarterly, and annual period boards",
      "One board per client or per engagement",
      "Roll forward tasks between periods automatically",
    ],
  },
  {
    title: "Kanban & List Views",
    description: "Switch between Kanban boards, list views, and table views. Drag and drop tasks between stages, filter by assignee, and sort by priority.",
    image: "/images/platform/task-management/task-management-2.png",
    bullets: [
      "Drag-and-drop between stages",
      "Filter by assignee, status, or priority",
      "Multiple view modes for every workflow",
    ],
  },
  {
    title: "AI Task Suggestions",
    description: "Vergo AI analyzes incoming responses and suggests task completions, flagging items that may need attention before you even check.",
    image: "/images/platform/task-management/task-management-3.png",
    bullets: [
      "AI flags tasks ready to close",
      "Smart suggestions from client responses",
      "Proactive risk alerts on overdue items",
    ],
  },
  {
    title: "Progress Tracking",
    description: "See real-time completion percentages per board and per client. Know exactly where you stand in every accounting period at a glance.",
    image: "/images/platform/task-management/task-management-4.png",
    bullets: [
      "Real-time completion percentages",
      "Per-client and per-period dashboards",
      "Team-level workload visibility",
    ],
  },
];

export default function TaskManagementPage() {
  return (
    <FeatureLandingPage
      badge="Task Management"
      title="Organize every close, every period."
      subtitle="Period-based boards with AI-powered task management. Never lose track of where your team stands on any engagement."
      features={features}
    />
  );
}
