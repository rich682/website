import { useCurrentFrame, interpolate } from "remotion";
import { colors, fonts } from "../styles";

export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Staggered text lines
  const lines = [
    "Scattered spreadsheets.",
    "Endless follow-ups.",
    "Manual reconciliations.",
  ];

  // Title fade in
  const titleOpacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [0, 25], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene fade out
  const sceneOpacity = interpolate(frame, [210, 240], [1, 0], {
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
      {/* Main question */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          fontFamily: fonts.serif,
          fontSize: 56,
          color: colors.textPrimary,
          letterSpacing: "-0.02em",
          marginBottom: 60,
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        Month-end close shouldn&apos;t
        <br />
        feel like a fire drill.
      </div>

      {/* Pain points appearing one by one */}
      <div
        style={{
          display: "flex",
          gap: 40,
          alignItems: "center",
        }}
      >
        {lines.map((line, i) => {
          const delay = 50 + i * 30;
          const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const y = interpolate(frame, [delay, delay + 20], [15, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={line}
              style={{
                opacity,
                transform: `translateY(${y}px)`,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              {/* Red/warning dot */}
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: colors.warning,
                }}
              />
              <span
                style={{
                  fontSize: 20,
                  color: colors.textSecondary,
                  fontWeight: 400,
                }}
              >
                {line}
              </span>
            </div>
          );
        })}
      </div>

      {/* "Your team deserves better" */}
      <div
        style={{
          marginTop: 60,
          opacity: interpolate(frame, [140, 165], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          transform: `translateY(${interpolate(frame, [140, 165], [15, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}px)`,
          fontSize: 24,
          color: colors.highlight,
          fontWeight: 500,
        }}
      >
        Your team deserves better.
      </div>
    </div>
  );
};
