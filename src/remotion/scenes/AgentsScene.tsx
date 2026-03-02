import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colors } from "../styles";
import { DashboardLayout, AnimatedCursor, StatusBadge, type CursorKeyframe } from "../helpers";

const agents = [
  { name: "Stakeholder Requests", tasks: 12, icon: "📨" },
  { name: "Reconciliations", tasks: 847, icon: "🔄" },
  { name: "Reports", tasks: 3, icon: "📊" },
  { name: "Data Analysis", tasks: 2, icon: "🔍" },
];

const activityFeed = [
  { time: "10:42", agent: "Reconciliations", action: "Matched 847 of 850 transactions", status: "complete" as const },
  { time: "10:41", agent: "Stakeholder Requests", action: "Sent reminder to J. Smith — AP Invoice", status: "sent" as const },
  { time: "10:40", agent: "Reports", action: "Generated Monthly P&L Report", status: "complete" as const },
  { time: "10:39", agent: "Data Analysis", action: "Flagged $12.4k variance in COGS", status: "review" as const },
  { time: "10:38", agent: "Reconciliations", action: "Started bank reconciliation", status: "in-progress" as const },
  { time: "10:37", agent: "Stakeholder Requests", action: "Received GL export from Finance", status: "received" as const },
  { time: "10:36", agent: "Reports", action: "Scheduled quarterly board deck", status: "queued" as const },
];

const cursorKeyframes: CursorKeyframe[] = [
  { x: 400, y: 180, frame: 20 },              // Near Reconciliations card
  { x: 400, y: 180, frame: 35, click: true },  // Click Reconciliations
  { x: 200, y: 180, frame: 65 },               // Move to Stakeholder Requests
  { x: 200, y: 180, frame: 75, click: true },   // Click
  { x: 800, y: 400, frame: 120 },               // Move to activity feed
  { x: 800, y: 430, frame: 150 },               // Hover review row
  { x: 800, y: 430, frame: 165, click: true },  // Click to inspect
  { x: 600, y: 500, frame: 200 },               // Drift down
  { x: 700, y: 350, frame: 260 },               // Watch feed
];

export const AgentsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneOpacity = Math.min(
    interpolate(frame, [0, 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [270, 300], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );

  // Which agent card is "active" (clicked)
  const activeAgent = frame < 35 ? -1 : frame < 75 ? 1 : frame < 260 ? 0 : -1;

  // Feed rows appear staggered
  const feedStartFrame = 45;

  // Hovered feed row
  const hoveredFeed = frame >= 145 && frame < 175 ? 3 : -1; // "Review" row

  return (
    <div style={{ opacity: sceneOpacity }}>
      <DashboardLayout activeIndex={2} breadcrumb="Close Management › April 2026 › Agents">
        <div style={{ padding: "20px 28px", height: "100%", display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <span style={{ fontSize: 18, fontWeight: 600, color: colors.textPrimary }}>Agent Activity</span>
            <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, backgroundColor: colors.successLight, color: colors.success, fontWeight: 500 }}>
              All agents active
            </span>
          </div>

          {/* Agent cards row */}
          <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
            {agents.map((agent, i) => {
              const cardDelay = 8 + i * 6;
              const cardOpacity = interpolate(frame, [cardDelay, cardDelay + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
              const isActive = i === activeAgent;

              // Pulse glow when clicked
              const glowIntensity = isActive ? 0.12 : 0;

              return (
                <div key={agent.name} style={{
                  flex: 1,
                  padding: "14px 16px",
                  borderRadius: 10,
                  border: `1px solid ${isActive ? colors.highlight : colors.border}`,
                  backgroundColor: `rgba(166, 124, 82, ${glowIntensity})`,
                  opacity: cardOpacity,
                }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 12, fontWeight: 500, color: colors.textPrimary }}>{agent.name}</span>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: colors.success }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 11, color: colors.textMuted }}>
                      Active · {agent.tasks} {agent.tasks > 100 ? "matches" : agent.tasks > 5 ? "tasks" : agent.name === "Reports" ? "reports" : "queries"}
                    </span>
                    {/* Mini sparkline */}
                    <svg width="48" height="16" viewBox="0 0 48 16">
                      <polyline
                        points={`0,12 8,10 16,${8 - i} 24,${10 - i * 2} 32,${6 + i} 40,4 48,${2 + i}`}
                        fill="none"
                        stroke={colors.highlight}
                        strokeWidth="1.5"
                        opacity={0.5}
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Activity feed table */}
          <div style={{ flex: 1, borderRadius: 10, border: `1px solid ${colors.border}`, overflow: "hidden" }}>
            {/* Header */}
            <div style={{
              display: "flex", backgroundColor: "rgba(255,255,255,0.02)",
              borderBottom: `1px solid ${colors.border}`, padding: "10px 16px",
            }}>
              {["Time", "Agent", "Action", "Status"].map((col, i) => (
                <div key={col} style={{
                  width: ["10%", "22%", "50%", "18%"][i],
                  fontSize: 11, fontWeight: 500, color: colors.textMuted, textTransform: "uppercase", letterSpacing: "0.05em",
                }}>
                  {col}
                </div>
              ))}
            </div>

            {/* Feed rows */}
            {activityFeed.map((item, i) => {
              const rowDelay = feedStartFrame + i * 18;
              const rowSpring = spring({ frame: frame - rowDelay, fps, config: { damping: 18, stiffness: 100, mass: 0.5 } });
              const isHovered = i === hoveredFeed;

              return (
                <div key={`${item.time}-${item.action}`} style={{
                  display: "flex", padding: "11px 16px",
                  borderBottom: `1px solid ${colors.border}`,
                  opacity: rowSpring,
                  transform: `translateY(${interpolate(rowSpring, [0, 1], [8, 0])}px)`,
                  backgroundColor: isHovered ? "rgba(184, 151, 106, 0.05)" : "transparent",
                }}>
                  <div style={{ width: "10%", fontSize: 12, color: colors.textMuted, fontFamily: "monospace" }}>{item.time}</div>
                  <div style={{ width: "22%", fontSize: 12, color: colors.highlight, fontWeight: 500 }}>{item.agent}</div>
                  <div style={{ width: "50%", fontSize: 12, color: colors.textPrimary }}>{item.action}</div>
                  <div style={{ width: "18%" }}><StatusBadge status={item.status} /></div>
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
