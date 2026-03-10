export default function DeadlinesMockup() {
  const milestones = [
    { name: "Journal Entries", due: "Apr 2", status: "done", cls: "1" },
    { name: "Reconciliations", due: "Apr 4", status: "done", cls: "2" },
    { name: "Final Review", due: "Apr 5", status: "at-risk", cls: "3" },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Deadline Tracker
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          Apr 2026
        </span>
      </div>

      {/* Timeline */}
      <div className="space-y-3 sm:space-y-4 flex-1">
        {milestones.map((m) => (
          <div
            key={m.name}
            className={`deadline-row-${m.cls} flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-background border border-border`}
          >
            {/* Timeline dot */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className={`deadline-dot-${m.cls} w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-2`}
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <span className="text-[10px] sm:text-xs font-medium text-foreground block truncate">
                {m.name}
              </span>
              <span className="text-[8px] sm:text-[9px] text-foreground-muted">
                Due {m.due}
              </span>
            </div>

            {/* Status badge */}
            <span
              className={`deadline-badge-${m.cls} text-[8px] sm:text-[9px] px-2 sm:px-2.5 py-1 rounded-md font-medium flex-shrink-0`}
            >
              {m.status === "done" ? "On Track" : "At Risk"}
            </span>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-4 pt-3 border-t border-border">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[9px] sm:text-[10px] text-foreground-muted">
            Close progress
          </span>
          <span className="deadline-pct text-[9px] sm:text-[10px] font-medium text-foreground">
            67%
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-background-tertiary overflow-hidden">
          <div className="deadline-progress h-full rounded-full bg-success" />
        </div>
      </div>
    </div>
  );
}
