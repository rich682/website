import { FeaturePageLayout } from "@/components/sections/FeaturePageLayout";

export const metadata = {
  title: "Approvals | Vergo",
  description: "Route decisions to the right people, automatically. Approvals that don't bottleneck.",
};

export default function ApprovalsPage() {
  return (
    <FeaturePageLayout
      badge="Approvals"
      title="Decisions routed. Bottlenecks removed."
      subtitle="Get sign-offs without the back-and-forth."
      problemTitle="Approvals get stuck."
      problemDescription="Requests waiting for sign-off. Documents sitting in someone's queue. Decisions delayed because the right person didn't see the request. Approval workflows shouldn't be where work goes to die."
      howItWorks={[
        {
          title: "Define approval workflows",
          description: "Set up who needs to approve what, and in what order. Build workflows that match how your team actually works.",
        },
        {
          title: "Route requests automatically",
          description: "When something needs approval, it goes to the right person automatically. No manual forwarding required.",
        },
        {
          title: "Remind approvers until they act",
          description: "Pending approvals get automatic reminders. Escalate to managers when deadlines pass.",
        },
        {
          title: "Track status in real-time",
          description: "See exactly where every approval stands. Know what's pending, what's approved, and what's blocked.",
        },
      ]}
      outcomes={[
        "Eliminate approval bottlenecks",
        "Reduce time-to-decision",
        "Maintain clear audit trails",
        "Keep work moving forward",
      ]}
      ctaText="Streamline approvals →"
      icon={
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      }
    />
  );
}
