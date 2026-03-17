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
];

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug);
}
