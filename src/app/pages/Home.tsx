// HomeScreen.tsx — Clinic Flow Home (pixel-perfect match)
// iPhone 16: 393 × 852px

import { useNavigate } from "react-router-dom";
import { StatusBar, HomeIndicator, PhoneShell, BottomNav } from "../components/shared";

// ── Placeholder images ────────────────────────────────────────────────────────
const IMG = {
  doctorMale:   "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80",
  doctorFemale: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80",
  lab1: "https://images.unsplash.com/photo-1579165466741-7f35e4755169?w=300&q=80",
  lab2: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=300&q=80",
  avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&q=80",
};

// ── Rating badge ──────────────────────────────────────────────────────────────
const RatingBadge = ({ rating }: { rating: number }) => (
  <div style={{
    position: "absolute", bottom: 8, right: 8,
    backgroundColor: "#fff", borderRadius: 8,
    padding: "2px 7px", display: "flex", alignItems: "center", gap: 3,
    boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
  }}>
    <svg width="10" height="10" viewBox="0 0 24 24" fill="#FFC107">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
    <span style={{ fontSize: 11, fontWeight: "700", color: "#333" }}>{rating}</span>
  </div>
);

// ── Section header with "See All" ─────────────────────────────────────────────
const SectionHeader = ({ title, onSeeAll }: { title: string; onSeeAll?: () => void }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
    <span style={{ fontSize: 18, fontWeight: "800", color: "#1a1a1a", letterSpacing: -0.3 }}>{title}</span>
    <span
      onClick={onSeeAll}
      style={{ fontSize: 13, color: "#2196F3", fontWeight: "600", cursor: onSeeAll ? "pointer" : "default" }}
    >
      See All
    </span>
  </div>
);

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#111" }}>
      <PhoneShell>
        <StatusBar />

        <div style={{ flex: 1, overflowY: "auto", backgroundColor: "#F4F6FB", scrollbarWidth: "none" }}>

          {/* ── White top header ──────────────────────── */}
          <div style={{ backgroundColor: "#fff", padding: "10px 18px 14px" }}>

            {/* Location row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 11 }}>
              <div>
                <p style={{ fontSize: 11, color: "#aaa", margin: 0 }}>Location</p>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 1 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#2a9df4">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span style={{ fontSize: 15, fontWeight: "700", color: "#1a1a1a" }}>Colombo</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                {/* Bell → notifications */}
                <div
                  onClick={() => navigate("/notifications")}
                  style={{ position: "relative", width: 38, height: 38, borderRadius: "50%", backgroundColor: "#F2F2F7", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                  <div style={{ position: "absolute", top: 6, right: 7, width: 8, height: 8, borderRadius: "50%", backgroundColor: "#F44336", border: "1.5px solid #F2F2F7" }} />
                </div>
                {/* EN */}
                <div style={{ width: 38, height: 38, borderRadius: 9, backgroundColor: "#F2F2F7", border: "2px solid #555", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 12, fontWeight: "800", color: "#333", letterSpacing: 0.5 }}>EN</span>
                </div>
              </div>
            </div>

            {/* Search bar */}
            <div style={{ display: "flex", gap: 9 }}>
              <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 8, backgroundColor: "#fff", borderRadius: 12, padding: "11px 14px", border: "1.5px solid #E8E8EE" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#BBBBCC" strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                <span style={{ fontSize: 14, color: "#C8C8D0" }}>Search</span>
              </div>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "#2196F3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 12px rgba(33,150,243,0.4)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
                  <circle cx="5" cy="6" r="2" fill="#fff" stroke="none" />
                  <circle cx="12" cy="12" r="2" fill="#fff" stroke="none" />
                  <circle cx="19" cy="18" r="2" fill="#fff" stroke="none" />
                  <line x1="7" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="6" x2="3" y2="6" strokeWidth="3" />
                  <line x1="14" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="12" x2="10" y2="12" />
                  <line x1="3" y1="18" x2="17" y2="18" />
                  <line x1="21" y1="18" x2="21" y2="18" strokeWidth="3" />
                </svg>
              </div>
            </div>
          </div>

          {/* ── Scrollable sections ────────────────────── */}
          <div style={{ padding: "16px 18px 20px", display: "flex", flexDirection: "column", gap: 22 }}>

            {/* Current Appointment */}
            <div>
              <SectionHeader title="Current Appointment" />
              <div style={{
                borderRadius: 20,
                background: "#2ECC88",
                padding: "18px 18px 0",
                color: "#fff",
                boxShadow: "0 6px 24px rgba(46,204,136,0.4)",
                overflow: "hidden",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <div style={{ width: 50, height: 50, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2.5px solid rgba(255,255,255,0.6)" }}>
                      <img src={IMG.avatar} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: 16, fontWeight: "800", letterSpacing: -0.2 }}>Dr. Nayanathara</p>
                      <p style={{ margin: "3px 0 0", fontSize: 13, opacity: 0.9 }}>Cardio Consultation</p>
                    </div>
                  </div>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ECC88" strokeWidth="2.2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.71 3.37a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l1.08-1.08a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                </div>
                <div style={{ backgroundColor: "rgba(0,0,0,0.18)", borderRadius: "0 0 16px 16px", margin: "0 -18px", padding: "12px 18px", display: "flex", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7, flex: 1 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    <span style={{ fontSize: 13, fontWeight: "500" }}>Monday, 25 Mar</span>
                  </div>
                  <div style={{ width: 1, height: 18, backgroundColor: "rgba(255,255,255,0.3)", margin: "0 14px" }} />
                  <div style={{ display: "flex", alignItems: "center", gap: 7, flex: 1 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    <span style={{ fontSize: 13, fontWeight: "500" }}>09:00 - 10:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Find what you need */}
            <div>
              <SectionHeader title="Find what you need" />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {[
                  {
                    label: "Emergency",
                    icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="#2196F3"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-2 9h-4v4h-2v-4H7v-2h4V6h2v4h4v2z"/></svg>,
                    path: null,
                  },
                  {
                    label: "Doctors",
                    icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="6" r="3" /><path d="M8 10a4 4 0 0 0-4 4v1h4v-1c0-.7.1-1.4.3-2" /><path d="M16 10a4 4 0 0 1 4 4v1h-4v-1c0-.7-.1-1.4-.3-2" /><path d="M12 10v4" /><circle cx="16" cy="17" r="3" fill="none" /><path d="M14.5 17h3M16 15.5v3" strokeWidth="1.6" /></svg>,
                    path: "/services/doctor",
                  },
                  {
                    label: "Labs",
                    icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v8.5L5 17a2 2 0 0 0 1.8 2.9h10.4A2 2 0 0 0 19 17l-4-5.5V3" /><line x1="6.5" y1="3" x2="17.5" y2="3" /><circle cx="10" cy="15" r="1" fill="#2196F3" /><circle cx="13" cy="17" r="0.8" fill="#2196F3" /></svg>,
                    path: "/services/lab",
                  },
                  {
                    label: "Pharmacy",
                    icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" /><path d="M3 9l2-5h14l2 5" /><line x1="12" y1="12" x2="12" y2="17" /><line x1="9.5" y1="14.5" x2="14.5" y2="14.5" /></svg>,
                    path: "/services/pharmacy",
                  },
                ].map(c => (
                  <div
                    key={c.label}
                    onClick={() => c.path && navigate(c.path)}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 9, cursor: c.path ? "pointer" : "default" }}
                  >
                    <div style={{ width: 66, height: 66, borderRadius: "50%", backgroundColor: "#EAF4FE", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {c.icon}
                    </div>
                    <span style={{ fontSize: 12, color: "#333", fontWeight: "600" }}>{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Doctors */}
            <div>
              {/* See All → /services/doctor */}
              <SectionHeader title="Today's Doctors" onSeeAll={() => navigate("/services/doctor")} />
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { name: "Dr. Sarath Dassanayake", sub: "MBBA,CEO,WWE", rating: 4.3, img: IMG.doctorMale,   bg: "#D6E8F5" },
                  { name: "Dr. Amila Herath",       sub: "MBBA,CEO",     rating: 4.7, img: IMG.doctorFemale, bg: "#E8E8F2" },
                ].map((doc, i) => (
                  <div
                    key={i}
                    onClick={() => navigate("/services/doctor/ryan-de-silva")}
                    style={{ flex: 1, borderRadius: 16, backgroundColor: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", overflow: "hidden", cursor: "pointer" }}
                  >
                    <div style={{ height: 110, backgroundColor: doc.bg, position: "relative", overflow: "hidden" }}>
                      <img src={doc.img} alt={doc.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                      <RatingBadge rating={doc.rating} />
                    </div>
                    <div style={{ padding: "9px 10px 12px" }}>
                      <p style={{ margin: 0, fontSize: 12, fontWeight: "700", color: "#1a1a1a", lineHeight: 1.35 }}>{doc.name}</p>
                      <p style={{ margin: "3px 0 0", fontSize: 10, color: "#aaa" }}>{doc.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Labs */}
            <div>
              {/* See All → /services/lab */}
              <SectionHeader title="Labs" onSeeAll={() => navigate("/services/lab")} />
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { name: "Blood Test", time: "15 min", dist: "1.5km", rating: 4.8, img: IMG.lab1 },
                  { name: "MRI",        time: "10 min", dist: "2.5km", rating: 4.6, img: IMG.lab2 },
                ].map((lab, i) => (
                  <div
                    key={i}
                    onClick={() => navigate("/services/lab/xray")}
                    style={{ flex: 1, borderRadius: 16, backgroundColor: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", overflow: "hidden", cursor: "pointer" }}
                  >
                    <div style={{ height: 92, position: "relative", overflow: "hidden" }}>
                      <img src={lab.img} alt={lab.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      <RatingBadge rating={lab.rating} />
                    </div>
                    <div style={{ padding: "9px 10px 12px" }}>
                      <p style={{ margin: 0, fontSize: 13, fontWeight: "700", color: "#1a1a1a" }}>{lab.name}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 5 }}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="#2a9df4"><circle cx="12" cy="12" r="10" /></svg>
                        <span style={{ fontSize: 11, color: "#888" }}>{lab.time} · {lab.dist}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        <BottomNav active="Home" />
        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}