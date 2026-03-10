export default function CardConnectionsMockup() {
  const cards = [
    { name: "Corporate Visa", last4: "4821", type: "Corporate", cls: "1" },
    { name: "Amex Business", last4: "3092", type: "Business", cls: "2" },
    { name: "Virtual Card", last4: "7156", type: "Virtual", cls: "3" },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Connected Cards
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          3 cards
        </span>
      </div>

      {/* Card rows */}
      <div className="space-y-2.5 sm:space-y-3 flex-1">
        {cards.map((card) => (
          <div
            key={card.name}
            className={`card-conn-row-${card.cls} p-2.5 sm:p-3 rounded-lg bg-background border border-border`}
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Card icon */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-background-tertiary flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>

              {/* Name + last4 */}
              <div className="flex-1 min-w-0">
                <span className="text-[10px] sm:text-xs font-medium text-foreground block truncate">
                  {card.name}
                </span>
                <span className="text-[8px] sm:text-[9px] text-foreground-muted">
                  •••• {card.last4}
                </span>
              </div>

              {/* Sync indicator */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <div
                  className={`card-conn-sync-${card.cls} h-1.5 w-8 sm:w-10 rounded-full bg-background-tertiary overflow-hidden`}
                >
                  <div
                    className={`card-conn-bar-${card.cls} h-full rounded-full bg-success`}
                  />
                </div>
                <span
                  className={`card-conn-status-${card.cls} text-[8px] sm:text-[9px] font-medium`}
                >
                  Synced
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border flex items-center gap-2">
        <div className="card-conn-footer-dot w-1.5 h-1.5 rounded-full bg-success" />
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          All transactions synced in real time
        </span>
      </div>
    </div>
  );
}
