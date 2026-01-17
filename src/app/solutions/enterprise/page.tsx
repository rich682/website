import { SegmentPageLayout } from "@/components/sections/SegmentPageLayout";

export const metadata = {
  title: "Enterprise Finance Teams | Vergo",
  description: "Accountability at scale. The workflow layer that enforces deadlines across the organization.",
};

export default function EnterprisePage() {
  return (
    <SegmentPageLayout
      badge="Enterprise"
      title="Accountability at scale."
      subtitle="The workflow layer that enforces deadlines across the organization."
      painPoints={[
        {
          title: "Hundreds of stakeholders across business units",
          description: "Your close process touches people across the entire organization. Coordinating them all is a massive undertaking.",
        },
        {
          title: "Close delays caused by non-finance teams",
          description: "Finance is ready, but you're waiting on operations, sales, or other departments to submit their data.",
        },
        {
          title: "No enforceable accountability",
          description: "You can ask nicely, but there's no system to ensure compliance. Deadlines are suggestions, not requirements.",
        },
        {
          title: "Compliance and audit pressure",
          description: "Regulators and auditors expect documentation and process. Manual tracking doesn't cut it anymore.",
        },
      ]}
      howItFits={[
        {
          title: "Enterprise-grade escalation and enforcement",
          description: "Define escalation paths that go all the way up. When deadlines are missed, the right people know immediately.",
        },
        {
          title: "Audit trail for every request",
          description: "Complete documentation of who was asked, when, and how they responded. Audit-ready by default.",
        },
        {
          title: "Integration with existing systems",
          description: "Connect Vergo to your ERP, email, and other systems. Fit into your existing workflow, not the other way around.",
        },
        {
          title: "Dedicated support and onboarding",
          description: "Enterprise customers get white-glove onboarding and dedicated support. We're invested in your success.",
        },
      ]}
      keyModules={[
        {
          name: "All Modules",
          description: "Full platform access at enterprise scale.",
          href: "/platform",
        },
        {
          name: "Advanced Escalation",
          description: "Multi-level enforcement workflows.",
          href: "/features/reminders",
        },
        {
          name: "Custom Integrations",
          description: "Connect to your existing systems.",
          href: "/platform",
        },
      ]}
      expansionPath={[
        { step: "Pilot with one team", label: "Prove value" },
        { step: "Expand across BUs", label: "Scale adoption" },
        { step: "Enterprise agreement", label: "Full deployment" },
      ]}
      ctaText="Talk to our enterprise team →"
      ctaSecondary="Request a demo"
    />
  );
}
