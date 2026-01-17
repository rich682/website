import { FeaturePageLayout } from "@/components/sections/FeaturePageLayout";

export const metadata = {
  title: "Automated Reminders | Vergo",
  description: "Stop writing 'just following up' emails. Automated reminders that actually get responses.",
};

export default function RemindersPage() {
  return (
    <FeaturePageLayout
      badge="Automated Reminders"
      title='Stop writing "just following up."'
      subtitle="Automated reminders that actually get responses."
      problemTitle="Manual follow-ups don't scale."
      problemDescription="You send the first email. Then the second. Then the third. By the time they respond, you've lost hours and your patience. Following up manually is exhausting, and it doesn't get easier as your team grows."
      howItWorks={[
        {
          title: "Set reminder schedules per request",
          description: "Define how often and when reminders should go out. Daily, weekly, or custom schedules based on urgency.",
        },
        {
          title: "Personalize messages with spreadsheet data",
          description: "Import your contact data and personalize every message. Make automated emails feel human.",
        },
        {
          title: "Track who's responded and who hasn't",
          description: "See response status at a glance. Know exactly who still owes you information.",
        },
        {
          title: "Escalate automatically when deadlines pass",
          description: "When someone misses a deadline, escalate to their manager or the right stakeholder automatically.",
        },
      ]}
      outcomes={[
        "Reclaim hours spent on follow-up emails",
        "Get responses without being the bad guy",
        "Never miss a deadline because someone forgot",
        "Scale your follow-up capacity without adding headcount",
      ]}
      ctaText="Automate your first reminder →"
      icon={
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      }
    />
  );
}
