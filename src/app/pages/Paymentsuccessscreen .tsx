// PaymentSuccessScreen.tsx — Shared Payment Successful screen
// Used for both Doctor and Lab bookings
// iPhone 16: 393 × 852px
//
// Props:
//   entityName  — e.g. "Dr. Ryan De Silva" or "X - Ray Lab"
//   amount      — e.g. "Rs 4000"
//   patientName — e.g. "Saman Edirimuna"
//   date        — e.g. "4 Oct, 2026"
//   time        — e.g. "07:00 PM"

import { StatusBar, HomeIndicator, PhoneShell, BackArrow } from "../components/shared";

const DetailRow = ({ icon, value, valueColor = "#1a1a1a" }: {
  icon: React.ReactNode; value: string; valueColor?: string;
}) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <div style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: "#EEF6FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      {icon}
    </div>
    <span style={{ fontSize: 13, fontWeight: "700", color: valueColor }}>{value}</span>
  </div>
);

interface Props {
  entityName:  string;   // doctor name or lab test name
  amount:      string;
  patientName: string;
  date:        string;
  time:        string;
  onBack?: () => void;
  onViewAppointment?: () => void;
  onGoHome?: () => void;
}

export default function PaymentSuccessScreen({
  entityName, amount, patientName, date, time,
  onBack, onViewAppointment, onGoHome,
}: Props) {
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
        <div style={{ flex: 1, backgroundColor: "#fff", display: "flex", flexDirection: "column", alignItems: "center", padding: "52px 28px 28px" }}>

          {/* Green check */}
          <div style={{ width: 100, height: 100, borderRadius: "50%", backgroundColor: "#4CAF50", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 26, boxShadow: "0 8px 28px rgba(76,175,80,0.35)" }}>
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>

          <p style={{ margin: "0 0 12px", fontSize: 22, fontWeight: "800", color: "#1a1a1a", letterSpacing: -0.4 }}>Payment Successful!</p>

          <p style={{ margin: "0 0 32px", fontSize: 13, color: "#999", textAlign: "center", lineHeight: 1.7 }}>
            You have successfully booked appointment with<br/>
            <span style={{ fontWeight: "700", color: "#1a1a1a" }}>{entityName}</span>
          </p>

          {/* 2×2 detail grid */}
          <div style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
            <DetailRow value={patientName}
              icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
            />
            <DetailRow value={amount} valueColor="#4CAF50"
              icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
            />
            <DetailRow value={date}
              icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>}
            />
            <DetailRow value={time}
              icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
            />
          </div>

          <div style={{ flex: 1 }} />
          <div style={{ height: 1, backgroundColor: "#F2F2F7", width: "100%", marginBottom: 24 }} />
        </div>

        {/* Buttons */}
        <div style={{ padding: "0 22px 20px", backgroundColor: "#fff", display: "flex", flexDirection: "column", gap: 12 }}>
          <button onClick={onViewAppointment} style={{ width: "100%", padding: "15px 0", borderRadius: 50, border: "none", backgroundColor: "#2196F3", color: "#fff", fontSize: 15, fontWeight: "700", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 14px rgba(33,150,243,0.38)" }}>
            View Appointment
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