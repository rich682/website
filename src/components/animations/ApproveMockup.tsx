export default function ApproveMockup() {
  const items = [
    { name: "Bank Reconciliation", detail: "847 matches", cls: "1" },
    { name: "Monthly P&L Report", detail: "Generated", cls: "2" },
    { name: "Accrual Entries", detail: "12 items", cls: "3" },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Review Queue
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          3 pending
        </span>
      </div>

      {/* Approval rows */}
      <div className="space-y-2.5 sm:space-y-3 flex-1">
        {items.map((item) => (
          <div
            key={item.name}
            className="p-2.5 sm:p-3 rounded-lg bg-background border border-border"
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Info */}
              <div className="flex-1 min-w-0">
                <span className="text-[10px] sm:text-xs font-medium text-foreground block truncate">
                  {item.name}
                </span>
                <span className="text-[8px] sm:text-[9px] text-foreground-muted">
                  {item.detail}
                </span>
              </div>

              {/* Approve button */}
              <span
                className={`approve-btn-${item.cls} text-[8px] sm:text-[9px] px-2 sm:px-2.5 py-1 rounded-md font-medium flex-shrink-0 flex items-center gap-1`}
              >
                <svg
                  className="w-2.5 h-2.5"
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
                Approved
              </span>
            </div>
          </div>
        ))}
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
