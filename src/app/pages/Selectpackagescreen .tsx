// SelectPackageScreen.tsx — Select Consultation Package
// iPhone 16: 393 × 852px

import { useState } from "react";
import { StatusBar, HomeIndicator, PhoneShell, BackArrow } from "../components/shared";

// ── Package option ─────────────────────────────────────────────────────────────
interface Package {
  id: string;
  label: string;
  description: string;
  price: string;
  duration: string;
  icon: React.ReactNode;
}

const PACKAGES: Package[] = [
  {
    id: "report",
    label: "Report review",
    description: "Video Call with Doctor",
    price: "Rs 500",
    duration: "/15 mins",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    id: "voice",
    label: "Voice Call",
    description: "Voice call with doctor",
    price: "Rs 2000",
    duration: "/15 mins",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.71 3.37a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l1.08-1.08a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    id: "video",
    label: "Video Call",
    description: "Video call with doctor",
    price: "Rs 3000",
    duration: "/30 mins",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
  },
  {
    id: "visiting",
    label: "Visiting",
    description: "Meeting up with the doctor",
    price: "Rs 4000",
    duration: "/30 mins",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
];

// ── Radio circle ──────────────────────────────────────────────────────────────
const Radio = ({ selected }: { selected: boolean }) => (
  <div style={{
    width: 22, height: 22, borderRadius: "50%",
    border: `2px solid ${selected ? "#2196F3" : "#D0D0E0"}`,
    backgroundColor: selected ? "#2196F3" : "#fff",
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
  }}>
    {selected && <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#fff" }} />}
  </div>
);

interface Props { onBack?: () => void; onNext?: () => void; }

export default function SelectPackageScreen({ onBack, onNext }: Props) {
  const [selected, setSelected] = useState("visiting");

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#111", fontFamily: "'SF Pro Display',-apple-system,BlinkMacSystemFont,sans-serif" }}>
      <PhoneShell>
        <StatusBar />

        {/* Nav */}
        <div style={{ backgroundColor: "#fff", padding: "12px 20px 14px", display: "flex", alignItems: "center", borderBottom: "1px solid #F2F2F7", flexShrink: 0, position: "relative" }}>
          <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex" }}><BackArrow /></button>
          <span style={{ fontSize: 17, fontWeight: "700", color: "#1a1a1a", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>Select Package</span>
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflowY: "auto", backgroundColor: "#fff", padding: "24px 20px 0", scrollbarWidth: "none" }}>
          <p style={{ margin: "0 0 20px", fontSize: 17, fontWeight: "700", color: "#1a1a1a" }}>Select Package</p>

          {/* Package list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {PACKAGES.map(pkg => (
              <button
                key={pkg.id}
                onClick={() => setSelected(pkg.id)}
                style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "16px 16px",
                  borderRadius: 14,
                  border: `1.5px solid ${selected === pkg.id ? "#2196F3" : "#E8E8F0"}`,
                  backgroundColor: selected === pkg.id ? "#F0F8FF" : "#fff",
                  cursor: "pointer", textAlign: "left", fontFamily: "inherit",
                  transition: "all 0.15s",
                }}
              >
                {/* Icon bubble */}
                <div style={{ width: 46, height: 46, borderRadius: 12, backgroundColor: "#EAF4FE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {pkg.icon}
                </div>

                {/* Label + description */}
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: "700", color: "#1a1a1a" }}>{pkg.label}</p>
                  <p style={{ margin: "3px 0 0", fontSize: 12, color: "#AAA" }}>{pkg.description}</p>
                </div>

                {/* Price + radio */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
                    <span style={{ fontSize: 14, fontWeight: "700", color: "#1a1a1a" }}>{pkg.price}</span>
                    <span style={{ fontSize: 11, color: "#AAA" }}>{pkg.duration}</span>
                  </div>
                  <Radio selected={selected === pkg.id} />
                </div>
              </button>
            ))}
          </div>

          <div style={{ height: 20 }} />
        </div>

        {/* Next CTA */}
        <div style={{ padding: "12px 20px 16px", backgroundColor: "#fff", flexShrink: 0, borderTop: "1px solid #F2F2F7" }}>
          <button onClick={onNext} style={{ width: "100%", padding: "15px 0", borderRadius: 50, border: "none", backgroundColor: "#2196F3", color: "#fff", fontSize: 15, fontWeight: "700", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 16px rgba(33,150,243,0.4)" }}>
            Next
          </button>
        </div>

        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}