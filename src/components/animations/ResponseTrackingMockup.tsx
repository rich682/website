export default function ResponseTrackingMockup() {
  const matches = [
    { sourceA: "INV-4821", sourceB: "PO-2847", confidence: "98%", method: "Fuzzy", status: "Matched" },
    { sourceA: "INV-4833", sourceB: "PO-2851", confidence: "95%", method: "Contextual", status: "Matched" },
    { sourceA: "INV-4840", sourceB: "PO-2860", confidence: "72%", method: "Partial", status: "Review" },
    { sourceA: "INV-4856", sourceB: "—", confidence: "—", method: "—", status: "No match" },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          AI Match Results
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          4 records
        </span>
      </div>

      {/* Column Headers */}
      <div className="grid grid-cols-6 gap-1 sm:gap-2 mb-2 px-2 sm:px-2.5">
        <span className="text-[7px] sm:text-[8px] text-foreground-muted font-medium">Source A</span>
        <span className="text-[7px] sm:text-[8px] text-foreground-muted font-medium">Source B</span>
        <span className="text-[7px] sm:text-[8px] text-foreground-muted font-medium text-center">Confidence</span>
        <span className="text-[7px] sm:text-[8px] text-foreground-muted font-medium text-center hidden sm:block">Method</span>
        <span className="text-[7px] sm:text-[8px] text-foreground-muted font-medium text-right col-span-2 sm:col-span-2">Status</span>
      </div>

      {/* Match rows */}
      <div className="space-y-2 sm:space-y-2.5 flex-1">
        {matches.map((m) => (
          <div
            key={m.sourceA}
            className="grid grid-cols-6 gap-1 sm:gap-2 items-center p-2 sm:p-2.5 rounded-lg bg-background border border-border"
          >
            <span className="text-[8px] sm:text-[9px] text-foreground font-medium truncate">
              {m.sourceA}
            </span>
            <span className="text-[8px] sm:text-[9px] text-foreground-muted truncate">
              {m.sourceB}
            </span>
            <span className={`text-[8px] sm:text-[9px] text-center font-medium ${
              m.confidence === "—" ? "text-foreground-muted" :
              parseInt(m.confidence) >= 90 ? "text-success" :
              parseInt(m.confidence) >= 70 ? "text-warning" : "text-foreground-muted"
            }`}>
              {m.confidence}
            </span>
            <span className="text-[7px] sm:text-[8px] text-foreground-muted text-center hidden sm:block">
              {m.method}
            </span>
            <div className="col-span-2 sm:col-span-2 flex justify-end">
              <span
                className={`text-[7px] sm:text-[8px] px-1.5 sm:px-2 py-0.5 rounded-full font-medium ${
                  m.status === "Matched"
                    ? "bg-success/10 text-success"
                    : m.status === "Review"
                    ? "bg-warning/10 text-warning"
                    : "bg-error/10 text-error"
                }`}
              >
                {m.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-3 sm:mt-4 pt-3 border-t border-border flex items-center justify-between">
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          2 auto-matched · 1 review · 1 unmatched
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-success/10 text-success font-medium">
          96.5% avg confidence
        </span>
      </div>
    </div>
  );
}
