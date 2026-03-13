export default function CollaborationMockup() {
  const comments = [
    {
      initials: "SM",
      name: "Sarah M.",
      color: "#6366F1",
      text: "Accruals tied out — ready for review",
      time: "2m ago",
      cls: "1",
    },
    {
      initials: "JR",
      name: "James R.",
      color: "#F59E0B",
      text: "Confirmed, numbers match the GL. Approved ✓",
      time: "1m ago",
      cls: "2",
    },
    {
      initials: "KL",
      name: "Kate L.",
      color: "#22C55E",
      text: "Posting to final — closing this task",
      time: "Just now",
      cls: "3",
    },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Task header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-[var(--highlight)] flex items-center justify-center">
            <svg
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
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
          </div>
          <span className="text-[11px] sm:text-xs font-semibold text-foreground">
            Accruals Review
          </span>
        </div>
        <span className="text-[8px] sm:text-[9px] px-2 py-0.5 rounded-full bg-[var(--highlight)]/10 text-[var(--highlight)] font-medium">
          In Review
        </span>
      </div>

      {/* Assignees row */}
      <div className="flex items-center gap-1.5 mb-3 sm:mb-4">
        <div className="flex -space-x-1.5">
          {[
            { initials: "SM", color: "#6366F1" },
            { initials: "JR", color: "#F59E0B" },
            { initials: "KL", color: "#22C55E" },
          ].map((person) => (
            <div
              key={person.initials}
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[var(--background,#fff)] flex items-center justify-center text-[6px] sm:text-[7px] font-bold text-white"
              style={{ backgroundColor: person.color }}
            >
              {person.initials}
            </div>
          ))}
        </div>
        <span className="text-[9px] sm:text-[10px] text-foreground-muted ml-1">
          3 collaborators
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-border mb-3 sm:mb-4" />

      {/* Comments thread */}
      <div className="space-y-2.5 sm:space-y-3 flex-1">
        {comments.map((comment) => (
          <div
            key={comment.cls}
            className={`collab-comment-${comment.cls} flex gap-2 sm:gap-2.5`}
          >
            <div
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[6px] sm:text-[7px] font-bold text-white flex-shrink-0 mt-0.5"
              style={{ backgroundColor: comment.color }}
            >
              {comment.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[10px] sm:text-[11px] font-semibold text-foreground">
                  {comment.name}
                </span>
                <span className="text-[8px] sm:text-[9px] text-foreground-muted">
                  {comment.time}
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-foreground-muted leading-relaxed">
                {comment.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Reply input */}
      <div className="mt-3 sm:mt-4 flex items-center gap-2 rounded-lg border border-border bg-background-secondary px-3 py-2">
        <div
          className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[6px] sm:text-[7px] font-bold text-white flex-shrink-0"
          style={{ backgroundColor: "#6366F1" }}
        >
          SM
        </div>
        <span className="collab-typing text-[9px] sm:text-[10px] text-foreground-muted">
          Add a comment...
        </span>
      </div>
    </div>
  );
}
