import { FeaturePageLayout } from "@/components/sections/FeaturePageLayout";

export const metadata = {
  title: "Requests | Vergo",
  description: "Send requests for documents, information, or action to anyone. Ask once. Get what you need.",
};

export default function RequestsPage() {
  return (
    <FeaturePageLayout
      badge="Requests"
      title="Ask once. Get what you need."
      subtitle="Send requests to anyone — employees, vendors, or clients."
      problemTitle="You shouldn't have to ask three times."
      problemDescription="Every request starts the same way: you send an email, wait, follow up, wait again, escalate. By the time you get what you need, you've spent more time chasing than working. There has to be a better way."
      howItWorks={[
        {
          title: "Create a request for anything",
          description: "Documents, information, approvals, action items — create a request for whatever you need and assign it to anyone.",
        },
        {
          title: "Send to anyone, inside or outside your company",
          description: "Requests work for employees, vendors, clients, or anyone with an email address. No login required for recipients.",
        },
        {
          title: "Set deadlines and let Vergo follow up",
          description: "Define when you need it and Vergo handles the reminders. Escalate automatically when deadlines pass.",
        },
        {
          title: "Track responses in one place",
          description: "See who's responded, who hasn't, and what's overdue. All in one dashboard, not scattered across your inbox.",
        },
      ]}
      outcomes={[
        "Stop writing 'just following up' emails",
        "Get responses faster with less effort",
        "Know exactly what's outstanding",
        "Spend time on work, not chasing",
      ]}
      ctaText="Start sending requests →"
      icon={
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      }
    />
  );
}
