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
];

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug);
}
