import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colors, fonts } from "../styles";

export const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Vergo wordmark
  const wordmarkProgress = spring({
    frame: frame - 10,
    fps,
    config: { damping: 20, stiffness: 80, mass: 0.6 },
  });

  // Tagline
  const taglineOpacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const taglineY = interpolate(frame, [35, 55], [12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // CTA button
  const ctaProgress = spring({
    frame: frame - 55,
    fps,
    config: { damping: 18, stiffness: 100, mass: 0.5 },
  });

  // Accent line
  const lineWidth = interpolate(frame, [20, 50], [0, 180], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: fonts.sans,
      }}
    >
      {/* Vergo wordmark */}
      <div
        style={{
          opacity: wordmarkProgress,
          transform: `scale(${interpolate(wordmarkProgress, [0, 1], [0.9, 1])})`,
          fontFamily: fonts.serif,
          fontSize: 80,
          color: colors.textPrimary,
          letterSpacing: "-0.02em",
        }}
      >
        Vergo
      </div>

      {/* Accent line */}
      <div
        style={{
          width: lineWidth,
          height: 2,
          borderRadius: 1,
          background: `linear-gradient(90deg, transparent, ${colors.highlight}, transparent)`,
          marginTop: 16,
          marginBottom: 20,
        }}
      />

      {/* Tagline */}
      <div
        style={{
          opacity: taglineOpacity,
          transform: `translateY(${taglineY}px)`,
          fontFamily: fonts.serif,
          fontSize: 32,
          color: colors.textSecondary,
          letterSpacing: "-0.01em",
        }}
      >
        Get in control of month-end.
      </div>

      {/* CTA button */}
      <div
        style={{
          opacity: ctaProgress,
          transform: `translateY(${interpolate(ctaProgress, [0, 1], [15, 0])}px)`,
          marginTop: 40,
          padding: "14px 32px",
          borderRadius: 8,
          backgroundColor: "#ffffff",
          color: colors.bg,
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        Request demo
      </div>
    </div>
  );
};
