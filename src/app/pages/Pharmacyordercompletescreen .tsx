// PharmacyOrderCompleteScreen.tsx — Order Complete (collect at counter)
// iPhone 16: 393 × 852px

import { StatusBar, HomeIndicator, PhoneShell, BackArrow } from "../components/shared";

interface Props { onBack?: () => void; onViewOrder?: () => void; onGoHome?: () => void; }

export default function PharmacyOrderCompleteScreen({ onBack, onViewOrder, onGoHome }: Props) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#111", fontFamily: "'SF Pro Display',-apple-system,BlinkMacSystemFont,sans-serif" }}>
      <PhoneShell>
        <StatusBar />

        {/* Nav */}
        <div style={{ backgroundColor: "#fff", padding: "12px 20px 14px", display: "flex", alignItems: "center", flexShrink: 0, borderBottom: "1px solid #F2F2F7", position: "relative" }}>
          <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex" }}><BackArrow /></button>
          <span style={{ fontSize: 17, fontWeight: "700", color: "#1a1a1a", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>Booking Confirm</span>
        </div>

        {/* Body */}
        <div style={{ flex: 1, backgroundColor: "#fff", display: "flex", flexDirection: "column", alignItems: "center", padding: "56px 28px 28px" }}>

          {/* Green check circle */}
          <div style={{ width: 100, height: 100, borderRadius: "50%", backgroundColor: "#4CAF50", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, boxShadow: "0 8px 28px rgba(76,175,80,0.35)" }}>
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          {/* Title */}
          <p style={{ margin: "0 0 12px", fontSize: 22, fontWeight: "800", color: "#1a1a1a", letterSpacing: -0.4 }}>Order Complete!</p>

          {/* Subtitle */}
          <p style={{ margin: "0 0 32px", fontSize: 13, color: "#999", textAlign: "center", lineHeight: 1.7 }}>
            Your pharmacy order is processed<br />
            and complete. Please collect your order at<br />
            <span style={{ fontWeight: "700", color: "#1a1a1a" }}>Counter 2</span>
          </p>

          {/* Details grid — 2 × 2 */}
          <div style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 32 }}>

            {/* Name */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "#E3F2FD", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <span style={{ fontSize: 13, fontWeight: "600", color: "#1a1a1a" }}>Saman Edirimuna</span>
            </div>

            {/* Amount */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "#E8F5E9", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <span style={{ fontSize: 13, fontWeight: "600", color: "#1a1a1a" }}>Rs 3500</span>
            </div>

            {/* Date */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "#E3F2FD", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <span style={{ fontSize: 13, fontWeight: "600", color: "#1a1a1a" }}>4 Oct, 2026</span>
            </div>

            {/* Counter */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "#E3F2FD", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              </div>
              <span style={{ fontSize: 13, fontWeight: "600", color: "#1a1a1a" }}>Counter 2</span>
            </div>

          </div>

          <div style={{ flex: 1 }} />

          {/* Divider */}
          <div style={{ height: 1, backgroundColor: "#F2F2F7", width: "100%", marginBottom: 24 }} />
        </div>

        {/* Buttons */}
        <div style={{ padding: "0 22px 20px", backgroundColor: "#fff", display: "flex", flexDirection: "column", gap: 12 }}>
          <button onClick={onViewOrder} style={{ width: "100%", padding: "15px 0", borderRadius: 50, border: "none", backgroundColor: "#2196F3", color: "#fff", fontSize: 15, fontWeight: "700", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 14px rgba(33,150,243,0.38)" }}>
            View Order
          </button>
          <button onClick={onGoHome} style={{ width: "100%", padding: "12px 0", borderRadius: 50, border: "none", backgroundColor: "transparent", color: "#2196F3", fontSize: 14, fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}>
            Go to Home
          </button>
        </div>

        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}