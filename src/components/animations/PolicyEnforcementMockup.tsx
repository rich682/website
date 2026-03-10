export default function PolicyEnforcementMockup() {
  const expenses = [
    { name: "Client Dinner", amount: "$185", policy: "pass", cls: "1" },
    { name: "Software License", amount: "$2,400", policy: "pass", cls: "2" },
    { name: "Travel Upgrade", amount: "$890", policy: "flagged", cls: "3" },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Policy Checks
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          Real-time
        </span>
      </div>

      {/* Expense rows */}
      <div className="space-y-2.5 sm:space-y-3 flex-1">
        {expenses.map((e) => (
          <div
            key={e.name}
            className={`policy-row-${e.cls} p-2.5 sm:p-3 rounded-lg bg-background border border-border`}
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Shield icon */}
              <div
                className={`policy-shield-${e.cls} w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center flex-shrink-0`}
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <span className="text-[10px] sm:text-xs font-medium text-foreground block truncate">
                  {e.name}
                </span>
                <span className="text-[8px] sm:text-[9px] text-foreground-muted">
                  {e.amount}
                </span>
              </div>

              {/* Policy status */}
              <span
                className={`policy-badge-${e.cls} text-[8px] sm:text-[9px] px-2 sm:px-2.5 py-1 rounded-md font-medium flex-shrink-0`}
              >
                {e.policy === "pass" ? "In Policy" : "Flagged"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="policy-footer-dot w-1.5 h-1.5 rounded-full" />
          <span className="text-[9px] sm:text-[10px] text-foreground-muted">
            1 expense flagged for review
          </span>
        </div>
      </div>
    </div>
  );
}
