// src/pages/verifyOTP.tsx
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  PhoneShell,
  StatusBar,
  HomeIndicator,
  BackArrow,
} from "../components/shared";

export default function PhoneVerificationScreen() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    if (value && index < 5) inputRefs.current[index + 1]?.focus();
    if (next.every(d => d !== "") && next.join("").length === 6) {
      setTimeout(() => navigate("/verified"), 300);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent outer div click
    setOtp(["", "", "", "", "", ""]);
    setResendTimer(30);
    setTimeout(() => inputRefs.current[0]?.focus(), 50);
  };

  useEffect(() => {
    if (resendTimer > 0) {
      const t = setTimeout(() => setResendTimer(r => r - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [resendTimer]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#1a1a1a",
        cursor: "pointer",
      }}
      onClick={() => navigate("/verified")}
    >
      <PhoneShell>
        <StatusBar />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "16px 0 0" }}>

          {/* Nav bar */}
          <div style={{ display: "flex", alignItems: "center", paddingLeft: "20px", marginBottom: "40px" }}>
            <button
              onClick={e => {
                e.stopPropagation(); // ← prevents bubbling to outer div
                navigate("/login");
              }}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "8px", borderRadius: "50%", display: "flex",
              }}
            >
              <BackArrow />
            </button>
            <span style={{
              fontSize: "17px", fontWeight: "600", color: "#1a1a1a",
              marginLeft: "60px", letterSpacing: "-0.3px",
            }}>
              Phone Verification
            </span>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "0 32px" }}>

            {/* Subtitle */}
            <p style={{
              fontSize: "15px", color: "#555", textAlign: "center",
              lineHeight: "1.55", marginBottom: "40px", maxWidth: "260px",
            }}>
              Enter 6 digit verification code sent to your phone number
            </p>

            {/* OTP inputs — stop propagation so typing doesn't trigger nav */}
            <div
              style={{ display: "flex", gap: "10px", marginBottom: "36px" }}
              onClick={e => e.stopPropagation()}
            >
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={el => { inputRefs.current[i] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={e => handleChange(i, e.target.value)}
                  onKeyDown={e => handleKeyDown(i, e)}
                  style={{
                    width: "44px", height: "52px", textAlign: "center",
                    fontSize: "20px", fontWeight: "600", color: "#1a1a1a",
                    border: "1.5px solid",
                    borderColor: digit ? "#2a9df4" : "#d0d0d8",
                    borderRadius: "10px", outline: "none",
                    backgroundColor: "#fafafa", fontFamily: "inherit",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    boxShadow: digit ? "0 0 0 3px rgba(42,157,244,0.1)" : "none",
                    cursor: "text",
                  }}
                />
              ))}
            </div>

            {/* Resend Code */}
            <button
              onClick={handleResend}
              disabled={resendTimer > 0}
              style={{
                background: "none", border: "none",
                cursor: resendTimer > 0 ? "default" : "pointer",
                color: resendTimer > 0 ? "#aaa" : "#2a9df4",
                fontSize: "15px", fontWeight: "600",
                fontFamily: "inherit", padding: "4px",
                transition: "color 0.2s",
              }}
            >
              {resendTimer > 0 ? `Resend Code (${resendTimer}s)` : "Resend Code"}
            </button>

          </div>
        </div>

        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}