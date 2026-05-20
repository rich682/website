export default function RequestTrackingMockup() {
  const requests = [
    {
      name: "Budget Update",
      recipient: "Mike",
      type: "Department Lead",
      status: "Responded",
      attachment: true,
      cls: "1",
      color: "#6366F1",
      icon: "👤"
    },
    {
      name: "Insurance Certificate",
      recipient: "Sarah",
      type: "Vendor",
      status: "Pending",
      attachment: false,
      cls: "2",
      color: "#F59E0B",
      icon: "🏢"
    },
    {
      name: "Expense Approval",
      recipient: "Dave",
      type: "Team Member",
      status: "Responded",
      attachment: true,
      cls: "3",
      color: "#22C55E",
      icon: "👥"
    },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Stakeholder Requests
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          3 total
        </span>
      </div>

      {/* Request rows */}
      <div className="space-y-2.5 sm:space-y-3 flex-1">
        {requests.map((request) => (
          <div
            key={request.name}
            className="p-2.5 sm:p-3 rounded-lg bg-background border border-border"
          >
            <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5">
              {/* Avatar */}
              <div
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] sm:text-xs"
                style={{ backgroundColor: request.color + "20", border: `1.5px solid ${request.color}` }}
              >
                {request.icon}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <span className="text-[10px] sm:text-xs font-medium text-foreground block truncate">
                  {request.name}
                </span>
                <span className="text-[8px] sm:text-[9px] text-foreground-muted">
                  {request.recipient} <span className="font-medium">({request.type})</span>
                </span>
              </div>

              {/* Status badge */}
              <span
                className={`request-status-${request.cls} text-[8px] sm:text-[9px] px-2 sm:px-2.5 py-1 rounded-md font-medium flex-shrink-0 ${
                  request.status === "Responded"
                    ? "bg-success/10 text-success"
                    : "bg-warning/10 text-warning"
                }`}
              >
                {request.status}
              </span>
            </div>

            {/* Attachment indicator */}
            {request.attachment && (
              <div className="flex items-center gap-1 ml-8 sm:ml-10">
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-highlight"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2m0 0v-8m0 8H3m18 0h-3"
                  />
                </svg>
                <span className="text-[8px] sm:text-[9px] text-foreground-muted">
                  1 file attached
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-success" />
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          All requests tracked in one place
        </span>
      </div>
    </div>
  );
}
