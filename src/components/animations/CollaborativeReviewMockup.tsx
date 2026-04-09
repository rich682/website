export default function CollaborativeReviewMockup() {
  const comments = [
    {
      initials: "MT",
      name: "Mike Torres, PM",
      text: "Confirmed cost-to-complete on Project 1042. Labor estimate is accurate.",
      time: "2 hours ago",
      color: "bg-indigo-500/20 text-indigo-400",
      badge: null,
    },
    {
      initials: "SC",
      name: "Sarah Chen, Controller",
      text: "Flagged overbilling on Project 1087 — need to verify with sub.",
      time: "1 hour ago",
      color: "bg-emerald-500/20 text-emerald-400",
      badge: null,
    },
    {
      initials: "JR",
      name: "James Rivera, CFO",
      text: "Approved. Ready to finalize.",
      time: "30 min ago",
      color: "bg-orange-500/20 text-orange-400",
      badge: "Approved",
    },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          WIP Review
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          Draft
        </span>
      </div>

      {/* Comments */}
      <div className="space-y-2 sm:space-y-2.5 flex-1">
        {comments.map((comment) => (
          <div
            key={comment.initials}
            className="p-2 sm:p-2.5 rounded-lg bg-background border border-border"
          >
            {/* Top row: avatar + name + time */}
            <div className="flex items-center gap-2 sm:gap-2.5 mb-1.5">
              {/* Avatar */}
              <div
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center flex-shrink-0 ${comment.color}`}
              >
                <span className="text-[7px] sm:text-[8px] font-medium">
                  {comment.initials}
                </span>
              </div>

              {/* Name */}
              <span className="text-[9px] sm:text-[10px] text-foreground font-medium flex-1 min-w-0 truncate">
                {comment.name}
              </span>

              {/* Time & badge */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="text-[7px] sm:text-[8px] text-foreground-muted">
                  {comment.time}
                </span>
                {comment.badge && (
                  <span className="text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded-full bg-success/10 text-success font-medium">
                    {comment.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Comment text */}
            <p className="text-[8px] sm:text-[9px] text-foreground-muted leading-relaxed ml-8 sm:ml-9">
              {comment.text}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-3 sm:mt-4 pt-3 border-t border-border flex items-center justify-between">
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          2 of 3 approved
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-warning/10 text-warning font-medium">
          1 pending review
        </span>
      </div>
    </div>
  );
}
