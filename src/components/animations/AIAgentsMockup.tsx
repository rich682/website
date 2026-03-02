export default function AIAgentsMockup() {
  return (
    <div className="w-full h-full p-4 sm:p-5 flex flex-col gap-2 sm:gap-2.5">
      {/* Agent 1 - Stakeholder Requests */}
      <div className="flex-1 p-2 sm:p-2.5 rounded-lg bg-background border border-border">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="agent-dot w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
          <span className="text-[9px] sm:text-[10px] font-medium text-foreground">
            Stakeholder Requests
          </span>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[8px] sm:text-[9px] text-foreground-secondary">
              Invoice from Acme
            </span>
            <span className="agent-status-1 text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded-full font-medium">
              Received
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[8px] sm:text-[9px] text-foreground-secondary">
              GL Export
            </span>
            <span className="agent-status-2 text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded-full font-medium">
              Received
            </span>
          </div>
        </div>
      </div>

      {/* Agent 2 - Reconciliations */}
      <div className="flex-1 p-2 sm:p-2.5 rounded-lg bg-background border border-border">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="agent-dot w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
          <span className="text-[9px] sm:text-[10px] font-medium text-foreground">
            Reconciliations
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="flex-1 h-1.5 rounded-full bg-background-tertiary overflow-hidden">
            <div className="agent-bar h-full rounded-full bg-success" />
          </div>
          <span className="text-[8px] sm:text-[9px] text-foreground-muted whitespace-nowrap">
            847 matched
          </span>
        </div>
      </div>

      {/* Agent 3 - Reports */}
      <div className="flex-1 p-2 sm:p-2.5 rounded-lg bg-background border border-border">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="agent-dot w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
          <span className="text-[9px] sm:text-[10px] font-medium text-foreground">
            Reports
          </span>
        </div>
        <div className="agent-type">
          <span className="text-[8px] sm:text-[9px] text-foreground-muted">
            Generating monthly P&amp;L...
          </span>
        </div>
      </div>

      {/* Agent 4 - Data Analysis */}
      <div className="flex-1 p-2 sm:p-2.5 rounded-lg bg-background border border-border">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="agent-dot w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
          <span className="text-[9px] sm:text-[10px] font-medium text-foreground">
            Data Analysis
          </span>
        </div>
        <svg
          className="w-full h-4 sm:h-5"
          viewBox="0 0 200 24"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            className="agent-line"
            d="M0 18 Q25 18 50 12 T100 8 T150 14 T200 4"
            stroke="var(--highlight)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
