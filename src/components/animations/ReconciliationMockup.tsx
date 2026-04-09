export default function ReconciliationMockup() {
  const lineItems = [
    { costCode: "Labor --- Framing", gl: "$42,800", sub: "$42,800", status: "Matched", variance: null },
    { costCode: "Materials --- Concrete", gl: "$28,400", sub: "$28,400", status: "Matched", variance: null },
    { costCode: "Equipment --- Crane", gl: "$15,200", sub: "$18,600", status: "Exception", variance: "$3,400" },
    { costCode: "Subcontract --- Electrical", gl: "$67,500", sub: "$67,500", status: "Matched", variance: null },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Job Cost Reconciliation
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          Project 1042
        </span>
      </div>

      {/* Column Headers */}
      <div className="grid grid-cols-5 gap-1 sm:gap-2 mb-2 px-2 sm:px-2.5">
        <span className="text-[7px] sm:text-[8px] text-foreground-muted font-medium col-span-1">Cost Code</span>
        <span className="text-[7px] sm:text-[8px] text-foreground-muted font-medium text-right">GL</span>
        <span className="text-[7px] sm:text-[8px] text-foreground-muted font-medium text-right">Sub Ledger</span>
        <span className="text-[7px] sm:text-[8px] text-foreground-muted font-medium text-right col-span-2">Status</span>
      </div>

      {/* Line item rows */}
      <div className="space-y-2 sm:space-y-2.5 flex-1">
        {lineItems.map((item) => (
          <div
            key={item.costCode}
            className="grid grid-cols-5 gap-1 sm:gap-2 items-center p-2 sm:p-2.5 rounded-lg bg-background border border-border"
          >
            <span className="text-[8px] sm:text-[9px] text-foreground font-medium truncate col-span-1">
              {item.costCode.replace("---", "\u2014")}
            </span>
            <span className="text-[9px] sm:text-[10px] text-foreground-muted text-right">
              {item.gl}
            </span>
            <span className="text-[9px] sm:text-[10px] text-foreground-muted text-right">
              {item.sub}
            </span>
            <div className="col-span-2 flex items-center justify-end gap-1">
              <span
                className={`text-[7px] sm:text-[8px] px-1.5 sm:px-2 py-0.5 rounded-full font-medium ${
                  item.status === "Matched"
                    ? "bg-success/10 text-success"
                    : "bg-error/10 text-error"
                }`}
              >
                {item.status}
              </span>
              {item.variance && (
                <span className="text-[7px] sm:text-[8px] text-error font-medium">
                  {item.variance}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-3 sm:mt-4 pt-3 border-t border-border flex items-center justify-between">
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          3 matched · 1 exception
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-error/10 text-error font-medium">
          $3,400 variance
        </span>
      </div>
    </div>
  );
}
