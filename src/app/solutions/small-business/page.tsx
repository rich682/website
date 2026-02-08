import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Vergo for Small Business | Vergo",
  description: "Get started in minutes with an accounting platform that is simple to use, requires no training, and delivers immediate value.",
};

const IMAGES = "/images/solutions/small-business/sol";

const features = [
  {
    title: "Setup in Minutes",
    description: "No complex onboarding or training required. Connect your email, create your first board, and send your first request in under 10 minutes.",
    image: `${IMAGES}-1.png`,
  },
  {
    title: "Email-First Workflow",
    description: "Clients respond via email -- they never need to log in or learn a new tool. You work in Vergo, they work the way they always have.",
    image: `${IMAGES}-2.png`,
  },
  {
    title: "Automated Follow-Ups",
    description: "Stop spending hours chasing documents. Set it once and Vergo handles reminders, so you can focus on the actual accounting work.",
    image: `${IMAGES}-3.png`,
  },
  {
    title: "All-in-One Platform",
    description: "Tasks, requests, documents, expenses, and invoices in one place. Replace the patchwork of spreadsheets, email folders, and shared drives.",
    image: `${IMAGES}-4.png`,
  },
  {
    title: "Affordable & Transparent",
    description: "Built for teams that need powerful tools without enterprise complexity or pricing. Get the features you need at a price that makes sense.",
    image: `${IMAGES}-5.png`,
  },
  {
    title: "Grow Without Switching",
    description: "Start small and add features as you grow. Vergo scales with you -- from a solo practitioner to a growing firm -- without switching tools.",
    image: `${IMAGES}-6.png`,
  },
];

export default function SmallBusinessPage() {
  return (
    <FeatureLandingPage
      badge="Small Business"
      title="Big firm capabilities, small firm simplicity."
      subtitle="Get started in minutes with an all-in-one accounting platform. No training required, no client logins, and immediate value from day one."
      features={features}
    />
  );
}
