// Design system constants matching the Vergo website
export const colors = {
  bg: "#0e0e0e",
  bgCard: "#1a1a1a",
  bgCardHover: "#222222",
  border: "rgba(255, 255, 255, 0.08)",
  borderLight: "rgba(255, 255, 255, 0.12)",
  white: "#ffffff",
  textPrimary: "#ffffff",
  textSecondary: "rgba(255, 255, 255, 0.6)",
  textMuted: "rgba(255, 255, 255, 0.35)",
  highlight: "#A67C52", // copper
  highlightLight: "rgba(166, 124, 82, 0.15)",
  success: "#5A7A64", // green
  successLight: "rgba(90, 122, 100, 0.15)",
  warning: "#B8976A", // amber
  warningLight: "rgba(184, 151, 106, 0.15)",
};

export const fonts = {
  sans: "'Geist Sans', 'Inter', system-ui, -apple-system, sans-serif",
  serif: "'Instrument Serif', Georgia, serif",
};

// Scene timing in frames (at 30fps)
export const scenes = {
  problem: { start: 0, duration: 240 },       // 0-8s
  transition: { start: 240, duration: 120 },   // 8-12s
  tasks: { start: 360, duration: 300 },        // 12-22s
  connect: { start: 660, duration: 300 },      // 22-32s
  agents: { start: 960, duration: 300 },       // 32-42s
  approve: { start: 1260, duration: 300 },     // 42-52s
  close: { start: 1560, duration: 240 },       // 52-60s
  cta: { start: 1800, duration: 150 },         // 60-65s
};
