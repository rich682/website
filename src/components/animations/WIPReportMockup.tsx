export default function WIPReportMockup() {
  const projects = [
    { id: "Project 1042", contract: "$1.2M", pctComplete: "68%", earned: "$816K", billed: "$780K", overUnder: "+$36K", type: "under" },
    { id: "Project 1087", contract: "$2.4M", pctComplete: "45%", earned: "$1.08M", billed: "$1.15M", overUnder: "-$70K", type: "over" },
    { id: "Project 1103", contract: "$680K", pctComplete: "82%", earned: "$558K", billed: "$540K", overUnder: "+$18K", type: "under" },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          WIP Schedule
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          Apr 2026
        </span>
      </div>

      {/* Column Headers */}
      <div className="grid grid-cols-6 gap-1 sm:gap-2 mb-2 px-2 sm:px-2.5">
        <span className="text-[7px] sm:text-[8px] text-foreground-muted font-medium">Project</span>
        <span className="text-[7px] sm:text-[8px] text-foreground-muted font-medium text-right">Contract</span>
        <span className="text-[7px] sm:text-[8px] text-foreground-muted font-medium text-right">% Comp</span>
        <span className="text-[7px] sm:text-[8px] text-foreground-muted font-medium text-right">Earned</span>
        <span className="text-[7px] sm:text-[8px] text-foreground-muted font-medium text-right">Billed</span>
        <span className="text-[7px] sm:text-[8px] text-foreground-muted font-medium text-right">Over/Under</span>
      </div>

      {/* Project rows */}
      <div className="space-y-2 sm:space-y-2.5 flex-1">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="grid grid-cols-6 gap-1 sm:gap-2 items-center p-2 sm:p-2.5 rounded-lg bg-background border border-border"
          >
            <span className="text-[9px] sm:text-[10px] text-foreground font-medium truncate">
              {proj.id}
            </span>
            <span className="text-[9px] sm:text-[10px] text-foreground-muted text-right">
              {proj.contract}
            </span>
            <span className="text-[9px] sm:text-[10px] text-foreground-muted text-right">
              {proj.pctComplete}
            </span>
            <span className="text-[9px] sm:text-[10px] text-foreground-muted text-right">
              {proj.earned}
            </span>
            <span className="text-[9px] sm:text-[10px] text-foreground-muted text-right">
              {proj.billed}
            </span>
            <span
              className={`text-[8px] sm:text-[9px] text-right font-medium ${
                proj.type === "under" ? "text-success" : "text-error"
              }`}
            >
              {proj.overUnder}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-3 sm:mt-4 pt-3 border-t border-border flex items-center justify-between">
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          3 active projects
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-error/10 text-error font-medium">
          1 overbilled
        </span>
      </div>
    </div>
  );
}
