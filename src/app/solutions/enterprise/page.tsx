import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Vergo for Enterprise | Vergo",
  description: "Enterprise-grade security, compliance, custom workflows, and SSO. Built for organizations with complex accounting requirements.",
};

const IMAGES = "/images/solutions/enterprise/sol";

const features = [
  {
    title: "Enterprise Security",
    description: "SOC 2 compliance, encryption at rest and in transit, role-based access control, and comprehensive audit logging for every action.",
    image: `${IMAGES}-1.png`,
  },
  {
    title: "Single Sign-On (SSO)",
    description: "SAML-based SSO integration with your identity provider. Enforce authentication policies and streamline user provisioning.",
    image: `${IMAGES}-2.png`,
  },
  {
    title: "Custom Workflows",
    description: "Configure approval chains, task routing, and automation rules that match your organization's specific processes and compliance requirements.",
    image: `${IMAGES}-3.png`,
  },
  {
    title: "Compliance & Audit",
    description: "Complete audit trail of every action. Retention policies, data governance, and compliance reporting designed for regulated environments.",
    image: `${IMAGES}-4.png`,
  },
  {
    title: "API & Integrations",
    description: "Connect Vergo to your existing tech stack with API access. Sync with ERP systems, document management platforms, and business intelligence tools.",
    image: `${IMAGES}-5.png`,
  },
  {
    title: "Dedicated Support",
    description: "Priority onboarding, dedicated account management, and SLA-backed support. Your success team helps you configure, migrate, and optimize.",
    image: `${IMAGES}-6.png`,
  },
];

export default function EnterprisePage() {
  return (
    <FeatureLandingPage
      badge="Enterprise"
      title="Enterprise-grade, accounting-specific."
      subtitle="Security, compliance, SSO, custom workflows, and dedicated support for organizations with complex accounting requirements."
      features={features}
    />
  );
}
