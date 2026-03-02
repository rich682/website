export default function AIAgentsMockup() {
  return (
    <div className="w-full h-full p-4 sm:p-5 flex flex-col gap-2 sm:gap-2.5">
      {/* Step 1 - Build: Agent Configuration */}
      <div className="agent-build flex-1 p-2 sm:p-2.5 rounded-lg bg-background border border-border">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded bg-highlight/20 flex items-center justify-center flex-shrink-0">
            <span className="text-[6px] sm:text-[7px] font-bold text-highlight">1</span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-medium text-foreground">
            You Build
          </span>
        </div>
        <div className="p-1.5 rounded bg-background-secondary border border-border/50">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] sm:text-[9px] font-medium text-foreground">
              Bank Reconciliation Agent
            </span>
            <span className="agent-config-badge text-[6px] sm:text-[7px] px-1.5 py-0.5 rounded-full bg-highlight/10 text-highlight font-medium">
              Configured
            </span>
          </div>
          <div className="flex items-center gap-2 text-[7px] sm:text-[8px] text-foreground-muted">
            <span>Threshold: $0.01</span>
            <span className="text-border">·</span>
            <span>Daily 6am</span>
          </div>
        </div>
      </div>

      {/* Step 2 - Execute: Agent Running */}
      <div className="agent-execute flex-1 p-2 sm:p-2.5 rounded-lg bg-background border border-border">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded bg-success/20 flex items-center justify-center flex-shrink-0">
            <span className="text-[6px] sm:text-[7px] font-bold text-success">2</span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-medium text-foreground">
            Agent Executes
          </span>
          <div className="agent-dot ml-auto w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
        </div>
        <div className="flex items-center gap-2.5">
          <div className="flex-1 h-1.5 rounded-full bg-background-tertiary overflow-hidden">
            <div className="agent-bar h-full rounded-full bg-success" />
          </div>
          <span className="text-[8px] sm:text-[9px] text-foreground-muted whitespace-nowrap">
            847/850
          </span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-[7px] sm:text-[8px] text-foreground-muted">
          <span>3 exceptions flagged</span>
        </div>
      </div>

      {/* Step 3 - Review: Awaiting Your Approval */}
      <div className="agent-review flex-[1.2] p-2 sm:p-2.5 rounded-lg bg-background border border-border">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded bg-warning/20 flex items-center justify-center flex-shrink-0">
            <span className="text-[6px] sm:text-[7px] font-bold text-warning">3</span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-medium text-foreground">
            You Review &amp; Approve
          </span>
        </div>
        <div className="p-1.5 rounded bg-background-secondary border border-border/50 mb-1.5">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-[8px] sm:text-[9px] font-medium text-foreground">
              Bank Reconciliation
            </span>
            <span className="agent-review-badge text-[6px] sm:text-[7px] px-1.5 py-0.5 rounded-full font-medium">
              Awaiting Review
            </span>
          </div>
          <span className="text-[7px] sm:text-[8px] text-foreground-muted">
            847 matched · 3 exceptions · $2,340
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <button className="agent-approve-btn flex-1 text-[7px] sm:text-[8px] font-medium py-1 rounded bg-success/15 text-success border border-success/20">
            ✓ Approve
          </button>
          <button className="flex-1 text-[7px] sm:text-[8px] font-medium py-1 rounded bg-background-tertiary text-foreground-muted border border-border">
            Review Details
          </button>
        </div>
      </div>
    </div>
  );
}
