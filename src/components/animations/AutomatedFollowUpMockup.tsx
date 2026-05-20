export default function AutomatedFollowUpMockup() {
  const timelineEntries = [
    { label: "Initial Request Sent", date: "Mar 28", status: "done" },
    { label: "Reminder #1", date: "Apr 1", status: "done" },
    { label: "Reminder #2", date: "Apr 4", status: "done" },
    { label: "Escalated to Manager", date: "Apr 7", status: "current" },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Follow-Up Timeline
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          Auto
        </span>
      </div>

      {/* Side info */}
      <div className="mb-3 sm:mb-4 p-2 sm:p-2.5 rounded-lg bg-background border border-border">
        <span className="text-[9px] sm:text-[10px] text-foreground font-medium">
          Mason Electric
        </span>
        <span className="text-[8px] sm:text-[9px] text-foreground-muted block">
          Insurance Certificate
        </span>
      </div>

      {/* Timeline */}
      <div className="flex-1 relative ml-2 sm:ml-3">
        {timelineEntries.map((entry, index) => (
          <div key={entry.label} className="flex items-start gap-3 sm:gap-4 relative pb-4 sm:pb-5 last:pb-0">
            {/* Vertical line */}
            {index < timelineEntries.length - 1 && (
              <div className="absolute left-[5px] sm:left-[6px] top-3 sm:top-3.5 w-px h-full bg-border" />
            )}

            {/* Dot */}
            <div
              className={`w-[11px] h-[11px] sm:w-[13px] sm:h-[13px] rounded-full flex-shrink-0 mt-0.5 relative z-10 ${
                entry.status === "done"
                  ? "bg-success"
                  : "bg-warning"
              }`}
            />

            {/* Content */}
            <div className="flex-1 min-w-0 flex items-start justify-between gap-2">
              <span className="text-[9px] sm:text-[10px] text-foreground">
                {entry.label}
              </span>
              <span className="text-[8px] sm:text-[9px] text-foreground-muted flex-shrink-0">
                {entry.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-3 sm:mt-4 pt-3 border-t border-border flex items-center justify-between">
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          3 reminders sent
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-warning/10 text-warning font-medium">
          Awaiting response
        </span>
      </div>
    </div>
  );
}
