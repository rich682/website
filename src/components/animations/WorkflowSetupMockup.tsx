export default function WorkflowSetupMockup() {
  const workflows = [
    {
      name: "Management Report",
      category: "Reports",
      status: "Active",
      schedule: "1st of month",
    },
    {
      name: "Bank Reconciliation",
      category: "Reconciliation",
      status: "Active",
      schedule: "Daily",
    },
    {
      name: "Budget Variance",
      category: "Analysis",
      status: "Active",
      schedule: "Weekly",
    },
    {
      name: "Vendor Reconciliation",
      category: "Reconciliation",
      status: "Active",
      schedule: "Monthly",
    },
  ];

  const categoryColors: Record<string, string> = {
    Reports: "bg-highlight/10 text-highlight",
    Reconciliation: "bg-success/10 text-success",
    Analysis: "bg-amber-500/10 text-amber-500",
  };

  return (
    <div className="w-full h-full p-4 sm:p-5 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Workflows
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          4 active
        </span>
      </div>

      {/* Workflow rows */}
      <div className="space-y-2 sm:space-y-2.5 flex-1">
        {workflows.map((w) => (
          <div
            key={w.name}
            className="flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-lg bg-background border border-border"
          >
            {/* Check icon */}
            <div className="w-5 h-5 sm:w-5 sm:h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Name + schedule */}
            <div className="flex-1 min-w-0">
              <span className="text-[10px] sm:text-[11px] font-medium text-foreground block truncate">
                {w.name}
              </span>
              <span className="text-[8px] sm:text-[9px] text-foreground-muted">
                {w.schedule}
              </span>
            </div>

            {/* Category badge */}
            <span
              className={`text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded-full font-medium flex-shrink-0 ${categoryColors[w.category]}`}
            >
              {w.category}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          All workflows configured
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-success/10 text-success font-medium">
          Ready
        </span>
      </div>
    </div>
  );
}
