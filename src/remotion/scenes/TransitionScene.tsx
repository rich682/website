import { useCurrentFrame, interpolate } from "remotion";
import { colors, fonts } from "../styles";

export const TransitionScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Vergo wordmark reveal
  const wordmarkOpacity = interpolate(frame, [10, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const wordmarkScale = interpolate(frame, [10, 35], [0.9, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Tagline fade in
  const taglineOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const taglineY = interpolate(frame, [40, 60], [12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene fade out
  const sceneOpacity = interpolate(frame, [100, 120], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subtle gradient accent line
  const lineWidth = interpolate(frame, [20, 50], [0, 200], {
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
        opacity: sceneOpacity,
      }}
    >
      {/* Vergo wordmark */}
      <div
        style={{
          opacity: wordmarkOpacity,
          transform: `scale(${wordmarkScale})`,
          fontFamily: fonts.serif,
          fontSize: 72,
          color: colors.textPrimary,
          letterSpacing: "-0.02em",
          fontWeight: 400,
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
          marginTop: 20,
          marginBottom: 24,
        }}
      />

      {/* Tagline */}
      <div
        style={{
          opacity: taglineOpacity,
          transform: `translateY(${taglineY}px)`,
          fontSize: 22,
          color: colors.textSecondary,
          fontWeight: 400,
          textAlign: "center",
          maxWidth: 600,
          lineHeight: 1.5,
        }}
      >
        Everything together in one platform
        <br />
        built for accounting teams.
      </div>
    </div>
  );
};
