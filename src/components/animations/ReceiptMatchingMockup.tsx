export default function ReceiptMatchingMockup() {
  const matches = [
    { vendor: "Office Depot", amount: "$142.50", date: "Mar 28", cls: "1" },
    { vendor: "AWS Services", amount: "$847.00", date: "Mar 30", cls: "2" },
    { vendor: "Delta Airlines", amount: "$523.40", date: "Apr 1", cls: "3" },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Receipt Matching
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          3 matched
        </span>
      </div>

      {/* Match rows */}
      <div className="space-y-2.5 sm:space-y-3 flex-1">
        {matches.map((m) => (
          <div
            key={m.vendor}
            className={`receipt-row-${m.cls} p-2.5 sm:p-3 rounded-lg bg-background border border-border`}
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Receipt icon */}
              <div
                className={`receipt-icon-${m.cls} w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center flex-shrink-0`}
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
                    d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"
                  />
                </svg>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <span className="text-[10px] sm:text-xs font-medium text-foreground block truncate">
                  {m.vendor}
                </span>
                <span className="text-[8px] sm:text-[9px] text-foreground-muted">
                  {m.date} · {m.amount}
                </span>
              </div>

              {/* Match status */}
              <span
                className={`receipt-match-${m.cls} text-[8px] sm:text-[9px] px-2 sm:px-2.5 py-1 rounded-md font-medium flex-shrink-0 flex items-center gap-1`}
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
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101"
                  />
                </svg>
                Matched
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border flex items-center gap-2">
        <div className="receipt-footer-dot w-1.5 h-1.5 rounded-full bg-success" />
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          0 missing receipts
        </span>
      </div>
    </div>
  );
}
