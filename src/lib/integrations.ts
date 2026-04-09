export interface Integration {
  slug: string;
  name: string;
  category: string;
  description: string;

  icon: string; // SVG path or identifier
}

export const integrations: Integration[] = [
  {
    slug: "quickbooks-online",
    name: "QuickBooks Online",
    category: "ERP / General Ledger",
    description:
      "Connect QuickBooks Online to Vergo and automate reconciliations, journal entries, and month-end close tasks directly from your GL data.",
    icon: "quickbooks",
  },
  {
    slug: "xero",
    name: "Xero",
    category: "ERP / General Ledger",
    description:
      "Sync your Xero accounts, transactions, and reports into Vergo for automated close workflows and real-time visibility.",
    icon: "xero",
  },
  {
    slug: "netsuite",
    name: "NetSuite",
    category: "ERP / General Ledger",
    description:
      "Pull trial balances, journal entries, and subsidiary data from NetSuite into Vergo to streamline your consolidation and close process.",
    icon: "netsuite",
  },
  {
    slug: "sage-intacct",
    name: "Sage Intacct",
    category: "ERP / General Ledger",
    description:
      "Integrate Sage Intacct to automate multi-entity close, intercompany eliminations, and financial reporting workflows.",
    icon: "sage-intacct",
  },
  {
    slug: "sage-business-cloud",
    name: "Sage Business Cloud Accounting",
    category: "ERP / General Ledger",
    description:
      "Connect Sage Business Cloud Accounting to bring your chart of accounts, transactions, and reports into Vergo.",
    icon: "sage-bca",
  },
  {
    slug: "freshbooks",
    name: "FreshBooks",
    category: "ERP / General Ledger",
    description:
      "Sync FreshBooks invoicing, expense, and accounting data into Vergo for a unified view of your financial close.",
    icon: "freshbooks",
  },
  {
    slug: "wave-financial",
    name: "Wave Financial",
    category: "ERP / General Ledger",
    description:
      "Bring your Wave Financial accounting data into Vergo to automate reconciliations and month-end reporting.",
    icon: "wave",
  },
  {
    slug: "zoho-books",
    name: "Zoho Books",
    category: "ERP / General Ledger",
    description:
      "Connect Zoho Books to Vergo and automate your close process with synced transactions, contacts, and financial reports.",
    icon: "zoho",
  },
  {
    slug: "clear-books",
    name: "Clear Books",
    category: "ERP / General Ledger",
    description:
      "Integrate Clear Books to pull accounting data into Vergo for automated task management and close workflows.",
    icon: "clearbooks",
  },
  {
    slug: "freeagent",
    name: "FreeAgent",
    category: "ERP / General Ledger",
    description:
      "Sync FreeAgent accounting data with Vergo to streamline your month-end close and automate routine bookkeeping tasks.",
    icon: "freeagent",
  },
  {
    slug: "moneybird",
    name: "Moneybird",
    category: "ERP / General Ledger",
    description:
      "Connect Moneybird to Vergo and bring your invoices, contacts, and financial data into your close workflow.",
    icon: "moneybird",
  },
  {
    slug: "microsoft-dynamics-365",
    name: "Microsoft Dynamics 365 Business Central",
    category: "ERP / General Ledger",
    description:
      "Integrate Dynamics 365 Business Central to sync GL data, dimensions, and financial reports into Vergo for an automated close.",
    icon: "dynamics",
  },
  {
    slug: "viewpoint-spectrum",
    name: "Viewpoint Spectrum",
    category: "Construction ERP",
    description:
      "Connect Viewpoint Spectrum to Vergo and automate job cost reconciliations, AP workflows, and month-end close tasks directly from your construction ERP.",
    icon: "viewpoint-spectrum",
  },
  {
    slug: "viewpoint-vista",
    name: "Viewpoint Vista",
    category: "Construction ERP",
    description:
      "Integrate Viewpoint Vista to sync job cost data, subcontractor records, and financial reports into Vergo for automated construction accounting workflows.",
    icon: "viewpoint-vista",
  },
  {
    slug: "foundation-software",
    name: "Foundation Software",
    category: "Construction ERP",
    description:
      "Connect Foundation Software to Vergo and streamline job costing, AP automation, and month-end close for your construction accounting team.",
    icon: "foundation-software",
  },
  {
    slug: "excel-uploads",
    name: "Excel Uploads",
    category: "File Upload",
    description:
      "Upload Excel and CSV files directly into Vergo. Map columns, validate data, and create structured databases from any spreadsheet.",
    icon: "excel",
  },
];

export function getIntegrationBySlug(slug: string): Integration | undefined {
  return integrations.find((i) => i.slug === slug);
}
