export default function ConnectMockup() {
  const integrations = [
    { name: "QuickBooks", icon: "QB", cls: "1" },
    { name: "Xero", icon: "XE", cls: "2" },
    { name: "SAP", icon: "SAP", cls: "3" },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Integrations
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          3 connected
        </span>
      </div>

      {/* Integration rows */}
      <div className="space-y-2.5 sm:space-y-3 flex-1">
        {integrations.map((int) => (
          <div
            key={int.name}
            className="p-2.5 sm:p-3 rounded-lg bg-background border border-border"
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Icon */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-background-tertiary flex items-center justify-center flex-shrink-0">
                <span className="text-[8px] sm:text-[9px] font-bold text-foreground-muted">
                  {int.icon}
                </span>
              </div>

              {/* Name + connection line */}
              <div className="flex-1 min-w-0">
                <span className="text-[10px] sm:text-xs font-medium text-foreground">
                  {int.name}
                </span>
                <div className="mt-1.5 h-[2px] rounded-full bg-background-tertiary overflow-hidden">
                  <div
                    className={`connect-line-${int.cls} h-full rounded-full bg-success`}
                  />
                </div>
              </div>

              {/* Status */}
              <span
                className={`connect-status-${int.cls} text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 rounded-full font-medium flex-shrink-0`}
              >
                Connected
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border">
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          All systems synced
        </span>
      </div>
    </div>
  );
}
