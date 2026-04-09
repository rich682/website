export default function ResponseTrackingMockup() {
  const requests = [
    { name: "Mike Torres", role: "PM", type: "Job Cost Update", status: "Responded", statusColor: "success" },
    { name: "Sarah Chen", role: "Sub", type: "Lien Waiver", status: "Responded", statusColor: "success" },
    { name: "Dave Miller", role: "Field", type: "Timesheet", status: "Overdue", statusColor: "error" },
    { name: "Valley Mechanical", role: "Sub", type: "Insurance Cert", status: "Pending", statusColor: "warning" },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Response Tracker
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          4 requests
        </span>
      </div>

      {/* Request rows */}
      <div className="space-y-2 sm:space-y-2.5 flex-1">
        {requests.map((req) => (
          <div
            key={req.name}
            className="flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-lg bg-background border border-border"
          >
            {/* Avatar */}
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-background-tertiary flex items-center justify-center flex-shrink-0">
              <span className="text-[7px] sm:text-[8px] font-medium text-foreground-muted">
                {req.name.split(" ").map(n => n[0]).join("")}
              </span>
            </div>

            {/* Name & role */}
            <div className="flex-1 min-w-0">
              <span className="text-[10px] sm:text-xs text-foreground block truncate">
                {req.name}
              </span>
              <span className="text-[8px] sm:text-[9px] text-foreground-muted">
                {req.role}
              </span>
            </div>

            {/* Request type */}
            <span className="text-[8px] sm:text-[9px] text-foreground-muted flex-shrink-0 hidden sm:block">
              {req.type}
            </span>

            {/* Status pill */}
            <span
              className={`text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${
                req.statusColor === "success"
                  ? "bg-success/10 text-success"
                  : req.statusColor === "error"
                  ? "bg-error/10 text-error"
                  : "bg-warning/10 text-warning"
              }`}
            >
              {req.status}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-3 sm:mt-4 pt-3 border-t border-border flex items-center justify-between">
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          3 of 4 responded
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-error/10 text-error font-medium">
          1 overdue
        </span>
      </div>
    </div>
  );
}
