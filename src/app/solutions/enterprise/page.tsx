import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Vergo for Enterprise | Vergo",
  description: "Enterprise-grade security, compliance, and SSO with custom workflows and API integration. Built for organizations with complex accounting requirements.",
};

const IMAGES = "/images/solutions/enterprise/sol";

const features = [
  {
    title: "Enterprise Security & SSO",
    description: "SOC 2 compliance, encryption at rest and in transit, and comprehensive role-based access control. SAML-based SSO integrates with your identity provider to enforce authentication policies and streamline provisioning.",
    image: `${IMAGES}-1.png`,
    bullets: [
      "SOC 2 compliance with encryption at rest and in transit",
      "SAML-based SSO with your identity provider",
      "Role-based access control across teams and entities",
    ],
  },
  {
    title: "Compliance & Audit Trail",
    description: "Every action, approval, and document change is logged in a complete, searchable audit trail. Retention policies and data governance controls are built in -- so you are always ready for internal review or external audit.",
    image: `${IMAGES}-2.png`,
    bullets: [
      "Complete audit trail of every action and decision",
      "Configurable retention policies and data governance",
      "Compliance reporting for regulated environments",
    ],
  },
  {
    title: "Custom Workflows & Integration",
    description: "Configure approval chains, task routing, and automation rules to match your organization's specific processes. Connect Vergo to your existing tech stack with API access, and get priority onboarding with dedicated account management.",
    image: `${IMAGES}-3.png`,
    bullets: [
      "Configurable workflows for your specific processes",
      "API access for ERP and business intelligence integration",
      "Dedicated account management and SLA-backed support",
    ],
  },
];

export default function EnterprisePage() {
  return (
    <FeatureLandingPage
      badge="Enterprise"
      title="Enterprise-grade, accounting-specific."
      subtitle="Security, compliance, SSO, and custom workflows built for organizations with complex accounting requirements and strict governance needs."
      features={features}
    />
  );
}
