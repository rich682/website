import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colors } from "../styles";
import {
  DashboardLayout,
  AnimatedCursor,
  TypewriterText,
  StatusBadge,
  type CursorKeyframe,
} from "../helpers";

const initialTasks = [
  { name: "Revenue Recognition", status: "complete" as const, owner: "JL", due: "Apr 2", dept: "Accounting", deps: "—" },
  { name: "AP Reconciliation", status: "complete" as const, owner: "SK", due: "Apr 3", dept: "Accounting", deps: "#1" },
  { name: "Bank Reconciliation", status: "in-progress" as const, owner: "MT", due: "Apr 4", dept: "Treasury", deps: "—" },
];

const laterTasks = [
  { name: "Accruals & Prepayments", status: "pending" as const, owner: "RK", due: "Apr 5", dept: "Accounting", deps: "#3" },
  { name: "Fixed Assets Roll-Forward", status: "pending" as const, owner: "JL", due: "Apr 5", dept: "Accounting", deps: "—" },
  { name: "Payroll Reconciliation", status: "pending" as const, owner: "SK", due: "Apr 6", dept: "HR/Finance", deps: "—" },
  { name: "Tax Provision Estimate", status: "pending" as const, owner: "MT", due: "Apr 7", dept: "Tax", deps: "#1-#6" },
];

const columns = ["#", "Task", "Status", "Assignee", "Due", "Department", "Deps"];
const colWidths = ["5%", "28%", "14%", "10%", "9%", "14%", "10%"];

const cursorKeyframes: CursorKeyframe[] = [
  { x: 1600, y: 130, frame: 15 },           // Start near "+ Add Task"
  { x: 1650, y: 115, frame: 35, click: true }, // Click add task
  { x: 480, y: 310, frame: 55 },              // Move to name field row 4
  { x: 480, y: 310, frame: 60, click: true },  // Click name field
  // Typing happens frame 62-90
  { x: 850, y: 310, frame: 95 },              // Move to assignee
  { x: 850, y: 310, frame: 100, click: true }, // Click assignee
  { x: 850, y: 345, frame: 110, click: true }, // Select "DP"
  { x: 970, y: 310, frame: 120 },              // Move to due date
  { x: 970, y: 310, frame: 125, click: true }, // Click due date
  { x: 750, y: 265, frame: 150 },              // Move to row 3 status
  { x: 750, y: 265, frame: 160, click: true }, // Click to complete row 3
  { x: 900, y: 400, frame: 200 },              // Drift to watch rows appear
  { x: 800, y: 500, frame: 260 },              // Watch remaining tasks
];

export const TasksScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneOpacity = Math.min(
    interpolate(frame, [0, 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [270, 300], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );

  // Row 4 (new task) appears after click at frame 35
  const newRowVisible = frame > 40;
  const newRowOpacity = spring({ frame: frame - 40, fps, config: { damping: 20, stiffness: 100, mass: 0.5 } });

  // Row 3 status flips to complete at frame 160
  const row3Complete = frame > 165;

  // Later tasks appear at frame 170+
  const laterTasksVisible = frame > 170;

  // Progress counter
  const completedCount = row3Complete
    ? (laterTasksVisible ? 4 : 4)
    : (newRowVisible ? 3 : 3);

  const totalCount = laterTasksVisible ? 8 : (newRowVisible ? 4 : 3);

  return (
    <div style={{ opacity: sceneOpacity }}>
      <DashboardLayout activeIndex={0} breadcrumb="Close Management › April 2026 › Checklist">
        <div style={{ padding: "20px 28px", height: "100%", display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontSize: 18, fontWeight: 600, color: colors.textPrimary }}>Close Checklist</span>
              <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, backgroundColor: "rgba(255,255,255,0.06)", color: colors.textMuted }}>
                {totalCount} tasks
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* Progress bar */}
              <div style={{ width: 120, height: 4, borderRadius: 2, backgroundColor: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                <div style={{ width: `${(completedCount / totalCount) * 100}%`, height: "100%", borderRadius: 2, backgroundColor: colors.success, transition: "width 0.3s" }} />
              </div>
              <span style={{ fontSize: 12, color: colors.textMuted }}>{completedCount} of {totalCount}</span>
              {/* Add Task button */}
              <div style={{
                padding: "6px 14px",
                borderRadius: 6,
                backgroundColor: colors.highlight,
                color: "white",
                fontSize: 12,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}>
                <span>+</span> Add Task
              </div>
            </div>
          </div>

          {/* Table */}
          <div style={{ flex: 1, borderRadius: 10, border: `1px solid ${colors.border}`, overflow: "hidden" }}>
            {/* Header row */}
            <div style={{
              display: "flex",
              backgroundColor: "rgba(255,255,255,0.02)",
              borderBottom: `1px solid ${colors.border}`,
              padding: "10px 16px",
            }}>
              {columns.map((col, i) => (
                <div key={col} style={{ width: colWidths[i], fontSize: 11, fontWeight: 500, color: colors.textMuted, textTransform: "uppercase", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: 4 }}>
                  {col}
                  {i > 0 && i < 4 && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2"><path d="M7 15l5 5 5-5M7 9l5-5 5 5" /></svg>
                  )}
                </div>
              ))}
            </div>

            {/* Initial task rows */}
            {initialTasks.map((task, i) => {
              const rowDelay = 5 + i * 6;
              const rowOpacity = interpolate(frame, [rowDelay, rowDelay + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

              const isRow3 = i === 2;
              const currentStatus = isRow3 && row3Complete ? "complete" : task.status;

              return (
                <div key={task.name} style={{
                  display: "flex",
                  padding: "12px 16px",
                  borderBottom: `1px solid ${colors.border}`,
                  opacity: rowOpacity,
                  backgroundColor: isRow3 && frame > 155 && frame < 175 ? "rgba(90, 122, 100, 0.05)" : "transparent",
                }}>
                  <div style={{ width: colWidths[0], fontSize: 12, color: colors.textMuted }}>{i + 1}</div>
                  <div style={{ width: colWidths[1], fontSize: 13, color: colors.textPrimary, fontWeight: 400 }}>{task.name}</div>
                  <div style={{ width: colWidths[2] }}><StatusBadge status={currentStatus} /></div>
                  <div style={{ width: colWidths[3] }}>
                    <div style={{ width: 26, height: 26, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 9, fontWeight: 500, color: colors.textMuted }}>{task.owner}</span>
                    </div>
                  </div>
                  <div style={{ width: colWidths[4], fontSize: 12, color: colors.textMuted }}>{task.due}</div>
                  <div style={{ width: colWidths[5], fontSize: 12, color: colors.textMuted }}>{task.dept}</div>
                  <div style={{ width: colWidths[6], fontSize: 12, color: colors.textMuted }}>{task.deps}</div>
                </div>
              );
            })}

            {/* New task row (row 4) */}
            {newRowVisible && (
              <div style={{
                display: "flex",
                padding: "12px 16px",
                borderBottom: `1px solid ${colors.border}`,
                opacity: newRowOpacity,
                transform: `translateY(${interpolate(newRowOpacity, [0, 1], [8, 0])}px)`,
                backgroundColor: frame < 140 ? "rgba(166, 124, 82, 0.03)" : "transparent",
              }}>
                <div style={{ width: colWidths[0], fontSize: 12, color: colors.textMuted }}>4</div>
                <div style={{ width: colWidths[1], fontSize: 13, color: colors.textPrimary }}>
                  <TypewriterText text="Intercompany Eliminations" startFrame={62} charsPerFrame={0.8} style={{ color: colors.textPrimary }} />
                  {frame >= 62 && frame < 95 && (
                    <span style={{ borderRight: "2px solid white", marginLeft: 1, animation: "blink 0.5s infinite" }} />
                  )}
                </div>
                <div style={{ width: colWidths[2] }}>
                  {frame > 130 ? <StatusBadge status="in-progress" /> : <StatusBadge status="pending" />}
                </div>
                <div style={{ width: colWidths[3] }}>
                  {frame > 110 && (
                    <div style={{ width: 26, height: 26, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 9, fontWeight: 500, color: colors.textMuted }}>DP</span>
                    </div>
                  )}
                </div>
                <div style={{ width: colWidths[4], fontSize: 12, color: colors.textMuted }}>
                  {frame > 125 ? "Apr 4" : ""}
                </div>
                <div style={{ width: colWidths[5], fontSize: 12, color: colors.textMuted }}>
                  {frame > 130 ? "Accounting" : ""}
                </div>
                <div style={{ width: colWidths[6], fontSize: 12, color: colors.textMuted }}>
                  {frame > 130 ? "#1, #2" : ""}
                </div>
              </div>
            )}

            {/* Later tasks (rows 5-8) cascade in */}
            {laterTasksVisible && laterTasks.map((task, i) => {
              const rowDelay = 175 + i * 10;
              const rowSpring = spring({ frame: frame - rowDelay, fps, config: { damping: 18, stiffness: 100, mass: 0.5 } });

              return (
                <div key={task.name} style={{
                  display: "flex",
                  padding: "12px 16px",
                  borderBottom: `1px solid ${colors.border}`,
                  opacity: rowSpring,
                  transform: `translateY(${interpolate(rowSpring, [0, 1], [10, 0])}px)`,
                }}>
                  <div style={{ width: colWidths[0], fontSize: 12, color: colors.textMuted }}>{i + 5}</div>
                  <div style={{ width: colWidths[1], fontSize: 13, color: colors.textPrimary }}>{task.name}</div>
                  <div style={{ width: colWidths[2] }}><StatusBadge status={task.status} /></div>
                  <div style={{ width: colWidths[3] }}>
                    <div style={{ width: 26, height: 26, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 9, fontWeight: 500, color: colors.textMuted }}>{task.owner}</span>
                    </div>
                  </div>
                  <div style={{ width: colWidths[4], fontSize: 12, color: colors.textMuted }}>{task.due}</div>
                  <div style={{ width: colWidths[5], fontSize: 12, color: colors.textMuted }}>{task.dept}</div>
                  <div style={{ width: colWidths[6], fontSize: 12, color: colors.textMuted }}>{task.deps}</div>
                </div>
              );
            })}
          </div>
        </div>

        <AnimatedCursor keyframes={cursorKeyframes} />
      </DashboardLayout>
    </div>
  );
};
