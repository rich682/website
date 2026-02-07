"use client";

import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui";
import { useRef } from "react";

/* ─── Reusable Feature Block ─── */

interface FeatureBlockProps {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  mockup: React.ReactNode;
  reversed?: boolean;
}

function FeatureBlock({ badge, title, description, bullets, mockup, reversed }: FeatureBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Text content */}
      <div className={reversed ? "lg:order-2" : ""}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
            {badge}
          </span>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-lg text-foreground-secondary leading-relaxed mb-6"
        >
          {description}
        </motion.p>

        <ul className="space-y-3">
          {bullets.map((bullet, i) => (
            <motion.li
              key={bullet}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
              className="flex items-start gap-3 text-foreground-secondary"
            >
              <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{bullet}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Mockup */}
      <motion.div
        className={reversed ? "lg:order-1" : ""}
        initial={{ opacity: 0, x: reversed ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {mockup}
      </motion.div>
    </div>
  );
}

/* ─── Mockup Components ─── */

function InboxMockup() {
  const items = [
    { sender: "Sarah M.", class: "Data Received", classBg: "bg-emerald-100 text-emerald-700", action: "Mark Complete", completion: 95 },
    { sender: "John D.", class: "Question", classBg: "bg-blue-100 text-blue-700", action: "Send Follow-up", completion: 30 },
    { sender: "Lisa K.", class: "Complaint", classBg: "bg-red-100 text-red-700", action: "Review Reply", completion: 0 },
    { sender: "Acme Corp", class: "Acknowledgment", classBg: "bg-purple-100 text-purple-700", action: "Review Attachment", completion: 60 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
      <div className="px-5 py-3 border-b border-border bg-background-secondary flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground">Unified Inbox</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-foreground-muted">Filter:</span>
          <span className="px-2 py-0.5 text-[10px] font-medium bg-accent/10 text-accent rounded">Unread</span>
          <span className="px-2 py-0.5 text-[10px] font-medium bg-red-100 text-red-700 rounded">High Risk</span>
        </div>
      </div>
      <div className="divide-y divide-border">
        {items.map((item) => (
          <div key={item.sender} className="px-5 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-semibold flex-shrink-0">
              {item.sender.split(" ").map(n => n[0]).join("")}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground">{item.sender}</div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${item.classBg}`}>{item.class}</span>
                <span className="text-[10px] text-foreground-muted">{item.completion}% complete</span>
              </div>
            </div>
            <button className="px-2.5 py-1 text-[10px] font-medium bg-accent/10 text-accent rounded-lg whitespace-nowrap">
              {item.action}
            </button>
          </div>
        ))}
      </div>
      <div className="px-5 py-2.5 bg-accent/5 border-t border-border">
        <div className="flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
          <span className="text-xs text-foreground-secondary">
            AI generated <span className="font-medium text-accent">2-3 bullet summaries</span> for each reply
          </span>
        </div>
      </div>
    </div>
  );
}

function CompletionRiskMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
      <div className="px-5 py-3 border-b border-border bg-background-secondary">
        <span className="text-sm font-semibold text-foreground">Request Detail</span>
      </div>
      <div className="p-5 space-y-5">
        {/* Completion ring */}
        <div className="flex items-center gap-5">
          <div className="relative w-20 h-20 flex-shrink-0">
            <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="34" fill="none" stroke="#E5E5E5" strokeWidth="6" />
              <circle cx="40" cy="40" r="34" fill="none" stroke="#22C55E" strokeWidth="6" strokeDasharray="166 214" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-foreground">78%</span>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground mb-1">W-9 Collection - Acme Corp</div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-amber-100 text-amber-700">Medium Risk</span>
            </div>
            <p className="text-xs text-foreground-muted mt-1">AI analyzed reply text and 2 attachments</p>
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <div className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wide">Documents Detected</div>
          <div className="space-y-2">
            {[
              { name: "W-9 Form", status: "Received", statusBg: "bg-emerald-100 text-emerald-700" },
              { name: "Certificate of Insurance", status: "Missing", statusBg: "bg-red-100 text-red-700" },
              { name: "Invoice #4021", status: "Received", statusBg: "bg-emerald-100 text-emerald-700" },
            ].map((doc) => (
              <div key={doc.name} className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-foreground-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-foreground">{doc.name}</span>
                </div>
                <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${doc.statusBg}`}>{doc.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <div className="text-xs font-semibold text-amber-800">Risk: Certificate of Insurance missing</div>
              <div className="text-xs text-amber-700 mt-0.5">Client acknowledged but has not yet provided COI. Deadline in 3 days.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RemindersMockup() {
  const reminders = [
    { day: "Day 1", tone: "Friendly", toneColor: "bg-blue-100 text-blue-700", status: "Sent", preview: "Hi Sarah, just a quick reminder about the W-9..." },
    { day: "Day 4", tone: "Polite", toneColor: "bg-purple-100 text-purple-700", status: "Sent", preview: "Following up on our earlier request for the W-9 form..." },
    { day: "Day 7", tone: "Urgent", toneColor: "bg-red-100 text-red-700", status: "Scheduled", preview: "This is time-sensitive — we need the W-9 by Friday..." },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
      <div className="px-5 py-3 border-b border-border bg-background-secondary flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground">Reminder Sequence</span>
        <span className="text-[10px] text-foreground-muted">Every 3 days &middot; Max 3</span>
      </div>
      <div className="p-5 relative">
        {/* Timeline */}
        <div className="absolute left-[29px] top-8 bottom-8 w-0.5 bg-border" />
        <div className="space-y-5">
          {reminders.map((r) => (
            <div key={r.day} className="flex items-start gap-4 relative">
              <div className={`w-3.5 h-3.5 rounded-full flex-shrink-0 mt-1 z-10 ${r.status === "Sent" ? "bg-accent" : "bg-border"}`} />
              <div className="flex-1 bg-background-secondary rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-semibold text-foreground">{r.day}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${r.toneColor}`}>{r.tone}</span>
                  <span className={`ml-auto text-[10px] font-medium ${r.status === "Sent" ? "text-emerald-600" : "text-foreground-muted"}`}>{r.status}</span>
                </div>
                <p className="text-xs text-foreground-secondary italic">&ldquo;{r.preview}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 py-2.5 bg-accent/5 border-t border-border flex items-center gap-2">
        <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
        <span className="text-xs text-foreground-secondary">Each reminder is <span className="font-medium text-accent">unique and AI-generated</span></span>
      </div>
    </div>
  );
}

function BoardsMockup() {
  const columns = [
    {
      title: "Not Started",
      count: 3,
      tasks: [
        { name: "AP Reconciliation", assignee: "MJ" },
        { name: "Vendor Payments", assignee: "SK" },
      ],
    },
    {
      title: "In Progress",
      count: 2,
      tasks: [
        { name: "Revenue Recognition", assignee: "SC" },
        { name: "Bank Reconciliation", assignee: "LM" },
      ],
    },
    {
      title: "Complete",
      count: 5,
      tasks: [
        { name: "Expense Reports", assignee: "TK" },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
      <div className="px-5 py-3 border-b border-border bg-background-secondary flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">March 2026 Close</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-700">Monthly</span>
        </div>
        <span className="text-xs text-foreground-muted">10 tasks</span>
      </div>
      <div className="p-4 flex gap-3 overflow-x-auto">
        {columns.map((col) => (
          <div key={col.title} className="flex-1 min-w-[140px]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-foreground-secondary uppercase tracking-wide">{col.title}</span>
              <span className="text-[10px] text-foreground-muted">{col.count}</span>
            </div>
            <div className="space-y-2">
              {col.tasks.map((task) => (
                <div key={task.name} className="bg-background-secondary rounded-lg p-2.5 border border-border">
                  <div className="text-xs font-medium text-foreground mb-1.5">{task.name}</div>
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-[9px] text-accent font-semibold">
                    {task.assignee}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 py-2.5 bg-accent/5 border-t border-border flex items-center gap-2">
        <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
        <span className="text-xs text-foreground-secondary">AI summary: <span className="font-medium text-accent">50% complete, 1 blocked task needs attention</span></span>
      </div>
    </div>
  );
}

function FormsMockup() {
  const fields = [
    { type: "Text", label: "Company Name", icon: "Aa" },
    { type: "Currency", label: "Total Revenue", icon: "$" },
    { type: "Date", label: "Period End Date", icon: "D" },
    { type: "File Upload", label: "Supporting Documents", icon: "^" },
    { type: "Dropdown", label: "Entity Type", icon: "v" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
      <div className="px-5 py-3 border-b border-border bg-background-secondary flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground">Form Builder</span>
        <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-700">No login required</span>
      </div>
      <div className="p-5 space-y-3">
        {fields.map((field) => (
          <div key={field.label} className="flex items-center gap-3 p-3 rounded-lg border border-border border-dashed bg-background-secondary/50">
            <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center text-accent text-xs font-bold flex-shrink-0">
              {field.icon}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">{field.label}</div>
              <div className="text-[10px] text-foreground-muted">{field.type}</div>
            </div>
            <svg className="w-4 h-4 text-foreground-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          </div>
        ))}
      </div>
      <div className="px-5 py-3 bg-background-secondary border-t border-border">
        <div className="flex items-center gap-3">
          <div className="text-xs text-foreground-muted">Submissions:</div>
          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-700">12 Submitted</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-amber-100 text-amber-700">3 Pending</span>
        </div>
      </div>
    </div>
  );
}

function ReportsMockup() {
  const rows = [
    { label: "Revenue", jan: "$145,200", feb: "$152,800", mar: "$148,500", trend: "up" },
    { label: "Expenses", jan: "$89,100", feb: "$92,400", mar: "$87,600", trend: "down" },
    { label: "Net Income", jan: "$56,100", feb: "$60,400", mar: "$60,900", trend: "up" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
      <div className="px-5 py-3 border-b border-border bg-background-secondary flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground">Q1 2026 Report</span>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-700">Quarterly</span>
          <button className="text-[10px] font-medium text-foreground-muted hover:text-foreground">Export</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-5 py-2.5 text-foreground-muted font-medium">Category</th>
              <th className="text-right px-3 py-2.5 text-foreground-muted font-medium">Jan</th>
              <th className="text-right px-3 py-2.5 text-foreground-muted font-medium">Feb</th>
              <th className="text-right px-3 py-2.5 text-foreground-muted font-medium">Mar</th>
              <th className="text-right px-5 py-2.5 text-foreground-muted font-medium">Trend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row) => (
              <tr key={row.label}>
                <td className="px-5 py-3 font-medium text-foreground">{row.label}</td>
                <td className="text-right px-3 py-3 text-foreground-secondary">{row.jan}</td>
                <td className="text-right px-3 py-3 text-foreground-secondary">{row.feb}</td>
                <td className="text-right px-3 py-3 text-foreground-secondary">{row.mar}</td>
                <td className="text-right px-5 py-3">
                  {row.trend === "up" ? (
                    <span className="text-emerald-600 font-medium flex items-center justify-end gap-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                    </span>
                  ) : (
                    <span className="text-emerald-600 font-medium flex items-center justify-end gap-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-5 py-2.5 bg-accent/5 border-t border-border flex items-center gap-2">
        <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
        <span className="text-xs text-foreground-secondary">AI insight: <span className="font-medium text-accent">Expenses trending 3% below budget</span></span>
      </div>
    </div>
  );
}

/* ─── Feature Data ─── */

const features: FeatureBlockProps[] = [
  {
    badge: "AI-Powered Inbox",
    title: "One inbox for everything.",
    description: "All client replies flow into a unified inbox with AI-suggested actions. At a glance, see who replied, what is complete, what needs follow-up, and let AI handle the obvious ones.",
    bullets: [
      "AI classifies every reply: Data Received, Question, Complaint, Acknowledgment, Bounce, Out-of-Office",
      "AI generates 2-3 bullet point summaries so you can scan replies in seconds",
      "AI-suggested actions: Mark Complete, Send Follow-up, Review Attachment",
      "Bulk-accept AI suggestions for items at 90%+ completion",
      "Filter by read status and risk level",
    ],
    mockup: <InboxMockup />,
    reversed: false,
  },
  {
    badge: "Smart Completion & Risk",
    title: "AI reads every reply so you don't have to.",
    description: "Vergo's AI determines a 0-100% completion score for every request, analyzes attachments, detects document types, and assesses risk -- all automatically.",
    bullets: [
      "0-100% completion scores based on what was asked vs. what was received",
      "Analyzes reply text AND attachment contents (PDFs, Excel, CSV, images)",
      "Detects specific document types: W-9s, COIs, invoices, timesheets, receipts",
      "Risk levels (High, Medium, Low) with reasons on hover",
      "Identifies missing items and tells you exactly what is still needed",
    ],
    mockup: <CompletionRiskMockup />,
    reversed: true,
  },
  {
    badge: "Automated Reminders & AI Drafts",
    title: "Never chase a client again.",
    description: "Set up automatic follow-up sequences that escalate in urgency. AI generates unique, personalized reminder emails that sound human -- not robotic templates.",
    bullets: [
      "Configure start delay, frequency, and max reminders (1-5) per request",
      "AI generates unique, personalized reminders each time",
      "Tone escalates automatically: friendly, then polite, then urgent",
      "Reminders auto-stop when the client replies or the deadline passes",
      "One-click AI draft replies using full conversation context",
    ],
    mockup: <RemindersMockup />,
    reversed: false,
  },
  {
    badge: "Board & Task Management",
    title: "Period-based organization built for accounting.",
    description: "Organize work into boards by time period -- Monthly Close, Quarterly Review, Year-End -- with tasks that recur automatically. Built specifically for the rhythms of accounting work.",
    bullets: [
      "Create boards for any cadence: Daily, Weekly, Monthly, Quarterly, Year-End, Ad Hoc",
      "Task statuses: Not Started, In Progress, Complete, Blocked",
      "AI-powered bulk task creation from natural language",
      "Kanban view for visual task management",
      "Board-level AI summaries: progress, risks, and recommendations",
    ],
    mockup: <BoardsMockup />,
    reversed: true,
  },
  {
    badge: "Forms & Document Collection",
    title: "Structured data collection, zero friction.",
    description: "Go beyond email -- send custom forms that clients fill out without creating an account. Documents from email replies, form submissions, and manual uploads are all tracked in one place.",
    bullets: [
      "Drag-and-drop form builder with Text, Number, Currency, Date, Dropdown, Checkbox, File Upload fields",
      "Clients fill out forms via secure token links -- no Vergo account needed",
      "Form responses automatically stored in linked databases",
      "Track documents by source: Email Reply, Form Submission, Manual Upload",
      "Review and approve or reject collected documents with bulk download",
    ],
    mockup: <FormsMockup />,
    reversed: false,
  },
  {
    badge: "Databases & Reports",
    title: "From raw data to actionable insights.",
    description: "Create structured databases with defined schemas, import from Excel, and generate reports with formulas, period comparisons, and AI-powered insights.",
    bullets: [
      "Structured databases with Text, Number, Date, Boolean, Currency, Dropdown columns",
      "Import from Excel, export to Excel, with automatic deduplication",
      "Report templates with standard or pivot table layouts",
      "Period-based reports with month-over-month and year-over-year comparisons",
      "AI-powered insights: trends, anomalies, and recommendations",
    ],
    mockup: <ReportsMockup />,
    reversed: true,
  },
];

/* ─── Main Component ─── */

export function FeaturesShowcase() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <Container size="wide">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4"
          >
            Everything you need, in one platform.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-secondary max-w-2xl mx-auto"
          >
            Requests, replies, documents, forms, databases, and reports -- all connected. No more hunting through email threads.
          </motion.p>
        </div>

        {/* Feature blocks */}
        <div className="space-y-24 lg:space-y-32">
          {features.map((feature) => (
            <FeatureBlock key={feature.badge} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
