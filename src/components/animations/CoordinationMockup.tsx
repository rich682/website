export default function CoordinationMockup() {
  const tasks = [
    { name: "Job Cost Reconciliation", cls: "1", owner: "SM", color: "#6366F1" },
    { name: "Subcontractor Billing Review", cls: "2", owner: "JR", color: "#F59E0B" },
    { name: "Change Order Processing", cls: "3", owner: "KL", color: "#22C55E" },
    { name: "Bank Reconciliation", cls: "4", owner: "SM", color: "#6366F1" },
    { name: "WIP Schedule Review", cls: "5", owner: "JR", color: "#F59E0B" },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Month-End Close
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          Apr 2026
        </span>
      </div>

      {/* Task rows */}
      <div className="space-y-2 sm:space-y-2.5 flex-1">
        {tasks.map((task) => (
          <div
            key={task.name}
            className="flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-lg bg-background border border-border"
          >
            {/* Checkbox */}
            <div className="relative w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full border border-border flex-shrink-0">
              <div
                className={`coord-check-${task.cls} absolute inset-0 rounded-full bg-success flex items-center justify-center`}
              >
                <svg
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Label */}
            <span className="text-[10px] sm:text-xs text-foreground flex-1 truncate">
              {task.name}
            </span>

            {/* Avatar */}
            <div
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[7px] sm:text-[8px] font-semibold text-white"
              style={{ backgroundColor: task.color }}
            >
              {task.owner}
            </div>

            {/* Status pill */}
            <span
              className={`coord-status-${task.cls} text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 rounded-full bg-success/10 text-success font-medium`}
            >
              Complete
            </span>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-3 sm:mt-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[9px] sm:text-[10px] text-foreground-muted">
            Close Progress
          </span>
          <span className="text-[9px] sm:text-[10px] text-foreground-muted">
            100%
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-background-tertiary overflow-hidden">
          <div className="coord-progress h-full rounded-full bg-highlight" />
        </div>
      </div>
    </div>
  );
}
