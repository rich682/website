export default function ApprovalWorkflowMockup() {
  const levels = [
    { name: "Manager", approver: "SK", amount: "< $5K", cls: "1" },
    { name: "Director", approver: "JL", amount: "$5K – $25K", cls: "2" },
    { name: "VP Finance", approver: "MT", amount: "> $25K", cls: "3" },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Approval Chain
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          3 levels
        </span>
      </div>

      {/* Approval levels */}
      <div className="space-y-2 sm:space-y-2.5 flex-1">
        {levels.map((level, i) => (
          <div key={level.name}>
            <div
              className={`approval-level-${level.cls} p-2.5 sm:p-3 rounded-lg bg-background border border-border`}
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                {/* Step number */}
                <div
                  className={`approval-step-${level.cls} w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-[8px] sm:text-[9px] font-bold">
                    {i + 1}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] sm:text-xs font-medium text-foreground block truncate">
                    {level.name}
                  </span>
                  <span className="text-[8px] sm:text-[9px] text-foreground-muted">
                    {level.amount}
                  </span>
                </div>

                {/* Approver avatar */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-background-tertiary flex items-center justify-center flex-shrink-0">
                  <span className="text-[7px] sm:text-[8px] font-medium text-foreground-muted">
                    {level.approver}
                  </span>
                </div>

                {/* Status */}
                <span
                  className={`approval-status-${level.cls} text-[8px] sm:text-[9px] px-2 sm:px-2.5 py-1 rounded-md font-medium flex-shrink-0 flex items-center gap-1`}
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

            {/* Connector line between levels */}
            {i < levels.length - 1 && (
              <div className="flex justify-center py-1">
                <div
                  className={`approval-connector-${level.cls} w-px h-3 sm:h-4`}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border flex items-center gap-2">
        <div className="approval-footer-dot w-1.5 h-1.5 rounded-full bg-success" />
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          All approvals recorded with audit trail
        </span>
      </div>
    </div>
  );
}
