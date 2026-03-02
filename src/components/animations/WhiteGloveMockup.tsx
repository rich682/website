import Image from "next/image";

export default function WhiteGloveMockup() {
  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Chat header */}
      <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-border">
        <Image
          src="/images/avatars/sarah.jpg"
          alt="Sarah"
          width={28}
          height={28}
          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <span className="text-[10px] sm:text-xs font-medium text-foreground">
            Sarah - Vergo Account Manager
          </span>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <div className="w-1.5 h-1.5 rounded-full bg-success" />
          <span className="text-[9px] sm:text-[10px] text-foreground-muted">
            Online
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-2.5 sm:space-y-3 overflow-hidden">
        {/* Sarah message 1 */}
        <div className="wg-msg-1 flex justify-start">
          <div className="max-w-[82%] px-2.5 sm:px-3 py-2 rounded-lg rounded-tl-sm bg-background border border-border text-[10px] sm:text-xs text-foreground-secondary leading-relaxed">
            I&apos;ve reviewed your March close. There are 3 AI Agents we can
            build that would save you 20 hours. Would you like to jump on a call
            to discuss?
          </div>
        </div>

        {/* User message */}
        <div className="wg-msg-2 flex justify-end">
          <div className="max-w-[82%] px-2.5 sm:px-3 py-2 rounded-lg rounded-tr-sm bg-accent text-[10px] sm:text-xs text-white leading-relaxed">
            Yes, absolutely! Are you free tomorrow afternoon?
          </div>
        </div>

        {/* Typing indicator */}
        <div className="wg-typing flex justify-start">
          <div className="px-3 py-2.5 rounded-lg rounded-tl-sm bg-background border border-border flex items-center gap-1">
            <div className="wg-dot-1 w-1 h-1 rounded-full bg-foreground-muted" />
            <div className="wg-dot-2 w-1 h-1 rounded-full bg-foreground-muted" />
            <div className="wg-dot-3 w-1 h-1 rounded-full bg-foreground-muted" />
          </div>
        </div>

        {/* Sarah message 3 */}
        <div className="wg-msg-3 flex justify-start">
          <div className="max-w-[82%] px-2.5 sm:px-3 py-2 rounded-lg rounded-tl-sm bg-background border border-border text-[10px] sm:text-xs text-foreground-secondary leading-relaxed">
            Yep - just sent a calendar invite over
          </div>
        </div>
      </div>
    </div>
  );
}
