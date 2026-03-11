export default function AIInsightsMockup() {
  const insights = [
    {
      icon: "trend",
      title: "Revenue trending up",
      detail: "Revenue has increased 12% over the past 3 months, outpacing forecast by 4%.",
      type: "positive",
    },
    {
      icon: "alert",
      title: "Unusual spike in T&E",
      detail: "Travel & Entertainment spend is 35% above the rolling 6-month average.",
      type: "warning",
    },
    {
      icon: "forecast",
      title: "Cash flow projection",
      detail: "Based on current trends, projected cash balance of $1.2M by end of Q2.",
      type: "neutral",
    },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          AI Insights
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-highlight/10 text-highlight font-medium">
          3 new
        </span>
      </div>

      {/* Insight cards */}
      <div className="space-y-2.5 sm:space-y-3 flex-1">
        {insights.map((insight) => (
          <div
            key={insight.title}
            className="p-2.5 sm:p-3 rounded-lg bg-background border border-border"
          >
            <div className="flex items-start gap-2 sm:gap-2.5">
              {/* Icon */}
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  insight.type === "positive"
                    ? "bg-success/10"
                    : insight.type === "warning"
                    ? "bg-amber-500/10"
                    : "bg-highlight/10"
                }`}
              >
                {insight.icon === "trend" && (
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )}
                {insight.icon === "alert" && (
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01M12 3l9.5 16.5H2.5L12 3z" />
                  </svg>
                )}
                {insight.icon === "forecast" && (
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m6 0h6m0 0v-9a2 2 0 012-2h2a2 2 0 012 2v9m-6 0h6" />
                  </svg>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <span className="text-[10px] sm:text-xs font-medium text-foreground block">
                  {insight.title}
                </span>
                <span className="text-[8px] sm:text-[9px] text-foreground-muted leading-relaxed">
                  {insight.detail}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-highlight animate-pulse" />
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          AI analysis updated daily
        </span>
      </div>
    </div>
  );
}
