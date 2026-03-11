export default function ReportingMockup() {
  const metrics = [
    { label: "Reports Generated", value: "24", trend: "+6 this month" },
    { label: "Variances Flagged", value: "3", trend: "2 resolved" },
    { label: "AI Insights", value: "12", trend: "5 new today" },
  ];

  const recentReports = [
    { name: "P&L Summary", status: "Ready", type: "PDF" },
    { name: "Budget vs Actual", status: "Ready", type: "Excel" },
    { name: "Cash Flow Forecast", status: "Generating", type: "PDF" },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Reporting Overview
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-highlight/10 text-highlight font-medium">
          Live
        </span>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-4 sm:mb-5">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="p-2 sm:p-2.5 rounded-lg bg-background border border-border text-center"
          >
            <span className="text-base sm:text-lg font-semibold text-foreground block">
              {m.value}
            </span>
            <span className="text-[7px] sm:text-[8px] text-foreground-muted leading-tight block mt-0.5">
              {m.label}
            </span>
          </div>
        ))}
      </div>

      {/* Recent reports */}
      <div className="space-y-2 sm:space-y-2.5 flex-1">
        {recentReports.map((r) => (
          <div
            key={r.name}
            className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg bg-background border border-border"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-highlight/10 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-highlight"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <span className="text-[10px] sm:text-xs text-foreground font-medium">
                {r.name}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded bg-background-tertiary text-foreground-muted font-medium">
                {r.type}
              </span>
              <span
                className={`text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded-full font-medium ${
                  r.status === "Ready"
                    ? "bg-success/10 text-success"
                    : "bg-amber-500/10 text-amber-500"
                }`}
              >
                {r.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-highlight animate-pulse" />
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          3 reports scheduled this week
        </span>
      </div>
    </div>
  );
}
