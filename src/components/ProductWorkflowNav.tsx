"use client";

import { useEffect, useState, useCallback } from "react";

interface WorkflowStep {
  number: string;
  category: string;
  sectionId: string;
}

export default function ProductWorkflowNav({ steps }: { steps: WorkflowStep[] }) {
  const [activeStep, setActiveStep] = useState(0);

  const handleClick = useCallback((index: number, sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navHeight = 170; // account for fixed header (88px) + sticky workflow nav (~82px)
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const sectionEls = steps.map((s) => document.getElementById(s.sectionId));

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one closest to the top of the viewport
          const sorted = visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          const id = sorted[0].target.id;
          const idx = steps.findIndex((s) => s.sectionId === id);
          if (idx !== -1) setActiveStep(idx);
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sectionEls.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [steps]);

  return (
    <section className="border-y border-border bg-background-secondary sticky top-[88px] z-30">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center">
          {steps.map((s, idx) => {
            const isActive = idx === activeStep;
            const isCompleted = idx < activeStep;

            return (
              <div key={s.number} className="flex items-center flex-1 last:flex-initial">
                {/* Step button */}
                <button
                  onClick={() => handleClick(idx, s.sectionId)}
                  className={`group flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-background shadow-sm"
                      : "hover:bg-background/60"
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-accent text-black"
                        : isCompleted
                        ? "bg-success text-white"
                        : "bg-border text-foreground-muted"
                    }`}
                  >
                    {isCompleted ? (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      s.number
                    )}
                  </span>
                  <span
                    className={`text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                      isActive
                        ? "text-foreground"
                        : "text-foreground-muted group-hover:text-foreground"
                    }`}
                  >
                    {s.category}
                  </span>
                </button>

                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="flex-1 mx-2 hidden lg:block">
                    <div className="h-[2px] bg-border rounded-full relative overflow-hidden">
                      <div
                        className={`absolute inset-0 rounded-full transition-transform duration-500 ease-out origin-left ${
                          idx < activeStep
                            ? "bg-success scale-x-100"
                            : "bg-border scale-x-0"
                        }`}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
