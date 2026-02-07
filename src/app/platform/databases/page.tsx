import { Metadata } from "next";
import { FeatureLandingPage } from "@/components/sections/FeatureLandingPage";
import { DatabaseTableIllustration } from "@/components/illustrations/PlatformIllustrations";

export const metadata: Metadata = {
  title: "Databases | Vergo",
  description: "Build structured databases that power your reports, requests, forms, and workflows across the entire Vergo platform.",
};

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: "Custom Schemas",
    description: "Define the exact columns and data types you need. Text, numbers, dates, dropdowns, multi-select, contacts -- build the schema that fits your workflow.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
    title: "Column Types",
    description: "Support for text, number, currency, date, checkbox, dropdown, formula, lookup, and attachment columns. Every data type you need for accounting work.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
    title: "Excel Import & Export",
    description: "Import existing spreadsheets to bootstrap your databases. Export anytime to share data with clients or feed into other systems.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    title: "Identifier Keys & Deduplication",
    description: "Set unique identifiers (EIN, SSN, Client ID) to prevent duplicate records. Vergo catches duplicates at entry and suggests merges.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Search & Filter",
    description: "Powerful filtering, sorting, and full-text search across all records. Find any entity or data point in seconds.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    title: "Cross-Platform Integration",
    description: "Databases connect to reports, requests, and forms. Use a database as the data source for a report, populate request templates, or collect data via forms.",
  },
];

export default function DatabasesPage() {
  return (
    <FeatureLandingPage
      badge="Databases"
      title="Your data, structured and connected."
      subtitle="Build custom databases that power your reports, requests, and workflows. The backbone of every accounting process in Vergo."
      features={features}
      illustration={<DatabaseTableIllustration />}
    />
  );
}
