// ServicesScreen.tsx — Clinic Flow Services (Doctor | Lab | Pharmacy)
// iPhone 16: 393 × 852px
// Props:
//   initialTab?: "Doctor" | "Lab" | "Pharmacy"  (default "Doctor")
//   onBack?:     () => void

import { useState } from "react";
import { StatusBar, HomeIndicator, PhoneShell, BackArrow, BottomNav } from "../components/shared";

type Tab = "Doctor" | "Lab" | "Pharmacy";

// ── Placeholder images ────────────────────────────────────────────────────────
const IMG = {
  doc1:      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80",
  doc2:      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80",
  doc3:      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&q=80",
  xray:      "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=400&q=80",
  ctScan:    "https://images.unsplash.com/photo-1516069677018-378515003435?w=400&q=80",
  blood:     "https://images.unsplash.com/photo-1579165466741-7f35e4755169?w=400&q=80",
  pharmacy1: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80",
  pharmacy2: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
};

// ── Verified badge ────────────────────────────────────────────────────────────
const VerifiedBadge = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 4, backgroundColor: "#E3F2FD", borderRadius: 6, padding: "3px 8px", alignSelf: "flex-start" }}>
    <svg width="10" height="10" viewBox="0 0 24 24" fill="#2196F3">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span style={{ fontSize: 10, color: "#2196F3", fontWeight: "700" }}>Proffesional Doctor</span>
  </div>
);

// ── Star row ──────────────────────────────────────────────────────────────────
const Stars = ({ count = 5, filled = 4, rating = 4.8 }: { count?: number; filled?: number; rating?: number }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < filled ? "#FFC107" : "#DDD"}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
    <span style={{ fontSize: 12, fontWeight: "700", color: "#555", marginLeft: 3 }}>{rating}</span>
  </div>
);

// ── Status pill ───────────────────────────────────────────────────────────────
const StatusPill = ({ open }: { open: boolean }) => (
  <div style={{ position: "absolute", top: 10, right: 10, backgroundColor: open ? "#4CAF50" : "#F44336", borderRadius: 6, padding: "3px 10px" }}>
    <span style={{ fontSize: 11, color: "#fff", fontWeight: "700" }}>{open ? "OPEN" : "CLOSED"}</span>
  </div>
);

// ── Heart icon button ─────────────────────────────────────────────────────────
const HeartBtn = ({ filled = false }: { filled?: boolean }) => (
  <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: filled ? "#FFEBEE" : "#fff", border: "1px solid #eee", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
    <svg width="15" height="15" viewBox="0 0 24 24" fill={filled ? "#E53935" : "none"} stroke={filled ? "#E53935" : "#CCC"} strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  </div>
);

// ── Doctor list card ──────────────────────────────────────────────────────────
const DoctorCard = ({ name, specialty, img, favored = false }: { name: string; specialty: string; img: string; favored?: boolean }) => (
  <div style={{ backgroundColor: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", padding: 14, marginBottom: 12 }}>
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      {/* Photo */}
      <div style={{ width: 78, height: 78, borderRadius: 14, overflow: "hidden", flexShrink: 0, backgroundColor: "#D6E8F5" }}>
        <img src={img} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
      </div>
      {/* Info */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <VerifiedBadge />
          <HeartBtn filled={favored} />
        </div>
        <p style={{ margin: 0, fontSize: 15, fontWeight: "700", color: "#1a1a1a" }}>{name}</p>
        <p style={{ margin: 0, fontSize: 12, color: "#999" }}>{specialty}</p>
        <Stars />
      </div>
    </div>
    <button style={{ width: "100%", marginTop: 12, padding: "11px 0", borderRadius: 10, backgroundColor: "#EAF5FE", border: "none", color: "#2196F3", fontSize: 14, fontWeight: "700", cursor: "pointer", fontFamily: "inherit", letterSpacing: -0.1 }}>
      Make Appointment
    </button>
  </div>
);

// ── Lab / image card ──────────────────────────────────────────────────────────
const ImageCard = ({ name, category, location, hours, open, img }: {
  name: string; category: string; location: string; hours: string; open: boolean; img: string;
}) => (
  <div style={{ backgroundColor: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", overflow: "hidden", marginBottom: 12 }}>
    <div style={{ height: 130, position: "relative", overflow: "hidden" }}>
      <img src={img} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <StatusPill open={open} />
      {/* Heart */}
      <div style={{ position: "absolute", top: 10, left: 10 }}>
        <HeartBtn />
      </div>
    </div>
    <div style={{ padding: "12px 14px" }}>
      <p style={{ margin: "0 0 2px", fontSize: 15, fontWeight: "700", color: "#1a1a1a" }}>{name}</p>
      <p style={{ margin: "0 0 9px", fontSize: 12, color: "#999" }}>{category}</p>
      <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 5 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#2196F3"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
        <span style={{ fontSize: 12, color: "#555" }}>{location}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="#2196F3"><circle cx="12" cy="12" r="10" /></svg>
        <span style={{ fontSize: 12, color: "#555" }}>{hours}</span>
      </div>
    </div>
  </div>
);

// ── Main screen ───────────────────────────────────────────────────────────────
interface ServicesScreenProps {
  initialTab?: Tab;
  onBack?: () => void;
}

export default function ServicesScreen({ initialTab = "Doctor", onBack }: ServicesScreenProps) {
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#111" }}>
      <PhoneShell>
        <StatusBar />

        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 18px 0", backgroundColor: "#fff", flexShrink: 0 }}>
          <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", alignItems: "center" }}>
            <BackArrow />
          </button>
          <span style={{ fontSize: 17, fontWeight: "700", color: "#1a1a1a", letterSpacing: -0.3 }}>Services</span>
          <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          </div>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", backgroundColor: "#fff", borderBottom: "1.5px solid #F0F0F5", flexShrink: 0, padding: "0 18px" }}>
          {(["Doctor", "Lab", "Pharmacy"] as Tab[]).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              flex: 1, padding: "12px 0 10px", border: "none", background: "none", cursor: "pointer",
              fontSize: 14, fontWeight: activeTab === tab ? "700" : "500",
              color: activeTab === tab ? "#2196F3" : "#999",
              borderBottom: activeTab === tab ? "2.5px solid #2196F3" : "2.5px solid transparent",
              fontFamily: "inherit", transition: "color 0.18s",
            }}>
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", backgroundColor: "#F4F6FB", padding: "16px 18px", scrollbarWidth: "none" }}>

          {activeTab === "Doctor" && (
            <>
              <DoctorCard name="Dr. Jayaani Dennis"   specialty="Physiologist"  img={IMG.doc1} favored />
              <DoctorCard name="Dr. Ryan De Silva"     specialty="Cardiologist"  img={IMG.doc2} />
              <DoctorCard name="Dr. Sarath Fernando"   specialty="Dentist"       img={IMG.doc3} />
            </>
          )}

          {activeTab === "Lab" && (
            <>
              <ImageCard name="X - Ray"   category="Radiology, Skeletal"        location="Ground Floor, B - Wing" hours="Mon - Sat | 10:00 AM - 08:00 PM" open img={IMG.xray} />
              <ImageCard name="CT Scan"   category="Radiology, Internal Organs"  location="Ground Floor, A - Wing" hours="Mon - Sat | 11:00 AM - 05:00 PM" open={false} img={IMG.ctScan} />
              <ImageCard name="Blood Test" category="Hematology, General"        location="Level 2, C - Wing"      hours="Mon - Sun | 07:00 AM - 09:00 PM" open img={IMG.blood} />
            </>
          )}

          {activeTab === "Pharmacy" && (
            <>
              <ImageCard name="Clinic Flow Pharmacy" category="Internal Drugstore" location="Aura Building, Ground Floor" hours="Mon - Sun | 08:00 AM - 11:00 PM" open img={IMG.pharmacy1} />
              <ImageCard name="MedPlus Pharmacy"      category="Retail Pharmacy"    location="Block B, Level 1"           hours="Mon - Sat | 09:00 AM - 10:00 PM" open img={IMG.pharmacy2} />
            </>
          )}

        </div>

        <BottomNav active="Services" />
        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}