export default function AgentSetupMockup() {
  const agents = [
    { name: "Stakeholder Requests", cls: "1" },
    { name: "Reconciliations", cls: "2" },
    { name: "Reports", cls: "3" },
    { name: "Data Analysis", cls: "4" },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-5 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Active Agents
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          4 agents
        </span>
      </div>

      {/* Agent rows */}
      <div className="space-y-2 sm:space-y-2.5 flex-1">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className={`toggle-glow-${agent.cls} flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-lg bg-background border border-border`}
          >
            {/* Dot */}
            <div className="w-2 h-2 rounded-full bg-highlight flex-shrink-0" />

            {/* Name */}
            <span className="text-[10px] sm:text-[11px] font-medium text-foreground flex-1 truncate">
              {agent.name}
            </span>

            {/* Toggle switch */}
            <div
              className={`toggle-${agent.cls} relative w-8 h-[18px] rounded-full flex-shrink-0 transition-colors`}
            >
              <div
                className={`toggle-knob-${agent.cls} absolute top-[2px] left-[2px] w-[14px] h-[14px] rounded-full bg-white shadow-sm`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          All agents configured
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-success/10 text-success font-medium">
          Ready
        </span>
      </div>
    </div>
  );
}
