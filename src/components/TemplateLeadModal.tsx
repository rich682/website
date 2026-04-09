"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type ModalState = "idle" | "submitting" | "success" | "error";

interface Props {
  templateSlug: string;
  templateTitle: string;
  hasDownload: boolean;
  onClose: () => void;
}

export default function TemplateLeadModal({
  templateSlug,
  templateTitle,
  hasDownload,
  onClose,
}: Props) {
  const [state, setState] = useState<ModalState>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fieldError, setFieldError] = useState<string | null>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Check localStorage for returning visitor
  useEffect(() => {
    const saved = localStorage.getItem("vergo_lead_email");
    if (saved) {
      setEmail(saved);
      setState("success");
    }
  }, []);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Focus first input on open
  useEffect(() => {
    if (state === "idle") {
      setTimeout(() => firstInputRef.current?.focus(), 50);
    }
  }, [state]);

  // Escape to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Focus trap
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const focusable = panel.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    panel.addEventListener("keydown", trap);
    return () => panel.removeEventListener("keydown", trap);
  }, [state]);

  const validate = () => {
    if (!name.trim()) return "Please enter your name.";
    if (!email.trim()) return "Please enter your work email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Please enter a valid email address.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setFieldError(err);
      return;
    }
    setFieldError(null);
    setState("submitting");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          templateSlug,
          templateTitle,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }
      localStorage.setItem("vergo_lead_email", email.trim());
      setState("success");
    } catch {
      setState("error");
    }
  };

  const displayTitle = /template/i.test(templateTitle)
    ? templateTitle
    : `${templateTitle} Template`;

  const modal = (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center px-4"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        aria-modal="true"
        role="dialog"
        aria-label={`Download ${displayTitle}`}
      >
        <motion.div
          key="panel"
          ref={panelRef}
          initial={{ opacity: 0, scale: 0.95, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 8 }}
          transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
          onMouseDown={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-[#999] hover:text-[#111] hover:bg-[#F3F3F3] transition-colors duration-200"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {state === "success" ? (
            /* ── Success state ── */
            <div className="text-center py-4">
              <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-[rgba(99,102,241,0.08)] flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-[#6366F1]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-[#111]">
                Your template is ready
              </h2>
              <p className="mt-2 text-sm text-[#666]">
                Download the {displayTitle} below.
              </p>
              <div className="mt-6">
                {hasDownload ? (
                  <a
                    href={`/downloads/${templateSlug}.xlsx`}
                    download
                    className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#111] px-7 py-3 text-sm font-semibold text-white hover:bg-[#333] transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download Excel Template
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#E5E7EB] px-7 py-3 text-sm font-semibold text-[#999] cursor-not-allowed"
                    title="Download coming soon"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download Coming Soon
                  </button>
                )}
              </div>
              <p className="mt-4 text-xs text-[#999]">
                Want automation, not just a spreadsheet?{" "}
                <Link
                  href="/demo"
                  className="text-[#6366F1] hover:underline"
                >
                  Book a Demo →
                </Link>
              </p>
            </div>
          ) : (
            /* ── Form state ── */
            <>
              <h2 className="text-xl font-bold text-[#111] pr-8">
                Download the {displayTitle}
              </h2>
              <p className="mt-1 text-sm text-[#666]">
                Free to use — no credit card required.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                <div>
                  <label
                    htmlFor="modal-name"
                    className="block text-sm font-medium text-[#111] mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="modal-name"
                    ref={firstInputRef}
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setFieldError(null);
                    }}
                    disabled={state === "submitting"}
                    className="w-full rounded-lg border border-[#E5E7EB] px-4 py-3 text-sm text-[#111] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent disabled:opacity-50"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="modal-email"
                    className="block text-sm font-medium text-[#111] mb-1.5"
                  >
                    Work Email
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    placeholder="Your Work Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setFieldError(null);
                    }}
                    disabled={state === "submitting"}
                    className="w-full rounded-lg border border-[#E5E7EB] px-4 py-3 text-sm text-[#111] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent disabled:opacity-50"
                    autoComplete="work email"
                  />
                </div>

                {fieldError && (
                  <p className="text-xs text-[#A65D57]">{fieldError}</p>
                )}

                {state === "error" && (
                  <p className="text-xs text-[#A65D57]">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="w-full rounded-full bg-[#111] px-7 py-3 text-sm font-semibold text-white hover:bg-[#333] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {state === "submitting" ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Submitting…
                    </>
                  ) : (
                    "Get Started"
                  )}
                </button>
              </form>

              <p className="mt-4 text-xs text-[#999] text-center">
                By submitting, you agree to our{" "}
                <a
                  href="/privacy"
                  className="underline hover:text-[#666]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy policy
                </a>
                .
              </p>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  if (typeof document === "undefined") return null;
  return createPortal(modal, document.body);
}
