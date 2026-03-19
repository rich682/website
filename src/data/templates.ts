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
  {
    slug: "period-end-accrual-tracker",
    title: "Period-End Accrual Tracker",
    description:
      "Document and track all period-end accruals in one place. Ensure consistent treatment month to month and maintain detailed support for external audits.",
    category: "Close Management",
    tags: ["Accruals", "Close", "Monthly"],
    steps: [
      {
        title: "List all accrual categories",
        description:
          "Identify all types of accruals your business makes: utilities, rent, payroll, professional fees, warranty obligations, vacation accrual, etc.",
      },
      {
        title: "Document accrual calculation logic",
        description:
          "For each accrual, document how it's calculated: percentage of revenue, fixed monthly amount, days-based calculation, or management estimate with support.",
      },
      {
        title: "Calculate accrual amount",
        description:
          "Using documented methodology, calculate the accrual amount for the period. Pull supporting documentation (invoices, timesheets, contracts).",
      },
      {
        title: "Prepare journal entry",
        description:
          "Create the accrual journal entry debiting expense and crediting accrued liability. Include account codes and description of accrual basis.",
      },
      {
        title: "Reconcile to GL and prior period",
        description:
          "Verify accrual entries posted to GL. Compare to prior period and investigate significant changes in accrual amounts.",
      },
    ],
    benefits: [
      "Ensures accruals are recorded consistently each period",
      "Prevents under- or over-accrual of expenses",
      "Provides clear audit trail showing calculation methodology",
      "Reduces adjustments needed during year-end audit",
    ],
  },
  {
    slug: "intercompany-reconciliation",
    title: "Intercompany Reconciliation",
    description:
      "Track and reconcile intercompany transactions between related entities. Ensure balance sheet intercompany accounts tie perfectly.",
    category: "Close Management",
    tags: ["Reconciliation", "Intercompany", "Close"],
    steps: [
      {
        title: "Identify all intercompany entities",
        description:
          "List all affiliated companies and entities that conduct business with each other. Note reporting entity and non-consolidated entities.",
      },
      {
        title: "Extract intercompany transaction detail",
        description:
          "Pull all intercompany sales, expenses, transfers, and loans from each entity's GL for the current period and year-to-date.",
      },
      {
        title: "Match transactions between entities",
        description:
          "Compare transactions recorded by Company A as payable to those recorded by Company B as receivable. Identify any timing differences or mismatches.",
      },
      {
        title: "Identify reconciling items",
        description:
          "Document items that don't match: outstanding advances, unrecorded transactions, timing differences, or erroneous entries.",
      },
      {
        title: "Post correcting entries",
        description:
          "Record necessary adjustments to align intercompany accounts. Ensure offsetting entries maintain consolidated trial balance.",
      },
    ],
    benefits: [
      "Eliminates errors in consolidated financial statements",
      "Identifies unauthorized or unapproved intercompany transactions",
      "Reduces consolidation adjustments needed during month-end",
      "Ensures cash flow accuracy for intercompany transactions",
    ],
  },
  {
    slug: "account-review-workpaper",
    title: "Account Review Workpaper",
    description:
      "Systematically review balance sheet and GL accounts for reasonableness, accuracy, and proper classification before finalizing month-end close.",
    category: "Close Management",
    tags: ["Review", "Workpaper", "Close"],
    steps: [
      {
        title: "Select accounts for detailed review",
        description:
          "Identify high-risk or high-dollar accounts: cash, AR, inventory, fixed assets, debt, equity accounts requiring thorough review.",
      },
      {
        title: "Analyze account activity",
        description:
          "Review all transactions posted to the account during the period. Identify unusual items, large transactions, or items outside normal business.",
      },
      {
        title: "Verify supporting documentation",
        description:
          "For significant transactions, pull supporting documentation: invoices, contracts, receipts, loan agreements, asset purchase documents.",
      },
      {
        title: "Document conclusions",
        description:
          "Note that you reviewed the account, found no issues, or identify specific adjustments needed. Sign and date the workpaper.",
      },
      {
        title: "Follow up on exceptions",
        description:
          "For any issues identified, determine root cause and record correcting entry. Communicate material items to accounting leadership.",
      },
    ],
    benefits: [
      "Catches errors and unusual items before external audit",
      "Demonstrates management review of all significant accounts",
      "Identifies control weaknesses or process improvements needed",
      "Creates documentation of management assertions for auditor",
    ],
  },
  {
    slug: "close-timeline-checklist",
    title: "Close Timeline Checklist",
    description:
      "Day-by-day close timeline showing what needs to happen each day. Track actual completion dates and identify bottlenecks in real-time.",
    category: "Close Management",
    tags: ["Close", "Timeline", "Planning"],
    steps: [
      {
        title: "Map daily tasks and owners",
        description:
          "Create calendar with Day 1 through Day N of close. For each day, list tasks that must be completed, owner, and deadline.",
      },
      {
        title: "Identify critical path items",
        description:
          "Highlight tasks that block other work (e.g., bank reconciliation before cash adjustment). Mark these as high-priority and monitor closely.",
      },
      {
        title: "Include sign-off checkboxes",
        description:
          "Add checkbox for each task with space for initials and date completed. Use this to track actual progress against plan.",
      },
      {
        title: "Build in escalation triggers",
        description:
          "Define when a task is considered late and requires escalation (e.g., if a task should complete by 2pm and it's 4pm, escalate).",
      },
      {
        title: "Distribute and update daily",
        description:
          "Share checklist with team at start of close. Update daily to show progress, identify slippage, and adjust remaining timeline.",
      },
    ],
    benefits: [
      "Keeps entire team synchronized on close progress",
      "Identifies bottlenecks early so you can add resources",
      "Reduces close timeline by keeping momentum and focus",
      "Provides real-time visibility to executive team on close status",
    ],
  },
  {
    slug: "fixed-asset-reconciliation",
    title: "Fixed Asset Reconciliation",
    description:
      "Reconcile fixed asset GL accounts to the fixed asset register. Track additions, disposals, and depreciation each period.",
    category: "Reconciliation",
    tags: ["Fixed Assets", "Reconciliation", "Audit-Ready"],
    steps: [
      {
        title: "Pull asset register and GL balances",
        description:
          "Extract the fixed asset register (cost, accumulated depreciation, net book value) and the corresponding GL account balances.",
      },
      {
        title: "Reconcile asset cost balances",
        description:
          "Tie total asset cost per register to GL gross fixed asset account. Investigate any differences in accumulated totals.",
      },
      {
        title: "Reconcile depreciation",
        description:
          "Compare accumulated depreciation per register to GL accumulated depreciation account. Verify depreciation expense calculation.",
      },
      {
        title: "Document additions and disposals",
        description:
          "List all assets purchased during period with cost, purchase date, and depreciation method. Document any asset disposals with gains/losses.",
      },
      {
        title: "Verify net book value",
        description:
          "Calculate: Asset cost - Accumulated depreciation = Net book value. Reconcile to GL net asset account and prior period reconciliation.",
      },
    ],
    benefits: [
      "Catches errors in asset capitalization decisions",
      "Ensures depreciation is calculated correctly and consistently",
      "Identifies assets fully depreciated or no longer in service",
      "Provides audit trail for asset addition and disposal approvals",
    ],
  },
  {
    slug: "accounts-receivable-aging-schedule",
    title: "Accounts Receivable Aging Schedule",
    description:
      "Analyze outstanding customer invoices by age. Identify overdue accounts and estimate allowance for doubtful accounts.",
    category: "Reconciliation",
    tags: ["Receivables", "Aging", "Monthly"],
    steps: [
      {
        title: "Extract open invoices",
        description:
          "Pull all open customer invoices from AR subledger. Include invoice date, amount, customer name, and invoice number.",
      },
      {
        title: "Age invoices by days outstanding",
        description:
          "Categorize each invoice: current, 1-30 days late, 31-60 days late, 61-90 days late, 90+ days late. Calculate days outstanding from invoice date.",
      },
      {
        title: "Calculate aging totals",
        description:
          "Sum total receivables in each aging bucket. Calculate percentage of total that falls in each category.",
      },
      {
        title: "Identify problem accounts",
        description:
          "Highlight customers with large overdue balances or invoices aged 90+ days. Note whether customer is disputing, on payment plan, or in collections.",
      },
      {
        title: "Estimate and record allowance",
        description:
          "Apply historical bad debt percentage or specific analysis to determine allowance for doubtful accounts. Record or adjust provision.",
      },
    ],
    benefits: [
      "Provides early warning of collection issues",
      "Supports accurate accounts receivable valuation",
      "Identifies which customers to focus collection efforts on",
      "Helps forecast cash flow based on collection timing",
    ],
  },
  {
    slug: "accounts-payable-aging-schedule",
    title: "Accounts Payable Aging Schedule",
    description:
      "Analyze outstanding vendor invoices by age. Track payment obligations and identify discrepancies with vendor statements.",
    category: "Reconciliation",
    tags: ["Payables", "Aging", "Monthly"],
    steps: [
      {
        title: "Extract open vendor invoices",
        description:
          "Pull all open vendor invoices from AP subledger. Include invoice date, due date, vendor name, invoice number, and amount.",
      },
      {
        title: "Age invoices by days outstanding",
        description:
          "Categorize each invoice: current, 1-30 days past due, 31-60 days past due, 61-90 days past due, 90+ days past due.",
      },
      {
        title: "Calculate aging totals",
        description:
          "Sum AP in each aging category. Compare total to GL accounts payable account. Investigate any differences.",
      },
      {
        title: "Identify overdue items",
        description:
          "Flag invoices that are significantly past due. Determine if they're in dispute, on hold, or overlooked for payment.",
      },
      {
        title: "Reconcile to vendor statements",
        description:
          "Obtain vendor statements and reconcile to aging schedule. Identify items vendor claims are unpaid that you've recorded as paid.",
      },
    ],
    benefits: [
      "Ensures you're paying bills on time to maintain vendor relationships",
      "Identifies disputed invoices or vendor statement mismatches",
      "Improves cash flow management and payment planning",
      "Catches duplicate payments or invoices recorded in error",
    ],
  },
  {
    slug: "accrued-expenses-reconciliation",
    title: "Accrued Expenses Reconciliation",
    description:
      "Reconcile accrued expense GL accounts to supporting schedules. Verify accruals are appropriate and adjust reversal entries.",
    category: "Reconciliation",
    tags: ["Accruals", "Reconciliation", "Close"],
    steps: [
      {
        title: "Identify all accrual accounts",
        description:
          "List all GL accounts that contain period-end accruals: accrued payroll, accrued utilities, accrued professional fees, warranty reserves, etc.",
      },
      {
        title: "Reconcile to supporting schedules",
        description:
          "For each accrual account, tie GL balance to the supporting accrual schedule or calculation. Verify all components are included.",
      },
      {
        title: "Review accrual methodology",
        description:
          "Confirm accrual calculation logic is documented and consistently applied. Test calculation for reasonableness (e.g., utilities based on usage).",
      },
      {
        title: "Track reversals",
        description:
          "Document which accruals from prior period were reversed. Verify reversals matched actual payment or expense posted.",
      },
      {
        title: "Prepare new accruals",
        description:
          "Record new period accruals. Ensure offset to appropriate expense account and that supporting documentation is attached.",
      },
    ],
    benefits: [
      "Prevents double-recording of expenses and accruals",
      "Ensures accruals are reversed when actual invoice is recorded",
      "Maintains consistent accrual methodology period to period",
      "Provides clear audit trail for accrual vs. actual reconciliation",
    ],
  },
  {
    slug: "manual-adjustment-log",
    title: "Manual Adjustment Log",
    description:
      "Log and track all manual GL adjustments made during the close period. Maintain history of what was adjusted and why.",
    category: "Journal Entries",
    tags: ["Adjustments", "Close", "Audit-Ready"],
    steps: [
      {
        title: "Set up adjustment tracker",
        description:
          "Create spreadsheet with columns: Adjustment #, Date, Description, GL Accounts, Debit, Credit, Preparer, Approver, Post Status.",
      },
      {
        title: "Log each adjustment",
        description:
          "As adjustments are prepared, immediately log them. Include clear description of business purpose (e.g., 'Reverse prior month accrual for utilities').",
      },
      {
        title: "Get approval before posting",
        description:
          "Require manager sign-off on every adjustment before it posts to GL. Document approver name and date of approval.",
      },
      {
        title: "Verify posting to GL",
        description:
          "After GL posting, confirm adjustment appears in GL with correct amounts and accounts. Mark as 'Posted' in tracker.",
      },
      {
        title: "Prepare audit summary",
        description:
          "At period end, prepare summary of all adjustments for external auditors. Tie each adjustment to supporting documentation.",
      },
    ],
    benefits: [
      "Prevents unauthorized adjustments from posting to GL",
      "Creates complete record of all manual adjustments for audit",
      "Enables quick investigation of any GL variances",
      "Supports management controls over financial reporting",
    ],
  },
  {
    slug: "consolidation-entry-template",
    title: "Consolidation Entry Template",
    description:
      "Template for recording consolidation eliminations and adjustments. Standardize consolidation entries across periods.",
    category: "Journal Entries",
    tags: ["Consolidation", "Journal Entries", "Multi-entity"],
    steps: [
      {
        title: "Identify consolidation adjustments",
        description:
          "List all consolidation entries needed: eliminate intercompany sales and profit, adjust equity method investments, record purchase accounting adjustments.",
      },
      {
        title: "Document entry structure",
        description:
          "For each consolidation entry, document the GL accounts affected, debit/credit amounts, and the business purpose.",
      },
      {
        title: "Build formula-based template",
        description:
          "Create spreadsheet template where consolidation amounts link to underlying schedules (e.g., intercompany sales total, intercompany profit).",
      },
      {
        title: "Test consolidation entries",
        description:
          "Verify that consolidated trial balance balances after all consolidation entries. Test that subsidiary balances eliminate appropriately.",
      },
      {
        title: "Document and file",
        description:
          "Prepare summary of all consolidation entries with supporting detail. File in close documentation for external auditors.",
      },
    ],
    benefits: [
      "Ensures consolidation entries are consistent and complete",
      "Reduces consolidation errors and adjustment cycles",
      "Creates clear record of consolidation methodology",
      "Streamlines multi-period consolidation process",
    ],
  },
  {
    slug: "reclassification-journal-entry",
    title: "Reclassification Journal Entry",
    description:
      "Document reclassifications between GL accounts for proper financial statement presentation. Track all reclass entries in one place.",
    category: "Journal Entries",
    tags: ["Reclassification", "Presentation", "Close"],
    steps: [
      {
        title: "Identify presentation needs",
        description:
          "Determine which GL accounts need to be reclassified for proper financial statement presentation. Example: move certain expenses to COGS.",
      },
      {
        title: "Document reclassification logic",
        description:
          "For each reclassification, document which accounts are involved, amounts to reclassify, and the reason (e.g., 'For financial statement presentation only').",
      },
      {
        title: "Create the journal entry",
        description:
          "Record reclassification entry: debit target account, credit source account. Include reference to supporting analysis.",
      },
      {
        title: "Verify trial balance",
        description:
          "Confirm reclassification entry doesn't change total equity or net income. Trial balance should balance before and after entry.",
      },
      {
        title: "File and communicate",
        description:
          "Document the reclassification purpose and amounts. Communicate with auditors that these are presentation entries with no economic impact.",
      },
    ],
    benefits: [
      "Ensures GL structure supports multiple reporting requirements",
      "Makes it easy to adjust presentation without GL structure changes",
      "Provides transparency to auditors about presentation-only entries",
      "Simplifies period-over-period comparison of results",
    ],
  },
  {
    slug: "accrual-entry-workpaper",
    title: "Accrual Entry Workpaper",
    description:
      "Support document for period-end accrual entries. Show calculation basis, supporting documentation, and approval.",
    category: "Journal Entries",
    tags: ["Accruals", "Workpaper", "Close"],
    steps: [
      {
        title: "Document accrual basis",
        description:
          "Write clear description of what is being accrued and why. Example: 'Utilities for February used but not yet invoiced by utility company'.",
      },
      {
        title: "Show calculation",
        description:
          "Detail the accrual calculation: historical monthly average, usage-based estimate with support, percentage of revenue, or other methodology.",
      },
      {
        title: "Reference supporting detail",
        description:
          "Note where the calculation comes from: prior invoices, usage reports, contract terms, or management estimates with support.",
      },
      {
        title: "Record the entry",
        description:
          "Show the GL entry: which accounts are debited/credited, amounts, and account codes. Example: Debit Utilities Expense, Credit Accrued Utilities.",
      },
      {
        title: "Obtain approval and file",
        description:
          "Have preparer initial and manager approve. File workpaper with GL entries so audit trail is complete.",
      },
    ],
    benefits: [
      "Demonstrates management review of accrual basis",
      "Provides auditors clear support for accrual amounts",
      "Makes it easy to reverse and re-accrue in next period",
      "Helps new team members understand accrual methodology",
    ],
  },
  {
    slug: "reversing-entry-schedule",
    title: "Reversing Entry Schedule",
    description:
      "Track which accrual and deferral entries reverse into the next period. Ensure reversals are posted and reconcile to actuals.",
    category: "Journal Entries",
    tags: ["Reversals", "Accruals", "Close"],
    steps: [
      {
        title: "Identify entries to reverse",
        description:
          "List all accrual and deferral entries from closing that will reverse in next period. Mark these entries as 'To be Reversed'.",
      },
      {
        title: "Create reversal schedule",
        description:
          "Document each reversing entry: original entry date, amount, accounts, and date reversal should post (usually first day of next period).",
      },
      {
        title: "Post reversals",
        description:
          "On first day of next period, record reversals of all identified entries. Use same accounts and amounts as original, but opposite direction.",
      },
      {
        title: "Monitor actual payments",
        description:
          "Track when actual invoices are received (e.g., utility bill). Verify amount matches accrual. Investigate significant variances.",
      },
      {
        title: "Reconcile reversal to actual",
        description:
          "When actual invoice posts to GL, confirm the reversal worked correctly. If accrual and actual don't match, document the variance.",
      },
    ],
    benefits: [
      "Prevents double-recording of accruals when actual expenses post",
      "Ensures consistent treatment of accruals and reversals",
      "Makes it easy to track and explain accrual vs. actual differences",
      "Reduces month-end adjustment needs in following period",
    ],
  },
  {
    slug: "month-end-close-entry-register",
    title: "Month-End Close Entry Register",
    description:
      "Comprehensive register of all journal entries posted during the close period. Central location for all close-related GL activity.",
    category: "Journal Entries",
    tags: ["Close", "Register", "Audit-Ready"],
    steps: [
      {
        title: "Create entry register template",
        description:
          "Set up register with columns: Entry #, Date, Description, GL Accounts (debit and credit), Amounts, Preparer, Approver, Post Date.",
      },
      {
        title: "Log all close entries",
        description:
          "Record every journal entry posted during close: accruals, reversals, reclassifications, consolidation entries, and manual adjustments.",
      },
      {
        title: "Organize by entry type",
        description:
          "Group entries by type (accruals, reversals, adjustments, etc.) so it's easy to find related entries and understand the close flow.",
      },
      {
        title: "Reconcile to GL",
        description:
          "Sum all entries by account in the register. Verify amounts match GL activity for the close period.",
      },
      {
        title: "Prepare for audit",
        description:
          "Print register and file with supporting documentation. Use as master reference when auditors ask about specific GL entries.",
      },
    ],
    benefits: [
      "Provides single-source reference for all close-related GL activity",
      "Makes it easy for auditors to trace GL entries back to support",
      "Enables quick investigation of any GL account variance",
      "Demonstrates complete control and documentation of close process",
    ],
  },
  {
    slug: "ap-aging-report",
    title: "AP Aging Report",
    description:
      "Formal aging report of all outstanding accounts payable. Shows vendor balances and payment status for management and audit review.",
    category: "Accounts Payable",
    tags: ["Payables", "Aging", "Reporting"],
    steps: [
      {
        title: "Generate AP subledger",
        description:
          "Extract all open vendor invoices from accounting system. Include vendor name, invoice number, invoice date, due date, and amount.",
      },
      {
        title: "Calculate days outstanding",
        description:
          "For each invoice, calculate number of days from due date to period-end date. Classify as current, 1-30, 31-60, 61-90, or 90+ days.",
      },
      {
        title: "Prepare aging summary",
        description:
          "Create summary table showing total AP by aging category. Calculate percentage of total in each bucket. Compare to prior period.",
      },
      {
        title: "Add vendor detail",
        description:
          "Include list of top vendors by payable balance. Note any vendors with unusually old invoices or large pending amounts.",
      },
      {
        title: "Review and communicate",
        description:
          "Review report with accounting leadership. Discuss plan for paying down aged items and resolving any disputed invoices.",
      },
    ],
    benefits: [
      "Provides management visibility into AP obligations and timing",
      "Helps optimize cash flow by planning payment schedule",
      "Identifies vendors to contact regarding overdue or disputed invoices",
      "Supports audit assertions about AP completeness and accuracy",
    ],
  },
  {
    slug: "vendor-statement-reconciliation",
    title: "Vendor Statement Reconciliation",
    description:
      "Reconcile vendor monthly statements to your AP records. Resolve discrepancies and identify missing or incorrectly recorded invoices.",
    category: "Accounts Payable",
    tags: ["Payables", "Reconciliation", "Monthly"],
    steps: [
      {
        title: "Collect vendor statements",
        description:
          "Obtain monthly statements from all significant vendors. Note vendor name, statement date, and statement total amount due.",
      },
      {
        title: "Extract your AP records",
        description:
          "Pull all invoices from that vendor in your system for the same time period. Include invoice number, date, amount, and payment status.",
      },
      {
        title: "Match invoices",
        description:
          "Line-by-line, match invoices on your records to vendor statement. Check off invoices that both parties agree have been received.",
      },
      {
        title: "Identify discrepancies",
        description:
          "Flag items that don't match: invoices you recorded but vendor doesn't show, invoices vendor shows but you haven't recorded, or amount differences.",
      },
      {
        title: "Resolve and document",
        description:
          "Investigate each discrepancy. Document resolution: payment made after statement date, invoice not yet received, or correction needed.",
      },
    ],
    benefits: [
      "Catches duplicate invoices before payment",
      "Identifies invoices you forgot to record or paid incorrectly",
      "Resolves vendor billing disputes before they escalate",
      "Ensures AP balance accurately reflects your actual obligations",
    ],
  },
  {
    slug: "financial-statement-notes",
    title: "Financial Statement Notes to Accompany Financials",
    description:
      "Comprehensive notes to financial statements explaining accounting policies, significant balances, and items requiring disclosure. Meet auditing and regulatory requirements.",
    category: "Financial Reporting",
    tags: ["Notes", "Disclosure", "Audit-Ready"],
    steps: [
      {
        title: "Document accounting policies",
        description:
          "Write clear descriptions of significant accounting policies: revenue recognition, depreciation methods, inventory valuation, foreign exchange treatment, etc.",
      },
      {
        title: "Explain significant GL accounts",
        description:
          "For material balance sheet and income statement items, provide narrative explanation, breakdown of components, and reconciliation to GL.",
      },
      {
        title: "Disclose required items",
        description:
          "Include notes on debt terms and covenants, lease obligations, contingencies, equity components, earnings per share calculation, and segment information.",
      },
      {
        title: "Add management discussion",
        description:
          "Explain significant changes period-over-period, unusual items, and key business drivers affecting financial results and position.",
      },
      {
        title: "Format for compliance",
        description:
          "Organize notes in standard order matching GAAP or IFRS requirements. Cross-reference to financial statements and supporting schedules.",
      },
    ],
    benefits: [
      "Ensures complete disclosure for regulatory and audit requirements",
      "Provides readers clear understanding of accounting judgments and estimates",
      "Reduces audit findings and adjustments related to disclosure",
      "Demonstrates transparency and quality financial reporting",
    ],
  },
  {
    slug: "gaap-reconciliation-schedule",
    title: "GAAP Reconciliation Schedule",
    description:
      "Reconcile non-GAAP measures to GAAP financials. Document adjustments for stock-based compensation, acquisition costs, and other significant items.",
    category: "Financial Reporting",
    tags: ["GAAP", "Reconciliation", "Analysis"],
    steps: [
      {
        title: "Define non-GAAP metrics",
        description:
          "Identify which non-GAAP measures you report (adjusted EBITDA, adjusted net income, organic revenue growth, etc.) and their business purpose.",
      },
      {
        title: "Build reconciliation detail",
        description:
          "Create schedule showing GAAP results, adjustment line items with dollar amounts, and resulting non-GAAP measure. Show both current period and year-to-date.",
      },
      {
        title: "Document adjustment rationale",
        description:
          "For each adjustment, explain why it's excluded from non-GAAP measure (non-recurring, acquisition-related, stock-based compensation, etc.).",
      },
      {
        title: "Validate calculations",
        description:
          "Verify math: GAAP result + adjustments = non-GAAP result. Cross-check against GL and supporting schedules.",
      },
      {
        title: "Prepare disclosure note",
        description:
          "Write note for financial statements explaining non-GAAP measures, why company believes they're useful, and reconciliation to GAAP results.",
      },
    ],
    benefits: [
      "Provides transparent reconciliation between GAAP and non-GAAP results",
      "Helps investors understand adjustment items and true operating performance",
      "Demonstrates consistency in non-GAAP calculation period to period",
      "Supports SEC compliance if reporting publicly",
    ],
  },
  {
    slug: "management-discussion-template",
    title: "Management Discussion & Analysis Template",
    description:
      "Structured template for management to discuss and analyze financial results, changes, trends, and key metrics. Supports investor communication.",
    category: "Financial Reporting",
    tags: ["MD&A", "Analysis", "Discussion"],
    steps: [
      {
        title: "Analyze revenue trends",
        description:
          "Discuss total revenue growth or decline. Break down by business segment, geography, product line. Explain key drivers and compare to expectations.",
      },
      {
        title: "Explain margin changes",
        description:
          "Analyze gross margin, operating margin, and net margin trends. Discuss cost structure changes, pricing actions, mix effects, and operating leverage.",
      },
      {
        title: "Review balance sheet changes",
        description:
          "Discuss significant changes in working capital, capital expenditures, debt levels, and cash position. Explain liquidity and financing needs.",
      },
      {
        title: "Address risks and uncertainties",
        description:
          "Identify key business risks, market conditions, regulatory changes, or other factors that could significantly impact future performance.",
      },
      {
        title: "Outline forward guidance",
        description:
          "Provide management perspective on near-term outlook, growth initiatives, and expectations for key metrics and financial position.",
      },
    ],
    benefits: [
      "Provides investors and stakeholders clear insight into management's perspective on business",
      "Explains major changes and unusual items in financial statements",
      "Demonstrates management accountability for results",
      "Supports communication with board, lenders, and investors",
    ],
  },
  {
    slug: "segment-reporting-workpaper",
    title: "Segment Reporting Workpaper",
    description:
      "Document operating segments for reporting purposes. Track revenue, profit, assets, and other metrics by reportable segment.",
    category: "Financial Reporting",
    tags: ["Segments", "Workpaper", "Reporting"],
    steps: [
      {
        title: "Identify operating segments",
        description:
          "Determine reporting structure based on how management reviews performance: by geography, product line, customer type, or business unit.",
      },
      {
        title: "Allocate revenues and expenses",
        description:
          "Assign revenues, costs, and expenses to each segment based on internal GL structure or detailed allocation methodology. Document allocation methodology.",
      },
      {
        title: "Calculate segment profit",
        description:
          "Compute operating income or EBITDA by segment. Include allocated corporate costs or show pre-allocation for segment comparison.",
      },
      {
        title: "Track segment assets",
        description:
          "Identify assets by segment (cash, receivables, inventory, fixed assets). Note any shared assets and allocation method.",
      },
      {
        title: "Reconcile to consolidated",
        description:
          "Verify segment revenues, profit, and assets tie to consolidated financial statements. Explain any eliminations or adjustments.",
      },
    ],
    benefits: [
      "Provides transparent view of profitability by business area",
      "Helps management identify high- and low-performing segments",
      "Supports strategic decision-making on resource allocation",
      "Meets SEC reporting requirements for public companies",
    ],
  },
  {
    slug: "key-metrics-dashboard",
    title: "Key Metrics Dashboard Template",
    description:
      "One-page visual summary of critical financial and operational metrics. Track trends, targets, and performance against plan.",
    category: "Financial Reporting",
    tags: ["Metrics", "Dashboard", "Reporting"],
    steps: [
      {
        title: "Define key metrics",
        description:
          "Identify 8-12 critical metrics that drive business: revenue growth, margins, cash flow, customer metrics, operational efficiency ratios, etc.",
      },
      {
        title: "Set targets and thresholds",
        description:
          "Establish target ranges or thresholds for each metric (e.g., gross margin 45-50%, days sales outstanding < 45 days).",
      },
      {
        title: "Build monthly tracking",
        description:
          "Create simple table or visual showing current month, year-to-date, target, and prior year for easy comparison. Use color coding (red/yellow/green).",
      },
      {
        title: "Add trend visualization",
        description:
          "Include simple charts or sparklines showing 6-12 month trend for key metrics. Highlight trends improving vs. deteriorating.",
      },
      {
        title: "Include commentary",
        description:
          "Add brief notes explaining significant variances, action items, or items requiring attention from leadership.",
      },
    ],
    benefits: [
      "Provides at-a-glance view of business health and performance",
      "Facilitates quick identification of problem areas needing attention",
      "Enables consistent tracking and communication of critical metrics",
      "Supports board reporting and investor communication",
    ],
  },
  {
    slug: "financial-ratio-analysis",
    title: "Financial Ratio Analysis",
    description:
      "Calculate and analyze key financial ratios. Track profitability, liquidity, solvency, and efficiency ratios period-over-period.",
    category: "Financial Reporting",
    tags: ["Ratios", "Analysis", "Benchmarking"],
    steps: [
      {
        title: "Calculate profitability ratios",
        description:
          "Compute gross profit margin, operating margin, net profit margin, return on assets (ROA), and return on equity (ROE). Compare to industry benchmarks.",
      },
      {
        title: "Calculate liquidity ratios",
        description:
          "Calculate current ratio, quick ratio, working capital, and cash ratio. Assess ability to meet short-term obligations.",
      },
      {
        title: "Calculate solvency ratios",
        description:
          "Compute debt-to-equity, debt-to-assets, interest coverage, and debt service coverage ratios. Assess financial leverage and default risk.",
      },
      {
        title: "Calculate efficiency ratios",
        description:
          "Compute asset turnover, inventory turnover, receivables turnover, payables period, and cash conversion cycle.",
      },
      {
        title: "Analyze trends and variances",
        description:
          "Compare ratios to prior periods, industry benchmarks, and competitors. Identify improving or deteriorating trends and investigate causes.",
      },
    ],
    benefits: [
      "Provides quantitative view of financial health and operating efficiency",
      "Enables comparison to industry benchmarks and competitors",
      "Identifies trends that may indicate emerging problems",
      "Supports debt covenant compliance and credit discussions",
    ],
  },
  {
    slug: "cash-flow-statement-reconciliation",
    title: "Cash Flow Statement Reconciliation",
    description:
      "Reconcile cash flow statement to GL ending cash balance. Tie operating, investing, and financing activities to supporting detail.",
    category: "Financial Reporting",
    tags: ["Cash Flow", "Reconciliation", "Close"],
    steps: [
      {
        title: "Pull GL cash balances",
        description:
          "Extract beginning cash, ending cash, and all cash-related GL accounts from trial balance.",
      },
      {
        title: "Build operating activities section",
        description:
          "Start with net income and adjust for: depreciation, amortization, deferred taxes, changes in working capital accounts.",
      },
      {
        title: "Build investing activities section",
        description:
          "Detail capital expenditures, asset disposals, acquisitions, and other non-operating investments made during the period.",
      },
      {
        title: "Build financing activities section",
        description:
          "Document debt borrowed and repaid, equity issued or repurchased, and dividends paid.",
      },
      {
        title: "Reconcile and tie to GL",
        description:
          "Verify: Beginning cash + operating + investing + financing = ending cash. Tie ending cash to GL balance.",
      },
    ],
    benefits: [
      "Explains how business generated or used cash during period",
      "Identifies quality of earnings and sustainability of results",
      "Shows liquidity and capital allocation decisions",
      "Critical for understanding true financial health beyond accrual results",
    ],
  },
  {
    slug: "operating-vs-nonoperating-analysis",
    title: "Operating vs Non-Operating Analysis",
    description:
      "Separate operating results from non-operating items. Identify impact of one-time, unusual, or non-recurring items on reported earnings.",
    category: "Financial Reporting",
    tags: ["Analysis", "Operating", "Adjustments"],
    steps: [
      {
        title: "Define operating activities",
        description:
          "Identify which items are core operating results: sales, cost of goods sold, operating expenses directly supporting revenue generation.",
      },
      {
        title: "Identify non-operating items",
        description:
          "List non-operating items: interest expense, investment income, gains/losses on asset sales, one-time charges, acquisition costs, restructuring.",
      },
      {
        title: "Calculate operating income",
        description:
          "Compute operating income before financing and investment decisions. Compare to reported net income.",
      },
      {
        title: "Quantify impact of non-operating items",
        description:
          "Calculate total impact of non-operating items on net income. Express as percentage of operating income and absolute amount.",
      },
      {
        title: "Analyze trends and sustainability",
        description:
          "Assess whether non-operating items are recurring or one-time. Discuss sustainability of operating income independent of one-time items.",
      },
    ],
    benefits: [
      "Shows true operating performance independent of financing and investment decisions",
      "Identifies quality and sustainability of earnings",
      "Highlights one-time items that don't recur",
      "Enables better comparison of performance to prior periods and competitors",
    ],
  },
  {
    slug: "revenue-recognition-workpaper",
    title: "Revenue Recognition Workpaper",
    description:
      "Document revenue recognition policy and support for significant revenue transactions. Ensure compliance with ASC 606.",
    category: "Financial Reporting",
    tags: ["Revenue", "Recognition", "Audit-Ready"],
    steps: [
      {
        title: "Document revenue policy",
        description:
          "Write clear policy for how revenue is recognized: at shipment, at delivery, upon payment, upon performance obligation satisfaction, etc.",
      },
      {
        title: "Identify performance obligations",
        description:
          "For contracts, identify what customer receives (product, service, right to use asset) and when performance obligation is satisfied.",
      },
      {
        title: "Document transaction price",
        description:
          "Show calculation of revenue recognized: list price, less discounts/allowances, plus shipping if required. Document timing of recognition.",
      },
      {
        title: "Support significant transactions",
        description:
          "For large or unusual revenue items, attach customer contracts, delivery documentation, or other support for recognition.",
      },
      {
        title: "Reconcile to GL",
        description:
          "Verify revenue recorded matches sales GL accounts. Reconcile to accounts receivable and customer payment history.",
      },
    ],
    benefits: [
      "Demonstrates compliance with ASC 606 revenue recognition standard",
      "Provides clear support for revenue recorded in financial statements",
      "Reduces risk of revenue accounting errors or misstatements",
      "Simplifies audit review of revenue transactions",
    ],
  },
  {
    slug: "cost-of-goods-sold-analysis",
    title: "Cost of Goods Sold Analysis",
    description:
      "Analyze components of COGS. Track material, labor, and overhead costs period-over-period to identify efficiency and cost trends.",
    category: "Financial Reporting",
    tags: ["COGS", "Analysis", "Variance"],
    steps: [
      {
        title: "Build COGS detail",
        description:
          "Break down COGS into components: raw materials, direct labor, manufacturing overhead, freight, quality costs, scrap/waste.",
      },
      {
        title: "Track unit economics",
        description:
          "Calculate cost per unit for key products or services. Show total cost, material cost, labor cost, and overhead allocation per unit.",
      },
      {
        title: "Analyze variances",
        description:
          "Compare actual COGS to budget or prior period. Investigate material price variances, labor rate/efficiency variances, overhead variance.",
      },
      {
        title: "Examine margin trends",
        description:
          "Calculate gross profit and gross margin percentage. Identify products or services with improving vs. deteriorating margins.",
      },
      {
        title: "Identify improvement opportunities",
        description:
          "Note areas of cost inefficiency, waste, or deterioration. Recommend operational improvements or pricing adjustments.",
      },
    ],
    benefits: [
      "Provides visibility into manufacturing or service delivery costs",
      "Enables identification of cost reduction opportunities",
      "Tracks unit economics and profitability by product",
      "Supports pricing decisions and product line management",
    ],
  },
  {
    slug: "sga-expense-analysis",
    title: "SG&A Expense Analysis",
    description:
      "Analyze selling, general and administrative expenses. Track major cost categories and identify spending trends and control issues.",
    category: "Financial Reporting",
    tags: ["SG&A", "Expenses", "Analysis"],
    steps: [
      {
        title: "Break down SG&A categories",
        description:
          "Classify SG&A into major buckets: sales/marketing, administrative, corporate overhead, technology, and other.",
      },
      {
        title: "Track per major GL account",
        description:
          "For top 10-15 SG&A accounts, document current month, year-to-date, budget, and prior year. Calculate percent of revenue.",
      },
      {
        title: "Analyze spending trends",
        description:
          "Identify which cost categories are increasing, decreasing, or flat. Note whether changes are driven by volume, head count, or rate.",
      },
      {
        title: "Calculate efficiency metrics",
        description:
          "Compute SG&A as percentage of revenue. Track sales per employee, marketing spend as percentage of revenue, other efficiency metrics.",
      },
      {
        title: "Evaluate controllability",
        description:
          "Assess which SG&A costs are fixed vs. variable, controllable vs. uncontrollable. Identify areas management can impact.",
      },
    ],
    benefits: [
      "Provides visibility into operating expense structure and trends",
      "Identifies areas of potential cost control or elimination",
      "Tracks efficiency metrics important to profitability",
      "Supports operating margin improvement initiatives",
    ],
  },
  {
    slug: "debt-schedule-covenant-compliance",
    title: "Debt Schedule and Covenant Compliance",
    description:
      "Track all debt obligations and calculate covenant compliance. Demonstrate borrowing capacity and debt service ability.",
    category: "Financial Reporting",
    tags: ["Debt", "Covenants", "Compliance"],
    steps: [
      {
        title: "List all debt instruments",
        description:
          "Document each loan, note, bond, or other debt: lender name, original amount, interest rate, maturity date, terms and conditions.",
      },
      {
        title: "Calculate principal and interest",
        description:
          "Show current principal balance, annual interest rate, interest expense, and scheduled principal payments for next 3-5 years.",
      },
      {
        title: "Calculate covenant metrics",
        description:
          "For each covenant, calculate the metric: debt-to-EBITDA, interest coverage, minimum working capital, current ratio, etc.",
      },
      {
        title: "Assess compliance",
        description:
          "Compare calculated metrics to covenant thresholds. Document compliance status and headroom to covenant breaches.",
      },
      {
        title: "Note restrictions and waivers",
        description:
          "Document any financial restrictions, material adverse change clauses, or conditions in loan agreements. Note any waivers or amendments.",
      },
    ],
    benefits: [
      "Ensures compliance with debt covenants and avoids default",
      "Provides visibility into debt service obligations and capacity",
      "Supports lender reporting and covenant waiver negotiations",
      "Identifies need for refinancing or additional borrowing",
    ],
  },
  {
    slug: "contingencies-commitments-schedule",
    title: "Contingencies and Commitments Schedule",
    description:
      "Document contingent liabilities, legal settlements, pending litigation, guarantees, and other commitments requiring disclosure.",
    category: "Financial Reporting",
    tags: ["Contingencies", "Disclosures", "Audit-Ready"],
    steps: [
      {
        title: "Identify legal matters",
        description:
          "List all pending or threatened litigation, claims, or disputes. For each, document nature of claim, probable outcome, and estimated loss.",
      },
      {
        title: "Identify other contingencies",
        description:
          "Document environmental liabilities, guarantees of third-party debt, performance bonds, warranty obligations, or other contingent items.",
      },
      {
        title: "Assess likelihood and amount",
        description:
          "For each item, assess probability of occurrence (probable, reasonably possible, remote) and estimate dollar amount or range.",
      },
      {
        title: "Document accrual decision",
        description:
          "Per ASC 450, determine if accrual is required (probable and measurable), disclosed (reasonably possible), or not required (remote).",
      },
      {
        title: "Prepare disclosure note",
        description:
          "Write financial statement note describing each contingency and management's assessment of potential impact.",
      },
    ],
    benefits: [
      "Ensures proper accounting and disclosure of potential obligations",
      "Prevents surprises from undisclosed liabilities",
      "Demonstrates transparency to users of financial statements",
      "Meets auditing standards and regulatory requirements",
    ],
  },
  {
    slug: "quarterly-budget-vs-actual",
    title: "Quarterly Budget vs Actual Analysis",
    description:
      "Analyze quarterly performance against budget. Identify variances and explain key drivers of differences between planned and actual results.",
    category: "FP&A",
    tags: ["Budget", "Variance", "Quarterly"],
    steps: [
      {
        title: "Extract budget and actual data",
        description:
          "Pull Q budget for revenue, COGS, operating expenses, capital expenditures, and key metrics. Compare to actual results.",
      },
      {
        title: "Calculate variances",
        description:
          "Calculate dollar and percentage variance for revenue, gross profit, operating income, and net income. Flag variances > 10% or material amounts.",
      },
      {
        title: "Analyze revenue variances",
        description:
          "Break down revenue variance into: price/mix variance (selling price changes, product mix shifts) and volume variance (unit sales changes).",
      },
      {
        title: "Analyze operating expense variances",
        description:
          "For significant variance, determine if due to volume changes, headcount/compensation changes, discretionary spending variances, or one-time items.",
      },
      {
        title: "Prepare management summary",
        description:
          "Write summary of top 5-10 variances with explanations. Discuss impact on full-year forecast and actions to address negative variances.",
      },
    ],
    benefits: [
      "Demonstrates accountability for quarterly performance vs. plan",
      "Identifies variances early for management course correction",
      "Supports board reporting and investor communication",
      "Enables more accurate full-year forecasting",
    ],
  },
  {
    slug: "headcount-compensation-forecast",
    title: "Headcount and Compensation Forecast",
    description:
      "Forecast future headcount and compensation by department and level. Project payroll expense and track personnel costs.",
    category: "FP&A",
    tags: ["Headcount", "Forecast", "Compensation"],
    steps: [
      {
        title: "Build current headcount baseline",
        description:
          "Document current headcount by department, level, and location. Include title, salary, and benefits for each employee.",
      },
      {
        title: "Plan headcount changes",
        description:
          "For each department, plan additions, replacements, and terminations for next 12-24 months. Document planned start dates.",
      },
      {
        title: "Forecast compensation changes",
        description:
          "Estimate merit increases, promotion movements, and market-based compensation adjustments. Assume merit increase and inflation rates.",
      },
      {
        title: "Calculate total payroll expense",
        description:
          "Project monthly payroll costs including salary, payroll taxes (7.65%), and benefits (health, retirement, etc.). Show current and loaded cost per employee.",
      },
      {
        title: "Analyze cost trends",
        description:
          "Review headcount-to-revenue ratio, payroll as percentage of revenue, and cost per employee. Identify areas of headcount efficiency.",
      },
    ],
    benefits: [
      "Projects largest operating expense category accurately",
      "Supports planning for headcount needs and hiring timeline",
      "Identifies compensation and benefits cost trends",
      "Enables department cost center budgeting and accountability",
    ],
  },
  {
    slug: "capex-budget-tracking",
    title: "Capital Expenditure Budget and Tracking",
    description:
      "Plan and track capital investments by project. Monitor spending vs. budget and payback assumptions for each project.",
    category: "FP&A",
    tags: ["CapEx", "Budget", "Investments"],
    steps: [
      {
        title: "Document capital projects",
        description:
          "List all significant capital projects: cost, department, business justification, expected payback period, and approval date.",
      },
      {
        title: "Project annual capex",
        description:
          "Sum budget for all planned projects. Break down by quarter and by department. Compare to prior year spending.",
      },
      {
        title: "Track spending to date",
        description:
          "For each project, document amount spent to date, committed spend, and remaining budget. Track schedule vs. timeline.",
      },
      {
        title: "Monitor project assumptions",
        description:
          "Track key assumptions for each project: expected return, payback period, cost savings, or revenue increases. Validate actual results.",
      },
      {
        title: "Report capex activity",
        description:
          "Prepare monthly capex report showing budget vs. actual by project. Note any projects at risk of overrun or delay.",
      },
    ],
    benefits: [
      "Controls capital spending and investment decisions",
      "Tracks ROI assumptions and validates actual project returns",
      "Prevents unauthorized or excessive capital expenditures",
      "Supports management decision-making on future capital allocations",
    ],
  },
  {
    slug: "working-capital-forecast",
    title: "Working Capital Forecast",
    description:
      "Forecast changes in working capital (receivables, inventory, payables). Plan for cash needs or surpluses driven by operating growth.",
    category: "FP&A",
    tags: ["Working Capital", "Forecast", "Cash"],
    steps: [
      {
        title: "Build working capital model",
        description:
          "Create schedule showing projected accounts receivable, inventory, and accounts payable for next 12 months based on revenue and expense projections.",
      },
      {
        title: "Project receivables",
        description:
          "Calculate projected AR based on sales growth and days sales outstanding. Model seasonal impacts on cash collection timing.",
      },
      {
        title: "Project inventory",
        description:
          "Calculate projected inventory based on cost of goods sold and inventory turnover assumptions. Model lead time impacts.",
      },
      {
        title: "Project payables",
        description:
          "Calculate projected AP based on COGS and operating expense growth, using days payable outstanding assumptions.",
      },
      {
        title: "Calculate cash impact",
        description:
          "Calculate net working capital changes period-over-period. Project whether operating growth requires additional financing or generates free cash.",
      },
    ],
    benefits: [
      "Projects cash needs driven by business growth",
      "Identifies whether growth can be self-financed or requires external funding",
      "Supports planning for credit facilities or capital raises",
      "Enables management to optimize cash conversion cycle",
    ],
  },
  {
    slug: "scenario-analysis-sensitivity",
    title: "Scenario Analysis and Sensitivity Testing",
    description:
      "Model impact of different business scenarios on financial results. Test sensitivity to key variables like revenue growth, margins, and costs.",
    category: "FP&A",
    tags: ["Scenario", "Sensitivity", "Analysis"],
    steps: [
      {
        title: "Build base case model",
        description:
          "Create financial projection using realistic assumptions: revenue growth, margin targets, expense ratios, tax rate, etc.",
      },
      {
        title: "Develop alternative scenarios",
        description:
          "Build downside, upside, and alternative scenarios: recession case, market share loss, faster growth, new product launch, M&A, etc.",
      },
      {
        title: "Identify key variables",
        description:
          "Determine which variables have largest impact on results: revenue growth, pricing, COGS, operating margins, capex, working capital, discount rate.",
      },
      {
        title: "Test sensitivity",
        description:
          "For each key variable, test impact of +/- 10-20% change on operating income, cash flow, and other critical metrics.",
      },
      {
        title: "Present scenario results",
        description:
          "Show financial statements and key metrics for base, upside, and downside scenarios. Highlight sensitivity to specific variables.",
      },
    ],
    benefits: [
      "Provides range of potential outcomes vs. single point forecast",
      "Identifies key business drivers and risks",
      "Prepares management for different business scenarios",
      "Supports strategic decision-making and contingency planning",
    ],
  },
  {
    slug: "long-term-financial-plan",
    title: "Long-Term Financial Plan (3-5 Year)",
    description:
      "Project financial performance for 3-5 years. Plan for growth investments, financing needs, and capital allocation.",
    category: "FP&A",
    tags: ["Planning", "Long-term", "Strategy"],
    steps: [
      {
        title: "Establish planning assumptions",
        description:
          "Define strategic assumptions: revenue growth rates, operating margin targets, tax rate, capex as percent of revenue, dividend/buyback plans.",
      },
      {
        title: "Project income statement",
        description:
          "Build 3-5 year P&L: revenue, COGS, operating expenses, operating income, interest, taxes, net income. Show EBITDA and free cash flow.",
      },
      {
        title: "Project balance sheet",
        description:
          "Forecast assets (receivables, inventory, fixed assets) and liabilities (payables, debt) needed to support revenue growth.",
      },
      {
        title: "Project cash flow",
        description:
          "Calculate operating cash flow, capex, financing needs, and free cash flow. Determine if plan is self-funding or requires capital raise.",
      },
      {
        title: "Assess financial feasibility",
        description:
          "Review debt ratios, interest coverage, liquidity, and ROIC. Adjust assumptions if plan is not financially sustainable or attractive.",
      },
    ],
    benefits: [
      "Aligns financial projections with long-term strategic plan",
      "Projects capital and financing needs for growth",
      "Validates financial viability of strategic initiatives",
      "Supports lender, investor, and board discussions",
    ],
  },
  {
    slug: "cash-flow-projection-model",
    title: "Cash Flow Projection Model",
    description:
      "Build detailed cash flow projection for the next 12-24 months. Forecast operating, investing, and financing cash flows monthly.",
    category: "FP&A",
    tags: ["Cash Flow", "Forecast", "Liquidity"],
    steps: [
      {
        title: "Project operating cash",
        description:
          "Starting with projected net income, adjust for depreciation, changes in working capital. Model monthly customer collections and vendor payments.",
      },
      {
        title: "Project investing cash",
        description:
          "Forecast monthly capital expenditures, asset disposals, and other investing activities based on capex plan and project schedule.",
      },
      {
        title: "Project financing cash",
        description:
          "Model debt draws and repayments, equity issuances or buybacks, and dividend payments based on financing plan.",
      },
      {
        title: "Calculate monthly cash position",
        description:
          "Calculate: Beginning cash + operating - investing - financing = ending cash. Track minimum cash required and borrowing capacity.",
      },
      {
        title: "Identify liquidity needs",
        description:
          "Assess cash position in each month. Identify months requiring additional borrowing or periods of excess cash. Plan accordingly.",
      },
    ],
    benefits: [
      "Provides detailed view of cash needs and timing",
      "Identifies periods requiring short-term financing or excess cash",
      "Supports treasury cash management and debt draw planning",
      "Enables proactive management of liquidity risks",
    ],
  },
  {
    slug: "unit-economics-analysis",
    title: "Unit Economics Analysis",
    description:
      "Analyze profitability of core business unit (customer, product, transaction). Calculate unit contribution margins and payback periods.",
    category: "FP&A",
    tags: ["Unit Economics", "Profitability", "Analysis"],
    steps: [
      {
        title: "Define economic unit",
        description:
          "Identify your core unit: customer account, product sold, transaction, subscription, or customer cohort. Define time period (annual, lifetime).",
      },
      {
        title: "Calculate unit revenue",
        description:
          "Determine average revenue per unit: annual contract value, average transaction value, customer lifetime revenue, subscription lifetime revenue.",
      },
      {
        title: "Calculate unit costs",
        description:
          "Identify variable costs per unit: cost of goods, delivery cost, payment processing, support costs, customer acquisition cost (CAC), etc.",
      },
      {
        title: "Calculate unit margin",
        description:
          "Compute: (Unit revenue - unit variable costs) / unit revenue = unit contribution margin. Calculate payback period for CAC.",
      },
      {
        title: "Analyze by segment",
        description:
          "Calculate unit economics by customer segment, product type, geography, or sales channel. Identify most and least profitable units.",
      },
    ],
    benefits: [
      "Provides clear view of profitability of core business activity",
      "Identifies which customer segments, products, or channels are profitable",
      "Supports pricing, marketing spend, and product strategy decisions",
      "Enables scalability analysis and growth planning",
    ],
  },
  {
    slug: "customer-credit-analysis",
    title: "Customer Credit Analysis Template",
    description:
      "Evaluate creditworthiness of new or existing customers. Assess ability to pay and establish appropriate credit terms and limits.",
    category: "Accounts Receivable",
    tags: ["Credit", "Analysis", "Risk"],
    steps: [
      {
        title: "Gather customer information",
        description:
          "Collect company information: industry, size, years in business, public vs. private. Obtain financial statements if available.",
      },
      {
        title: "Analyze financial statements",
        description:
          "Review customer's balance sheet, income statement, and cash flow. Calculate liquidity ratios, leverage ratios, and profitability metrics.",
      },
      {
        title: "Check credit history",
        description:
          "Obtain credit report from agency (Dun & Bradstreet, trade credit). Review payment history, bankruptcies, liens, or legal judgments.",
      },
      {
        title: "Assess payment capacity",
        description:
          "Evaluate customer's cash flow adequacy to pay proposed orders. Consider existing debt obligations and seasonal cash flow patterns.",
      },
      {
        title: "Recommend credit terms",
        description:
          "Based on analysis, recommend credit limit, payment terms (net 30/60/90 days), and any security requirements (personal guarantee, collateral).",
      },
    ],
    benefits: [
      "Minimizes credit risk and bad debt losses",
      "Enables appropriate credit limits based on customer creditworthiness",
      "Supports collection and dispute resolution",
      "Reduces working capital needed to fund receivables",
    ],
  },
  {
    slug: "collections-follow-up-tracker",
    title: "Collections Follow-Up Tracker",
    description:
      "Track overdue customer invoices and follow-up activities. Log contacts, promises to pay, and collection status for each outstanding invoice.",
    category: "Accounts Receivable",
    tags: ["Collections", "AR", "Follow-up"],
    steps: [
      {
        title: "Identify overdue invoices",
        description:
          "Pull AR aging report. Flag invoices past due 30+ days. Prioritize by age, amount, and customer creditworthiness.",
      },
      {
        title: "Log customer contact",
        description:
          "Record each collection contact: date, person contacted, method (phone/email/letter), message left, and promised payment date.",
      },
      {
        title: "Document reason for non-payment",
        description:
          "Note reason customer hasn't paid: dispute/quality issue, cash flow issue, administrative error, statement mismatch, missing invoice.",
      },
      {
        title: "Escalate as needed",
        description:
          "Move invoices through collection stages: 1st reminder, 2nd notice, phone call, escalation to customer management, legal action if necessary.",
      },
      {
        title: "Track resolution",
        description:
          "Record payment received, partial payment, or write-off decision. Close invoice from collections list once resolved.",
      },
    ],
    benefits: [
      "Improves collection rate and reduces bad debt",
      "Creates audit trail of collection efforts",
      "Identifies customers with chronic payment issues",
      "Supports legal action if collection becomes necessary",
    ],
  },
  // PHASE 4: Close Management (11 more templates)
  {
    slug: "intercompany-transaction-summary",
    title: "Intercompany Transaction Summary",
    description:
      "Centralize and track all intercompany transactions for consolidation purposes and ensure all transactions are properly eliminated.",
    category: "Close Management",
    tags: ["Consolidation", "Close"],
    steps: [
      {
        title: "Identify all intercompany transactions",
        description:
          "Pull a list of all sales, transfers, and services between subsidiary entities during the period.",
      },
      {
        title: "Document transaction terms",
        description:
          "Record pricing, volume, dates, and any transfer pricing documentation supporting the terms.",
      },
      {
        title: "Create elimination entries",
        description:
          "Prepare consolidation entries to eliminate intercompany revenue, payables, and receivables.",
      },
      {
        title: "Test reconciliation",
        description:
          "Verify that payables from one entity match receivables from the counterparty to ensure completeness.",
      },
      {
        title: "Tie to consolidation schedule",
        description:
          "Link the elimination entries to the main consolidation workpaper for audit trail.",
      },
    ],
    benefits: [
      "Ensures accurate consolidation without double-counting revenue",
      "Maintains transfer pricing documentation for tax compliance",
      "Reduces consolidation errors and adjustment rework",
      "Provides clear visibility into intercompany activity",
    ],
  },
  {
    slug: "subsidiary-revaluation-report",
    title: "Subsidiary Revaluation Report",
    description:
      "Track and document the revaluation of subsidiary investments, assets, or equity interests for reporting and compliance.",
    category: "Close Management",
    tags: ["Investments", "Consolidation"],
    steps: [
      {
        title: "Obtain subsidiary financial statements",
        description:
          "Gather the latest audited or reviewed financial statements from each subsidiary.",
      },
      {
        title: "Calculate fair value adjustments",
        description:
          "Determine whether fair value adjustments are needed based on recent appraisals, market data, or impairment indicators.",
      },
      {
        title: "Document revaluation basis",
        description:
          "Record the methodology used (e.g., market approach, income approach, cost approach) and supporting calculations.",
      },
      {
        title: "Prepare journal entries",
        description:
          "Create entries to adjust the investment account and recognize gains or losses in comprehensive income.",
      },
    ],
    benefits: [
      "Ensures investments are valued at fair value per accounting standards",
      "Supports management assertions on asset valuation",
      "Provides documentation for auditor and regulatory review",
      "Prevents understated or overstated subsidiary values",
    ],
  },
  {
    slug: "equity-rollforward-schedule",
    title: "Equity Roll-forward Schedule",
    description:
      "Track all changes to shareholder equity during the period including contributions, distributions, earnings, and other comprehensive income.",
    category: "Close Management",
    tags: ["Equity", "Close"],
    steps: [
      {
        title: "Start with beginning balances",
        description:
          "Pull the opening equity balance for each component (common stock, retained earnings, AOCI, etc.).",
      },
      {
        title: "Record contributions and distributions",
        description:
          "Add stock issuances, capital contributions, dividends paid, and share repurchases during the period.",
      },
      {
        title: "Include net income and OCI",
        description:
          "Roll forward net income and other comprehensive income items affecting equity this period.",
      },
      {
        title: "Reconcile to trial balance",
        description:
          "Verify ending balances tie to the general ledger accounts at period end.",
      },
    ],
    benefits: [
      "Ensures statement of changes in equity is complete and accurate",
      "Provides clear tracking of all equity transactions",
      "Supports management assertions on equity accuracy",
      "Streamlines audit procedures for equity accounts",
    ],
  },
  {
    slug: "deferred-tax-calculation-workpaper",
    title: "Deferred Tax Calculation Workpaper",
    description:
      "Calculate deferred tax assets and liabilities based on temporary differences between GAAP and tax basis.",
    category: "Close Management",
    tags: ["Tax", "Close"],
    steps: [
      {
        title: "Identify temporary differences",
        description:
          "List all significant items where GAAP basis differs from tax basis (e.g., depreciation, reserves, bad debt).",
      },
      {
        title: "Determine tax rate",
        description:
          "Apply the appropriate statutory tax rate for the jurisdiction where the temporary difference originates.",
      },
      {
        title: "Calculate deferred tax amounts",
        description:
          "Multiply each temporary difference by the applicable tax rate to determine deferred tax asset or liability.",
      },
      {
        title: "Assess valuation allowance",
        description:
          "Evaluate whether a valuation allowance is needed for deferred tax assets based on realizability.",
      },
      {
        title: "Prepare journal entry",
        description:
          "Record the deferred tax expense or benefit and update the deferred tax balance sheet account.",
      },
    ],
    benefits: [
      "Ensures deferred tax balances comply with ASC 740 requirements",
      "Reduces audit issues and tax examination adjustments",
      "Supports accurate tax provision calculation",
      "Provides workpaper support for tax positions taken",
    ],
  },
  {
    slug: "goodwill-impairment-analysis",
    title: "Goodwill Impairment Analysis",
    description:
      "Test goodwill for impairment by comparing fair value of reporting units to their carrying amounts.",
    category: "Close Management",
    tags: ["Impairment", "Consolidation"],
    steps: [
      {
        title: "Identify reporting units",
        description:
          "Determine which operating segments represent separate reporting units for goodwill testing purposes.",
      },
      {
        title: "Estimate fair value of reporting unit",
        description:
          "Use market data, comparable transactions, or discounted cash flow analysis to estimate fair value.",
      },
      {
        title: "Compare to carrying amount",
        description:
          "Determine whether the fair value of the reporting unit exceeds its carrying amount including goodwill.",
      },
      {
        title: "Document impairment conclusion",
        description:
          "Record whether goodwill is impaired and prepare supporting documentation for the analysis.",
      },
    ],
    benefits: [
      "Ensures goodwill is tested for impairment per ASC 350",
      "Prevents overstated intangible asset balances",
      "Provides audit support for significant judgments in valuation",
      "Protects against future goodwill write-downs",
    ],
  },
  {
    slug: "related-party-transaction-log",
    title: "Related Party Transaction Log",
    description:
      "Maintain a centralized log of all related party transactions for disclosure and control compliance purposes.",
    category: "Close Management",
    tags: ["Compliance", "Close"],
    steps: [
      {
        title: "Define related parties",
        description:
          "Establish criteria for identifying related parties (shareholders, management, affiliated entities, etc.).",
      },
      {
        title: "Identify transactions",
        description:
          "Search across all entity records for transactions involving related parties and document details.",
      },
      {
        title: "Document terms and pricing",
        description:
          "Record the business purpose, terms, pricing rationale, and any board approvals for each transaction.",
      },
      {
        title: "Prepare disclosure",
        description:
          "Compile information for financial statement footnote disclosure as required by accounting standards.",
      },
    ],
    benefits: [
      "Ensures all related party transactions are disclosed per ASC 850",
      "Supports management assertions on related party transactions",
      "Reduces audit procedures and findings",
      "Demonstrates good internal controls over transaction authorization",
    ],
  },
  {
    slug: "contingent-liability-assessment",
    title: "Contingent Liability Assessment",
    description:
      "Evaluate potential liabilities from pending litigation, claims, or other contingencies to determine appropriate accounting.",
    category: "Close Management",
    tags: ["Litigation", "Close"],
    steps: [
      {
        title: "Obtain litigation summary",
        description:
          "Request from legal counsel a summary of all pending or threatened litigation and claims.",
      },
      {
        title: "Assess probability",
        description:
          "Evaluate whether an unfavorable outcome is probable, reasonably possible, or remote.",
      },
      {
        title: "Estimate loss amount",
        description:
          "Determine the range of potential loss and the best estimate if probable and measurable.",
      },
      {
        title: "Determine accounting treatment",
        description:
          "Record a liability and expense if probable and measurable, otherwise evaluate disclosure requirements.",
      },
    ],
    benefits: [
      "Ensures contingent liabilities are properly accounted for under ASC 450",
      "Prevents understated liabilities in the balance sheet",
      "Provides required disclosures for litigation and claims",
      "Supports management assertions on liabilities",
    ],
  },
  {
    slug: "sub-ledger-account-reconciliation",
    title: "Sub-ledger Account Reconciliation",
    description:
      "Reconcile detailed sub-ledger accounts to the general ledger control account to ensure completeness and accuracy.",
    category: "Close Management",
    tags: ["Reconciliation", "Close"],
    steps: [
      {
        title: "Pull sub-ledger detail",
        description:
          "Extract detailed transaction listing from the sub-ledger system or module for the account.",
      },
      {
        title: "Sum sub-ledger transactions",
        description:
          "Total all sub-ledger transactions for the period and verify the sum matches the period activity.",
      },
      {
        title: "Compare to GL control account",
        description:
          "Reconcile the sub-ledger total to the general ledger control account balance.",
      },
      {
        title: "Investigate differences",
        description:
          "Research and resolve any reconciling items such as timing differences or posting errors.",
      },
      {
        title: "Document sign-off",
        description:
          "Record the preparer and reviewer sign-off and attach supporting reconciliation to workpaper.",
      },
    ],
    benefits: [
      "Ensures sub-ledger records are complete and accurate",
      "Detects posting errors, duplicate entries, or missing transactions",
      "Provides audit trail for detailed account balances",
      "Reduces errors and manual adjustments at close",
    ],
  },
  {
    slug: "manual-adjustment-sign-off-sheet",
    title: "Manual Adjustment Sign-off Sheet",
    description:
      "Document all manual journal entries recorded during the close period with evidence of preparation, review, and approval.",
    category: "Close Management",
    tags: ["Journal Entries", "Close"],
    steps: [
      {
        title: "List all manual entries",
        description:
          "Create a summary of every manual journal entry posted during the close (excluding automated feeds).",
      },
      {
        title: "Document entry details",
        description:
          "Record the date, description, amount, accounts affected, and business purpose for each entry.",
      },
      {
        title: "Require evidence",
        description:
          "Attach supporting documentation (e.g., calculations, authorizations, emails) to each entry.",
      },
      {
        title: "Verify preparer initials",
        description:
          "Confirm that the employee preparing each entry has initialed and dated it.",
      },
      {
        title: "Obtain approvals",
        description:
          "Collect evidence that a manager or accounting lead has reviewed and approved each adjustment.",
      },
    ],
    benefits: [
      "Provides clear audit trail for all manual close entries",
      "Prevents unauthorized or erroneous adjustments",
      "Reduces audit questions on adjustment justification",
      "Strengthens internal controls over journal entry approval",
    ],
  },
  {
    slug: "period-end-accrual-review",
    title: "Period-End Accrual Review",
    description:
      "Review all period-end accrual entries to ensure they are appropriate, reasonable, and supported by evidence.",
    category: "Close Management",
    tags: ["Accruals", "Close"],
    steps: [
      {
        title: "Identify accrual entries",
        description:
          "Obtain a list of all period-end accruals recorded for utilities, professional fees, bonuses, etc.",
      },
      {
        title: "Verify supporting evidence",
        description:
          "Ensure each accrual is supported by an invoice, contract, or other appropriate documentation.",
      },
      {
        title: "Assess reasonableness",
        description:
          "Compare accrual amounts to prior period or budgeted amounts to identify anomalies.",
      },
      {
        title: "Review subsequent payments",
        description:
          "Check that accruals recorded in the prior period were paid in the following period.",
      },
      {
        title: "Approve accrual schedule",
        description:
          "Obtain sign-off from a manager confirming the appropriateness of all accruals.",
      },
    ],
    benefits: [
      "Ensures accruals are properly supported and reasonable",
      "Prevents over-accruals that distort reported income",
      "Reduces audit procedures and findings",
      "Provides clear documentation of accrual judgments",
    ],
  },
  {
    slug: "balance-sheet-certification-template",
    title: "Balance Sheet Certification Template",
    description:
      "Obtain signed certification from account owners that balance sheet accounts are accurate, complete, and free from error.",
    category: "Close Management",
    tags: ["Certification", "Close"],
    steps: [
      {
        title: "Prepare account listing",
        description:
          "List all balance sheet accounts with their period-end balances for each account owner to review.",
      },
      {
        title: "Distribute to account owners",
        description:
          "Send the listing to responsible managers with instructions for review and sign-off.",
      },
      {
        title: "Document review and issues",
        description:
          "Require account owners to confirm accuracy or document any exceptions or issues identified.",
      },
      {
        title: "Investigate and resolve exceptions",
        description:
          "Follow up on any flagged issues and ensure appropriate corrections are made.",
      },
      {
        title: "Collect signed certifications",
        description:
          "Obtain signed documentation from account owners confirming their balance sheet accounts.",
      },
    ],
    benefits: [
      "Demonstrates that account owners have reviewed and accepted their balances",
      "Creates accountability for balance sheet accuracy",
      "Provides audit evidence of management's review",
      "Identifies and resolves issues before financial statement issuance",
    ],
  },
  // PHASE 4: Reconciliation (10 more templates)
  {
    slug: "inventory-reconciliation",
    title: "Inventory Reconciliation",
    description:
      "Reconcile physical inventory counts to perpetual inventory records and the general ledger control account.",
    category: "Reconciliation",
    tags: ["Inventory", "Reconciliation"],
    steps: [
      {
        title: "Obtain physical count results",
        description:
          "Collect the results from the physical inventory count including quantities and locations.",
      },
      {
        title: "Extract perpetual records",
        description:
          "Pull the perpetual inventory system records showing quantities on hand for the same locations and items.",
      },
      {
        title: "Reconcile quantities",
        description:
          "Compare physical counts to perpetual records and identify variances by item and location.",
      },
      {
        title: "Investigate variances",
        description:
          "Determine root causes of variances such as shrinkage, counting errors, or timing differences.",
      },
      {
        title: "Reconcile to GL",
        description:
          "Verify that the perpetual inventory balance ties to the GL inventory account at period end.",
      },
    ],
    benefits: [
      "Ensures inventory valuation is accurate for financial reporting",
      "Identifies and prevents inventory shrinkage and losses",
      "Detects obsolete or slow-moving inventory requiring write-down",
      "Provides audit support for significant inventory balances",
    ],
  },
  {
    slug: "intangible-asset-rollforward",
    title: "Intangible Asset Roll-forward",
    description:
      "Track the roll-forward of intangible assets including patents, trademarks, customer relationships, and software.",
    category: "Reconciliation",
    tags: ["Intangibles", "Reconciliation"],
    steps: [
      {
        title: "List all intangible assets",
        description:
          "Create a schedule of all identified intangible assets with acquisition date and original cost.",
      },
      {
        title: "Document useful lives",
        description:
          "Record the estimated useful life for each asset and the amortization method applied.",
      },
      {
        title: "Calculate amortization",
        description:
          "Compute straight-line amortization for the period and update accumulated amortization.",
      },
      {
        title: "Reconcile to trial balance",
        description:
          "Verify the rollforward ending balances tie to the GL accounts for intangible assets.",
      },
    ],
    benefits: [
      "Ensures intangible assets are properly amortized over useful lives",
      "Prevents incorrect or missed amortization entries",
      "Provides clear tracking of intangible asset activity",
      "Supports GAAP compliance and audit requirements",
    ],
  },
  {
    slug: "deferred-tax-reconciliation",
    title: "Deferred Tax Asset/Liability Schedule",
    description:
      "Maintain a comprehensive schedule of deferred tax assets and liabilities with roll-forward of temporary differences.",
    category: "Reconciliation",
    tags: ["Deferred Tax", "Reconciliation"],
    steps: [
      {
        title: "Pull prior year deferred tax",
        description:
          "Obtain the beginning balance of deferred tax assets and liabilities from the prior close.",
      },
      {
        title: "Identify current period changes",
        description:
          "List temporary differences created or reversed during the current period.",
      },
      {
        title: "Calculate DTA/DTL balances",
        description:
          "Apply current tax rates to temporary differences to calculate ending deferred tax positions.",
      },
      {
        title: "Assess valuation allowance",
        description:
          "Evaluate whether a valuation allowance should be recorded against deferred tax assets.",
      },
      {
        title: "Reconcile tax provision",
        description:
          "Tie the change in deferred tax position to the tax expense recorded on the income statement.",
      },
    ],
    benefits: [
      "Ensures deferred tax positions are accurate and complete",
      "Provides clear tracking of temporary difference changes",
      "Supports accurate income tax provision calculation",
      "Reduces audit findings related to deferred tax",
    ],
  },
  {
    slug: "lease-liability-reconciliation",
    title: "Lease Liability Reconciliation",
    description:
      "Reconcile lease liabilities and right-of-use assets from the lease accounting system to the balance sheet.",
    category: "Reconciliation",
    tags: ["Leases", "Reconciliation"],
    steps: [
      {
        title: "Extract lease accounting data",
        description:
          "Pull all lease records from the lease accounting system showing lease liability and ROU asset balances.",
      },
      {
        title: "Verify lease identification",
        description:
          "Confirm that all executed leases are included in the system and no incorrect leases are present.",
      },
      {
        title: "Reconcile to balance sheet",
        description:
          "Compare the lease liability and ROU asset totals from the system to the GL accounts.",
      },
      {
        title: "Verify lease payments",
        description:
          "Test that actual lease payments match the expected payment schedule in the system.",
      },
    ],
    benefits: [
      "Ensures ASC 842 lease accounting is complete and accurate",
      "Detects missing or duplicate leases in the accounting system",
      "Provides audit support for lease liability and ROU asset balances",
      "Reduces audit procedures related to lease compliance",
    ],
  },
  {
    slug: "pension-benefit-reconciliation",
    title: "Pension/Benefit Obligation Reconciliation",
    description:
      "Reconcile the pension or benefit plan obligation calculated by actuaries to the balance sheet accrued liability.",
    category: "Reconciliation",
    tags: ["Pension", "Reconciliation"],
    steps: [
      {
        title: "Obtain actuarial valuation",
        description:
          "Collect the actuarial report showing the projected benefit obligation or accumulated benefit obligation.",
      },
      {
        title: "Verify plan data",
        description:
          "Confirm that actuarial assumptions and participant data used are accurate and complete.",
      },
      {
        title: "Reconcile to GL account",
        description:
          "Compare the actuarial obligation to the accrued pension liability recorded on the balance sheet.",
      },
      {
        title: "Document adjustments",
        description:
          "Prepare reconciling items such as time lag adjustments or measurement date differences.",
      },
      {
        title: "Review expense calculation",
        description:
          "Verify that pension expense recognized matches the actuarial calculation.",
      },
    ],
    benefits: [
      "Ensures pension obligations are accurate per ASC 715",
      "Provides clear tracking of benefit plan activity",
      "Supports management pension expense assertions",
      "Reduces audit procedures for significant liability",
    ],
  },
  {
    slug: "derivative-contract-reconciliation",
    title: "Derivative Contract Reconciliation",
    description:
      "Reconcile derivative instruments (hedges, swaps, forwards) recorded in the accounting system to contract terms and fair values.",
    category: "Reconciliation",
    tags: ["Derivatives", "Reconciliation"],
    steps: [
      {
        title: "List all derivative contracts",
        description:
          "Create a master schedule of all outstanding derivative instruments and their terms.",
      },
      {
        title: "Obtain counterparty valuations",
        description:
          "Collect fair value estimates from counterparties or independent pricing services.",
      },
      {
        title: "Verify hedge designation",
        description:
          "Confirm that derivatives are properly designated as cash flow, fair value, or net investment hedges.",
      },
      {
        title: "Reconcile recorded amounts",
        description:
          "Verify that fair value gains/losses and balance sheet positions match accounting records.",
      },
    ],
    benefits: [
      "Ensures derivative positions are accurately valued and recorded",
      "Prevents improperly designated hedges affecting earnings",
      "Provides clear audit trail for derivative accounting",
      "Supports compliance with ASC 815 hedge accounting rules",
    ],
  },
  {
    slug: "environmental-liability-schedule",
    title: "Environmental Liability Schedule",
    description:
      "Track environmental remediation liabilities and costs related to contaminated sites or spill cleanup.",
    category: "Reconciliation",
    tags: ["Environmental", "Reconciliation"],
    steps: [
      {
        title: "Identify contaminated sites",
        description:
          "Document all known or suspected environmental contamination at company facilities.",
      },
      {
        title: "Obtain remediation estimates",
        description:
          "Collect engineering estimates for the cost to remediate each identified environmental issue.",
      },
      {
        title: "Assess timing and probability",
        description:
          "Determine when remediation will occur and whether the liability should be accrued.",
      },
      {
        title: "Record accrual and disclosures",
        description:
          "Prepare the liability accrual and document required environmental disclosures.",
      },
    ],
    benefits: [
      "Ensures environmental liabilities are properly accounted for per ASC 450",
      "Prevents unexpected environmental remediation costs",
      "Provides required environmental liability disclosures",
      "Demonstrates compliance with environmental regulations",
    ],
  },
  {
    slug: "insurance-receivable-reconciliation",
    title: "Insurance Receivable Reconciliation",
    description:
      "Reconcile insurance receivables (claims receivable from insurers) to supporting documentation and verify collection.",
    category: "Reconciliation",
    tags: ["Insurance", "Reconciliation"],
    steps: [
      {
        title: "List pending insurance claims",
        description:
          "Create a schedule of all submitted insurance claims and claims in process.",
      },
      {
        title: "Verify claim details",
        description:
          "Confirm that documented claim amounts match insurance adjuster estimates.",
      },
      {
        title: "Track collections",
        description:
          "Monitor insurance claim status and record payments received from insurers.",
      },
      {
        title: "Review aging",
        description:
          "Analyze aging of outstanding receivables and assess allowance for uncollectible claims.",
      },
      {
        title: "Reconcile balance",
        description:
          "Tie the claims receivable schedule to the GL account balance.",
      },
    ],
    benefits: [
      "Ensures insurance recovery claims are properly recorded",
      "Accelerates collection of insurance proceeds",
      "Provides audit support for claims receivable balance",
      "Reduces exposure to uncollectible claims",
    ],
  },
  {
    slug: "warranty-obligation-tracking",
    title: "Warranty Obligation Tracking",
    description:
      "Track warranty liabilities by product or program and reconcile estimated obligations to actual costs incurred.",
    category: "Reconciliation",
    tags: ["Warranty", "Reconciliation"],
    steps: [
      {
        title: "Calculate warranty accrual",
        description:
          "Estimate warranty costs based on historical failure rates and cost per claim.",
      },
      {
        title: "Tie to revenue",
        description:
          "Ensure warranty accrual percentages are reasonable relative to sales volume.",
      },
      {
        title: "Track warranty claims",
        description:
          "Record actual warranty claims paid and update the accrual balance.",
      },
      {
        title: "Analyze variances",
        description:
          "Compare actual warranty costs to estimates and adjust future accruals as needed.",
      },
      {
        title: "Reconcile to GL",
        description:
          "Verify the warranty liability schedule ties to the balance sheet accrual account.",
      },
    ],
    benefits: [
      "Ensures warranty liabilities are reasonable and properly supported",
      "Tracks actual warranty costs against estimates",
      "Provides clear warranty expense tracking",
      "Reduces audit questions on warranty accrual appropriateness",
    ],
  },
  {
    slug: "loan-covenant-compliance-schedule",
    title: "Loan Covenant Compliance Schedule",
    description:
      "Calculate and monitor loan covenant compliance metrics such as debt-to-EBITDA, interest coverage, and working capital requirements.",
    category: "Reconciliation",
    tags: ["Debt", "Compliance"],
    steps: [
      {
        title: "Extract loan terms",
        description:
          "Document the covenant requirements from each loan agreement including calculation methods.",
      },
      {
        title: "Calculate covenant metrics",
        description:
          "Compute ratios such as leverage, interest coverage, and current ratio using financial statement data.",
      },
      {
        title: "Compare to requirements",
        description:
          "Determine whether the entity is in compliance with each covenant as of the measurement date.",
      },
      {
        title: "Document waivers if needed",
        description:
          "If non-compliance exists, document any obtained or pending waivers from lenders.",
      },
      {
        title: "Prepare disclosure",
        description:
          "Include covenant compliance disclosure in financial statements or footnotes as required.",
      },
    ],
    benefits: [
      "Ensures loan covenant compliance is monitored and documented",
      "Identifies covenant violations early for lender discussion",
      "Provides clear calculation methodology for covenant metrics",
      "Supports accurate debt disclosures in financial statements",
    ],
  },
  // PHASE 4: Accounts Payable (10 more templates)
  {
    slug: "invoice-processing-checklist",
    title: "Invoice Processing Checklist",
    description:
      "Standardize the invoice processing workflow to ensure all invoices are received, coded, and recorded consistently.",
    category: "Accounts Payable",
    tags: ["Payables", "Process"],
    steps: [
      {
        title: "Receive and scan invoice",
        description:
          "Ensure all invoices are received in the AP inbox and scanned into the document management system.",
      },
      {
        title: "Match to PO and receipt",
        description:
          "Verify that the invoice matches a valid purchase order and that goods/services have been received.",
      },
      {
        title: "Verify invoice details",
        description:
          "Confirm vendor name, amount, account codes, and invoice terms are correct and reasonable.",
      },
      {
        title: "Code to GL accounts",
        description:
          "Assign the invoice to appropriate expense or asset accounts based on the nature of goods/services.",
      },
      {
        title: "Record in AP system",
        description:
          "Enter the invoice into the AP system with due date and processing status for payment tracking.",
      },
    ],
    benefits: [
      "Standardizes invoice processing and reduces processing time",
      "Prevents duplicate invoice payments and posting errors",
      "Ensures all invoices are properly coded to GL accounts",
      "Enables efficient AP aging and payment planning",
    ],
  },
  {
    slug: "accrued-expense-rollforward",
    title: "Accrued Expense Roll-forward",
    description:
      "Track the beginning balance, new accruals, payments, and ending balance of accrued expenses each period.",
    category: "Accounts Payable",
    tags: ["Accruals", "Payables"],
    steps: [
      {
        title: "Pull beginning balance",
        description:
          "Start with the prior period ending accrued expense balance by GL account.",
      },
      {
        title: "Record reversal",
        description:
          "Record the reversal of prior period accruals at the beginning of the new period.",
      },
      {
        title: "Record new accruals",
        description:
          "Estimate and record accruals for the current period (utilities, professional fees, bonuses, etc.).",
      },
      {
        title: "Record actual payments",
        description:
          "Track actual payments made against accrued liabilities and update the accrual balance.",
      },
      {
        title: "Reconcile to GL",
        description:
          "Verify the ending accrual balance ties to the GL control account.",
      },
    ],
    benefits: [
      "Ensures accurate accrual of period expenses",
      "Tracks accrual reversals to prevent double-counting",
      "Provides clear visibility of accrual timing differences",
      "Reduces audit findings on accrual accuracy",
    ],
  },
  {
    slug: "open-po-reconciliation",
    title: "Open PO Reconciliation",
    description:
      "Reconcile open purchase orders to accrued expenses and follow up on aging items.",
    category: "Accounts Payable",
    tags: ["Purchase Orders", "Payables"],
    steps: [
      {
        title: "Extract open POs",
        description:
          "Pull a list of all open (unreceived) purchase orders from the procurement system.",
      },
      {
        title: "Analyze aging",
        description:
          "Identify POs that have been outstanding for extended periods without receipt.",
      },
      {
        title: "Follow up on exceptions",
        description:
          "Contact vendors or procurement team to determine status of aged POs.",
      },
      {
        title: "Reconcile to accruals",
        description:
          "Verify that expected receipts not yet invoiced are properly accrued in AP.",
      },
    ],
    benefits: [
      "Identifies stale or canceled POs that need cleanup",
      "Ensures goods expected to be received are properly accrued",
      "Improves vendor communication and order follow-up",
      "Prevents duplicate orders for same requirements",
    ],
  },
  {
    slug: "vendor-master-data-review",
    title: "Vendor Master Data Review",
    description:
      "Periodically review and validate vendor master file data to ensure accuracy and prevent fraud.",
    category: "Accounts Payable",
    tags: ["Vendor", "Compliance"],
    steps: [
      {
        title: "Extract vendor list",
        description:
          "Pull a complete list of all vendors from the AP system including contact and payment information.",
      },
      {
        title: "Identify duplicate vendors",
        description:
          "Search for duplicate vendor records that may have resulted from data entry errors.",
      },
      {
        title: "Verify vendor details",
        description:
          "Confirm that vendor names, addresses, and payment methods are current and legitimate.",
      },
      {
        title: "Review inactive vendors",
        description:
          "Identify vendors with no recent activity and evaluate whether they should be deactivated.",
      },
    ],
    benefits: [
      "Prevents vendor master fraud and payment to fraudulent vendors",
      "Eliminates duplicate vendor records and consolidates payments",
      "Ensures accurate vendor contact and payment information",
      "Strengthens internal controls over vendor payments",
    ],
  },
  {
    slug: "ap-aging-followup-tracker",
    title: "AP Aging Follow-up Tracker",
    description:
      "Track aging of unpaid invoices and follow up on items nearing or past the discount cutoff or due date.",
    category: "Accounts Payable",
    tags: ["Aging", "Payables"],
    steps: [
      {
        title: "Generate AP aging report",
        description:
          "Extract aging of unpaid invoices from the AP system broken down by aging buckets.",
      },
      {
        title: "Identify discounts available",
        description:
          "Determine which invoices qualify for early payment discounts based on terms and timing.",
      },
      {
        title: "Flag for payment",
        description:
          "Mark invoices due soon and those with available discounts for payment processing.",
      },
      {
        title: "Investigate overdue items",
        description:
          "Research invoices past due date to determine reason for delay and initiate follow-up.",
      },
      {
        title: "Track and report",
        description:
          "Monitor progress on overdue items and provide management with aging trends.",
      },
    ],
    benefits: [
      "Improves vendor relationships through timely payment",
      "Captures available early payment discounts for cost savings",
      "Identifies and resolves payment issues promptly",
      "Provides visibility into AP aging and cash flow requirements",
    ],
  },
  {
    slug: "expense-allocation-schedule",
    title: "Expense Allocation Schedule",
    description:
      "Allocate shared expenses (rent, utilities, depreciation) across departments or locations based on usage or headcount.",
    category: "Accounts Payable",
    tags: ["Allocation", "Expense"],
    steps: [
      {
        title: "Identify shared expenses",
        description:
          "List all company expenses that benefit multiple departments or locations.",
      },
      {
        title: "Determine allocation basis",
        description:
          "Select appropriate allocation method (square footage, headcount, usage hours, revenue, etc.).",
      },
      {
        title: "Calculate allocation amounts",
        description:
          "Apply the allocation basis to distribute shared expenses to responsible departments.",
      },
      {
        title: "Prepare journal entries",
        description:
          "Record entries to move allocated expenses from common accounts to department cost centers.",
      },
      {
        title: "Reconcile totals",
        description:
          "Verify that total allocated amounts equal the original shared expense.",
      },
    ],
    benefits: [
      "Provides accurate department expense reporting for cost center management",
      "Improves accountability by allocating shared costs fairly",
      "Enables analysis of true department profitability and performance",
      "Supports pricing and budgeting decisions by department",
    ],
  },
  {
    slug: "purchase-order-approval-log",
    title: "Purchase Order Approval Log",
    description:
      "Maintain documentation of all purchase order approvals to demonstrate compliance with authorization limits.",
    category: "Accounts Payable",
    tags: ["Purchase Orders", "Compliance"],
    steps: [
      {
        title: "Define approval authorities",
        description:
          "Establish PO approval limits by role and document the delegation of authority.",
      },
      {
        title: "Track PO submissions",
        description:
          "Log all submitted POs with date, amount, vendor, and requesting department.",
      },
      {
        title: "Collect approval evidence",
        description:
          "Obtain electronic or physical signatures from appropriate authorizers for each PO.",
      },
      {
        title: "Review compliance",
        description:
          "Verify that each PO received approval from someone with sufficient authority limits.",
      },
      {
        title: "Archive documentation",
        description:
          "Maintain organized files of all POs and approval documentation for audit and reference.",
      },
    ],
    benefits: [
      "Ensures all POs are approved by authorized personnel",
      "Prevents unauthorized spending and vendor fraud",
      "Provides audit trail of PO authorization process",
      "Strengthens internal controls over purchasing",
    ],
  },
  {
    slug: "monthly-bill-review-procedure",
    title: "Monthly Bill Review Procedure",
    description:
      "Establish a standardized procedure for reviewing all bills received during the month before payment.",
    category: "Accounts Payable",
    tags: ["Billing", "Payables"],
    steps: [
      {
        title: "Collect invoices for review",
        description:
          "Gather all invoices received during the period that are ready for payment review.",
      },
      {
        title: "Verify business purpose",
        description:
          "Confirm that each invoice is for services or goods actually received and authorized.",
      },
      {
        title: "Review charges and terms",
        description:
          "Evaluate invoice amounts and terms for reasonableness and comparison to contract terms.",
      },
      {
        title: "Check for discrepancies",
        description:
          "Flag any duplicate invoices, pricing errors, or other discrepancies for resolution.",
      },
      {
        title: "Approve and process",
        description:
          "Obtain management sign-off on the invoice batch and release for payment processing.",
      },
    ],
    benefits: [
      "Prevents payment of duplicate, erroneous, or fraudulent invoices",
      "Provides management review and approval before payment",
      "Identifies billing errors and enables negotiation of credits",
      "Strengthens controls over cash outflow",
    ],
  },
  {
    slug: "three-way-match-verification",
    title: "Three-Way Match Verification",
    description:
      "Verify that purchase order, receipt, and invoice match before approving payment (quantity, price, quality).",
    category: "Accounts Payable",
    tags: ["Matching", "Payables"],
    steps: [
      {
        title: "Pull matching documents",
        description:
          "Gather the PO, receipt record, and invoice for the transaction being matched.",
      },
      {
        title: "Verify quantities match",
        description:
          "Confirm that ordered quantity matches received quantity and invoiced quantity.",
      },
      {
        title: "Verify prices match",
        description:
          "Confirm that PO unit price matches the invoiced unit price within acceptable variance.",
      },
      {
        title: "Verify receipt",
        description:
          "Confirm that goods were actually received and accepted per the receipt documentation.",
      },
      {
        title: "Flag exceptions",
        description:
          "Identify and document any exceptions for follow-up with procurement or vendor.",
      },
    ],
    benefits: [
      "Prevents overpayment and erroneous invoice amounts",
      "Ensures only received goods are paid",
      "Catches pricing errors before payment is made",
      "Strengthens controls over purchase-to-pay process",
    ],
  },
  {
    slug: "vendor-invoice-dispute-log",
    title: "Vendor Invoice Dispute Log",
    description:
      "Document and track the resolution of disputed invoices including payment holds and vendor communication.",
    category: "Accounts Payable",
    tags: ["Disputes", "Payables"],
    steps: [
      {
        title: "Log disputed invoice",
        description:
          "Record the invoice details, dispute reason, and amount in dispute when an issue is identified.",
      },
      {
        title: "Communicate with vendor",
        description:
          "Contact the vendor with details of the dispute and request documentation or explanation.",
      },
      {
        title: "Place payment hold",
        description:
          "Flag the disputed invoice in AP system to prevent accidental payment while under dispute.",
      },
      {
        title: "Document resolution",
        description:
          "Record the agreed resolution such as credit, partial payment, or adjustment.",
      },
      {
        title: "Process resolution",
        description:
          "Record the journal entry or payment adjustment to resolve the dispute.",
      },
    ],
    benefits: [
      "Ensures disputed invoices are tracked and not lost",
      "Improves vendor communication and issue resolution",
      "Prevents erroneous payments on disputed amounts",
      "Provides clear record of dispute and resolution",
    ],
  },
  // PHASE 4: Accounts Receivable (8 more templates)
  {
    slug: "revenue-recognition-checklist",
    title: "Revenue Recognition Checklist",
    description:
      "Ensure each revenue transaction meets criteria for recognition under ASC 606 (performance obligations, consideration, control transfer).",
    category: "Accounts Receivable",
    tags: ["Revenue", "Compliance"],
    steps: [
      {
        title: "Identify contract",
        description:
          "Confirm that a valid contract exists with identified parties, terms, and consideration.",
      },
      {
        title: "Identify performance obligations",
        description:
          "Determine what goods or services are promised and whether they are distinct.",
      },
      {
        title: "Determine transaction price",
        description:
          "Identify the consideration received and adjust for variable consideration or time value of money.",
      },
      {
        title: "Determine transfer point",
        description:
          "Determine when control of promised goods/services transfers to the customer.",
      },
      {
        title: "Record revenue",
        description:
          "Record revenue when control transfers; allocate transaction price to performance obligations.",
      },
    ],
    benefits: [
      "Ensures revenue is recognized per ASC 606 requirements",
      "Prevents premature or delayed revenue recognition",
      "Provides audit support for revenue transactions",
      "Reduces audit findings related to revenue",
    ],
  },
  {
    slug: "contract-review-workpaper",
    title: "Contract Review Workpaper",
    description:
      "Document the contract review process for significant customer contracts to ensure all terms are identified and recorded.",
    category: "Accounts Receivable",
    tags: ["Contracts", "Revenue"],
    steps: [
      {
        title: "Extract contract terms",
        description:
          "Pull all significant terms from the contract including goods/services, pricing, payment terms, and warranties.",
      },
      {
        title: "Identify revenue impacts",
        description:
          "Document how the contract affects revenue recognition timing, amount, and performance obligations.",
      },
      {
        title: "Document contingencies",
        description:
          "Note any contingent payment terms, performance bonuses, or termination clauses affecting revenue.",
      },
      {
        title: "Obtain sign-off",
        description:
          "Have revenue and legal functions review and sign-off on the revenue accounting treatment.",
      },
    ],
    benefits: [
      "Ensures contracts are properly reviewed before revenue is recognized",
      "Identifies contract terms that affect revenue timing or amount",
      "Provides documentation of revenue recognition judgments",
      "Reduces audit procedures and findings on contracts",
    ],
  },
  {
    slug: "performance-obligation-tracking",
    title: "Performance Obligation Tracking",
    description:
      "Track performance obligations that have not yet been satisfied and will generate future revenue.",
    category: "Accounts Receivable",
    tags: ["Revenue", "Deferred"],
    steps: [
      {
        title: "Identify open obligations",
        description:
          "List all contracts where goods have not been delivered or services not yet provided.",
      },
      {
        title: "Document performance progress",
        description:
          "Record the percentage of completion or status of satisfaction for each obligation.",
      },
      {
        title: "Calculate remaining revenue",
        description:
          "Determine the revenue that will be recognized as each obligation is satisfied.",
      },
      {
        title: "Project satisfaction timing",
        description:
          "Estimate when each performance obligation will be satisfied and revenue recognized.",
      },
    ],
    benefits: [
      "Provides clear tracking of contract performance and remaining work",
      "Enables accurate backlog and future revenue projections",
      "Supports management revenue forecasting",
      "Reduces risks of overlooked revenue recognition",
    ],
  },
  {
    slug: "deferred-revenue-schedule",
    title: "Deferred Revenue Schedule",
    description:
      "Track deferred (unearned) revenue from customer payments received in advance of performance.",
    category: "Accounts Receivable",
    tags: ["Deferred", "Revenue"],
    steps: [
      {
        title: "List contracts with deferred revenue",
        description:
          "Identify all customers who have paid in advance and create a schedule by customer.",
      },
      {
        title: "Calculate recognition in period",
        description:
          "Determine the amount of deferred revenue that should be recognized as revenue in the period.",
      },
      {
        title: "Adjust deferred revenue balance",
        description:
          "Record the journal entry to recognize revenue and reduce the deferred revenue liability.",
      },
      {
        title: "Reconcile to GL",
        description:
          "Verify that the ending deferred revenue balance ties to the GL control account.",
      },
      {
        title: "Disclose future recognition",
        description:
          "Document the timing and amount of deferred revenue expected to be recognized in future periods.",
      },
    ],
    benefits: [
      "Ensures deferred revenue is recognized as goods/services are delivered",
      "Tracks customer advance payments and fulfillment status",
      "Provides clear balance sheet liability for future performance",
      "Supports revenue recognition disclosures in financial statements",
    ],
  },
  {
    slug: "allowance-doubtful-accounts",
    title: "Allowance for Doubtful Accounts Calculation",
    description:
      "Calculate the allowance for credit losses based on aging, historical write-offs, and customer creditworthiness.",
    category: "Accounts Receivable",
    tags: ["Allowance", "AR"],
    steps: [
      {
        title: "Analyze AR aging",
        description:
          "Review the age of receivables and identify accounts that are overdue or at risk.",
      },
      {
        title: "Evaluate creditworthiness",
        description:
          "Assess each customer's credit history, payment trends, and financial condition.",
      },
      {
        title: "Calculate provision",
        description:
          "Estimate uncollectible amounts based on aging analysis, historical loss rates, and judgments.",
      },
      {
        title: "Record adjustment",
        description:
          "Adjust the allowance account to the calculated amount and record the provision expense.",
      },
      {
        title: "Monitor collections",
        description:
          "Track actual write-offs against the allowance and adjust methodology as needed.",
      },
    ],
    benefits: [
      "Ensures AR is presented at net realizable value per GAAP",
      "Prevents overstated receivables and earnings",
      "Provides audit support for allowance estimates",
      "Enables accurate assessment of collection risk",
    ],
  },
  {
    slug: "warranty-revenue-schedule",
    title: "Warranty Revenue Schedule",
    description:
      "Track warranty services included with product sales and recognize revenue as warranty services are performed.",
    category: "Accounts Receivable",
    tags: ["Warranty", "Revenue"],
    steps: [
      {
        title: "Identify warranties in contracts",
        description:
          "Determine whether warranty services are a separate performance obligation.",
      },
      {
        title: "Allocate transaction price",
        description:
          "Allocate the sales price between the product and warranty service based on standalone selling prices.",
      },
      {
        title: "Track warranty services",
        description:
          "Monitor warranty claims and services performed during the warranty period.",
      },
      {
        title: "Recognize warranty revenue",
        description:
          "Recognize warranty revenue ratably over the warranty period as the obligation is satisfied.",
      },
    ],
    benefits: [
      "Ensures warranty obligations are properly recorded as separate performance obligations",
      "Prevents overstating product revenue by mixing warranty revenue",
      "Provides clear tracking of warranty period and revenue recognition timing",
      "Supports revenue recognition disclosures",
    ],
  },
  {
    slug: "channel-incentive-accrual",
    title: "Channel Incentive Accrual",
    description:
      "Accrue rebates, discounts, or incentives owed to distributors, resellers, or channel partners.",
    category: "Accounts Receivable",
    tags: ["Incentives", "Revenue"],
    steps: [
      {
        title: "Identify incentive programs",
        description:
          "Document all active channel incentive or rebate programs offered to partners.",
      },
      {
        title: "Calculate accrued amounts",
        description:
          "Calculate partner incentives earned based on sales volume and program terms.",
      },
      {
        title: "Reduce revenue",
        description:
          "Record the incentive as a reduction to revenue (or cost of sales) rather than expense.",
      },
      {
        title: "Track payments",
        description:
          "Monitor incentive payments made to partners and tie to accrual.",
      },
        {
        title: "Disclose programs",
        description:
          "Document the nature and impact of channel incentive programs in revenue disclosures.",
      },
    ],
    benefits: [
      "Ensures channel incentives properly reduce reported revenue",
      "Prevents overstating net revenue by treating incentives as expense",
      "Provides tracking of incentive payments and partner relationships",
      "Supports revenue presentation and disclosure requirements",
    ],
  },
  {
    slug: "customer-credit-limit-review",
    title: "Customer Credit Limit Review",
    description:
      "Periodically review and adjust customer credit limits based on payment history and creditworthiness.",
    category: "Accounts Receivable",
    tags: ["Credit", "AR"],
    steps: [
      {
        title: "Review payment history",
        description:
          "Analyze each customer's payment patterns, on-time payment rate, and any delinquencies.",
      },
      {
        title: "Assess credit risk",
        description:
          "Evaluate current credit conditions and customer financial performance.",
      },
      {
        title: "Adjust credit limits",
        description:
          "Increase limits for strong customers, reduce limits for payment issues or credit deterioration.",
      },
      {
        title: "Communicate changes",
        description:
          "Notify customers of any credit limit changes and update the AR system.",
      },
      {
        title: "Monitor compliance",
        description:
          "Ensure sales team respects updated credit limits to minimize credit risk.",
      },
    ],
    benefits: [
      "Manages credit risk by limiting exposure to high-risk customers",
      "Encourages timely payment through credit limit reviews",
      "Reduces bad debt write-offs and collection issues",
      "Balances growth with prudent credit management",
    ],
  },
  // PHASE 4: Cash & Treasury (9 templates)
  {
    slug: "daily-cash-position-report",
    title: "Daily Cash Position Report",
    description:
      "Prepare a daily summary of cash balances across all accounts and locations for liquidity monitoring.",
    category: "Cash & Treasury",
    tags: ["Cash", "Daily"],
    steps: [
      {
        title: "Collect account balances",
        description:
          "Gather cash balances from all bank accounts including checking, savings, and sweep accounts.",
      },
      {
        title: "Include outstanding items",
        description:
          "Add outstanding checks, wire transfers in process, and pending deposits.",
      },
      {
        title: "Calculate net position",
        description:
          "Summarize total available cash and identify any cash shortage or excess position.",
      },
      {
        title: "Compare to forecast",
        description:
          "Analyze actual cash against daily forecast to identify variances.",
      },
      {
        title: "Distribute report",
        description:
          "Share the daily cash position with treasury, finance leadership, and operations as needed.",
      },
    ],
    benefits: [
      "Provides daily visibility into cash availability for operational and strategic decisions",
      "Enables proactive cash management and borrowing decisions",
      "Identifies timing mismatches between payables and receivables",
      "Supports accurate short-term liquidity forecasting",
    ],
  },
  {
    slug: "liquidity-forecast-model",
    title: "Liquidity Forecast Model",
    description:
      "Build a rolling cash flow forecast model to project cash position over the next 13 weeks.",
    category: "Cash & Treasury",
    tags: ["Forecast", "Cash"],
    steps: [
      {
        title: "Establish forecast periods",
        description:
          "Set up weekly or daily forecast periods for the next 13 weeks with starting cash balance.",
      },
      {
        title: "Project operating inflows",
        description:
          "Forecast expected receipts from customers, insurance, and other operational sources.",
      },
      {
        title: "Project operating outflows",
        description:
          "Forecast payroll, vendor payments, loan repayments, and other operating disbursements.",
      },
      {
        title: "Include financing activities",
        description:
          "Model borrowings, debt payments, equity contributions, and dividend payments.",
      },
      {
        title: "Calculate minimum cash balance",
        description:
          "Identify periods where borrowing may be needed and track borrowing capacity.",
      },
    ],
    benefits: [
      "Enables proactive liquidity management and financing planning",
      "Identifies cash shortfalls or excess in advance for better decision-making",
      "Supports working capital optimization and payment timing",
      "Reduces emergency borrowing and associated costs",
    ],
  },
  {
    slug: "bank-account-reconciliation",
    title: "Bank Account Reconciliation",
    description:
      "Reconcile all bank accounts to the general ledger and identify and resolve reconciling items.",
    category: "Cash & Treasury",
    tags: ["Bank", "Reconciliation"],
    steps: [
      {
        title: "Obtain bank statement",
        description:
          "Collect the bank statement for each account for the period being reconciled.",
      },
      {
        title: "Start with bank balance",
        description:
          "Note the ending cash balance per the bank statement as the starting point.",
      },
      {
        title: "Add deposits in transit",
        description:
          "Add deposits recorded in the GL but not yet reflected in the bank statement.",
      },
      {
        title: "Subtract outstanding checks",
        description:
          "Subtract checks written and recorded but not yet cleared by the bank.",
      },
      {
        title: "Adjust for other items",
        description:
          "Adjust for bank errors, service charges, and other reconciling items.",
      },
    ],
    benefits: [
      "Ensures cash balance in the GL matches bank records",
      "Identifies theft, fraud, or unauthorized transactions",
      "Detects bank errors and processing issues",
      "Provides audit support for cash accounts",
    ],
  },
  {
    slug: "wire-transfer-approval-log",
    title: "Wire Transfer Approval Log",
    description:
      "Document and track all wire transfers with appropriate authorizations before payment is released.",
    category: "Cash & Treasury",
    tags: ["Wires", "Payments"],
    steps: [
      {
        title: "Prepare wire request",
        description:
          "Submit wire transfer request with payee name, account, amount, and business purpose.",
      },
      {
        title: "Verify payee details",
        description:
          "Confirm wire is to correct vendor/payee by cross-referencing master file or contract.",
      },
      {
        title: "Obtain authorization",
        description:
          "Collect evidence of approval from appropriate level of management based on amount.",
      },
      {
        title: "Process wire transfer",
        description:
          "Execute the wire and record the payment in the cash and AP systems.",
      },
      {
        title: "Document and archive",
        description:
          "File the wire transfer request with supporting approval and confirmation in the approval log.",
      },
    ],
    benefits: [
      "Prevents unauthorized wire transfers and fraud",
      "Creates clear authorization trail for significant payments",
      "Reduces wire transfer errors and duplicate payments",
      "Strengthens internal controls over cash disbursement",
    ],
  },
  {
    slug: "cash-flow-variance-analysis",
    title: "Cash Flow Variance Analysis",
    description:
      "Compare actual cash flows to forecast and analyze significant variances to improve forecasting.",
    category: "Cash & Treasury",
    tags: ["Variance", "Cash"],
    steps: [
      {
        title: "Compile actual cash flows",
        description:
          "Extract actual cash inflows and outflows for the period from GL or bank records.",
      },
      {
        title: "Compare to forecast",
        description:
          "Calculate variance between forecasted and actual cash flows by category.",
      },
      {
        title: "Analyze significant variances",
        description:
          "Investigate material variances (e.g., 10%+ difference) to identify root causes.",
      },
      {
        title: "Document explanations",
        description:
          "Record explanations for variances (e.g., timing differences, operational changes).",
      },
      {
        title: "Improve forecast",
        description:
          "Adjust forecasting methodology or assumptions based on variance analysis.",
      },
    ],
    benefits: [
      "Improves accuracy of future cash forecasts",
      "Identifies systematic forecasting errors for correction",
      "Enables better cash management through more accurate planning",
      "Provides visibility into operational and strategic changes affecting cash",
    ],
  },
  {
    slug: "money-market-fund-tracking",
    title: "Money Market Fund Tracking",
    description:
      "Maintain records of money market investments including purchases, maturities, and returns.",
    category: "Cash & Treasury",
    tags: ["Investments", "Cash"],
    steps: [
      {
        title: "Record investment purchases",
        description:
          "Document each money market fund purchase with date, issuer, amount, and maturity.",
      },
      {
        title: "Calculate maturity value",
        description:
          "Determine the interest earned and maturity value of each investment.",
      },
      {
        title: "Track realized returns",
        description:
          "Record interest received and gains/losses realized upon maturity.",
      },
      {
        title: "Assess fair value",
        description:
          "Evaluate whether money market investments should be adjusted for fair value changes.",
      },
      {
        title: "Reconcile to GL",
        description:
          "Verify the investment balance ties to the short-term investment account.",
      },
    ],
    benefits: [
      "Provides clear tracking of short-term investment activity and returns",
      "Ensures interest income is properly recorded and accounted for",
      "Supports optimization of cash yield on short-term investments",
      "Provides audit support for investment balances",
    ],
  },
  {
    slug: "debt-service-payment-schedule",
    title: "Debt Service Payment Schedule",
    description:
      "Maintain a schedule of principal and interest payments due on all debt obligations.",
    category: "Cash & Treasury",
    tags: ["Debt", "Payments"],
    steps: [
      {
        title: "List all debt obligations",
        description:
          "Create a schedule of all loans, bonds, notes, and other debt with key terms.",
      },
      {
        title: "Calculate payment schedule",
        description:
          "Determine principal and interest payment amounts and dates for each debt.",
      },
      {
        title: "Track upcoming payments",
        description:
          "Highlight upcoming payments due within the next 90 days for cash planning.",
      },
      {
        title: "Record payments",
        description:
          "Record actual payments made and verify amounts match the payment schedule.",
      },
      {
        title: "Monitor compliance",
        description:
          "Ensure all debt service payments are made on time to maintain compliance.",
      },
    ],
    benefits: [
      "Ensures debt service payments are planned and made on time",
      "Prevents covenant violations due to missed payments",
      "Provides clear visibility into debt repayment obligations",
      "Supports cash forecasting and liquidity management",
    ],
  },
  {
    slug: "credit-facility-utilization-report",
    title: "Credit Facility Utilization Report",
    description:
      "Track borrowing against credit facilities including current utilization, available capacity, and covenant status.",
    category: "Cash & Treasury",
    tags: ["Credit", "Borrowing"],
    steps: [
      {
        title: "Document credit facilities",
        description:
          "List all credit facilities with lenders, available amounts, terms, and covenant requirements.",
      },
      {
        title: "Track borrowing",
        description:
          "Record amounts borrowed against each facility and any outstanding letters of credit.",
      },
      {
        title: "Calculate available capacity",
        description:
          "Determine remaining borrowing available under each facility.",
      },
      {
        title: "Monitor covenants",
        description:
          "Calculate compliance with financial covenants and ensure status is maintained.",
      },
      {
        title: "Report and plan",
        description:
          "Share facility utilization with lenders and plan refinancing or new facilities if needed.",
      },
    ],
    benefits: [
      "Provides clear visibility into available borrowing capacity",
      "Prevents over-utilization of credit facilities",
      "Monitors covenant compliance to prevent default",
      "Supports strategic borrowing and refinancing decisions",
    ],
  },
  {
    slug: "foreign-exchange-exposure-schedule",
    title: "Foreign Exchange Exposure Schedule",
    description:
      "Track foreign currency exposures (receivables, payables, net investment) and hedge ratios.",
    category: "Cash & Treasury",
    tags: ["FX", "Exposure"],
    steps: [
      {
        title: "Identify FX exposures",
        description:
          "List all foreign currency assets, liabilities, and net investment amounts by currency.",
      },
      {
        title: "Document hedges",
        description:
          "Note which exposures are hedged and the hedge instrument, notional amount, and strike rate.",
      },
      {
        title: "Calculate net exposure",
        description:
          "Determine the net unhedged exposure by currency and evaluate risk.",
      },
      {
        title: "Monitor exchange rates",
        description:
          "Track current and forward exchange rates and estimate revaluation impact.",
      },
      {
        title: "Evaluate hedging strategy",
        description:
          "Assess whether current hedge ratios remain appropriate or adjustments are needed.",
      },
    ],
    benefits: [
      "Provides visibility into foreign exchange risk exposure",
      "Enables strategic hedging to minimize earnings volatility",
      "Supports management of currency-related cash flow uncertainty",
      "Provides audit documentation for FX positions and hedges",
    ],
  },
  // PHASE 4: Expense Management (9 templates)
  {
    slug: "receipt-audit-workpaper",
    title: "Receipt Audit Workpaper",
    description:
      "Audit a sample of receipt submissions for completeness, appropriateness, and proper documentation.",
    category: "Expense Management",
    tags: ["Expense", "Audit"],
    steps: [
      {
        title: "Select sample",
        description:
          "Randomly select a sample of expense receipts for testing, stratified by amount.",
      },
      {
        title: "Verify receipt details",
        description:
          "Confirm receipt amount, vendor, date, and items purchased match the expense report.",
      },
      {
        title: "Test appropriateness",
        description:
          "Evaluate whether the expense is appropriate, reasonable, and business-related.",
      },
      {
        title: "Verify approval",
        description:
          "Confirm that the expense report has been approved by the appropriate manager.",
      },
      {
        title: "Document findings",
        description:
          "Record any exceptions, questioned items, or policy violations for follow-up.",
      },
    ],
    benefits: [
      "Detects fraudulent or inappropriate expense submissions",
      "Ensures compliance with expense policy",
      "Reduces improper reimbursements and waste",
      "Provides audit documentation of expense testing",
    ],
  },
  {
    slug: "travel-entertainment-policy-compliance",
    title: "Travel & Entertainment Policy Compliance",
    description:
      "Test compliance with travel and entertainment policies including pre-approval and receipt requirements.",
    category: "Expense Management",
    tags: ["T&E", "Compliance"],
    steps: [
      {
        title: "Document policy requirements",
        description:
          "Summarize travel and entertainment policies including pre-approval limits and receipt requirements.",
      },
      {
        title: "Select test sample",
        description:
          "Sample travel and entertainment expenses for the period to test compliance.",
      },
      {
        title: "Verify pre-approval",
        description:
          "Confirm that travel was pre-approved per policy before the trip occurred.",
      },
      {
        title: "Validate business purpose",
        description:
          "Ensure the travel/entertainment has clear business purpose and appropriate documentation.",
      },
      {
        title: "Identify violations",
        description:
          "Document any policy violations and determine required follow-up or training.",
      },
    ],
    benefits: [
      "Ensures travel and entertainment spending complies with policy",
      "Prevents abuse of travel and entertainment budgets",
      "Identifies employees needing policy training or reminders",
      "Reduces inappropriate spending in high-risk category",
    ],
  },
  {
    slug: "meal-entertainment-justification",
    title: "Meal and Entertainment Justification",
    description:
      "Document business purpose and attendees for meal and entertainment expenses for tax deductibility.",
    category: "Expense Management",
    tags: ["T&E", "Tax"],
    steps: [
      {
        title: "Require documentation",
        description:
          "Ensure meal/entertainment expenses have receipt and documented business purpose.",
      },
      {
        title: "Record attendees",
        description:
          "Document the names, titles, and affiliations of attendees at each meal/entertainment event.",
      },
      {
        title: "Document business discussion",
        description:
          "Record the nature of business discussed or relationship being developed.",
      },
      {
        title: "Track entertainment type",
        description:
          "Note the venue and type of entertainment to assess deductibility (e.g., client dinner vs. personal).",
      },
      {
        title: "Maintain documentation",
        description:
          "Archive all receipts and documentation for tax audit support.",
      },
    ],
    benefits: [
      "Supports deductibility of meal and entertainment expenses for tax purposes",
      "Prevents disallowed meal deductions due to poor documentation",
      "Provides evidence of business purpose for auditors",
      "Protects company from IRS challenges on deductibility",
    ],
  },
  {
    slug: "employee-reimbursement-tracker",
    title: "Employee Reimbursement Tracker",
    description:
      "Maintain a log of employee advances, reimbursements, and outstanding balances by employee.",
    category: "Expense Management",
    tags: ["Reimbursement", "Expense"],
    steps: [
      {
        title: "Record advances given",
        description:
          "Log each employee advance with employee name, amount, date, and purpose.",
      },
      {
        title: "Track expense reports",
        description:
          "Record expenses submitted and approved for each employee and reconcile to advances.",
      },
      {
        title: "Calculate owed amounts",
        description:
          "Determine whether employee owes money back or company owes reimbursement.",
      },
      {
        title: "Follow up on overdue",
        description:
          "Identify employees with outstanding reimbursement requests or overspending.",
      },
      {
        title: "Reconcile balance",
        description:
          "Verify that the employee receivable/payable balance ties to GL accounts.",
      },
    ],
    benefits: [
      "Ensures employees are reimbursed or reimburse company timely",
      "Prevents outstanding balances from becoming stale or uncollectible",
      "Provides visibility into advance and reimbursement status",
      "Reduces accounting errors in employee reimbursement processing",
    ],
  },
  {
    slug: "expense-category-allocation",
    title: "Expense Category Allocation",
    description:
      "Allocate mixed expenses (e.g., meals, supplies, travel) to appropriate GL accounts based on business purpose.",
    category: "Expense Management",
    tags: ["Allocation", "Expense"],
    steps: [
      {
        title: "Review mixed expenses",
        description:
          "Identify expenses that benefit multiple departments or should be split across accounts.",
      },
      {
        title: "Determine allocation basis",
        description:
          "Select appropriate basis (percentage, usage, headcount) for allocating the expense.",
      },
      {
        title: "Calculate allocated amounts",
        description:
          "Apply the allocation basis to split the expense among the appropriate GL accounts.",
      },
      {
        title: "Prepare journal entry",
        description:
          "Record the entry to move the expense from the mixed account to proper cost center accounts.",
      },
      {
        title: "Document allocation",
        description:
          "Keep documentation of the allocation methodology and amounts allocated.",
      },
    ],
    benefits: [
      "Ensures expenses are charged to the appropriate cost centers and departments",
      "Improves department expense reporting accuracy",
      "Enables better cost analysis and departmental profitability",
      "Supports accurate budgeting and variance analysis",
    ],
  },
  {
    slug: "corporate-credit-card-reconciliation",
    title: "Corporate Credit Card Reconciliation",
    description:
      "Reconcile corporate credit card statements to GL accounts and match to employee expense reports.",
    category: "Expense Management",
    tags: ["Credit Cards", "Expense"],
    steps: [
      {
        title: "Obtain card statements",
        description:
          "Collect monthly statements for all corporate credit cards issued.",
      },
      {
        title: "Verify transactions",
        description:
          "Review each transaction and confirm it is a valid business expense.",
      },
      {
        title: "Match to reports",
        description:
          "Reconcile card charges to employee expense reports and substantiation.",
      },
      {
        title: "Code to GL",
        description:
          "Ensure all charges are properly coded to the appropriate GL accounts.",
      },
      {
        title: "Record payment",
        description:
          "Record the card payment from the operating account once verified.",
      },
    ],
    benefits: [
      "Detects fraudulent or personal charges on corporate cards",
      "Ensures all card charges are properly substantiated and coded",
      "Provides clear record of corporate card spending by employee",
      "Strengthens controls over corporate credit card use",
    ],
  },
  {
    slug: "subscription-saas-audit",
    title: "Subscription and SaaS Audit",
    description:
      "Periodically audit all active software subscriptions and SaaS licenses to eliminate duplicates and unused tools.",
    category: "Expense Management",
    tags: ["Subscriptions", "Cost Reduction"],
    steps: [
      {
        title: "Compile subscription list",
        description:
          "Create a comprehensive list of all software subscriptions and SaaS licenses with costs.",
      },
      {
        title: "Verify usage",
        description:
          "Contact department heads or access system logs to confirm whether subscriptions are actively used.",
      },
      {
        title: "Identify duplicates",
        description:
          "Identify redundant licenses or subscriptions that could be consolidated.",
      },
      {
        title: "Evaluate contract terms",
        description:
          "Review remaining contract terms and negotiate cancellations or reductions where possible.",
      },
      {
        title: "Report findings",
        description:
          "Summarize findings and potential cost savings from subscription optimization.",
      },
    ],
    benefits: [
      "Identifies and eliminates unused subscriptions and licenses for cost savings",
      "Consolidates redundant tools and reduces vendor count",
      "Improves software asset management and compliance",
      "Delivers measurable cost reduction and operational efficiency",
    ],
  },
  {
    slug: "capex-vs-opex-classification",
    title: "Capex vs Opex Classification",
    description:
      "Evaluate expenditures to determine whether they should be capitalized as assets or expensed as operating costs.",
    category: "Expense Management",
    tags: ["Capitalization", "Expense"],
    steps: [
      {
        title: "Establish capitalization policy",
        description:
          "Document the company's policy for capitalization including dollar thresholds and asset life requirements.",
      },
      {
        title: "Review large expenditures",
        description:
          "Examine significant expenditures to determine whether they meet capitalization criteria.",
      },
      {
        title: "Evaluate asset nature",
        description:
          "Assess whether the expenditure creates or enhances a long-lived asset versus a period cost.",
      },
      {
        title: "Document decisions",
        description:
          "Record the capitalization decision and supporting rationale for each expenditure.",
      },
      {
        title: "Record appropriately",
        description:
          "Capitalize to the asset account or expense to the GL account per the determination.",
      },
    ],
    benefits: [
      "Ensures consistent application of capitalization policy",
      "Prevents improper capitalization or expensing affecting reported earnings",
      "Provides audit support for capital asset decisions",
      "Reduces audit findings related to capitalization",
    ],
  },
  {
    slug: "consulting-fee-tracking",
    title: "Consulting Fee Tracking",
    description:
      "Maintain a log of consulting engagements including budget, actual costs, deliverables, and ROI.",
    category: "Expense Management",
    tags: ["Consulting", "Expense"],
    steps: [
      {
        title: "Document engagement terms",
        description:
          "Record the consulting firm, scope, budget, timeline, and expected deliverables.",
      },
      {
        title: "Track actual costs",
        description:
          "Record invoices received and amounts paid to compare against budget.",
      },
      {
        title: "Monitor deliverables",
        description:
          "Track whether consulting firm is meeting committed deliverables and timeline.",
      },
      {
        title: "Assess value",
        description:
          "Evaluate whether the engagement is delivering expected value and ROI.",
      },
      {
        title: "Document outcomes",
        description:
          "Record the outcomes and recommendations from consulting engagement for future reference.",
      },
    ],
    benefits: [
      "Controls consulting spending and ensures alignment with budget",
      "Tracks consulting deliverables for accountability",
      "Enables evaluation of consulting ROI and future vendor decisions",
      "Provides documentation of consulting recommendations for follow-up",
    ],
  },
  // PHASE 4: Audit & Compliance (10 templates)
  {
    slug: "internal-control-checklist",
    title: "Internal Control Checklist",
    description:
      "Evaluate key internal controls over accounting processes including segregation of duties, authorization, and reconciliation.",
    category: "Audit & Compliance",
    tags: ["Controls", "Compliance"],
    steps: [
      {
        title: "Document control activities",
        description:
          "List all key controls operating over significant accounting processes (revenue, payroll, payables, etc.).",
      },
      {
        title: "Evaluate design",
        description:
          "Assess whether control design is adequate to prevent or detect material errors.",
      },
      {
        title: "Test effectiveness",
        description:
          "Test a sample of control operation to verify controls are functioning as designed.",
      },
      {
        title: "Identify deficiencies",
        description:
          "Document any control gaps or ineffective controls requiring remediation.",
      },
      {
        title: "Report findings",
        description:
          "Summarize control assessment with recommendations for significant deficiencies.",
      },
    ],
    benefits: [
      "Identifies control weaknesses for remediation before audit findings",
      "Demonstrates management commitment to effective internal controls",
      "Reduces audit scope and supports management letter of control effectiveness",
      "Prevents fraud and material errors through strong controls",
    ],
  },
  {
    slug: "data-integrity-verification-procedure",
    title: "Data Integrity Verification Procedure",
    description:
      "Establish and test procedures to verify the integrity of financial and operational data including reconciliation and validation.",
    category: "Audit & Compliance",
    tags: ["Data", "Compliance"],
    steps: [
      {
        title: "Identify critical data",
        description:
          "Document data fields and systems that are critical to financial reporting and operations.",
      },
      {
        title: "Define validation rules",
        description:
          "Establish rules for validating data completeness, accuracy, and consistency.",
      },
      {
        title: "Test data quality",
        description:
          "Run validation reports to identify missing, duplicate, or invalid data.",
      },
      {
        title: "Remediate exceptions",
        description:
          "Correct invalid data and implement processes to prevent future data quality issues.",
      },
      {
        title: "Document procedures",
        description:
          "Record the data validation procedures and test results for audit documentation.",
      },
    ],
    benefits: [
      "Ensures reliability of data used in financial reporting and analysis",
      "Identifies and corrects data quality issues before they cause errors",
      "Supports audit procedures for data verification",
      "Strengthens internal controls over IT systems and data",
    ],
  },
  {
    slug: "compliance-calendar-template",
    title: "Compliance Calendar Template",
    description:
      "Maintain a calendar of regulatory filing, reporting, and compliance deadlines throughout the year.",
    category: "Audit & Compliance",
    tags: ["Compliance", "Calendar"],
    steps: [
      {
        title: "Document requirements",
        description:
          "List all external and internal compliance requirements with applicable deadlines.",
      },
      {
        title: "Assign responsibilities",
        description:
          "Assign a responsible person for each compliance requirement.",
      },
      {
        title: "Set reminder dates",
        description:
          "Set calendar reminders for deadline minus 30, 14, and 7 days to ensure timely completion.",
      },
      {
        title: "Track completion",
        description:
          "Update calendar as filings and reports are completed to track status.",
      },
      {
        title: "Review annually",
        description:
          "Annually review and update the compliance calendar for new or changed requirements.",
      },
    ],
    benefits: [
      "Prevents missed regulatory filing or compliance deadlines",
      "Assigns accountability for compliance requirements",
      "Provides early warning system for upcoming deadlines",
      "Demonstrates organized approach to compliance management",
    ],
  },
  {
    slug: "regulatory-filing-tracker",
    title: "Regulatory Filing Tracker",
    description:
      "Track all regulatory filings including SEC, tax, labor, and industry-specific filings with status and due dates.",
    category: "Audit & Compliance",
    tags: ["Filings", "Compliance"],
    steps: [
      {
        title: "Identify filings required",
        description:
          "Document all regulatory filings applicable to the business (SEC, IRS, DOL, industry regulators).",
      },
      {
        title: "Record filing details",
        description:
          "For each filing, record the agency, due date, responsible party, and submission method.",
      },
      {
        title: "Track progress",
        description:
          "Update status as filings are prepared, reviewed, and submitted.",
      },
      {
        title: "Maintain evidence",
        description:
          "Retain confirmation of filing submission including date, time, and filing reference.",
      },
      {
        title: "Monitor for updates",
        description:
          "Track any regulatory feedback, deficiencies identified, or amendments required.",
      },
    ],
    benefits: [
      "Ensures all regulatory filings are timely and complete",
      "Provides clear evidence of regulatory compliance",
      "Prevents penalties for late or missing filings",
      "Demonstrates organized regulatory compliance management",
    ],
  },
  {
    slug: "internal-audit-findings-log",
    title: "Internal Audit Findings Log",
    description:
      "Document and track internal audit findings including root cause, remediation plan, and follow-up testing.",
    category: "Audit & Compliance",
    tags: ["Audit", "Findings"],
    steps: [
      {
        title: "Log findings",
        description:
          "Document each audit finding with description, severity, and account/process affected.",
      },
      {
        title: "Assign remediation",
        description:
          "Assign a responsible party for remediation and set target completion date.",
      },
      {
        title: "Track remediation",
        description:
          "Monitor progress on remediation activities and update status.",
      },
      {
        title: "Test remediation",
        description:
          "Once complete, test the remediation to verify the issue is resolved.",
      },
      {
        title: "Close findings",
        description:
          "Close the finding once remediation is verified and tested.",
      },
    ],
    benefits: [
      "Ensures audit findings are tracked and resolved timely",
      "Assigns accountability for remediation",
      "Prevents recurring audit findings",
      "Demonstrates management's commitment to addressing control issues",
    ],
  },
  {
    slug: "management-assertion-workpaper",
    title: "Management Assertion Workpaper",
    description:
      "Document management's assertions regarding financial statement presentation, completeness, and compliance.",
    category: "Audit & Compliance",
    tags: ["Assertions", "Audit"],
    steps: [
      {
        title: "Identify assertion categories",
        description:
          "List key management assertions by category (existence, completeness, valuation, presentation).",
      },
      {
        title: "Document assertion support",
        description:
          "Gather evidence supporting management's assertions for significant accounts.",
      },
      {
        title: "Prepare assertion memo",
        description:
          "Summarize the assertion, supporting evidence, and conclusions for each significant balance.",
      },
      {
        title: "Obtain management sign-off",
        description:
          "Have appropriate management representatives review and confirm the assertions.",
      },
      {
        title: "Provide to auditors",
        description:
          "Share assertion workpapers with external auditors to support audit procedures.",
      },
    ],
    benefits: [
      "Demonstrates management's review and ownership of financial statements",
      "Provides auditors with clear management assertions to test",
      "Supports audit efficiency and reduces scope of auditor procedures",
      "Creates clear record of management's assertions about financial statements",
    ],
  },
  {
    slug: "audit-committee-meeting-minutes-template",
    title: "Audit Committee Meeting Minutes Template",
    description:
      "Document audit committee meetings including discussion topics, decisions, and follow-up items.",
    category: "Audit & Compliance",
    tags: ["Audit Committee", "Governance"],
    steps: [
      {
        title: "Prepare agenda",
        description:
          "Create agenda for audit committee meeting including financial reporting, audit, and compliance topics.",
      },
      {
        title: "Document discussion",
        description:
          "Record key discussion points and questions raised by committee members.",
      },
      {
        title: "Record decisions",
        description:
          "Document all decisions made and approvals granted by the audit committee.",
      },
      {
        title: "Assign action items",
        description:
          "Identify follow-up items with assigned responsible parties and due dates.",
      },
      {
        title: "Distribute minutes",
        description:
          "Prepare and distribute minutes to committee members and retain in files.",
      },
    ],
    benefits: [
      "Provides clear record of audit committee oversight and governance",
      "Documents committee discussion and decision-making process",
      "Ensures follow-up on action items and findings",
      "Supports regulatory compliance and corporate governance requirements",
    ],
  },
  {
    slug: "year-end-closing-checklist",
    title: "Year-End Closing Checklist",
    description:
      "Comprehensive checklist for all year-end close procedures and financial statement preparation steps.",
    category: "Audit & Compliance",
    tags: ["Close", "Year-End"],
    steps: [
      {
        title: "Prepare pre-close procedures",
        description:
          "Complete reconciliations, review GL, record accruals, and resolve prior period items.",
      },
      {
        title: "Record adjustments",
        description:
          "Record journal entries for depreciation, amortization, deferred taxes, and other adjustments.",
      },
      {
        title: "Prepare schedules",
        description:
          "Prepare all supporting schedules for significant accounts and disclosures.",
      },
      {
        title: "Prepare financial statements",
        description:
          "Prepare draft financial statements and note disclosures for review.",
      },
      {
        title: "Final review and sign-off",
        description:
          "Obtain management review and sign-off on final financial statements and schedules.",
      },
    ],
    benefits: [
      "Ensures all year-end procedures are completed in organized manner",
      "Prevents omission of critical close steps or disclosures",
      "Streamlines the financial statement preparation process",
      "Provides clear checklist for follow-up and quality assurance",
    ],
  },
  {
    slug: "document-retention-schedule",
    title: "Document Retention Schedule",
    description:
      "Establish and maintain a schedule for document retention requirements by document type and retention period.",
    category: "Audit & Compliance",
    tags: ["Records", "Compliance"],
    steps: [
      {
        title: "Document types",
        description:
          "List all document types maintained by finance and accounting including GL, invoices, reconciliations.",
      },
      {
        title: "Determine retention period",
        description:
          "Research and document the legal minimum retention period for each document type.",
      },
      {
        title: "Establish destruction process",
        description:
          "Define the process for secure destruction of documents after retention period expires.",
      },
      {
        title: "Communicate to staff",
        description:
          "Ensure accounting staff understand retention requirements and destruction process.",
      },
      {
        title: "Execute destruction",
        description:
          "Periodically destroy documents per schedule while retaining evidence of destruction.",
      },
    ],
    benefits: [
      "Ensures documents are retained per legal and regulatory requirements",
      "Reduces storage costs through timely destruction of unnecessary records",
      "Demonstrates compliance with document retention regulations",
      "Protects sensitive financial records from unauthorized access",
    ],
  },
  {
    slug: "material-weakness-assessment-form",
    title: "Material Weakness Assessment Form",
    description:
      "Assess whether identified control deficiencies individually or in aggregate constitute a material weakness.",
    category: "Audit & Compliance",
    tags: ["Controls", "Assessment"],
    steps: [
      {
        title: "Identify deficiencies",
        description:
          "List all internal control deficiencies identified during testing.",
      },
      {
        title: "Evaluate significance",
        description:
          "Assess whether each deficiency could result in a material misstatement.",
      },
      {
        title: "Consider aggregation",
        description:
          "Determine whether multiple deficiencies together could result in material misstatement.",
      },
      {
        title: "Document assessment",
        description:
          "Record the assessment conclusion and supporting rationale.",
      },
      {
        title: "Determine reporting",
        description:
          "Determine whether the material weakness must be reported to audit committee or external auditors.",
      },
    ],
    benefits: [
      "Identifies control weaknesses requiring disclosure or remediation",
      "Supports management's assessment of control effectiveness",
      "Provides clear documentation of control deficiency assessment",
      "Enables timely communication with audit committee on control issues",
    ],
  },
  {
    slug: "expense-report-template",
    title: "Expense Report Template",
    description:
      "A structured expense report template for employees to document business expenses by category, attach receipts, and obtain manager approval. Includes automatic totaling and an approval sign-off section.",
    category: "Expense Management",
    tags: ["expense report", "reimbursement", "travel expense", "receipt tracking", "employee expenses", "expense management"],
    steps: [
      {
        title: "Enter employee and period information",
        description: "Fill in the employee name, department, manager, and the expense period (start and end date) in the header section.",
      },
      {
        title: "Log each expense line item",
        description: "For each expense, enter the date, description, category (Travel, Meals, Software, etc.), amount, and whether a receipt is attached.",
      },
      {
        title: "Verify the automatic total",
        description: "The Amount column totals automatically. Confirm the total matches your supporting receipts before submitting.",
      },
      {
        title: "Attach receipts",
        description: "Attach scanned or photographed receipts for each line item. Mark the Receipt column Yes/No to indicate completion.",
      },
      {
        title: "Submit for manager approval",
        description: "Route the completed report to your manager. The approval section at the bottom captures the manager's name, date, and approval status.",
      },
    ],
    benefits: [
      "Reduces reimbursement processing time with a consistent, pre-structured format",
      "Category dropdowns ensure expenses are coded correctly the first time",
      "Automatic totaling eliminates manual calculation errors",
      "Approval section creates a clear audit trail for every expense claim",
    ],
  },
  {
    slug: "income-statement-template",
    title: "Income Statement Template",
    description:
      "A professional income statement template with sections for revenue, cost of goods sold, gross profit, operating expenses, operating income, and net income. Includes current vs. prior period columns and automatic variance calculations.",
    category: "Financial Reporting",
    tags: ["income statement", "profit and loss", "P&L", "financial statement", "revenue", "net income", "operating income"],
    steps: [
      {
        title: "Enter your reporting period",
        description: "Update the column headers with the current and prior period labels (e.g., Q1 2025 vs. Q1 2024 or January 2025 vs. January 2024).",
      },
      {
        title: "Input revenue figures",
        description: "Enter product revenue, service revenue, and other revenue for both periods. The template calculates Total Revenue automatically.",
      },
      {
        title: "Enter cost of goods sold",
        description: "Input COGS components for each period. Gross Profit calculates automatically as Revenue minus COGS.",
      },
      {
        title: "Fill in operating expenses",
        description: "Enter each operating expense line (salaries, rent, marketing, etc.). Operating Income calculates automatically.",
      },
      {
        title: "Review net income and variance",
        description: "The Variance column highlights period-over-period changes. Review significant variances and add commentary as needed.",
      },
    ],
    benefits: [
      "GAAP-aligned structure covering all standard income statement line items",
      "Automatic variance column eliminates manual period-over-period calculations",
      "Currency formatting applied throughout for professional presentation",
      "Easily adaptable to monthly, quarterly, or annual reporting periods",
    ],
  },
  {
    slug: "financial-statement-template",
    title: "Financial Statement Template",
    description:
      "A comprehensive financial statement template package covering the income statement, balance sheet, and supporting schedules. Designed for accountants preparing monthly or quarterly financial packages for management or board review.",
    category: "Financial Reporting",
    tags: ["financial statement", "financial reporting", "income statement", "balance sheet", "management reporting", "board reporting"],
    steps: [
      {
        title: "Update the reporting period header",
        description: "Set the reporting entity name and period in the header section so all sheets reference the correct timeframe.",
      },
      {
        title: "Complete the income statement tab",
        description: "Enter revenue, COGS, and expense figures. Subtotals and net income calculate automatically.",
      },
      {
        title: "Complete the balance sheet tab",
        description: "Input asset, liability, and equity balances. The balance check formula confirms Assets = Liabilities + Equity.",
      },
      {
        title: "Review the supporting schedules",
        description: "Use the additional tabs for key supporting details such as debt schedules, equity rollforward, or departmental breakdowns.",
      },
      {
        title: "Distribute for review",
        description: "Share the completed package with management or the board. All formulas are protected to prevent accidental overwrites.",
      },
    ],
    benefits: [
      "Complete financial package in a single file — income statement, balance sheet, and schedules",
      "Automatic cross-tab formulas ensure consistency across statements",
      "Professional presentation suitable for board and investor review",
      "Saves hours of manual formatting every reporting cycle",
    ],
  },
  {
    slug: "general-ledger-template",
    title: "General Ledger Template",
    description:
      "A detailed general ledger template for recording all financial transactions by account. Includes columns for date, account number, description, reference, debit, credit, and running balance calculated automatically via formula.",
    category: "Workpapers",
    tags: ["general ledger", "GL", "journal entries", "account ledger", "debit credit", "running balance", "bookkeeping"],
    steps: [
      {
        title: "Set up your chart of accounts",
        description: "Enter your account numbers and names in the Account No. and Account Name columns to match your chart of accounts.",
      },
      {
        title: "Record transactions chronologically",
        description: "Enter each transaction with the date, description, reference number, and debit or credit amount in the appropriate column.",
      },
      {
        title: "Verify running balances",
        description: "The Running Balance column calculates automatically as each row is entered. Verify balances match your ERP or source system.",
      },
      {
        title: "Reconcile to subsidiary ledgers",
        description: "For accounts with subledgers (AR, AP, inventory), confirm the GL balance matches the total of the subledger detail.",
      },
      {
        title: "Archive at period end",
        description: "Save a copy of the completed ledger as part of your period-end workpaper package for audit trail purposes.",
      },
    ],
    benefits: [
      "Running balance formula eliminates manual adding and reduces errors",
      "Consistent format makes reconciliation to ERP exports straightforward",
      "Reference column links entries back to source documents for audit support",
      "Works for any account type — assets, liabilities, revenue, or expenses",
    ],
  },
  {
    slug: "trial-balance-template",
    title: "Trial Balance Template",
    description:
      "A clean trial balance template for listing all general ledger accounts with their debit and credit balances. Includes automatic totals, a balance check formula that confirms debits equal credits, and conditional formatting to flag any difference.",
    category: "Workpapers",
    tags: ["trial balance", "GL accounts", "debit credit", "account balances", "pre-close", "period end", "bookkeeping"],
    steps: [
      {
        title: "Enter the reporting date",
        description: "Fill in the 'As of' date in the header to identify the period for this trial balance.",
      },
      {
        title: "List all general ledger accounts",
        description: "Enter each GL account number and name in the Account No. and Account Name columns.",
      },
      {
        title: "Enter debit and credit balances",
        description: "Input the balance for each account in either the Debit or Credit column based on its normal balance type.",
      },
      {
        title: "Verify the balance check",
        description: "The Totals row sums both columns and the Balance Check row calculates the difference. It should equal zero if all entries are correct.",
      },
      {
        title: "Investigate any difference",
        description: "If the balance check is non-zero, trace back through recent journal entries to find the posting error or missing entry.",
      },
    ],
    benefits: [
      "Automatic totals and balance check formula eliminate manual verification steps",
      "Clean layout makes it easy to identify accounts with unusual balances",
      "Serves as the starting point for financial statement preparation",
      "Provides clear audit evidence that the books are in balance at period end",
    ],
  },
  {
    slug: "balance-sheet-template",
    title: "Balance Sheet Template",
    description:
      "A professionally formatted balance sheet template with sections for current assets, non-current assets, current liabilities, long-term liabilities, and equity. Subtotals calculate automatically and a balance check confirms the accounting equation holds.",
    category: "Financial Reporting",
    tags: ["balance sheet", "assets", "liabilities", "equity", "financial statement", "statement of financial position"],
    steps: [
      {
        title: "Enter the reporting date and entity name",
        description: "Update the header with the company name and the 'as of' date for the balance sheet.",
      },
      {
        title: "Input asset balances",
        description: "Enter current asset balances (cash, AR, inventory, prepaid) and non-current asset balances (PP&E, intangibles). Subtotals calculate automatically.",
      },
      {
        title: "Input liability balances",
        description: "Enter current liabilities (AP, accruals, short-term debt) and non-current liabilities (long-term debt, deferred taxes).",
      },
      {
        title: "Enter equity balances",
        description: "Fill in common stock, additional paid-in capital, retained earnings, and any other equity components.",
      },
      {
        title: "Verify the balance check",
        description: "The Balance Check row confirms that Total Assets equals Total Liabilities + Equity. Investigate any difference before finalizing.",
      },
    ],
    benefits: [
      "Automatic subtotals for every section eliminate manual calculation errors",
      "Balance check formula instantly flags any out-of-balance condition",
      "Standard GAAP structure accepted for management, board, and bank reporting",
      "Prior period column enables quick comparative analysis",
    ],
  },
  {
    slug: "accounts-payable-checklist",
    title: "Accounts Payable Checklist",
    description:
      "A comprehensive accounts payable checklist covering invoice processing, vendor reconciliation, payment approvals, and period-end close tasks. Helps AP teams ensure no steps are missed and provides clear accountability with owner and status columns.",
    category: "Accounts Payable",
    tags: ["accounts payable", "AP checklist", "vendor payments", "invoice processing", "AP close", "payment approval"],
    steps: [
      {
        title: "Assign owners and due dates",
        description: "Populate the Owner and Due Date columns for each task before the period begins so accountability is clear from day one.",
      },
      {
        title: "Process all invoices received",
        description: "Work through all open invoices, coding each to the correct GL account, cost center, and period. Mark each invoice task Complete when done.",
      },
      {
        title: "Reconcile vendor statements",
        description: "Compare vendor statements to your AP subledger for key suppliers. Investigate and resolve any discrepancies.",
      },
      {
        title: "Run the payment cycle",
        description: "Process approved payments per your payment calendar. Confirm ACH and check runs are authorized and documented.",
      },
      {
        title: "Complete AP close tasks",
        description: "Accrue for invoices received but not yet processed, reconcile the AP subledger to the GL, and obtain sign-off before locking the period.",
      },
    ],
    benefits: [
      "Prevents missed invoices and late payments that trigger vendor disputes",
      "Status dropdown gives managers real-time visibility into AP close progress",
      "Accrual step ensures expenses are recognized in the correct period",
      "Serves as audit evidence that AP processes were followed consistently",
    ],
  },
  {
    slug: "accounts-receivable-checklist",
    title: "Accounts Receivable Checklist",
    description:
      "An accounts receivable checklist covering invoicing, collections follow-up, cash application, and period-end reconciliation. Keeps AR teams on track with a structured task list, clear ownership, and status tracking.",
    category: "Accounts Receivable",
    tags: ["accounts receivable", "AR checklist", "collections", "invoicing", "cash application", "AR close", "aging"],
    steps: [
      {
        title: "Generate and send customer invoices",
        description: "Confirm all billable work for the period has been invoiced. Send invoices to customers and log in the AR system.",
      },
      {
        title: "Apply cash receipts",
        description: "Match incoming payments to open invoices. Flag any unapplied cash for investigation and resolution.",
      },
      {
        title: "Follow up on overdue accounts",
        description: "Run the AR aging report. Contact customers with balances overdue by 30, 60, and 90+ days per your collections policy.",
      },
      {
        title: "Review and update the allowance for doubtful accounts",
        description: "Based on the current aging, assess whether the allowance balance is adequate. Post an adjusting entry if needed.",
      },
      {
        title: "Reconcile AR subledger to GL",
        description: "Confirm the total of the AR subledger matches the GL control account. Resolve any differences before closing.",
      },
    ],
    benefits: [
      "Ensures every billable item is invoiced before the period closes",
      "Structured collections follow-up reduces DSO and bad debt expense",
      "Subledger reconciliation step catches posting errors before they compound",
      "Clear ownership makes it easy to escalate overdue tasks to management",
    ],
  },
  {
    slug: "accounts-receivable-month-end-close-checklist",
    title: "Accounts Receivable Month-End Close Checklist",
    description:
      "A month-end close checklist focused specifically on the accounts receivable cycle. Covers invoicing cutoff, cash receipts cutoff, collections aging, allowance review, subledger reconciliation, and AR sign-off.",
    category: "Close Management",
    tags: ["accounts receivable", "AR month end", "close checklist", "AR close", "revenue cutoff", "allowance for doubtful accounts", "AR reconciliation"],
    steps: [
      {
        title: "Confirm invoicing cutoff",
        description: "Verify all invoices for goods shipped or services delivered before month-end have been generated and recorded in the correct period.",
      },
      {
        title: "Apply all cash received through month-end",
        description: "Post all customer payments received on or before the last day of the month. Flag any lockbox items still in transit.",
      },
      {
        title: "Run the AR aging report",
        description: "Generate the final AR aging for the period. Verify totals agree to the AR GL balance before any allowance adjustments.",
      },
      {
        title: "Review and post allowance for doubtful accounts",
        description: "Assess the adequacy of the allowance based on the aged receivables. Post an adjusting journal entry if the allowance requires a true-up.",
      },
      {
        title: "Reconcile AR subledger to GL and obtain sign-off",
        description: "Confirm the subledger total ties to the GL control account. Obtain controller or CFO sign-off before locking the period.",
      },
    ],
    benefits: [
      "Invoicing cutoff step ensures revenue is recognized in the correct period",
      "Allowance review aligns with GAAP requirements for bad debt estimation",
      "Subledger-to-GL reconciliation prevents AR overstatement or understatement",
      "Sign-off process creates clear accountability for the AR close",
    ],
  },
  {
    slug: "accounts-payable-month-end-close-checklist",
    title: "Accounts Payable Month-End Close Checklist",
    description:
      "A month-end close checklist for the accounts payable function. Covers invoice cutoff, accruals for uninvoiced receipts, vendor statement reconciliation, AP subledger reconciliation, and period-end sign-off.",
    category: "Close Management",
    tags: ["accounts payable", "AP month end", "close checklist", "AP close", "invoice cutoff", "accrued liabilities", "AP reconciliation"],
    steps: [
      {
        title: "Enforce invoice cutoff",
        description: "Confirm that all invoices received on or before the last day of the month are entered and coded to the correct period.",
      },
      {
        title: "Accrue for uninvoiced receipts",
        description: "Review the open PO report for goods received but not yet invoiced. Post accrual entries to record the liability in the correct period.",
      },
      {
        title: "Reconcile key vendor statements",
        description: "Compare statements from high-volume vendors to your AP subledger. Investigate and resolve any discrepancies.",
      },
      {
        title: "Reconcile AP subledger to GL",
        description: "Confirm the total of the AP subledger matches the accounts payable GL control account. Resolve differences before period lock.",
      },
      {
        title: "Obtain sign-off and lock the period",
        description: "Route the completed AP close checklist to the controller for review and approval. Lock the period in your ERP after sign-off.",
      },
    ],
    benefits: [
      "Accrual step ensures liabilities are recognized in the correct accounting period",
      "Vendor reconciliation catches billing disputes before they age",
      "Subledger-to-GL reconciliation is a key internal control for AP accuracy",
      "Documented sign-off satisfies audit requirements for period-end close",
    ],
  },
  {
    slug: "monthly-accounting-checklist",
    title: "Monthly Accounting Checklist",
    description:
      "A complete monthly accounting checklist covering all key close activities from journal entries and reconciliations to financial reporting and sign-off. Suitable for small accounting teams managing the full month-end process.",
    category: "Close Management",
    tags: ["monthly accounting", "accounting checklist", "month end", "close checklist", "accounting close", "financial close", "bookkeeping"],
    steps: [
      {
        title: "Post standard journal entries",
        description: "Record recurring entries including depreciation, amortization, prepaid expense amortization, and any other standard monthly accruals.",
      },
      {
        title: "Process and reconcile bank accounts",
        description: "Download bank statements and reconcile each account to the GL. Identify and resolve any unreconciled items.",
      },
      {
        title: "Reconcile key balance sheet accounts",
        description: "Complete reconciliations for accounts receivable, accounts payable, prepaid expenses, fixed assets, and accrued liabilities.",
      },
      {
        title: "Prepare and review financial statements",
        description: "Generate the income statement and balance sheet. Review for unusual balances, significant variances, and completeness.",
      },
      {
        title: "Obtain management sign-off",
        description: "Present the financial package to management or the CFO for review and approval. Document sign-off before locking the period.",
      },
    ],
    benefits: [
      "Single checklist covers the full monthly close from open to sign-off",
      "Prevents tasks from being skipped during busy or high-pressure close periods",
      "Status tracking gives management real-time visibility into close progress",
      "Works for teams of any size — from solo bookkeepers to full accounting departments",
    ],
  },
  {
    slug: "financial-close-checklist",
    title: "Financial Close Checklist",
    description:
      "A structured financial close checklist for accounting teams to manage the period-end close process. Covers journal entries, account reconciliations, financial statement preparation, variance analysis, and management reporting sign-off.",
    category: "Close Management",
    tags: ["financial close", "close checklist", "period end close", "accounting close", "month end", "journal entries", "reconciliations"],
    steps: [
      {
        title: "Complete all journal entries",
        description: "Post standard, recurring, and adjusting journal entries. Ensure all entries are reviewed and approved before moving forward.",
      },
      {
        title: "Complete all account reconciliations",
        description: "Reconcile every balance sheet account per the reconciliation schedule. Obtain preparer and reviewer sign-off for each.",
      },
      {
        title: "Prepare financial statements",
        description: "Generate the income statement, balance sheet, and cash flow statement from the reconciled trial balance.",
      },
      {
        title: "Perform variance analysis",
        description: "Compare actual results to budget and prior period. Prepare written commentary explaining key variances for management.",
      },
      {
        title: "Obtain final sign-off and lock the period",
        description: "Route the financial package to the CFO or controller for final review and approval. Lock the accounting period after sign-off.",
      },
    ],
    benefits: [
      "Structured workflow reduces close cycle time by eliminating ad-hoc task management",
      "Variance analysis step ensures management receives meaningful commentary, not just numbers",
      "Documented reconciliation sign-offs satisfy internal control requirements",
      "Consistent process across periods makes external audits faster and less disruptive",
    ],
  },
  {
    slug: "ar-reconciliation-template",
    title: "AR Reconciliation Template",
    description:
      "An accounts receivable reconciliation template for confirming that the AR subledger agrees to the general ledger control account. Includes sections for beginning balance, activity during the period, ending balance, and reconciling item detail.",
    category: "Reconciliations",
    tags: ["AR reconciliation", "accounts receivable", "subledger reconciliation", "GL reconciliation", "month end", "AR close"],
    steps: [
      {
        title: "Pull the AR subledger total",
        description: "Export the AR subledger aging report as of the reconciliation date. Confirm the total agrees to the sum of all open customer balances.",
      },
      {
        title: "Pull the GL control account balance",
        description: "Obtain the ending balance of the accounts receivable GL control account for the same period.",
      },
      {
        title: "Calculate the difference",
        description: "Subtract the GL balance from the subledger total. Any difference requires identification and resolution.",
      },
      {
        title: "Identify and document reconciling items",
        description: "List each reconciling item with the dollar amount and explanation. Common items include timing differences and unposted cash receipts.",
      },
      {
        title: "Obtain sign-off",
        description: "Route the completed reconciliation to a reviewer. Both preparer and reviewer sign off before the workpaper is filed.",
      },
    ],
    benefits: [
      "Confirms accuracy of the AR balance presented on the balance sheet",
      "Identifies posting errors or timing differences before the period is locked",
      "Serves as documented evidence of the subledger-to-GL reconciliation control",
      "Reduces external audit time by providing clear, organized workpaper documentation",
    ],
  },
  {
    slug: "cash-reconciliation-template",
    title: "Cash Reconciliation Template",
    description:
      "A cash account reconciliation template for reconciling the GL cash balance to bank statements. Covers outstanding checks, deposits in transit, bank charges, and other reconciling items to arrive at the adjusted cash balance.",
    category: "Reconciliations",
    tags: ["cash reconciliation", "bank reconciliation", "cash account", "outstanding checks", "deposits in transit", "GL reconciliation"],
    steps: [
      {
        title: "Enter the GL cash balance",
        description: "Record the ending cash balance from the general ledger as of the reconciliation date.",
      },
      {
        title: "Enter the bank statement balance",
        description: "Record the ending balance from the bank statement for the same date.",
      },
      {
        title: "List outstanding checks",
        description: "Enter all checks issued but not yet cleared the bank as of the statement date. These reduce the bank balance.",
      },
      {
        title: "List deposits in transit",
        description: "Enter any deposits recorded in the GL but not yet appearing on the bank statement. These increase the bank balance.",
      },
      {
        title: "Reconcile and resolve differences",
        description: "The adjusted GL and adjusted bank balances should agree. Any remaining difference indicates a posting error or missing entry to investigate.",
      },
    ],
    benefits: [
      "Catches fraudulent or erroneous transactions before they go undetected",
      "Outstanding check and deposit in transit lists keep the reconciliation organized",
      "Adjusted balance formulas eliminate arithmetic errors",
      "Monthly reconciliation is a fundamental internal control over cash",
    ],
  },
  {
    slug: "general-journal-template",
    title: "General Journal Template",
    description:
      "A general journal template for recording all types of journal entries in chronological order. Includes columns for date, journal entry number, account, description, debit, and credit with running debit/credit totals to verify entries balance.",
    category: "Workpapers",
    tags: ["general journal", "journal entries", "debit credit", "GL posting", "adjusting entries", "accounting records"],
    steps: [
      {
        title: "Set up the journal period",
        description: "Enter the accounting period at the top of the journal. All entries in the journal should fall within this period.",
      },
      {
        title: "Number each journal entry",
        description: "Assign a sequential journal entry number to each entry. This makes referencing and tracing entries to the GL easier.",
      },
      {
        title: "Enter debit and credit lines",
        description: "For each entry, record the account name, description, and either the debit or credit amount. Each entry must balance.",
      },
      {
        title: "Verify entry balances",
        description: "Confirm each journal entry's debits equal its credits before posting. The template highlights unbalanced entries automatically.",
      },
      {
        title: "Post entries to the general ledger",
        description: "After review and approval, post all balanced entries to the GL. Mark each entry as posted and retain the journal as a workpaper.",
      },
    ],
    benefits: [
      "Sequential entry numbering creates a clear audit trail for all postings",
      "Debit/credit balance check prevents unbalanced entries from being posted",
      "Chronological format matches how GL reports are organized for easy cross-reference",
      "Serves as the primary source document for all period-end journal entries",
    ],
  },
  {
    slug: "accounting-workflow-template",
    title: "Accounting Workflow Template",
    description:
      "A structured accounting workflow template for documenting and managing recurring accounting processes. Defines task sequences, owners, dependencies, and timing for consistent execution of close, reporting, and compliance workflows.",
    category: "Close Management",
    tags: ["accounting workflow", "close workflow", "process documentation", "accounting process", "task management", "close management"],
    steps: [
      {
        title: "Identify the workflow to document",
        description: "Select the accounting process to document — month-end close, accounts payable, payroll, or another recurring workflow.",
      },
      {
        title: "List all tasks in sequence",
        description: "Break the workflow into individual tasks in the order they must be completed. Include any tasks with dependencies on previous steps.",
      },
      {
        title: "Assign owners and timing",
        description: "For each task, assign a responsible owner and a target completion timing (e.g., Day 1, Day 2, or specific business day of the month).",
      },
      {
        title: "Identify dependencies and blockers",
        description: "Note which tasks cannot start until a prior task is complete. Document any external dependencies such as bank statements or payroll reports.",
      },
      {
        title: "Review and refine with the team",
        description: "Walk through the documented workflow with the team. Capture feedback on missing steps, incorrect timing, or ownership gaps, then finalize.",
      },
    ],
    benefits: [
      "Eliminates reliance on tribal knowledge — processes are documented and repeatable",
      "Clear ownership and timing reduce delays and missed deadlines",
      "Dependency mapping helps identify the critical path for close completion",
      "Onboarding new team members is faster with clear process documentation",
    ],
  },
  {
    slug: "cfo-monthly-report-template",
    title: "CFO Monthly Report Template",
    description:
      "A monthly financial report template designed for CFO distribution to the board and executive team. Covers key financial highlights, income statement summary, balance sheet snapshot, cash position, KPIs, and forward-looking commentary.",
    category: "Financial Reporting",
    tags: ["CFO report", "monthly report", "board reporting", "executive reporting", "financial highlights", "KPIs", "management reporting"],
    steps: [
      {
        title: "Populate the financial highlights section",
        description: "Summarize revenue, gross profit, operating income, and net income for the month and year-to-date vs. budget and prior year.",
      },
      {
        title: "Update the income statement summary",
        description: "Transfer the key P&L line items from the month-end close. Include both current month and YTD actuals alongside budget and prior year columns.",
      },
      {
        title: "Update the balance sheet snapshot",
        description: "Include current balances for key balance sheet items: cash, AR, AP, debt, and equity. Flag any material changes from the prior period.",
      },
      {
        title: "Report on cash and liquidity",
        description: "Show ending cash balance, cash burn or generation for the month, and any significant cash movements such as debt payments or capital calls.",
      },
      {
        title: "Add management commentary",
        description: "Write brief commentary on the key variances, business drivers, risks, and outlook for the coming period to give numbers full context.",
      },
    ],
    benefits: [
      "Gives the board and executive team a complete financial picture in one document",
      "Budget vs. actual comparison enables meaningful variance discussion",
      "Commentary section ensures numbers are understood in the context of business performance",
      "Consistent format every month reduces preparation time and improves credibility",
    ],
  },
];

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug);
}
