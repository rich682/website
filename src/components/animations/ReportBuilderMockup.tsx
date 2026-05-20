export default function ReportBuilderMockup() {
  const columns = [
    { name: "Account", width: "flex-1" },
    { name: "Actual", width: "w-16 sm:w-20" },
    { name: "Budget", width: "w-16 sm:w-20" },
    { name: "Variance", width: "w-16 sm:w-20" },
  ];

  const rows = [
    { account: "Revenue", actual: "$142K", budget: "$135K", variance: "+5.2%", positive: true },
    { account: "Cost of Goods Sold", actual: "$61K", budget: "$58K", variance: "+5.1%", positive: false },
    { account: "Operating Expenses", actual: "$34K", budget: "$38K", variance: "-10.5%", positive: true },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Custom Report
        </span>
        <div className="flex items-center gap-1.5">
          <span className="text-[8px] sm:text-[9px] px-2 py-0.5 rounded-full bg-highlight/10 text-highlight font-medium">
            PDF
          </span>
          <span className="text-[8px] sm:text-[9px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted font-medium">
            Excel
          </span>
        </div>
      </div>

      {/* Column headers */}
      <div className="flex items-center gap-2 px-2 sm:px-2.5 mb-2">
        {columns.map((col) => (
          <span
            key={col.name}
            className={`text-[8px] sm:text-[9px] font-medium text-foreground-muted uppercase tracking-wider ${col.width} ${col.name !== "Account" ? "text-right" : ""}`}
          >
            {col.name}
          </span>
        ))}
      </div>

      {/* Data rows */}
      <div className="space-y-2 sm:space-y-2.5 flex-1">
        {rows.map((row) => (
          <div
            key={row.account}
            className="flex items-center gap-2 p-2 sm:p-2.5 rounded-lg bg-background border border-border"
          >
            <span className="text-[10px] sm:text-xs text-foreground flex-1 truncate">
              {row.account}
            </span>
            <span className="text-[9px] sm:text-[10px] text-foreground w-16 sm:w-20 text-right">
              {row.actual}
            </span>
            <span className="text-[9px] sm:text-[10px] text-foreground-muted w-16 sm:w-20 text-right">
              {row.budget}
            </span>
            <span
              className={`text-[9px] sm:text-[10px] font-medium w-16 sm:w-20 text-right ${
                row.positive ? "text-success" : "text-red-500"
              }`}
            >
              {row.variance}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          P&amp;L Summary — Apr 2026
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-success/10 text-success font-medium">
          Generated
        </span>
      </div>
    </div>
  );
}
