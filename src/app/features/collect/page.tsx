import { FeaturePageLayout } from "@/components/sections/FeaturePageLayout";

export const metadata = {
  title: "Collect | Vergo",
  description: "Gather receipts, invoices, and documents from anyone. Collection without the chase.",
};

export default function CollectPage() {
  return (
    <FeaturePageLayout
      badge="Collect"
      title="Get what you need. From anyone."
      subtitle="Receipts, invoices, documents — collected without the chase."
      problemTitle="People forget. You pay the price."
      problemDescription="Missing receipts. Late invoices. Documents stuck in someone's inbox. You're constantly chasing people for things they should have sent weeks ago. Data collection shouldn't be a full-time job."
      howItWorks={[
        {
          title: "Request anything from anyone",
          description: "Create a request for receipts, invoices, documents, or any information you need. Assign it to employees, vendors, or clients.",
        },
        {
          title: "Set deadlines with automatic reminders",
          description: "Define when you need it and let Vergo handle the follow-ups. Escalate automatically when deadlines pass.",
        },
        {
          title: "Receive everything in one place",
          description: "All submissions come to a single inbox. No more hunting through email threads or shared drives.",
        },
        {
          title: "Close with complete documentation",
          description: "With everything collected, close your books with confidence. Audit-ready, every time.",
        },
      ]}
      outcomes={[
        "Stop chasing people for documents",
        "Get complete submissions on time",
        "Reduce close delays from missing data",
        "Maintain audit-ready records",
      ]}
      ctaText="Start collecting smarter →"
      icon={
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      }
    />
  );
}
