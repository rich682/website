export default function CloseMockup() {
  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-6 sm:mb-8">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Month-End Close
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          April 2026
        </span>
      </div>

      {/* Circular progress */}
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-5 sm:mb-6">
        {/* Background ring */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="var(--border)"
            strokeWidth="6"
          />
          <circle
            className="close-ring"
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="var(--success)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg sm:text-2xl font-medium text-foreground">
            100%
          </span>
          <span className="text-[8px] sm:text-[9px] text-foreground-muted">
            Complete
          </span>
        </div>

        {/* Sparkle dots */}
        <div className="close-sparkle-1 absolute top-0 right-2 w-1.5 h-1.5 rounded-full bg-highlight" />
        <div className="close-sparkle-2 absolute top-3 right-0 w-1 h-1 rounded-full bg-success" />
        <div className="close-sparkle-3 absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-highlight" />
        <div className="close-sparkle-4 absolute top-2 left-0 w-1 h-1 rounded-full bg-success" />
        <div className="close-sparkle-5 absolute bottom-0 right-4 w-1 h-1 rounded-full bg-highlight" />
      </div>

      {/* Status */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] sm:text-xs text-foreground-secondary">
          5 of 5 steps complete
        </span>
        <span className="close-status text-[9px] sm:text-[10px] px-2.5 py-1 rounded-full font-medium">
          Close Complete
        </span>
      </div>
    </div>
  );
}
