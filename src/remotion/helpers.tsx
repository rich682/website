import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { colors } from "./styles";

// ── Animation hooks ──

export function useFadeIn(delay = 0, durationFrames = 20) {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame - delay, [0, durationFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(frame - delay, [0, durationFrames], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return { opacity, transform: `translateY(${translateY}px)` };
}

export function useSpringIn(delay = 0) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 20, stiffness: 100, mass: 0.5 },
  });
  return {
    opacity: progress,
    transform: `translateY(${interpolate(progress, [0, 1], [30, 0])}px)`,
  };
}

export function useCrossFade(sceneDuration: number, fadeIn = 20, fadeOut = 15) {
  const frame = useCurrentFrame();
  const inOpacity = interpolate(frame, [0, fadeIn], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const outOpacity = interpolate(
    frame,
    [sceneDuration - fadeOut, sceneDuration],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  return { opacity: Math.min(inOpacity, outOpacity) };
}

// ── Animated Cursor ──

export type CursorKeyframe = {
  x: number;
  y: number;
  frame: number;
  click?: boolean;
  type?: string; // text to type at this position
};

export const AnimatedCursor: React.FC<{ keyframes: CursorKeyframe[] }> = ({
  keyframes,
}) => {
  const frame = useCurrentFrame();

  // Find the two surrounding keyframes
  let prevKf = keyframes[0];
  let nextKf = keyframes[0];
  for (let i = 0; i < keyframes.length - 1; i++) {
    if (frame >= keyframes[i].frame && frame < keyframes[i + 1].frame) {
      prevKf = keyframes[i];
      nextKf = keyframes[i + 1];
      break;
    }
    if (i === keyframes.length - 2) {
      prevKf = keyframes[i + 1];
      nextKf = keyframes[i + 1];
    }
  }

  // Ease-in-out interpolation between keyframes
  const t =
    prevKf.frame === nextKf.frame
      ? 1
      : interpolate(frame, [prevKf.frame, nextKf.frame], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

  // Smooth easing (cubic ease-in-out)
  const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const x = prevKf.x + (nextKf.x - prevKf.x) * eased;
  const y = prevKf.y + (nextKf.y - prevKf.y) * eased;

  // Idle micro-drift
  const drift = Math.sin(frame * 0.15) * 1.5;

  // Click animation: find if we're near a click keyframe
  let clickScale = 1;
  let rippleOpacity = 0;
  for (const kf of keyframes) {
    if (kf.click && Math.abs(frame - kf.frame) < 12) {
      const clickDelta = frame - kf.frame;
      if (clickDelta >= 0 && clickDelta < 4) {
        clickScale = 0.85;
      } else if (clickDelta >= 4 && clickDelta < 8) {
        clickScale = interpolate(clickDelta, [4, 8], [0.85, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
      }
      if (clickDelta >= 0 && clickDelta < 12) {
        rippleOpacity = interpolate(clickDelta, [0, 12], [0.4, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
      }
    }
  }

  // Hide cursor before first keyframe
  if (frame < keyframes[0].frame - 5) return null;

  const cursorOpacity = interpolate(
    frame,
    [keyframes[0].frame - 5, keyframes[0].frame],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <>
      {/* Ripple effect on click */}
      {rippleOpacity > 0 && (
        <div
          style={{
            position: "absolute",
            left: x - 15,
            top: y - 15,
            width: 30,
            height: 30,
            borderRadius: "50%",
            border: `2px solid ${colors.highlight}`,
            opacity: rippleOpacity,
            transform: `scale(${interpolate(rippleOpacity, [0.4, 0], [0.5, 2])})`,
            pointerEvents: "none",
            zIndex: 1000,
          }}
        />
      )}

      {/* Cursor arrow */}
      <div
        style={{
          position: "absolute",
          left: x + drift,
          top: y + drift * 0.5,
          zIndex: 999,
          pointerEvents: "none",
          opacity: cursorOpacity,
          transform: `scale(${clickScale})`,
          transformOrigin: "top left",
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
        }}
      >
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
          <path
            d="M1 1L1 18.5L5.5 14L10 22L13 20.5L8.5 12.5L14.5 12.5L1 1Z"
            fill="white"
            stroke="black"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

// ── Typewriter text ──

export const TypewriterText: React.FC<{
  text: string;
  startFrame: number;
  charsPerFrame?: number;
  style?: React.CSSProperties;
}> = ({ text, startFrame, charsPerFrame = 0.8, style }) => {
  const frame = useCurrentFrame();
  const charsShown = Math.min(
    text.length,
    Math.max(0, Math.floor((frame - startFrame) * charsPerFrame))
  );
  if (charsShown <= 0) return null;
  return <span style={style}>{text.slice(0, charsShown)}</span>;
};

// ── Dashboard Layout ──

const sidebarIcons = [
  // Tasks (checklist)
  "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  // Connect (link)
  "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  // Agents (cpu/bot)
  "M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m14 0h2M3 15h2m14 0h2M7 7h10v10H7z",
  // Approve (shield-check)
  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  // Close (flag)
  "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2z",
];

export const DashboardLayout: React.FC<{
  activeIndex: number; // 0-4 for which sidebar icon is active
  breadcrumb: string;
  children: React.ReactNode;
}> = ({ activeIndex, breadcrumb, children }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: colors.bg,
        fontFamily: "'Geist Sans', 'Inter', system-ui, sans-serif",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: 52,
          backgroundColor: "#0a0a0a",
          borderRight: `1px solid ${colors.border}`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 16,
          gap: 4,
          flexShrink: 0,
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 6,
            backgroundColor: colors.highlight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, color: "white" }}>V</span>
        </div>

        {sidebarIcons.map((d, i) => (
          <div
            key={i}
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                i === activeIndex ? "rgba(166, 124, 82, 0.15)" : "transparent",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke={i === activeIndex ? colors.highlight : "rgba(255,255,255,0.25)"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={d} />
            </svg>
          </div>
        ))}
      </div>

      {/* Main area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Top bar */}
        <div
          style={{
            height: 48,
            borderBottom: `1px solid ${colors.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 13, color: colors.textMuted }}>
            {breadcrumb}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Bell icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
            </svg>
            {/* User avatar */}
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  color: colors.textMuted,
                }}
              >
                SK
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

// ── Status Badge ──

export const StatusBadge: React.FC<{
  status: "complete" | "in-progress" | "pending" | "review" | "sent" | "received" | "queued";
  label?: string;
}> = ({ status, label }) => {
  const colorMap: Record<string, { bg: string; text: string }> = {
    complete: { bg: colors.successLight, text: colors.success },
    "in-progress": { bg: "rgba(166, 124, 82, 0.15)", text: colors.highlight },
    pending: { bg: "rgba(255,255,255,0.06)", text: colors.textMuted },
    review: { bg: colors.warningLight, text: colors.warning },
    sent: { bg: "rgba(100, 140, 200, 0.15)", text: "#6E9ECF" },
    received: { bg: "rgba(100, 140, 200, 0.15)", text: "#6E9ECF" },
    queued: { bg: "rgba(255,255,255,0.06)", text: colors.textMuted },
  };

  const displayLabels: Record<string, string> = {
    complete: "Complete",
    "in-progress": "In Progress",
    pending: "Pending",
    review: "Review",
    sent: "Sent",
    received: "Received",
    queued: "Queued",
  };

  const c = colorMap[status] ?? colorMap.pending;

  return (
    <span
      style={{
        fontSize: 11,
        padding: "3px 10px",
        borderRadius: 20,
        backgroundColor: c.bg,
        color: c.text,
        fontWeight: 500,
        whiteSpace: "nowrap",
      }}
    >
      {status === "complete" ? "✓ " : ""}
      {label ?? displayLabels[status]}
    </span>
  );
};
