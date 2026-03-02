import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colors } from "../styles";
import { DashboardLayout, AnimatedCursor, StatusBadge, type CursorKeyframe } from "../helpers";

const systems = [
  { name: "QuickBooks Online", icon: "QB", synced: "2m ago", txns: "12,847", preConnected: true },
  { name: "Xero", icon: "XE", synced: "5m ago", txns: "8,234", preConnected: true },
  { name: "SAP S/4HANA", icon: "SAP", synced: "1m ago", txns: "45,112", preConnected: true },
  { name: "Google Sheets", icon: "GS", synced: "", txns: "", preConnected: false },
  { name: "Slack", icon: "SL", synced: "", txns: "", preConnected: false },
];

const journalEntries = [
  { date: "Apr 1", account: "4000 Revenue", desc: "March product revenue", debit: "$124,500", credit: "—" },
  { date: "Apr 1", account: "1200 AR", desc: "Customer invoices", debit: "—", credit: "$124,500" },
  { date: "Apr 2", account: "5100 COGS", desc: "Cost of goods sold", debit: "$48,200", credit: "—" },
  { date: "Apr 2", account: "2000 AP", desc: "Vendor payments", debit: "—", credit: "$48,200" },
  { date: "Apr 3", account: "6200 Rent", desc: "Office lease Q1", debit: "$18,750", credit: "—" },
  { date: "Apr 3", account: "2100 Accrued", desc: "Payroll accrual", debit: "$32,100", credit: "—" },
  { date: "Apr 4", account: "1100 Cash", desc: "Wire transfer in", debit: "$95,000", credit: "—" },
];

const cursorKeyframes: CursorKeyframe[] = [
  { x: 200, y: 420, frame: 15 },               // Start near Google Sheets
  { x: 370, y: 420, frame: 40 },                // Move to Connect button
  { x: 370, y: 420, frame: 50, click: true },   // Click Connect
  // Wait for sync...
  { x: 370, y: 420, frame: 90 },                // Stay
  { x: 200, y: 490, frame: 110 },               // Move to Slack
  { x: 370, y: 490, frame: 125 },               // Move to Connect button
  { x: 370, y: 490, frame: 130, click: true },  // Click Connect
  { x: 700, y: 300, frame: 160 },               // Move to data table
  { x: 700, y: 350, frame: 190 },               // Hover over row
  { x: 700, y: 400, frame: 220 },               // Scroll down
  { x: 800, y: 450, frame: 260 },               // Watch data
];

export const ConnectScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneOpacity = Math.min(
    interpolate(frame, [0, 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [270, 300], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );

  // Google Sheets: connect at frame 50, syncing 50-85, connected at 85
  const gsConnecting = frame >= 50 && frame < 85;
  const gsConnected = frame >= 85;

  // Slack: connect at frame 130, quick connect by 145
  const slackConnecting = frame >= 130 && frame < 145;
  const slackConnected = frame >= 145;

  // Data rows start appearing after connections
  const dataStartFrame = 60;

  // Hovered row (when cursor is over data table)
  const hoveredDataRow = frame >= 185 && frame < 230 ? 2 : -1;

  return (
    <div style={{ opacity: sceneOpacity }}>
      <DashboardLayout activeIndex={1} breadcrumb="Close Management › April 2026 › Integrations">
        <div style={{ padding: "20px 28px", height: "100%", display: "flex", gap: 20 }}>
          {/* Left panel — Connected systems */}
          <div style={{ width: "38%", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ fontSize: 16, fontWeight: 600, color: colors.textPrimary }}>Integrations</span>
              <span style={{ fontSize: 12, color: colors.textMuted }}>
                {3 + (gsConnected ? 1 : 0) + (slackConnected ? 1 : 0)} connected
              </span>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
              {systems.map((sys, i) => {
                const isGS = i === 3;
                const isSlack = i === 4;
                const connected = sys.preConnected || (isGS && gsConnected) || (isSlack && slackConnected);
                const connecting = (isGS && gsConnecting) || (isSlack && slackConnecting);

                const rowDelay = 5 + i * 8;
                const rowOpacity = interpolate(frame, [rowDelay, rowDelay + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

                return (
                  <div key={sys.name} style={{
                    opacity: rowOpacity,
                    padding: "12px 14px",
                    borderRadius: 10,
                    border: `1px solid ${colors.border}`,
                    backgroundColor: "rgba(255,255,255,0.02)",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}>
                    {/* Icon */}
                    <div style={{
                      width: 36, height: 36, borderRadius: 8,
                      backgroundColor: "rgba(255,255,255,0.06)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <span style={{ fontSize: 9, fontWeight: 700, color: colors.textMuted }}>{sys.icon}</span>
                    </div>

                    {/* Name & details */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <span style={{ fontSize: 13, fontWeight: 500, color: colors.textPrimary, display: "block" }}>{sys.name}</span>
                      {connected && (
                        <span style={{ fontSize: 10, color: colors.textMuted }}>
                          Last sync {sys.preConnected ? sys.synced : "just now"} · {sys.preConnected ? sys.txns : "—"} txns
                        </span>
                      )}
                    </div>

                    {/* Status / Connect button */}
                    {connected ? (
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <div style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: colors.success }} />
                        <span style={{ fontSize: 11, color: colors.success, fontWeight: 500 }}>Connected</span>
                      </div>
                    ) : connecting ? (
                      <span style={{ fontSize: 11, color: colors.highlight, fontWeight: 500 }}>Syncing...</span>
                    ) : (
                      <div style={{
                        padding: "5px 12px", borderRadius: 6,
                        border: `1px solid ${colors.border}`,
                        fontSize: 11, color: colors.textSecondary, fontWeight: 500, cursor: "pointer",
                      }}>
                        Connect
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right panel — Live data table */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ fontSize: 16, fontWeight: 600, color: colors.textPrimary }}>Journal Entries</span>
              <span style={{ fontSize: 12, color: colors.textMuted }}>Live sync</span>
            </div>

            <div style={{ flex: 1, borderRadius: 10, border: `1px solid ${colors.border}`, overflow: "hidden" }}>
              {/* Header */}
              <div style={{
                display: "flex", backgroundColor: "rgba(255,255,255,0.02)",
                borderBottom: `1px solid ${colors.border}`, padding: "10px 16px",
              }}>
                {["Date", "Account", "Description", "Debit", "Credit"].map((col, i) => (
                  <div key={col} style={{
                    width: ["12%", "22%", "34%", "16%", "16%"][i],
                    fontSize: 11, fontWeight: 500, color: colors.textMuted, textTransform: "uppercase", letterSpacing: "0.05em",
                  }}>
                    {col}
                  </div>
                ))}
              </div>

              {/* Data rows */}
              {journalEntries.map((entry, i) => {
                const rowDelay = dataStartFrame + i * 15;
                const rowSpring = spring({ frame: frame - rowDelay, fps, config: { damping: 18, stiffness: 100, mass: 0.5 } });
                const isHovered = i === hoveredDataRow;

                return (
                  <div key={`${entry.date}-${entry.account}`} style={{
                    display: "flex", padding: "11px 16px",
                    borderBottom: `1px solid ${colors.border}`,
                    opacity: rowSpring,
                    transform: `translateY(${interpolate(rowSpring, [0, 1], [8, 0])}px)`,
                    backgroundColor: isHovered ? "rgba(255,255,255,0.03)" : "transparent",
                  }}>
                    <div style={{ width: "12%", fontSize: 12, color: colors.textMuted }}>{entry.date}</div>
                    <div style={{ width: "22%", fontSize: 12, color: colors.highlight, fontWeight: 500 }}>{entry.account}</div>
                    <div style={{ width: "34%", fontSize: 12, color: colors.textPrimary }}>{entry.desc}</div>
                    <div style={{ width: "16%", fontSize: 12, color: entry.debit !== "—" ? colors.textPrimary : colors.textMuted, fontFamily: "monospace" }}>{entry.debit}</div>
                    <div style={{ width: "16%", fontSize: 12, color: entry.credit !== "—" ? colors.textPrimary : colors.textMuted, fontFamily: "monospace" }}>{entry.credit}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <AnimatedCursor keyframes={cursorKeyframes} />
      </DashboardLayout>
    </div>
  );
};
