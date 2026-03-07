// DoctorReviewSummaryScreen.tsx — Review Summary (Doctor booking)
// iPhone 16: 393 × 852px

import { StatusBar, HomeIndicator, PhoneShell, BackArrow } from "../components/shared";

const DOCTOR_IMG = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=160&q=80";

const Row = ({ label, value }: { label: string; value: string }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 14, marginBottom: 14, borderBottom: "1px solid #F2F2F7" }}>
    <span style={{ fontSize: 14, color: "#AAA", fontWeight: "400" }}>{label}</span>
    <span style={{ fontSize: 14, color: "#1a1a1a", fontWeight: "500" }}>{value}</span>
  </div>
);

interface Props { onBack?: () => void; onPay?: () => void; onChangePayment?: () => void; }

export default function DoctorReviewSummaryScreen({ onBack, onPay, onChangePayment }: Props) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#111", fontFamily: "'SF Pro Display',-apple-system,BlinkMacSystemFont,sans-serif" }}>
      <PhoneShell>
        <StatusBar />

        {/* Nav */}
        <div style={{ backgroundColor: "#fff", padding: "12px 20px 14px", display: "flex", alignItems: "center", borderBottom: "1px solid #F2F2F7", flexShrink: 0, position: "relative" }}>
          <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex" }}><BackArrow /></button>
          <span style={{ fontSize: 17, fontWeight: "700", color: "#1a1a1a", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>Review Summary</span>
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflowY: "auto", backgroundColor: "#fff", padding: "20px 20px 0", scrollbarWidth: "none" }}>

          {/* Doctor card */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", backgroundColor: "#F8FBFF", borderRadius: 16, marginBottom: 24, border: "1px solid #E8F0FB" }}>
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div style={{ width: 66, height: 66, borderRadius: "50%", overflow: "hidden", border: "3px solid #D6E8F8" }}>
                <img src={DOCTOR_IMG} alt="Doctor" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              {/* Blue verified badge */}
              <div style={{ position: "absolute", bottom: 1, right: 1, width: 20, height: 20, borderRadius: "50%", backgroundColor: "#2196F3", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
            </div>
            <div>
              <p style={{ margin: 0, fontSize: 16, fontWeight: "700", color: "#1a1a1a" }}>Dr. Ryan De Silva</p>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#888" }}>Cardiologist</p>
            </div>
          </div>

          {/* Summary rows */}
          <Row label="Date & Hour"  value="October 4, 2026 | 07:00 PM" />
          <Row label="Package"      value="Visiting" />
          <Row label="Booking for"  value="Self" />

          {/* Gap before Amount */}
          <div style={{ height: 6 }} />

          <Row label="Amount" value="Rs 4000" />

          {/* Red disclaimer */}
          <p style={{ margin: "0 0 16px", fontSize: 12, color: "#F44336", fontWeight: "500", lineHeight: 1.5 }}>
            *Please note that this is the consultation fee only
          </p>

          {/* Divider */}
          <div style={{ height: 1, backgroundColor: "#F2F2F7", marginBottom: 16 }} />

          {/* Total */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
            <span style={{ fontSize: 15, fontWeight: "700", color: "#1a1a1a" }}>Total</span>
            <span style={{ fontSize: 15, fontWeight: "800", color: "#1a1a1a" }}>Rs 4000</span>
          </div>

          {/* Payment method row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", backgroundColor: "#F8F8FC", borderRadius: 12, marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"/>
                <line x1="2" y1="10" x2="22" y2="10"/>
              </svg>
              <span style={{ fontSize: 14, fontWeight: "600", color: "#1a1a1a" }}>Card</span>
            </div>
            <button onClick={onChangePayment} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: "#2196F3", fontWeight: "700", fontFamily: "inherit", padding: 0 }}>
              Change
            </button>
          </div>

        </div>

        {/* Pay Now */}
        <div style={{ padding: "12px 20px 16px", backgroundColor: "#fff", flexShrink: 0, borderTop: "1px solid #F2F2F7" }}>
          <button onClick={onPay} style={{ width: "100%", padding: "15px 0", borderRadius: 50, border: "none", backgroundColor: "#2196F3", color: "#fff", fontSize: 15, fontWeight: "700", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 16px rgba(33,150,243,0.4)" }}>
            Pay Now
          </button>
        </div>

        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}