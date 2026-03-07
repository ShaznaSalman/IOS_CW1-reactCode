// BookAppointmentScreen.tsx — Book Appointment (Day + Time picker)
// iPhone 16: 393 × 852px

import { useState } from "react";
import { StatusBar, HomeIndicator, PhoneShell, BackArrow } from "../components/shared";

const DOCTOR_IMG = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=160&q=80";

const DAYS = [
  { day: "Today", date: "4 Oct" },
  { day: "Mon",   date: "5 Oct" },
  { day: "Tue",   date: "6 Oct" },
  { day: "Wed",   date: "7 Oct" },
  { day: "Thu",   date: "8 Oct" },
];

const TIMES = ["7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"];

// ── Stat bubble (same style as DoctorDetailScreen) ────────────────────────────
const Stat = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
    <div style={{ width: 46, height: 46, borderRadius: "50%", backgroundColor: "#EAF4FE", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {icon}
    </div>
    <span style={{ fontSize: 12, fontWeight: "800", color: "#2196F3" }}>{value}</span>
    <span style={{ fontSize: 10, color: "#AAA", fontWeight: "500" }}>{label}</span>
  </div>
);

interface Props { onBack?: () => void; onMakeAppointment?: () => void; }

export default function BookAppointmentScreen({ onBack, onMakeAppointment }: Props) {
  const [selDay, setSelDay]   = useState(0);
  const [selTime, setSelTime] = useState(0);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#111", fontFamily: "'SF Pro Display',-apple-system,BlinkMacSystemFont,sans-serif" }}>
      <PhoneShell>
        <StatusBar />

        {/* Nav */}
        <div style={{ backgroundColor: "#fff", padding: "12px 20px 14px", display: "flex", alignItems: "center", borderBottom: "1px solid #F2F2F7", flexShrink: 0, position: "relative" }}>
          <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex" }}><BackArrow /></button>
          <span style={{ fontSize: 17, fontWeight: "700", color: "#1a1a1a", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>Book Appointment</span>
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflowY: "auto", backgroundColor: "#fff", padding: "20px 20px 0", scrollbarWidth: "none" }}>

          {/* Doctor card */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", backgroundColor: "#F8FBFF", borderRadius: 16, marginBottom: 20, border: "1px solid #E8F0FB" }}>
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", overflow: "hidden", border: "3px solid #D6E8F8" }}>
                <img src={DOCTOR_IMG} alt="Doctor" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div style={{ position: "absolute", bottom: 1, right: 1, width: 18, height: 18, borderRadius: "50%", backgroundColor: "#2196F3", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
            </div>
            <div>
              <p style={{ margin: 0, fontSize: 15, fontWeight: "700", color: "#1a1a1a" }}>Dr. Ryan De Silva</p>
              <p style={{ margin: "3px 0 0", fontSize: 12, color: "#888" }}>Cardiology</p>
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 8, marginBottom: 22 }}>
            <Stat value="7,500+" label="Patients" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}/>
            <Stat value="10+" label="Years Exp." icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>}/>
            <Stat value="4.9+" label="Rating" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="#2196F3" stroke="#2196F3" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>}/>
          </div>

          {/* Divider */}
          <div style={{ height: 1, backgroundColor: "#F2F2F7", marginBottom: 16 }} />

          {/* Section label */}
          <p style={{ margin: "0 0 12px", fontSize: 10, fontWeight: "700", color: "#BBBBCC", letterSpacing: 1.1, textTransform: "uppercase" }}>Book Appointment</p>

          {/* Day picker */}
          <p style={{ margin: "0 0 10px", fontSize: 14, fontWeight: "700", color: "#1a1a1a" }}>Day</p>
          <div style={{ display: "flex", gap: 8, marginBottom: 20, overflowX: "auto", scrollbarWidth: "none", paddingBottom: 4 }}>
            {DAYS.map((d, i) => (
              <button key={i} onClick={() => setSelDay(i)} style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                padding: "8px 14px", borderRadius: 50, border: "none", cursor: "pointer",
                backgroundColor: selDay === i ? "#2196F3" : "#F4F6FB",
                color: selDay === i ? "#fff" : "#555",
                flexShrink: 0, fontFamily: "inherit",
                transition: "all 0.15s",
              }}>
                <span style={{ fontSize: 10, fontWeight: "600", marginBottom: 2 }}>{d.day}</span>
                <span style={{ fontSize: 12, fontWeight: "700" }}>{d.date}</span>
              </button>
            ))}
          </div>

          {/* Time picker */}
          <p style={{ margin: "0 0 10px", fontSize: 14, fontWeight: "700", color: "#1a1a1a" }}>Time</p>
          <div style={{ display: "flex", gap: 8, marginBottom: 20, overflowX: "auto", scrollbarWidth: "none", paddingBottom: 4 }}>
            {TIMES.map((t, i) => (
              <button key={i} onClick={() => setSelTime(i)} style={{
                padding: "11px 18px", borderRadius: 50, border: "none", cursor: "pointer",
                backgroundColor: selTime === i ? "#2196F3" : "#F4F6FB",
                color: selTime === i ? "#fff" : "#555",
                fontSize: 13, fontWeight: "700", flexShrink: 0, fontFamily: "inherit",
                whiteSpace: "nowrap", transition: "all 0.15s",
              }}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Make Appointment CTA */}
        <div style={{ padding: "12px 20px 16px", backgroundColor: "#fff", flexShrink: 0, borderTop: "1px solid #F2F2F7" }}>
          <button onClick={onMakeAppointment} style={{ width: "100%", padding: "15px 0", borderRadius: 50, border: "none", backgroundColor: "#2196F3", color: "#fff", fontSize: 15, fontWeight: "700", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 16px rgba(33,150,243,0.4)" }}>
            Make Appointment
          </button>
        </div>

        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}