import ScrollReveal from "@/components/ScrollReveal";
import AIAgentsMockup from "@/components/animations/AIAgentsMockup";

export default function AIAgentsSection() {
  return (
    <section className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-foreground-muted mb-4">
              AI Agents
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground leading-snug mb-5 tracking-tight">
              Let agents handle the repetitive work
            </h2>
            <p className="text-foreground-secondary leading-relaxed mb-8">
              Configure AI agents to automate reconciliations, generate reports, and process routine tasks. Every output is surfaced for your review before it goes live — your team stays in control.
            </p>
            <ul className="space-y-4">
              {[
                "Build agents tailored to your workflows",
                "Automated execution on your schedule",
                "Human-in-the-loop review & approval",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-highlight-light flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <ScrollReveal>
            <div className="rounded-xl bg-background-secondary border border-border aspect-[4/3] flex items-center justify-center overflow-hidden">
              <AIAgentsMockup />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
