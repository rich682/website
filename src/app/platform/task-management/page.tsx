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
    title: "Team Collaboration",
    description: "Assign tasks to team members, leave comments, share updates, and track who is working on what. Everyone stays aligned without status meetings or email chains.",
    image: "/images/platform/task-management/task-management-2.png",
    bullets: [
      "Assign and reassign tasks across your team",
      "In-context comments and activity history",
      "Real-time visibility into team workload",
    ],
  },
  {
    title: "Linked to Requests, Reports & Reconciliations",
    description: "Tasks don't live in a silo. Every task can link directly to auto-requests, reports, and reconciliations -- so your team always has the full picture without switching between tools.",
    image: "/images/platform/task-management/task-management-3.png",
    bullets: [
      "Link tasks to auto-requests, reports, and reconciliations",
      "See related items at a glance from any task",
      "Complete workflows without leaving the board",
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
