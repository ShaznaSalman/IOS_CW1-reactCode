// ProfileScreen.tsx — Clinic Flow Profile
// iPhone 16: 393 × 852px
//
// Props:
//   onBack?:          () => void
//   onNotifications?: () => void   — called when bell icon tapped (navigates to NotificationsScreen)

import { StatusBar, HomeIndicator, PhoneShell, BackArrow, BottomNav } from "../components/shared";

// ─── Avatar (replace src with your real asset) ────────────────────────────────
const AVATAR = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80";

// ─── Chevron right ────────────────────────────────────────────────────────────
const ChevronRight = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
    stroke="#C8C8D0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// ─── Menu items (icon colour matches image: #2196F3 blue outlines) ────────────
const MENU_ITEMS = [
  {
    label: "Your profile",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="#2196F3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Payment Methods",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="#2196F3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    label: "Favourite",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="#2196F3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    label: "Settings",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="#2196F3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    label: "Help Center",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="#2196F3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    label: "Privacy Policy",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="#2196F3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    label: "Log out",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="#2196F3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
    ),
  },
];

// ─── Main export ──────────────────────────────────────────────────────────────
interface ProfileScreenProps {
  onBack?: () => void;
  onNotifications?: () => void;
}

export default function ProfileScreen({ onBack, onNotifications }: ProfileScreenProps) {
  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      minHeight: "100vh", backgroundColor: "#111",
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      <PhoneShell>
        <StatusBar />

        {/* ── Scrollable white body ─────────────────────────────── */}
        <div style={{ flex: 1, overflowY: "auto", backgroundColor: "#fff", scrollbarWidth: "none" }}>

          {/* ── Top nav bar ───────────────────────────────────────── */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "14px 20px 10px",
          }}>
            {/* Back button — circle with arrow */}
            <button onClick={onBack} style={{
              width: 38, height: 38, borderRadius: "50%",
              border: "1.5px solid #E8E8EE", backgroundColor: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", flexShrink: 0,
            }}>
              <BackArrow />
            </button>

            <span style={{ fontSize: 17, fontWeight: "700", color: "#1a1a1a", letterSpacing: -0.3 }}>
              Profile
            </span>

            {/* Invisible spacer to keep title centred */}
            <div style={{ width: 38 }} />
          </div>

          {/* ── Avatar + name ─────────────────────────────────────── */}
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            paddingTop: 10, paddingBottom: 30,
          }}>
            <div style={{ position: "relative" }}>
              {/* Circular avatar */}
              <div style={{
                width: 100, height: 100, borderRadius: "50%", overflow: "hidden",
                border: "3px solid #E0ECF8",
              }}>
                <img
                  src={AVATAR}
                  alt="avatar"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              {/* Blue edit badge bottom-right */}
              <div style={{
                position: "absolute", bottom: 2, right: 2,
                width: 28, height: 28, borderRadius: "50%",
                backgroundColor: "#2196F3", border: "2.5px solid #fff",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </div>
            </div>

            <p style={{ margin: "14px 0 0", fontSize: 18, fontWeight: "700", color: "#1a1a1a", letterSpacing: -0.3 }}>
              Saleh Sameer
            </p>
          </div>

          {/* ── Menu list ─────────────────────────────────────────── */}
          <div style={{ paddingBottom: 24 }}>
            {MENU_ITEMS.map((item, i) => (
              <div key={item.label}>
                <div style={{
                  display: "flex", alignItems: "center",
                  padding: "15px 22px", cursor: "pointer",
                }}>
                  {/* Icon */}
                  <div style={{ width: 28, marginRight: 18, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  {/* Label */}
                  <span style={{ flex: 1, fontSize: 15, fontWeight: "500", color: "#1a1a1a", letterSpacing: -0.1 }}>
                    {item.label}
                  </span>
                  {/* Chevron */}
                  <ChevronRight />
                </div>
                {/* Divider — thin, indented, matches design */}
                {i < MENU_ITEMS.length - 1 && (
                  <div style={{ height: 1, backgroundColor: "#F0F0F5", margin: "0 22px" }} />
                )}
              </div>
            ))}
          </div>

        </div>

        {/* ── Bottom nav ────────────────────────────────────────── */}
        <BottomNav active="Profile" />
        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}