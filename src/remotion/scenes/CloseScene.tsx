import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colors } from "../styles";
import { DashboardLayout, AnimatedCursor, type CursorKeyframe } from "../helpers";

const departments = [
  { name: "Accounting", target: 100 },
  { name: "Treasury", target: 100 },
  { name: "Tax", target: 100 },
  { name: "HR / Finance", target: 100 },
];

const timelineDots = ["Apr 1", "Apr 2", "Apr 3", "Apr 4", "Today"];

const cursorKeyframes: CursorKeyframe[] = [
  { x: 350, y: 200, frame: 20 },              // Near Days to Close card
  { x: 350, y: 200, frame: 40 },              // Hover over metric
  { x: 400, y: 400, frame: 70 },              // Move to progress bars
  { x: 500, y: 430, frame: 100 },             // Follow Accounting bar
  { x: 600, y: 470, frame: 120 },             // Follow Treasury bar
  { x: 700, y: 510, frame: 140 },             // Follow Tax bar
  { x: 800, y: 550, frame: 155 },             // Follow HR bar
  { x: 900, y: 660, frame: 175 },             // Move to timeline
  { x: 1100, y: 660, frame: 195 },            // Follow timeline to "Today"
  { x: 900, y: 500, frame: 210 },             // Move to banner
  { x: 900, y: 500, frame: 220, click: true }, // Click banner → celebration
  { x: 850, y: 450, frame: 240 },             // Settle
];

export const CloseScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneOpacity = Math.min(
    interpolate(frame, [0, 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [210, 240], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );

  // Metric animations
  const daysToClose = Math.round(interpolate(frame, [25, 80], [8, 3], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const tasksComplete = Math.min(8, Math.round(interpolate(frame, [30, 150], [0, 8], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })));
  const exceptionsRemaining = Math.max(0, Math.round(interpolate(frame, [60, 160], [5, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })));
  const accuracy = interpolate(frame, [40, 150], [97.2, 99.7], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Progress bars fill staggered
  const barFillStart = [50, 80, 110, 135];

  // Timeline dots light up
  const timelineLitCount = Math.min(5, Math.floor(interpolate(frame, [100, 190], [0, 5], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })));

  // Close Complete banner
  const allComplete = frame >= 195;
  const bannerSpring = spring({ frame: frame - 195, fps, config: { damping: 15, stiffness: 80, mass: 0.6 } });

  // Confetti/sparkle particles on click (frame 220)
  const sparkleActive = frame >= 220 && frame < 240;

  const metrics = [
    { label: "Days to Close", value: `${daysToClose}`, sub: "↓ from 8 days", color: daysToClose <= 3 ? colors.success : colors.highlight },
    { label: "Tasks Complete", value: `${tasksComplete}/8`, sub: tasksComplete === 8 ? "100%" : `${Math.round(tasksComplete / 8 * 100)}%`, color: tasksComplete === 8 ? colors.success : colors.highlight },
    { label: "Open Exceptions", value: `${exceptionsRemaining}`, sub: exceptionsRemaining === 0 ? "All resolved" : "remaining", color: exceptionsRemaining === 0 ? colors.success : colors.warning },
    { label: "Close Accuracy", value: `${accuracy.toFixed(1)}%`, sub: "target: 99.5%", color: accuracy >= 99.5 ? colors.success : colors.highlight },
  ];

  return (
    <div style={{ opacity: sceneOpacity }}>
      <DashboardLayout activeIndex={4} breadcrumb="Close Management › April 2026 › Dashboard">
        <div style={{ padding: "20px 28px", height: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <span style={{ fontSize: 18, fontWeight: 600, color: colors.textPrimary }}>Close Dashboard</span>
            <span style={{ fontSize: 12, color: colors.textMuted }}>April 2026</span>
          </div>

          {/* Metric cards row */}
          <div style={{ display: "flex", gap: 14, marginBottom: 24 }}>
            {metrics.map((m, i) => {
              const cardDelay = 8 + i * 5;
              const cardOpacity = interpolate(frame, [cardDelay, cardDelay + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

              return (
                <div key={m.label} style={{
                  flex: 1, padding: "18px 20px", borderRadius: 10,
                  border: `1px solid ${colors.border}`, backgroundColor: "rgba(255,255,255,0.02)",
                  opacity: cardOpacity,
                }}>
                  <span style={{ fontSize: 11, color: colors.textMuted, display: "block", marginBottom: 8 }}>{m.label}</span>
                  <span style={{ fontSize: 28, fontWeight: 600, color: m.color, fontFamily: "monospace", display: "block" }}>{m.value}</span>
                  <span style={{ fontSize: 11, color: colors.textMuted, marginTop: 4, display: "block" }}>{m.sub}</span>
                </div>
              );
            })}
          </div>

          {/* Department progress */}
          <div style={{ marginBottom: 24 }}>
            <span style={{ fontSize: 14, fontWeight: 500, color: colors.textPrimary, marginBottom: 14, display: "block" }}>Department Progress</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {departments.map((dept, i) => {
                const fillProgress = interpolate(frame, [barFillStart[i], barFillStart[i] + 50], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
                const isFull = fillProgress >= 99;

                return (
                  <div key={dept.name} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{ width: 100, fontSize: 13, color: colors.textPrimary, flexShrink: 0 }}>{dept.name}</span>
                    <div style={{ flex: 1, height: 8, borderRadius: 4, backgroundColor: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                      <div style={{
                        width: `${fillProgress}%`, height: "100%", borderRadius: 4,
                        backgroundColor: isFull ? colors.success : colors.highlight,
                        transition: "background-color 0.3s",
                      }} />
                    </div>
                    <span style={{ width: 45, fontSize: 12, color: isFull ? colors.success : colors.textMuted, textAlign: "right", fontFamily: "monospace" }}>
                      {Math.round(fillProgress)}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div style={{ marginBottom: 24 }}>
            <span style={{ fontSize: 14, fontWeight: 500, color: colors.textPrimary, marginBottom: 14, display: "block" }}>Close Timeline</span>
            <div style={{ display: "flex", alignItems: "center", padding: "0 20px" }}>
              {timelineDots.map((label, i) => {
                const isLit = i < timelineLitCount;
                const isLast = i === timelineDots.length - 1;
                return (
                  <React.Fragment key={label}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                      <div style={{
                        width: isLast ? 16 : 12, height: isLast ? 16 : 12, borderRadius: "50%",
                        backgroundColor: isLit ? (isLast ? colors.success : colors.highlight) : "rgba(255,255,255,0.1)",
                        border: isLast && isLit ? `2px solid ${colors.success}` : "none",
                        transition: "background-color 0.3s",
                      }} />
                      <span style={{ fontSize: 10, color: isLit ? colors.textSecondary : colors.textMuted, marginTop: 6 }}>
                        {label}
                      </span>
                    </div>
                    {i < timelineDots.length - 1 && (
                      <div style={{
                        flex: 1, height: 2, borderRadius: 1, margin: "0 8px",
                        backgroundColor: i < timelineLitCount - 1 ? colors.highlight : "rgba(255,255,255,0.06)",
                        marginBottom: 18,
                      }} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Close Complete banner */}
          {allComplete && (
            <div style={{
              position: "absolute",
              bottom: 30,
              left: "50%",
              transform: `translateX(-50%) translateY(${interpolate(bannerSpring, [0, 1], [30, 0])}px)`,
              opacity: bannerSpring,
              padding: "16px 40px",
              borderRadius: 12,
              backgroundColor: colors.success,
              color: "white",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.05em",
              boxShadow: `0 4px 24px rgba(90, 122, 100, 0.4)`,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}>
              <span>✓</span> CLOSE COMPLETE
            </div>
          )}

          {/* Sparkle particles on click */}
          {sparkleActive && Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const dist = interpolate(frame, [220, 240], [0, 60 + i * 10], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            const sparkOpacity = interpolate(frame, [220, 235, 240], [0, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

            return (
              <div key={i} style={{
                position: "absolute",
                left: 900 + Math.cos(angle) * dist - 3,
                top: 500 + Math.sin(angle) * dist - 3,
                width: i % 2 === 0 ? 6 : 4,
                height: i % 2 === 0 ? 6 : 4,
                borderRadius: "50%",
                backgroundColor: i % 3 === 0 ? colors.highlight : i % 3 === 1 ? colors.success : "#ffffff",
                opacity: sparkOpacity,
              }} />
            );
          })}

          <AnimatedCursor keyframes={cursorKeyframes} />
        </div>
      </DashboardLayout>
    </div>
  );
};
