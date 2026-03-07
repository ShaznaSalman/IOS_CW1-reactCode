// PharmacyBookingSuccessScreen.tsx — Order Confirmed
// iPhone 16: 393 × 852px

import { StatusBar, HomeIndicator, PhoneShell, BackArrow } from "../components/shared";

interface Props { onBack?: () => void; onViewOrder?: () => void; onGoHome?: () => void; }

export default function PharmacyBookingSuccessScreen({ onBack, onViewOrder, onGoHome }: Props) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#111", fontFamily: "'SF Pro Display',-apple-system,BlinkMacSystemFont,sans-serif" }}>
      <PhoneShell>
        <StatusBar />

        {/* Nav */}
        <div style={{ backgroundColor: "#fff", padding: "12px 20px 14px", display: "flex", alignItems: "center", flexShrink: 0, borderBottom: "1px solid #F2F2F7", position: "relative" }}>
          <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex" }}><BackArrow /></button>
          <span style={{ fontSize: 17, fontWeight: "700", color: "#1a1a1a", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>Payment</span>
        </div>

        {/* Body */}
        <div style={{ flex: 1, backgroundColor: "#fff", display: "flex", flexDirection: "column", alignItems: "center", padding: "60px 28px 28px" }}>

          {/* Green check circle */}
          <div style={{ width: 100, height: 100, borderRadius: "50%", backgroundColor: "#4CAF50", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28, boxShadow: "0 8px 28px rgba(76,175,80,0.35)" }}>
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          {/* Title */}
          <p style={{ margin: "0 0 10px", fontSize: 22, fontWeight: "800", color: "#1a1a1a", letterSpacing: -0.4 }}>Order Confirmed!</p>

          {/* Subtitle */}
          <p style={{ margin: "0 0 36px", fontSize: 13, color: "#999", textAlign: "center", lineHeight: 1.6 }}>
            You will be notified when the order is completed
          </p>

          {/* Estimated time row */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, backgroundColor: "#F0F8FF", borderRadius: 12, padding: "14px 20px", width: "100%", boxSizing: "border-box" }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "#2196F3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 13, color: "#555", fontWeight: "500" }}>Estimated Time :</span>
              <span style={{ fontSize: 13, color: "#1a1a1a", fontWeight: "700" }}>15 mins</span>
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