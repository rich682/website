export default function AIAnalyzeMockup() {
  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-highlight/10 flex items-center justify-center">
            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
          <span className="text-[11px] sm:text-xs font-medium text-foreground">
            Vergo AI
          </span>
        </div>
        <span className="text-[8px] sm:text-[9px] px-2 py-0.5 rounded-full bg-success/10 text-success font-medium">
          Online
        </span>
      </div>

      {/* Chat messages */}
      <div className="space-y-3 sm:space-y-4 flex-1">
        {/* User question */}
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-xl rounded-br-sm bg-highlight/10 px-3 py-2 sm:px-3.5 sm:py-2.5">
            <p className="text-[10px] sm:text-xs text-foreground leading-relaxed">
              Which accounts are trending out of budget?
            </p>
          </div>
        </div>

        {/* AI response */}
        <div className="flex justify-start">
          <div className="max-w-[90%] rounded-xl rounded-bl-sm bg-background border border-border px-3 py-2.5 sm:px-3.5 sm:py-3">
            <p className="text-[10px] sm:text-xs text-foreground leading-relaxed mb-2.5">
              I found 2 accounts with declining performance over the last 3 months:
            </p>

            {/* Result cards */}
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-md bg-background-secondary">
                <div className="w-1.5 h-1.5 rounded-full bg-error flex-shrink-0" />
                <span className="text-[9px] sm:text-[10px] text-foreground font-medium flex-1">Project 1087</span>
                <span className="text-[8px] sm:text-[9px] text-error font-medium">18% → 12%</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-md bg-background-secondary">
                <div className="w-1.5 h-1.5 rounded-full bg-warning flex-shrink-0" />
                <span className="text-[9px] sm:text-[10px] text-foreground font-medium flex-1">Project 1103</span>
                <span className="text-[8px] sm:text-[9px] text-warning font-medium">14% → 9%</span>
              </div>
            </div>

            <p className="text-[9px] sm:text-[10px] text-foreground-muted mt-2.5 leading-relaxed">
              Both are driven by rising operating costs. Account 1087 has $42K in unapproved spend.
            </p>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="mt-3 sm:mt-4 flex items-center gap-2 p-2 sm:p-2.5 rounded-lg bg-background border border-border">
        <span className="text-[9px] sm:text-[10px] text-foreground-muted flex-1">
          Ask about your financial data...
        </span>
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-highlight flex items-center justify-center flex-shrink-0">
          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
          </svg>
        </div>
      </div>
    </div>
  );
}
