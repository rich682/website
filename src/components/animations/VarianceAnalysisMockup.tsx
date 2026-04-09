export default function VarianceAnalysisMockup() {
  const variances = [
    { account: "Labor — Project 1042", current: "$28.4K", prior: "$22.1K", change: "+28.5%", flagged: true },
    { account: "Materials — Project 1087", current: "$94.2K", prior: "$93.8K", change: "+0.4%", flagged: false },
    { account: "Equipment — Project 1103", current: "$12.7K", prior: "$8.9K", change: "+42.7%", flagged: true },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Variance Analysis
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-500 font-medium">
          2 flagged
        </span>
      </div>

      {/* Rows */}
      <div className="space-y-2.5 sm:space-y-3 flex-1">
        {variances.map((item) => (
          <div
            key={item.account}
            className={`p-2.5 sm:p-3 rounded-lg bg-background border ${
              item.flagged ? "border-red-300/40" : "border-border"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] sm:text-xs font-medium text-foreground truncate">
                {item.account}
              </span>
              {item.flagged && (
                <span className="text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded bg-red-500/10 text-red-500 font-medium flex-shrink-0">
                  Above threshold
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] sm:text-[9px] text-foreground-muted">
                    Current: <span className="text-foreground">{item.current}</span>
                  </span>
                  <span className="text-[8px] sm:text-[9px] text-foreground-muted">
                    Prior: <span className="text-foreground">{item.prior}</span>
                  </span>
                  <span
                    className={`text-[8px] sm:text-[9px] font-medium ${
                      item.flagged ? "text-red-500" : "text-success"
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-highlight" />
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          Period-over-period · 10% threshold
        </span>
      </div>
    </div>
  );
}
