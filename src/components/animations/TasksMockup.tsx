export default function TasksMockup() {
  const tasks = [
    { name: "Account Reconciliation", owner: "JL", due: "Apr 3", cls: "1" },
    { name: "Vendor Billing Review", owner: "SK", due: "Apr 4", cls: "2" },
    { name: "Variance Review", owner: "MT", due: "Apr 5", cls: "3" },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Close Checklist
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          12 tasks
        </span>
      </div>

      {/* Task rows */}
      <div className="space-y-2.5 sm:space-y-3 flex-1">
        {tasks.map((task) => (
          <div
            key={task.name}
            className={`task-row-${task.cls} flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-lg bg-background border border-border`}
          >
            {/* Checkbox */}
            <div className="relative w-4 h-4 sm:w-5 sm:h-5 rounded border border-border flex-shrink-0">
              <div
                className={`task-check-${task.cls} absolute inset-0 rounded bg-success flex items-center justify-center`}
              >
                <svg
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Task name */}
            <span className="text-[10px] sm:text-xs text-foreground flex-1 truncate">
              {task.name}
            </span>

            {/* Owner avatar */}
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-background-tertiary flex items-center justify-center flex-shrink-0">
              <span className="text-[7px] sm:text-[8px] font-medium text-foreground-muted">
                {task.owner}
              </span>
            </div>

            {/* Due date */}
            <span className="text-[8px] sm:text-[9px] text-foreground-muted flex-shrink-0">
              {task.due}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          3 of 12 complete
        </span>
        <div className="flex -space-x-1.5">
          {["JL", "SK", "MT"].map((initials) => (
            <div
              key={initials}
              className="w-5 h-5 rounded-full bg-background-tertiary border-2 border-background-secondary flex items-center justify-center"
            >
              <span className="text-[6px] font-medium text-foreground-muted">
                {initials}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
