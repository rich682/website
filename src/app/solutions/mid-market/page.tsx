import { SegmentPageLayout } from "@/components/sections/SegmentPageLayout";

export const metadata = {
  title: "Mid-Market Accounting Teams | Vergo",
  description: "Scale your close without scaling your team. Accountability and automation for growing accounting operations.",
};

export default function MidMarketPage() {
  return (
    <SegmentPageLayout
      badge="Mid-Market"
      title="Scale your close without scaling your team."
      subtitle="Accountability and automation for growing accounting operations."
      painPoints={[
        {
          title: "More stakeholders, more requests, more chaos",
          description: "As your company grows, so does the number of people you need information from. Coordination becomes exponentially harder.",
        },
        {
          title: "Month-end close takes too long",
          description: "What used to take a week now takes two. The bottleneck isn't your team — it's waiting for everyone else.",
        },
        {
          title: "No visibility into what's outstanding",
          description: "You're constantly asking 'where are we?' because there's no single place to see close status.",
        },
        {
          title: "Escalation happens manually (or not at all)",
          description: "When someone misses a deadline, you have to decide whether to escalate. Usually, you just send another email.",
        },
      ]}
      howItFits={[
        {
          title: "Centralize all accounting requests",
          description: "One system for every request, every stakeholder, every deadline. No more scattered tracking.",
        },
        {
          title: "Automate reminders across departments",
          description: "Set up reminder workflows that work across your entire organization. Consistent follow-up at scale.",
        },
        {
          title: "Escalate automatically when deadlines pass",
          description: "Define escalation rules and let the system enforce them. No more awkward decisions about when to involve managers.",
        },
        {
          title: "Full visibility into close status",
          description: "See exactly where you stand at any moment. Know what's done, what's pending, and what's overdue.",
        },
      ]}
      keyModules={[
        {
          name: "Execution Layer",
          description: "Complex close workflows with period-based accountability.",
          href: "/#execution",
        },
        {
          name: "Collect",
          description: "Organization-wide document and invoice collection.",
          href: "/features/collect",
        },
        {
          name: "Reconciliations",
          description: "Review and sign-off workflows for every account.",
          href: "/#reconciliations",
        },
      ]}
      expansionPath={[
        { step: "Start with close", label: "Checklists" },
        { step: "Add Collect", label: "Full collection" },
        { step: "Upgrade to Advanced", label: "Escalation" },
      ]}
      ctaText="See Vergo for mid-market →"
      ctaSecondary="Talk to sales"
    />
  );
}
