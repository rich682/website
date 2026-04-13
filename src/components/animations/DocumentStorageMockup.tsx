export default function DocumentStorageMockup() {
  const exceptions = [
    { id: "EXC-101", description: "Crane Rental — INV vs DB", variance: "$3,400", assignee: "SM", status: "Resolved" },
    { id: "EXC-102", description: "Steel Delivery — PDF mismatch", variance: "$1,250", assignee: "JR", status: "Resolved" },
    { id: "EXC-103", description: "Concrete — rounding diff", variance: "$12", assignee: "SM", status: "In Progress" },
  ];

  const recentActivity = [
    { action: "Resolved EXC-101", user: "S. Martinez", time: "2h ago" },
    { action: "Note added to EXC-103", user: "J. Reeves", time: "4h ago" },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Exception Dashboard
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          3 exceptions
        </span>
      </div>

      {/* Exception rows */}
      <div className="space-y-2 sm:space-y-2.5 flex-1">
        {exceptions.map((exc) => (
          <div
            key={exc.id}
            className="flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-lg bg-background border border-border"
          >
            {/* ID badge */}
            <span className="text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded bg-background-tertiary text-foreground-muted font-medium flex-shrink-0">
              {exc.id}
            </span>

            {/* Description & variance */}
            <div className="flex-1 min-w-0">
              <span className="text-[9px] sm:text-[10px] text-foreground block truncate">
                {exc.description}
              </span>
              <span className="text-[7px] sm:text-[8px] text-error font-medium">
                {exc.variance} variance
              </span>
            </div>

            {/* Assignee */}
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-background-tertiary flex items-center justify-center flex-shrink-0">
              <span className="text-[6px] sm:text-[7px] font-medium text-foreground-muted">
                {exc.assignee}
              </span>
            </div>

            {/* Status pill */}
            <span
              className={`text-[7px] sm:text-[8px] px-1.5 sm:px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${
                exc.status === "Resolved"
                  ? "bg-success/10 text-success"
                  : "bg-warning/10 text-warning"
              }`}
            >
              {exc.status}
            </span>
          </div>
        ))}
      </div>

      {/* Activity log */}
      <div className="mt-3 sm:mt-4 pt-3 border-t border-border">
        <span className="text-[8px] sm:text-[9px] text-foreground-muted font-medium mb-1.5 block">
          Recent Activity
        </span>
        <div className="space-y-1">
          {recentActivity.map((a) => (
            <div key={a.action} className="flex items-center justify-between">
              <span className="text-[8px] sm:text-[9px] text-foreground-muted">
                {a.action} — {a.user}
              </span>
              <span className="text-[7px] sm:text-[8px] text-foreground-muted">
                {a.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
