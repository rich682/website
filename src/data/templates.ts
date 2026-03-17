export interface Template {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  steps: { title: string; description: string }[];
  benefits: string[];
}

export const templates: Template[] = [
  {
    slug: "prepaid-expense-workpaper",
    title: "Prepaid Expense Workpaper",
    description:
      "Track and amortize prepaid expenses with a structured workpaper that keeps your schedules accurate and audit-ready every close.",
    category: "Workpapers",
    tags: ["Prepaids", "Audit-Ready"],
    steps: [
      {
        title: "List all prepaid balances",
        description:
          "Start by pulling in your current prepaid balances from the trial balance or sub-ledger.",
      },
      {
        title: "Build the rollforward",
        description:
          "Add columns for beginning balance, new additions, amortization, and ending balance for the period.",
      },
      {
        title: "Calculate amortization",
        description:
          "Apply straight-line or usage-based amortization for each prepaid item based on the contract terms.",
      },
      {
        title: "Prepare the journal entry",
        description:
          "Generate the adjusting journal entry to record amortization expense and reduce the prepaid asset.",
      },
      {
        title: "Tie to trial balance",
        description:
          "Reconcile the ending balance back to your general ledger to confirm the workpaper is complete.",
      },
    ],
    benefits: [
      "Eliminates manual tracking errors across prepaid schedules",
      "Keeps amortization consistent period over period",
      "Provides a clear audit trail for external reviewers",
      "Reduces time spent rebuilding schedules each close",
    ],
  },
  {
    slug: "standard-month-end-close-checklist",
    title: "Standard Month-End Close Checklist",
    description:
      "A comprehensive checklist to ensure nothing falls through the cracks during your month-end close. Track every task, owner, and deadline in one place.",
    category: "Close Management",
    tags: ["Close", "Checklist", "Monthly"],
    steps: [
      {
        title: "List all close tasks",
        description:
          "Document every task required for your month-end close, from reconciliations to account reviews to journal entries. Include timing dependencies and prerequisites.",
      },
      {
        title: "Assign owners and deadlines",
        description:
          "Designate responsibility for each task and set realistic deadlines that account for review and approval time. Build in buffer days before final close.",
      },
      {
        title: "Set up status tracking",
        description:
          "Create status columns (Not Started, In Progress, Complete, Blocked) and establish a daily review cadence to stay on track.",
      },
      {
        title: "Document interdependencies",
        description:
          "Note which tasks depend on others being completed first (e.g., accruals before financial statements). Use this to identify bottlenecks early.",
      },
      {
        title: "Review and update monthly",
        description:
          "After each close, capture lessons learned and adjust the checklist for the next period. Remove redundant tasks and add new ones as needed.",
      },
    ],
    benefits: [
      "Reduces close timeline by catching delays earlier in the process",
      "Eliminates last-minute scrambles and forgotten tasks",
      "Provides visibility into which team members are bottlenecks",
      "Creates a repeatable, standardized close process month over month",
    ],
  },
  {
    slug: "close-calendar-template",
    title: "Close Calendar Template",
    description:
      "Plan out your entire month-end and quarter-end close timeline with a structured calendar. Coordinate across teams and set clear deadlines.",
    category: "Close Management",
    tags: ["Close", "Calendar", "Planning"],
    steps: [
      {
        title: "Map out key close dates",
        description:
          "Identify critical dates: last day of reporting period, draft financials due, final approval, and external reporting deadlines.",
      },
      {
        title: "Work backward to set milestones",
        description:
          "Starting from final deadline, allocate time for each task phase: data collection, reconciliation, adjustments, review, and approval.",
      },
      {
        title: "Assign team responsibilities",
        description:
          "For each milestone, identify which team member or department owns it. Include their deadline and expected completion time.",
      },
      {
        title: "Build in review and approval time",
        description:
          "Add buffer time between completion and approval to account for questions, revisions, and back-and-forth communication.",
      },
      {
        title: "Share with all stakeholders",
        description:
          "Distribute the calendar to controllers, CFO, external auditors, and any teams providing data. Update weekly as you progress through the close.",
      },
    ],
    benefits: [
      "Ensures all team members know their deadlines and dependencies",
      "Reduces unnecessary back-and-forth by setting clear expectations upfront",
      "Helps identify when you're ahead of or behind schedule early in the process",
      "Improves coordination across accounting and finance teams",
    ],
  },
  {
    slug: "balance-sheet-reconciliation",
    title: "Balance Sheet Reconciliation",
    description:
      "Create a systematic balance sheet reconciliation workpaper to reconcile your GL balances to supporting schedules and ensure accuracy.",
    category: "Reconciliation",
    tags: ["Balance Sheet", "Reconciliation", "Audit-Ready"],
    steps: [
      {
        title: "Pull your trial balance",
        description:
          "Extract the unadjusted trial balance from your GL. Include all balance sheet accounts with their debit and credit balances.",
      },
      {
        title: "Create account reconciliation schedule",
        description:
          "For each balance sheet account, set up a template that ties GL balance to supporting schedules (subsidiary ledgers, subledgers, or detail reports).",
      },
      {
        title: "Reconcile to supporting details",
        description:
          "For each account, verify the GL total matches the sum of supporting detail. Document the reconciliation reference and note any exceptions.",
      },
      {
        title: "Identify and document adjustments",
        description:
          "For any reconciling items, determine if an adjustment is needed or if supporting documentation needs correction.",
      },
      {
        title: "Obtain evidence and sign-off",
        description:
          "Gather supporting documentation for each reconciliation and have the responsible person initial and date the completed workpaper.",
      },
    ],
    benefits: [
      "Catches errors in GL entries or supporting schedules before finalizing financials",
      "Creates audit trail and evidence for external review",
      "Identifies stale or obsolete accounts that can be cleaned up",
      "Standardizes the reconciliation process across your accounting team",
    ],
  },
  {
    slug: "bank-reconciliation",
    title: "Bank Reconciliation",
    description:
      "Reconcile your cash GL account to bank statements each period. Identify outstanding items and ensure complete cash control.",
    category: "Reconciliation",
    tags: ["Cash", "Reconciliation", "Monthly"],
    steps: [
      {
        title: "Gather bank statements and GL records",
        description:
          "Obtain the official bank statement and extract all cash transactions from your GL for the period. Note the as-of date for both.",
      },
      {
        title: "Identify cleared items",
        description:
          "Line-by-line, check off transactions that appear on both the bank statement and GL. These are your cleared items.",
      },
      {
        title: "Document outstanding checks",
        description:
          "Identify checks written but not yet cleared. Create a schedule of outstanding checks with check number, date, and amount.",
      },
      {
        title: "Identify deposits in transit",
        description:
          "Note deposits recorded in GL but not yet on bank statement. List each with deposit date and amount.",
      },
      {
        title: "Reconcile to matching balance",
        description:
          "Calculate: Bank balance + Deposits in transit - Outstanding checks = GL cash balance. Any difference requires investigation.",
      },
    ],
    benefits: [
      "Detects fraud, errors, or unauthorized transactions",
      "Ensures your cash balance is accurate before finalizing financials",
      "Identifies missing or incorrectly recorded deposits and checks",
      "Provides comfort that you have complete control over cash accounts",
    ],
  },
  {
    slug: "journal-entry-tracker",
    title: "Journal Entry Tracker",
    description:
      "Track all manual journal entries posted during the period. Maintain a centralized log with descriptions, approvals, and GL impact.",
    category: "Journal Entries",
    tags: ["Journal Entries", "Close", "Audit-Ready"],
    steps: [
      {
        title: "Create entry template",
        description:
          "Set up columns for: Entry Date, Entry Number, Description, Preparer, Approver, GL Accounts Affected, Debit Amount, Credit Amount, and Status.",
      },
      {
        title: "Log each journal entry",
        description:
          "As entries are posted, log them immediately in your tracker. Include the full description explaining the business purpose.",
      },
      {
        title: "Require preparer sign-off",
        description:
          "Have the person preparing the entry sign off on accuracy and appropriateness. Include their initials and date.",
      },
      {
        title: "Get manager approval",
        description:
          "Require a manager or controller to review and approve each entry before posting. Document approval with initials and date.",
      },
      {
        title: "Reconcile to GL",
        description:
          "At period end, verify all logged entries have been posted to GL and match in amount and account coding.",
      },
    ],
    benefits: [
      "Provides complete audit trail for all manual adjustments",
      "Prevents unauthorized or erroneous entries from being posted",
      "Makes it easy to find and explain entries during external audit",
      "Reduces month-end errors by requiring approval before posting",
    ],
  },
  {
    slug: "recurring-journal-entry-template",
    title: "Recurring Journal Entry Template",
    description:
      "Document all recurring journal entries that post in each period. Include formulas and logic to ensure consistency and reduce manual entry errors.",
    category: "Journal Entries",
    tags: ["Journal Entries", "Recurring", "Automation"],
    steps: [
      {
        title: "Identify all recurring entries",
        description:
          "List every journal entry that posts the same way each period: accruals, depreciation, amortization, reclassifications, etc.",
      },
      {
        title: "Document the entry structure",
        description:
          "For each entry, document the accounts, whether debit or credit, and the calculation logic. Example: Depreciation = Asset cost × depreciation rate.",
      },
      {
        title: "Create a template with formulas",
        description:
          "Build a spreadsheet or system template where amounts calculate automatically based on GL balances or input values.",
      },
      {
        title: "Set up approval workflow",
        description:
          "Document who reviews and approves each recurring entry type. Streamline the process since entries are consistent month to month.",
      },
      {
        title: "Review for changes annually",
        description:
          "At year end, validate that each recurring entry template still matches business reality. Update rates, accounts, or calculations as needed.",
      },
    ],
    benefits: [
      "Reduces time to post entries since formulas auto-calculate amounts",
      "Eliminates entry errors from manual calculation mistakes",
      "Makes entries consistent from month to month and year to year",
      "Creates a reference guide for new team members learning your processes",
    ],
  },
  {
    slug: "annual-budget-template",
    title: "Annual Budget Template",
    description:
      "Build your company's annual budget in a structured format. Organize by department, account, and month for easy tracking and variance analysis.",
    category: "FP&A",
    tags: ["Budget", "FP&A", "Annual"],
    steps: [
      {
        title: "Set up budget structure",
        description:
          "Create a budget template with rows for each GL account and columns for each month. Include subtotals by department and account type.",
      },
      {
        title: "Gather input from departments",
        description:
          "Request each department head or manager submit their budget by account for the coming year. Provide historical data for reference.",
      },
      {
        title: "Build in assumptions",
        description:
          "Document key assumptions: revenue growth %, headcount increases, compensation increases, known one-time expenses, and inflation rates.",
      },
      {
        title: "Consolidate and review",
        description:
          "Combine all department submissions into master budget. Review for reasonableness against historical actuals and business plan.",
      },
      {
        title: "Get executive approval",
        description:
          "Present to CFO and executive team for approval. Make adjustments as directed, then lock the budget for the year.",
      },
    ],
    benefits: [
      "Provides baseline for tracking performance throughout the year",
      "Aligns team spending with corporate strategy and financial goals",
      "Makes it easy to identify variances and investigate root causes",
      "Supports financial planning and cash flow forecasting",
    ],
  },
  {
    slug: "rolling-forecast-model",
    title: "Rolling Forecast Model",
    description:
      "Create a rolling 12-month forecast that updates each period. Replace outdated monthly budgets with current projections based on actual performance.",
    category: "FP&A",
    tags: ["Forecast", "FP&A", "Planning"],
    steps: [
      {
        title: "Set up rolling forecast structure",
        description:
          "Build a template that shows 12 months forward from today, rolling into the future as time passes. Include actuals-to-date plus projections.",
      },
      {
        title: "Establish projection methodology",
        description:
          "Define how you'll project each account: straight-line growth, percentage of revenue, historical trend analysis, or management estimate.",
      },
      {
        title: "Update with latest actuals",
        description:
          "Each period, plug in actual results for completed months. Update forecast assumptions based on latest business performance and market conditions.",
      },
      {
        title: "Review and validate assumptions",
        description:
          "Have department owners review their projected accounts for reasonableness. Challenge outliers and update if underlying assumptions have changed.",
      },
      {
        title: "Present variance to budget",
        description:
          "Compare current rolling forecast to original annual budget. Investigate major variances and communicate implications to leadership.",
      },
    ],
    benefits: [
      "Provides current projections rather than static annual budgets",
      "Catches forecast misses early so you can course-correct",
      "Improves cash flow and liquidity planning accuracy",
      "Supports agile business planning in changing environments",
    ],
  },
  {
    slug: "monthly-financial-reporting-pack",
    title: "Monthly Financial Reporting Pack",
    description:
      "Assemble a complete monthly financial report including balance sheet, income statement, cash flow, and key metrics. Standardize format for consistency.",
    category: "Financial Reporting",
    tags: ["Reporting", "Monthly", "Close"],
    steps: [
      {
        title: "Create standard templates",
        description:
          "Build Excel or reporting tool templates for P&L, Balance Sheet, Cash Flow, and supporting schedules. Standardize line items and format.",
      },
      {
        title: "Populate with GL data",
        description:
          "Pull actual GL balances for the period and current year-to-date. Include prior period and prior year comparisons for context.",
      },
      {
        title: "Add supporting detail",
        description:
          "Include subsidiary schedules for major accounts (AR aging, AP aging, debt schedules, equity changes, etc.). Cross-reference to GL.",
      },
      {
        title: "Calculate and present metrics",
        description:
          "Add key performance indicators and ratios: gross margin, EBITDA, debt/equity, working capital, cash position, and other critical metrics.",
      },
      {
        title: "Add narrative and commentary",
        description:
          "Include a summary note explaining major variances versus budget, period-over-period changes, and key issues or highlights.",
      },
    ],
    benefits: [
      "Provides complete financial picture in one standardized report",
      "Saves time each month by using consistent templates",
      "Makes it easy to spot trends and investigate variances",
      "Provides professional-quality financials for board, bank, or investor reporting",
    ],
  },
  {
    slug: "variance-analysis-report",
    title: "Variance Analysis Report",
    description:
      "Document the drivers behind variance between actual and budgeted performance. Identify root causes and quantify impact of key variances.",
    category: "Financial Reporting",
    tags: ["Variance", "Analysis", "Close"],
    steps: [
      {
        title: "Calculate variance by line item",
        description:
          "Compare actual results to budget for each P&L and balance sheet line. Flag items with variance above threshold (e.g., 10% or $25K).",
      },
      {
        title: "Categorize variance types",
        description:
          "Classify each variance as: volume/quantity change, price/rate change, mix change, or timing difference. This reveals root causes.",
      },
      {
        title: "Document root cause for each",
        description:
          "Interview department owners to understand why actuals differed from budget. Document specific business drivers and events.",
      },
      {
        title: "Quantify financial impact",
        description:
          "For each variance driver, calculate the dollar impact. Determine if impact is temporary/one-time or indicative of ongoing change.",
      },
      {
        title: "Present to leadership with recommendations",
        description:
          "Summarize top 5-10 variances with impact and root cause. Recommend actions: update forecast, adjust operations, or no action needed.",
      },
    ],
    benefits: [
      "Provides data-driven explanation of financial performance to leadership",
      "Identifies operational issues that need management attention",
      "Supports fact-based business discussions around performance drivers",
      "Creates accountability for departmental budget performance",
    ],
  },
];

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug);
}
