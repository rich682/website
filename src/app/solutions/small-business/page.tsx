import { SegmentPageLayout } from "@/components/sections/SegmentPageLayout";

export const metadata = {
  title: "Small Business Accounting Teams | Vergo",
  description: "Big accounting problems. Small team solutions. Get the follow-up power of a large team, without the headcount.",
};

export default function SmallBusinessPage() {
  return (
    <SegmentPageLayout
      badge="Small Business"
      title="Big accounting problems. Small team solutions."
      subtitle="Get the follow-up power of a large team, without the headcount."
      painPoints={[
        {
          title: "Wearing multiple hats",
          description: "You're handling collections, approvals, and close — often all by yourself. There's never enough time for everything.",
        },
        {
          title: "No time for manual follow-ups",
          description: "Chasing receipts and invoices takes hours you don't have. Something always falls through the cracks.",
        },
        {
          title: "Blamed for delays caused by others",
          description: "When close is late, you take the heat — even when it's because someone else didn't submit their receipts.",
        },
        {
          title: "No budget for enterprise software",
          description: "Big accounting platforms are expensive and complex. You need something that works without a six-figure contract.",
        },
      ]}
      howItFits={[
        {
          title: "Free tier gets you started immediately",
          description: "No credit card, no sales call. Start using Vergo today with up to 2 users at no cost.",
        },
        {
          title: "Automate the follow-ups you don't have time for",
          description: "Set up reminders once and let the system do the chasing. Focus on the work that matters.",
        },
        {
          title: "One system for all your collection needs",
          description: "Receipts, invoices, approvals — everything in one place. No more juggling multiple tools.",
        },
        {
          title: "Grows with you as you scale",
          description: "Start small, add features as you need them. Vergo scales with your business.",
        },
      ]}
      keyModules={[
        {
          name: "Period Boards",
          description: "Organize work by daily, weekly, and monthly cadence.",
          href: "/#boards",
        },
        {
          name: "Reconciliations",
          description: "Manage balance sheet recs with human sign-off.",
          href: "/#reconciliations",
        },
        {
          name: "Collect",
          description: "Gather documents, invoices, and expenses in one layer.",
          href: "/features/collect",
        },
      ]}
      expansionPath={[
        { step: "Start", label: "2 users" },
        { step: "Add Starter", label: "Unlimited requests" },
        { step: "Add Approvals", label: "Route decisions" },
      ]}
      ctaText="Get Started →"
    />
  );
}
