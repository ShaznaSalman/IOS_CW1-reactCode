// LoginScreen.tsx
// Screen 1 of 3 — Login with OTP flow for Clinic Flow app (iPhone 16)
//
// Props:
//   onSendOTP  — called when the user taps "Send OTP", navigates to PhoneVerificationScreen
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  PhoneShell,
  StatusBar,
  HomeIndicator,
  GoogleIcon,
  AppleIcon,
  PhoneInputField,
} from "../components/shared";

interface LoginScreenProps {
  onSendOTP: () => void;
}

export default function LoginScreen({ onSendOTP }: LoginScreenProps) {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("(+94 ) 76 0012 123");
  const [focused, setFocused] = useState(false);

  return (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#1a1a1a",
  }}>
    <PhoneShell>
      <StatusBar />

      <div style={{
        flex: 1, display: "flex", flexDirection: "column",
        alignItems: "center", padding: "16px 32px 0", overflowY: "auto",
      }}>

        {/* Logo */}
        <img
          src="/src/app/assets/clinic_flow_logo.png"
          alt="Clinic Flow Logo"
          style={{ width: "200px", height: "200px", objectFit: "contain" }}
        />

        {/* Title */}
        <h2 style={{
          fontSize: "22px", fontWeight: "700", color: "#1a1a1a",
          margin: "0 0 28px", letterSpacing: "-0.4px",
        }}>
          Login to Your Account
        </h2>

        {/* Phone Input */}
        <PhoneInputField value={phone} onChange={setPhone} />

        {/* Send OTP Button */}
        <button
          onClick={() => navigate("/verify")}
          style={{
            width: "100%", padding: "17px", borderRadius: "50px",
            background: "linear-gradient(135deg, #2a9df4 0%, #1a7fd4 100%)",
            color: "#fff", fontSize: "16px", fontWeight: "700", border: "none",
            cursor: "pointer", marginTop: "24px", letterSpacing: "-0.1px",
            boxShadow: "0 6px 20px rgba(42,157,244,0.35)", fontFamily: "inherit",
            transition: "transform 0.1s, box-shadow 0.1s",
          }}
          onMouseDown={e => {
            e.currentTarget.style.transform = "scale(0.98)";
            e.currentTarget.style.boxShadow = "0 3px 12px rgba(42,157,244,0.3)";
          }}
          onMouseUp={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(42,157,244,0.35)";
          }}
        >
          Send OTP
        </button>

        {/* Divider */}
        <div style={{
          display: "flex", alignItems: "center",
          gap: "14px", margin: "22px 0", width: "100%",
        }}>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#e0e0e5" }} />
          <span style={{ fontSize: "13px", color: "#8e8e93", whiteSpace: "nowrap" }}>
            Or Sign In with
          </span>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#e0e0e5" }} />
        </div>

        {/* Social Buttons */}
        <div style={{ display: "flex", gap: "16px" }}>
          {([<GoogleIcon />, <AppleIcon />] as React.ReactNode[]).map((icon, i) => (
            <button key={i} style={{
              width: "54px", height: "54px", borderRadius: "50%",
              border: "1.5px solid #e0e0e5", backgroundColor: "#fafafa",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              transition: "background-color 0.15s, border-color 0.15s",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = "#f0f0f5";
                e.currentTarget.style.borderColor = "#c8c8d0";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = "#fafafa";
                e.currentTarget.style.borderColor = "#e0e0e5";
              }}
            >
              {icon}
            </button>
          ))}
        </div>

        {/* Create Account */}
        <p style={{ fontSize: "13.5px", color: "#8e8e93", marginTop: "28px" }}>
          Don't have account?{" "}
          <span onClick={() => navigate("/signup")}style={{ color: "#2a9df4", fontWeight: "600", cursor: "pointer" }}>
            Create Account
          </span>
        </p>
      </div>

      <HomeIndicator />
    </PhoneShell>
      </div>
  );
}