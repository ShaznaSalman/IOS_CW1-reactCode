// shared.tsx
// Shared components, icons, and layout primitives for the Clinic Flow app.
// Used by: LoginScreen, PhoneVerificationScreen, PhoneVerifiedScreen,
//          HomeScreen, ServicesScreen

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// ─── Icons ────────────────────────────────────────────────────────────────────

export const BackArrow = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

export const GoogleIcon = () => (
  <img
    src="/src/app/assets/google_logo.jpg"
    alt="Google"
    style={{ width: "20px", height: "20px", objectFit: "contain" }}
  />
);

export const AppleIcon = () => (
  <img
    src="/src/app/assets/apple_logo.webp"
    alt="Apple"
    style={{ width: "20px", height: "20px", objectFit: "contain" }}
  />
);

export const CheckIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#fff"
    strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);


// ─── Phone Input Field ────────────────────────────────────────────────────────
// Props:
//   value    — E.164-style string e.g. "94760012123"
//   onChange — (value: string) => void

interface PhoneInputFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export const PhoneInputField = ({ value, onChange }: PhoneInputFieldProps) => {
  const [focused, setFocused] = useState(false);
  const borderColor = focused ? "#2a9df4" : "#e0e0e5";

  return (
    <div style={{ width: "100%" }}>
      <style>{`
        .cf-phone-wrap .react-tel-input .form-control {
          width: 100% !important;
          height: 52px !important;
          font-size: 15px !important;
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
          border-radius: 12px !important;
          border: 1.5px solid ${borderColor} !important;
          background-color: #fafafa !important;
          color: #1a1a1a !important;
          padding-left: 58px !important;
          letter-spacing: -0.1px !important;
          box-shadow: none !important;
          transition: border-color 0.2s !important;
        }
        .cf-phone-wrap .react-tel-input .form-control:focus {
          border-color: #2a9df4 !important;
          box-shadow: none !important;
        }
        .cf-phone-wrap .react-tel-input .flag-dropdown {
          border-radius: 12px 0 0 12px !important;
          border: 1.5px solid ${borderColor} !important;
          border-right: none !important;
          background-color: #fafafa !important;
          transition: border-color 0.2s !important;
        }
        .cf-phone-wrap .react-tel-input .flag-dropdown:hover,
        .cf-phone-wrap .react-tel-input .flag-dropdown.open {
          background-color: #f0f0f5 !important;
          border-radius: 12px 0 0 12px !important;
        }
        .cf-phone-wrap .react-tel-input .selected-flag {
          border-radius: 12px 0 0 12px !important;
          padding: 0 8px 0 12px !important;
        }
        .cf-phone-wrap .react-tel-input .country-list {
          border-radius: 12px !important;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important;
          font-family: 'SF Pro Display', -apple-system, sans-serif !important;
          font-size: 14px !important;
          margin-top: 4px !important;
          max-height: 220px !important;
        }
        .cf-phone-wrap .react-tel-input .country-list .country:hover {
          background-color: #eaf5fe !important;
        }
        .cf-phone-wrap .react-tel-input .country-list .country.highlight {
          background-color: #eaf5fe !important;
        }
      `}</style>

      <div className="cf-phone-wrap">
        <PhoneInput
          country="lk"
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          enableSearch
          searchPlaceholder="Search country..."
          inputProps={{ name: "phone", required: true }}
        />
      </div>
    </div>
  );
};

// ─── iPhone 16 Shell Primitives ───────────────────────────────────────────────

export const StatusBar = () => (
  <div style={{
    height: "59px", background: "#fff", display: "flex", alignItems: "flex-end",
    justifyContent: "space-between", paddingLeft: "28px", paddingRight: "28px",
    paddingBottom: "10px", position: "relative", flexShrink: 0,
  }}>
    {/* Dynamic Island */}
    <div style={{
      position: "absolute", top: "12px", left: "50%", transform: "translateX(-50%)",
      width: "120px", height: "34px", backgroundColor: "#000", borderRadius: "20px",
    }} />

    {/* Time */}
    <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-0.3px" }}>9:41</span>

    {/* Status icons */}
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>

      {/* Signal bars */}
      <svg width="16" height="12" viewBox="0 0 16 12" fill="#1a1a1a">
        <rect x="0"    y="7.5" width="3"   height="4.5" rx="0.8" />
        <rect x="4.3"  y="5"   width="3"   height="7"   rx="0.8" />
        <rect x="8.6"  y="2.5" width="3"   height="9.5" rx="0.8" />
        <rect x="12.9" y="0"   width="3"   height="12"  rx="0.8" />
      </svg>

      {/* WiFi */}
      <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
        <path d="M0.5 4C2.9 1.5 5.5 0 7.5 0S12.1 1.5 14.5 4"
          stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M2.8 6.2C4.2 4.8 5.8 4 7.5 4s3.3 0.8 4.7 2.2"
          stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M5.2 8.4C5.9 7.7 6.7 7.3 7.5 7.3s1.6 0.4 2.3 1.1"
          stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="7.5" cy="10.2" r="1" fill="#1a1a1a" />
      </svg>

      {/* Battery */}
      <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
        <rect x="0.5" y="0.5" width="21" height="11" rx="3.5"
          stroke="#1a1a1a" strokeOpacity="0.35" strokeWidth="1" />
        <rect x="2" y="2" width="16" height="8" rx="2" fill="#1a1a1a" />
        <path d="M22.5 4v4a2 2 0 0 0 0-4z" fill="#1a1a1a" fillOpacity="0.45" />
      </svg>

    </div>
  </div>
);

export const HomeIndicator = () => (
  <div style={{
    height: "34px", display: "flex", alignItems: "center",
    justifyContent: "center", flexShrink: 0, backgroundColor: "#fff",
  }}>
    <div style={{
      width: "134px", height: "5px", backgroundColor: "#1a1a1a",
      borderRadius: "3px", opacity: 0.18,
    }} />
  </div>
);

export const PhoneShell = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    width: "393px", height: "852px", backgroundColor: "#fff", borderRadius: "54px",
    boxShadow: "0 0 0 1px #b0b0b5, 0 30px 80px rgba(0,0,0,0.38), inset 0 0 0 2px #f5f5f5",
    overflow: "hidden", display: "flex", flexDirection: "column", flexShrink: 0,
    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  }}>
    {children}
  </div>
);

// ─── Shared Bottom Navigation Bar ────────────────────────────────────────────
// active: the label of the currently selected tab

export const BottomNav = ({ active }: { active: string }) => {
  const items: { label: string; icon: React.ReactNode }[] = [
    {
      label: "Home",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
          <polyline points="9 21 9 12 15 12 15 21" />
        </svg>
      ),
    },
    {
      label: "Services",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
    },
    {
      label: "Appointments",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      label: "Map",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
          <line x1="8" y1="2" x2="8" y2="18" />
          <line x1="16" y1="6" x2="16" y2="22" />
        </svg>
      ),
    },
    {
      label: "Profile",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
  ];

  return (
    <div style={{
      display: "flex", borderTop: "1px solid #f0f0f5",
      backgroundColor: "#fff", padding: "8px 0 4px", flexShrink: 0,
    }}>
      {items.map(item => {
        const isActive = item.label === active;
        return (
          <div key={item.label} style={{
            flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
            gap: "3px", color: isActive ? "#2a9df4" : "#aaa", cursor: "pointer",
          }}>
            {item.label === "Services" && isActive ? (
              <div style={{
                width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#2a9df4",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", marginTop: "-18px",
                boxShadow: "0 4px 12px rgba(42,157,244,0.4)",
              }}>
                {item.icon}
              </div>
            ) : item.icon}
            <span style={{ fontSize: "10px", fontWeight: isActive ? "600" : "400" }}>
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};