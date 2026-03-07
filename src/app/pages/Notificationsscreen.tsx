// NotificationsScreen.tsx — Clinic Flow Notifications
// iPhone 16: 393 × 852px
//
// Props:
//   onBack?: () => void

import { StatusBar, HomeIndicator, PhoneShell, BackArrow, BottomNav } from "../components/shared";

// ─── Data ─────────────────────────────────────────────────────────────────────
interface Notif {
  date: string;
  time: string;
  message: string;
  ago: string;
}

const NOTIFICATIONS: Notif[] = [
  { date: "May, 09 2025", time: "09:30 am", message: "Pharmacy Order ready",              ago: "10m ago" },
  { date: "Jan, 17 2025", time: "11:00 am", message: "Appointment Cancelled",             ago: "43m ago" },
  { date: "Jan, 07 2025", time: "11:30 am", message: "Appointment Dr Thomas Alwa Edisan", ago: "12h ago" },
];

// ─── Single notification card ─────────────────────────────────────────────────
const NotifCard = ({ notif }: { notif: Notif }) => (
  <div style={{
    backgroundColor: "#fff", borderRadius: 14, padding: "13px 14px",
    marginBottom: 12, boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    display: "flex", gap: 12, alignItems: "flex-start",
  }}>
    {/* Yellow bell */}
    <div style={{
      width: 42, height: 42, borderRadius: "50%", backgroundColor: "#FFF8E1",
      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
    }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFA000"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    </div>

    {/* Text */}
    <div style={{ flex: 1 }}>
      <p style={{ margin: "0 0 4px", fontSize: 12, color: "#999" }}>
        {notif.date} | {notif.time}
      </p>
      <p style={{ margin: 0, fontSize: 13, fontWeight: "600", color: "#1a1a1a" }}>
        {notif.message}
      </p>
    </div>

    {/* Time ago */}
    <span style={{ fontSize: 10, color: "#2196F3", fontWeight: "600", flexShrink: 0, marginTop: 2 }}>
      {notif.ago}
    </span>
  </div>
);

// ─── Screen ───────────────────────────────────────────────────────────────────
interface NotificationsScreenProps {
  onBack?: () => void;
}

export default function NotificationsScreen({ onBack }: NotificationsScreenProps) {
  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      minHeight: "100vh", backgroundColor: "#111",
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      <PhoneShell>
        <StatusBar />

        {/* Top nav */}
        <div style={{
          backgroundColor: "#fff", padding: "12px 18px 14px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexShrink: 0,
        }}>
          <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex" }}>
            <BackArrow />
          </button>
          <span style={{ fontSize: 17, fontWeight: "700", color: "#1a1a1a" }}>Notifications</span>
          <div style={{ width: 28 }} />
        </div>

        {/* Notification cards */}
        <div style={{ flex: 1, overflowY: "auto", backgroundColor: "#F4F6FB", padding: "16px 16px 8px", scrollbarWidth: "none" }}>
          {NOTIFICATIONS.map((n, i) => (
            <NotifCard key={i} notif={n} />
          ))}
        </div>

        {/* Clear All */}
        <div style={{ backgroundColor: "#F4F6FB", padding: "12px 16px 16px", flexShrink: 0 }}>
          <button style={{
            width: "100%", padding: "16px 0", borderRadius: 50, border: "none",
            backgroundColor: "#2196F3", color: "#fff", fontSize: 15, fontWeight: "700",
            cursor: "pointer", fontFamily: "inherit",
            boxShadow: "0 4px 14px rgba(33,150,243,0.38)", letterSpacing: 0.2,
          }}>
            Clear All
          </button>
        </div>

        <BottomNav active="Home" />
        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}