import { FeaturePageLayout } from "@/components/sections/FeaturePageLayout";

export const metadata = {
  title: "Tasks | Vergo",
  description: "Track work, assign owners, and close on time. One list. Every task. Complete visibility.",
};

export default function TasksPage() {
  return (
    <FeaturePageLayout
      badge="Tasks"
      title="Month-end close, finally under control."
      subtitle="One list. Every task. Complete visibility."
      problemTitle="Spreadsheets weren't built for close."
      problemDescription="You're tracking tasks in Excel, status in email, and deadlines in your head. When something slips, you don't know until it's too late. Your close process deserves better than a patchwork of tools."
      howItWorks={[
        {
          title: "Create tasks with clear owners",
          description: "Organize your close tasks by category — reconciliations, accruals, reports, and more. Every task has a clear owner.",
        },
        {
          title: "Assign to team members or external parties",
          description: "Tasks can be assigned to your team or external stakeholders who need to provide information.",
        },
        {
          title: "Track completion in real-time",
          description: "See exactly where you stand at any moment. No more asking around or checking multiple systems.",
        },
        {
          title: "See what's overdue at a glance",
          description: "Overdue items surface automatically. Know what needs attention before it becomes a problem.",
        },
      ]}
      outcomes={[
        "Close faster with fewer surprises",
        "Know exactly where you stand at any moment",
        'Stop asking "did this get done?"',
        "Build repeatable processes that scale",
      ]}
      ctaText="Start tracking tasks →"
      icon={
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      }
    />
  );
}
