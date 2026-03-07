// DoctorDetailScreen.tsx — Doctor Detail View
// iPhone 16: 393 × 852px

import { StatusBar, HomeIndicator, PhoneShell, BackArrow } from "../components/shared";

const DOCTOR_IMG = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=160&q=80";

// ── Stat bubble ───────────────────────────────────────────────────────────────
const Stat = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
    <div style={{ width: 52, height: 52, borderRadius: "50%", backgroundColor: "#EAF4FE", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {icon}
    </div>
    <span style={{ fontSize: 13, fontWeight: "800", color: "#2196F3" }}>{value}</span>
    <span style={{ fontSize: 11, color: "#AAA", fontWeight: "500" }}>{label}</span>
  </div>
);

// ── Working hours row ─────────────────────────────────────────────────────────
const HoursRow = ({ day, hours }: { day: string; hours: string }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
    <span style={{ fontSize: 13, color: "#555", fontWeight: "400" }}>{day}</span>
    <span style={{ fontSize: 13, color: "#1a1a1a", fontWeight: "500" }}>{hours}</span>
  </div>
);

interface Props { onBack?: () => void; onBook?: () => void; onShare?: () => void; onFave?: () => void; }

export default function DoctorDetailScreen({ onBack, onBook }: Props) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#111", fontFamily: "'SF Pro Display',-apple-system,BlinkMacSystemFont,sans-serif" }}>
      <PhoneShell>
        <StatusBar />

        {/* ── Top nav ──────────────────────────────── */}
        <div style={{ backgroundColor: "#fff", padding: "12px 20px 14px", display: "flex", alignItems: "center", borderBottom: "1px solid #F2F2F7", flexShrink: 0, position: "relative" }}>
          <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex" }}><BackArrow /></button>
          <span style={{ fontSize: 17, fontWeight: "700", color: "#1a1a1a", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>Doctor Details</span>
          <div style={{ marginLeft: "auto", display: "flex", gap: 12 }}>
            {/* Share */}
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </button>
            {/* Favourite */}
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
          </div>
        </div>

        {/* ── Scrollable body ───────────────────────── */}
        <div style={{ flex: 1, overflowY: "auto", backgroundColor: "#fff", padding: "20px 20px 0", scrollbarWidth: "none" }}>

          {/* Doctor card */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px", backgroundColor: "#F8FBFF", borderRadius: 16, marginBottom: 22, border: "1px solid #E8F0FB" }}>
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", overflow: "hidden", border: "3px solid #D6E8F8" }}>
                <img src={DOCTOR_IMG} alt="Doctor" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div style={{ position: "absolute", bottom: 1, right: 1, width: 20, height: 20, borderRadius: "50%", backgroundColor: "#2196F3", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
            </div>
            <div>
              <p style={{ margin: 0, fontSize: 16, fontWeight: "700", color: "#1a1a1a" }}>Dr. Ryan De Silva</p>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#888" }}>Cardiologist</p>
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
            <Stat value="7,500+" label="Patients" icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            }/>
            <Stat value="10+" label="Years Exp." icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
            }/>
            <Stat value="4.9+" label="Rating" icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#2196F3" stroke="#2196F3" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            }/>
          </div>

          {/* Divider */}
          <div style={{ height: 1, backgroundColor: "#F2F2F7", marginBottom: 18 }} />

          {/* About */}
          <p style={{ margin: "0 0 8px", fontSize: 15, fontWeight: "700", color: "#1a1a1a" }}>About</p>
          <p style={{ margin: "0 0 20px", fontSize: 13, color: "#777", lineHeight: 1.65 }}>
            Experienced doctor in the field of Cardiology, practising for over 10 years{" "}
            <span style={{ color: "#2196F3", fontWeight: "600" }}>Read more</span>
          </p>

          {/* Divider */}
          <div style={{ height: 1, backgroundColor: "#F2F2F7", marginBottom: 18 }} />

          {/* Working Hours */}
          <p style={{ margin: "0 0 14px", fontSize: 15, fontWeight: "700", color: "#1a1a1a" }}>Working Hours</p>
          <HoursRow day="Monday"  hours="00:00 - 00:00" />
          <HoursRow day="Tuesday" hours="00:00 - 00:00" />
          <HoursRow day="Sunday"  hours="00:00 - 00:00" />
          <div style={{ height: 16 }} />
        </div>

        {/* Book Appointment CTA */}
        <div style={{ padding: "12px 20px 16px", backgroundColor: "#fff", flexShrink: 0, borderTop: "1px solid #F2F2F7" }}>
          <button onClick={onBook} style={{ width: "100%", padding: "15px 0", borderRadius: 50, border: "none", backgroundColor: "#2196F3", color: "#fff", fontSize: 15, fontWeight: "700", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 16px rgba(33,150,243,0.4)" }}>
            Book Appointment
          </button>
        </div>

        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}