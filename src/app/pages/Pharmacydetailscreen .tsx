// PharmacyScreen.tsx — Pharmacy detail page (pixel-perfect)
// iPhone 16: 393 × 852px

import { useState } from "react";
import { HomeIndicator, PhoneShell, BackArrow } from "../components/shared";

const PHARMACY_IMG = "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80";

// ── White status bar overlaid on image ───────────────────────────────────────
const WhiteStatusBar = () => (
  <div style={{
    position: "absolute", top: 0, left: 0, right: 0, height: 59,
    display: "flex", alignItems: "flex-end", justifyContent: "space-between",
    paddingLeft: 28, paddingRight: 28, paddingBottom: 10, zIndex: 10,
  }}>
    {/* Dynamic Island */}
    <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 120, height: 34, backgroundColor: "#000", borderRadius: 20 }} />
    <span style={{ fontSize: 15, fontWeight: "600", color: "#fff", letterSpacing: -0.3 }}>9:41</span>
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <svg width="17" height="12" viewBox="0 0 17 12" fill="#fff"><rect x="0" y="7" width="3" height="5" rx="0.5"/><rect x="4.5" y="5" width="3" height="7" rx="0.5"/><rect x="9" y="2.5" width="3" height="9.5" rx="0.5"/><rect x="13.5" y="0" width="3" height="12" rx="0.5"/></svg>
      <svg width="16" height="12" viewBox="0 0 24 18" fill="none"><path d="M1 6.5C4.9 2.5 10.2 0 16 0s11.1 2.5 15 6.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M5 11c2.8-2.8 6.6-4.5 11-4.5s8.2 1.7 11 4.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M9 15.5c1.7-1.7 4-2.7 7-2.7s5.3 1 7 2.7" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="19" r="2" fill="#fff"/></svg>
      <svg width="26" height="13" viewBox="0 0 26 13" fill="none"><rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="rgba(255,255,255,0.55)"/><rect x="2" y="2" width="18" height="9" rx="2" fill="#fff"/><path d="M23.5 4.5v4a2 2 0 0 0 0-4z" fill="rgba(255,255,255,0.4)"/></svg>
    </div>
  </div>
);

// ── Badge chip ────────────────────────────────────────────────────────────────
const Chip = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: 5,
    backgroundColor: "#fff", borderRadius: 20, padding: "5px 11px",
    border: "1.5px solid #D0E8FB",
  }}>
    {icon}
    <span style={{ fontSize: 11, color: "#2196F3", fontWeight: "600" }}>{label}</span>
  </div>
);

interface Props { onBack?: () => void; onOrder?: () => void; }

export default function PharmacyScreen({ onBack, onOrder }: Props) {
  const [, setFileUploaded] = useState(false);

  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      minHeight: "100vh", backgroundColor: "#111",
      fontFamily: "'SF Pro Display',-apple-system,BlinkMacSystemFont,sans-serif",
    }}>
      <PhoneShell>

        {/* ── Hero image (no rounded corners — bleeds to edges) ── */}
        <div style={{ position: "relative", height: 210, flexShrink: 0, overflow: "hidden" }}>
          <img src={PHARMACY_IMG} alt="Pharmacy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          {/* Subtle dark top gradient so status bar is readable */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0) 100%)" }} />

          <WhiteStatusBar />

          {/* Back button — top-left */}
          <button onClick={onBack} style={{
            position: "absolute", top: 66, left: 16,
            width: 36, height: 36, borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.92)", border: "none",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.22)",
          }}>
            <BackArrow />
          </button>

          {/* Share + Heart buttons — top-right */}
          <div style={{ position: "absolute", top: 66, right: 16, display: "flex", gap: 8 }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.92)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.22)",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </div>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              backgroundColor: "#E53935",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.28)",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff" stroke="none">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* ── White content card — curved top overlapping hero image ── */}
        <div style={{
          flex: 1, overflowY: "auto", backgroundColor: "#fff", scrollbarWidth: "none",
          borderTopLeftRadius: 28, borderTopRightRadius: 28,
          marginTop: -26,
          boxShadow: "0 -4px 16px rgba(0,0,0,0.08)",
          position: "relative", zIndex: 2,
        }}>
          <div style={{ padding: "20px 18px 0" }}>

            {/* ── Name row + Call / Map ── */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
              <div>
                <p style={{ margin: 0, fontSize: 17, fontWeight: "800", color: "#1a1a1a", letterSpacing: -0.3 }}>ClinicFlow Pharmacy</p>
                <p style={{ margin: "3px 0 0", fontSize: 12, color: "#999", fontWeight: "400" }}>Internal Drug store</p>
              </div>
              <div style={{ display: "flex", gap: 14, marginTop: 2 }}>
                {/* Call */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", backgroundColor: "#E8F4FD", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.71 3.37a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l1.08-1.08a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: 11, color: "#2196F3", fontWeight: "600" }}>Call</span>
                </div>
                {/* Map */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", backgroundColor: "#E8F4FD", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
                      <line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: 11, color: "#2196F3", fontWeight: "600" }}>Map</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#2196F3">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span style={{ fontSize: 12, color: "#555" }}>Aura Building, Ground Floor</span>
            </div>

            {/* Hours */}
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 18 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#2196F3"><circle cx="12" cy="12" r="10"/></svg>
              <span style={{ fontSize: 12, color: "#555" }}>Mon - Sun | 08:00 AM - 11:00 PM</span>
            </div>

            {/* About */}
            <p style={{ margin: "0 0 6px", fontSize: 14, fontWeight: "700", color: "#1a1a1a" }}>About</p>
            <p style={{ margin: "0 0 14px", fontSize: 12, color: "#777", lineHeight: 1.65 }}>
              Our Internal drugstore offers certified professionals to ensure safe t{" "}
              <span style={{ color: "#2196F3", fontWeight: "600" }}>Read more</span>
            </p>

            {/* Chips row */}
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              <Chip label="Certified" icon={
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              }/>
              <Chip label="HIPAA - compliant" icon={
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              }/>
              <Chip label="15-20 min" icon={
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              }/>
            </div>

            {/* Horizontal divider */}
            <div style={{ height: 1, backgroundColor: "#EBEBF0", marginBottom: 20 }} />

            {/* Section label */}
            <p style={{ margin: "0 0 10px", fontSize: 10, fontWeight: "700", color: "#BBBBCC", letterSpacing: 1.1, textTransform: "uppercase" }}>
              Order My Prescription
            </p>

            {/* Upload title */}
            <p style={{ margin: "0 0 14px", fontSize: 14, fontWeight: "700", color: "#1a1a1a" }}>Upload your prescription</p>

            {/* Document thumbnail */}
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 58, height: 64, borderRadius: 10,
                border: "1.5px solid #E0E0EE",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                gap: 4, position: "relative", backgroundColor: "#FAFAFE",
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#BBBBCC" strokeWidth="1.5" strokeLinecap="round">
                  <rect x="4" y="2" width="16" height="20" rx="2"/>
                  <line x1="8" y1="8" x2="16" y2="8"/>
                  <line x1="8" y1="12" x2="16" y2="12"/>
                  <line x1="8" y1="16" x2="12" y2="16"/>
                </svg>
                <span style={{ fontSize: 9, color: "#BBBBCC", fontWeight: "500" }}>Doc...</span>
                {/* Gear badge top-right */}
                <div style={{
                  position: "absolute", top: -7, right: -7,
                  width: 18, height: 18, borderRadius: "50%",
                  backgroundColor: "#E8E8F0", border: "1.5px solid #fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5"><circle cx="12" cy="12" r="3"/></svg>
                </div>
              </div>
            </div>

            {/* Upload drop zone */}
            <div style={{
              border: "1.5px solid #DDDDE8",
              borderRadius: 14,
              padding: "24px 18px 20px",
              display: "flex", flexDirection: "column", alignItems: "center",
              gap: 10, marginBottom: 20,
              backgroundColor: "#fff",
            }}>
              {/* Cloud upload icon */}
              <div style={{ width: 52, height: 52, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#BBBBCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 16 12 12 8 16"/>
                  <line x1="12" y1="12" x2="12" y2="21"/>
                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
                </svg>
              </div>
              <p style={{ margin: 0, fontSize: 12, color: "#AAAAAA", textAlign: "center", lineHeight: 1.6 }}>
                Upload the prescription given<br/>by the doctor here
              </p>
              {/* Upload button — full width pill */}
              <button
                onClick={() => setFileUploaded(true)}
                style={{
                  marginTop: 4, width: "100%",
                  padding: "13px 0", borderRadius: 50, border: "none",
                  backgroundColor: "#2196F3", color: "#fff",
                  fontSize: 14, fontWeight: "700", cursor: "pointer",
                  fontFamily: "inherit",
                  boxShadow: "0 4px 12px rgba(33,150,243,0.32)",
                }}
              >
                Upload
              </button>
            </div>

          </div>
        </div>

        {/* ── Order Prescription CTA ──────────────────────── */}
        <div style={{ padding: "12px 18px 16px", backgroundColor: "#fff", flexShrink: 0, borderTop: "1px solid #F2F2F7" }}>
          <button
            onClick={onOrder}
            style={{
              width: "100%", padding: "15px 0", borderRadius: 50, border: "none",
              backgroundColor: "#2196F3", color: "#fff",
              fontSize: 15, fontWeight: "700", cursor: "pointer",
              fontFamily: "inherit",
              boxShadow: "0 4px 16px rgba(33,150,243,0.4)",
            }}
          >
            Order Prescription
          </button>
        </div>

        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}