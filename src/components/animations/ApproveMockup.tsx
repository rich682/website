export default function ApproveMockup() {
  const items = [
    {
      detail: "New form response",
      detailType: "form",
      timestamp: "2 mins ago",
      taskName: "Bank Reconciliation",
      taskType: "Recon",
      boardMonth: "Mar 2025",
      status: "Pending",
      cls: "1",
    },
    {
      detail: "New email reply",
      detailType: "email",
      timestamp: "1 hour ago",
      taskName: "P&L Report",
      taskType: "Reports",
      boardMonth: "Mar 2025",
      status: "Pending",
      cls: "2",
    },
    {
      detail: "Agent work ready",
      detailType: "agent",
      timestamp: "3 hours ago",
      taskName: "Accrual Entries",
      taskType: "Analysis",
      boardMonth: "Feb 2025",
      status: "Reviewed",
      cls: "3",
    },
  ];

  const typeColors: Record<string, string> = {
    Recon: "bg-highlight/10 text-highlight",
    Reports: "bg-success/10 text-success",
    Analysis: "bg-warning/10 text-warning",
  };

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Review Hub
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          3 pending
        </span>
      </div>

      {/* Table */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Column headers */}
        <div className="flex items-center gap-1 pb-1.5 border-b border-border mb-1">
          <span className="flex-1 text-[8px] sm:text-[9px] text-foreground-muted font-medium">Review Details</span>
          <span className="w-14 sm:w-16 text-[8px] sm:text-[9px] text-foreground-muted font-medium">Time</span>
          <span className="w-16 sm:w-20 text-[8px] sm:text-[9px] text-foreground-muted font-medium truncate">Task Name</span>
          <span className="w-12 sm:w-14 text-[8px] sm:text-[9px] text-foreground-muted font-medium">Type</span>
          <span className="w-12 sm:w-14 text-[8px] sm:text-[9px] text-foreground-muted font-medium">Month</span>
        </div>

        {/* Data rows */}
        <div className="flex-1">
          {items.map((item) => (
            <div
              key={item.cls}
              className="flex items-center gap-1 py-2 border-b border-border last:border-0"
            >
              {/* Review Details */}
              <div className="flex-1 flex items-center gap-1.5 min-w-0">
                <div
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    item.status === "Reviewed" ? "bg-success" : "bg-warning"
                  }`}
                />
                <span className="text-[8px] sm:text-[9px] text-foreground truncate">
                  {item.detail}
                </span>
              </div>

              {/* Timestamp */}
              <span className="w-14 sm:w-16 text-[8px] sm:text-[9px] text-foreground-muted truncate flex-shrink-0">
                {item.timestamp}
              </span>

              {/* Task Name */}
              <span className="w-16 sm:w-20 text-[8px] sm:text-[9px] text-foreground truncate flex-shrink-0">
                {item.taskName}
              </span>

              {/* Task Type */}
              <div className="w-12 sm:w-14 flex-shrink-0">
                <span
                  className={`approve-btn-${item.cls} text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded font-medium ${
                    typeColors[item.taskType] ?? "bg-background-tertiary text-foreground-muted"
                  }`}
                >
                  {item.taskType}
                </span>
              </div>

              {/* Board Month */}
              <span className="w-12 sm:w-14 text-[8px] sm:text-[9px] text-foreground-muted truncate flex-shrink-0">
                {item.boardMonth}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-success" />
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          Full audit trail recorded
        </span>
      </div>
    </div>
  );
}
