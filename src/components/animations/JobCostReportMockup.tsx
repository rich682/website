export default function JobCostReportMockup() {
  const projects = [
    { name: "Project 1042", revenue: "$820K", costs: "$695K", margin: "15.2%", status: "On Track" },
    { name: "Project 1087", revenue: "$1.2M", costs: "$1.05M", margin: "12.5%", status: "At Risk" },
    { name: "Project 1103", revenue: "$340K", costs: "$310K", margin: "8.8%", status: "At Risk" },
  ];

  // Simple bar chart data
  const bars = [
    { label: "Jan", height: "45%" },
    { label: "Feb", height: "52%" },
    { label: "Mar", height: "60%" },
    { label: "Apr", height: "48%" },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Job Cost Report
        </span>
        <div className="flex items-center gap-1.5">
          <span className="text-[8px] sm:text-[9px] px-2 py-0.5 rounded-full bg-highlight/10 text-highlight font-medium">
            Apr 2026
          </span>
        </div>
      </div>

      {/* Mini bar chart */}
      <div className="flex items-end gap-2 sm:gap-3 h-16 sm:h-20 mb-4 px-2">
        {bars.map((bar) => (
          <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full rounded-t bg-highlight/20 relative" style={{ height: bar.height }}>
              <div className="absolute inset-x-0 bottom-0 rounded-t bg-highlight" style={{ height: "60%" }} />
            </div>
            <span className="text-[7px] sm:text-[8px] text-foreground-muted">{bar.label}</span>
          </div>
        ))}
      </div>

      {/* Project rows */}
      <div className="space-y-2 sm:space-y-2.5 flex-1">
        {projects.map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-2 p-2 sm:p-2.5 rounded-lg bg-background border border-border"
          >
            <span className="text-[10px] sm:text-xs text-foreground flex-1 truncate font-medium">
              {p.name}
            </span>
            <span className="text-[8px] sm:text-[9px] text-foreground-muted w-12 sm:w-14 text-right">
              {p.costs}
            </span>
            <span className="text-[8px] sm:text-[9px] text-foreground w-10 sm:w-12 text-right font-medium">
              {p.margin}
            </span>
            <span
              className={`text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded-full font-medium ${
                p.status === "On Track"
                  ? "bg-success/10 text-success"
                  : "bg-warning/10 text-warning"
              }`}
            >
              {p.status}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-3 sm:mt-4 pt-3 border-t border-border flex items-center justify-between">
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          3 active projects
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-warning/10 text-warning font-medium">
          2 at risk
        </span>
      </div>
    </div>
  );
}
