export default function InvoiceCaptureMockup() {
  const invoices = [
    { vendor: "Acme Corp", amount: "$4,250.00", method: "Email", cls: "1" },
    { vendor: "CloudHost Inc", amount: "$1,875.00", method: "Upload", cls: "2" },
    { vendor: "Office Pro", amount: "$632.50", method: "Email", cls: "3" },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Invoice Inbox
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          3 captured
        </span>
      </div>

      {/* Invoice rows */}
      <div className="space-y-2.5 sm:space-y-3 flex-1">
        {invoices.map((inv) => (
          <div
            key={inv.vendor}
            className={`inv-capture-row-${inv.cls} p-2.5 sm:p-3 rounded-lg bg-background border border-border`}
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Document icon */}
              <div
                className={`inv-capture-icon-${inv.cls} w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center flex-shrink-0`}
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <span className="text-[10px] sm:text-xs font-medium text-foreground block truncate">
                  {inv.vendor}
                </span>
                <span className="text-[8px] sm:text-[9px] text-foreground-muted">
                  {inv.amount} · via {inv.method}
                </span>
              </div>

              {/* Extracted badge */}
              <span
                className={`inv-capture-badge-${inv.cls} text-[8px] sm:text-[9px] px-2 sm:px-2.5 py-1 rounded-md font-medium flex-shrink-0 flex items-center gap-1`}
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
                Extracted
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border flex items-center gap-2">
        <div className="inv-capture-footer-dot w-1.5 h-1.5 rounded-full bg-success" />
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          Data extracted automatically
        </span>
      </div>
    </div>
  );
}
