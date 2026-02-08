import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";

export const metadata: Metadata = {
  title: "Databases | Vergo",
  description: "Build structured databases that power your reports, requests, forms, and workflows across the entire Vergo platform.",
};

const features = [
  {
    title: "Custom Schemas",
    description: "Define the exact columns and data types you need. Text, numbers, dates, dropdowns, multi-select, contacts -- build the schema that fits your workflow.",
    image: "/images/platform/databases/databases-1.png",
    bullets: [
      "Text, number, date, dropdown, and formula columns",
      "Lookup and attachment fields",
      "Custom schemas per database",
    ],
  },
  {
    title: "Excel Import & Export",
    description: "Import existing spreadsheets to bootstrap your databases. Export anytime to share data with clients or feed into other systems.",
    image: "/images/platform/databases/databases-2.png",
    bullets: [
      "One-click spreadsheet import",
      "Column mapping and validation",
      "Export to Excel at any time",
    ],
  },
  {
    title: "Identifier Keys & Deduplication",
    description: "Set unique identifiers (EIN, SSN, Client ID) to prevent duplicate records. Vergo catches duplicates at entry and suggests merges.",
    image: "/images/platform/databases/databases-3.png",
    bullets: [
      "Unique identifier enforcement",
      "Automatic duplicate detection on entry",
      "Merge suggestions for similar records",
    ],
  },
  {
    title: "Cross-Platform Integration",
    description: "Databases connect to reports, requests, and forms. Use a database as the data source for a report, populate request templates, or collect data via forms.",
    image: "/images/platform/databases/databases-4.png",
    bullets: [
      "Data source for reports and templates",
      "Populate requests from database records",
      "Form submissions feed directly into databases",
    ],
  },
];

export default function DatabasesPage() {
  return (
    <FeatureLandingPage
      badge="Databases"
      title="Your data, structured and connected."
      subtitle="Build custom databases that power your reports, requests, and workflows. The backbone of every accounting process in Vergo."
      features={features}
    />
  );
}
