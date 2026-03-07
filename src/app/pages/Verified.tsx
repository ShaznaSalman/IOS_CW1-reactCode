// src/pages/Verified.tsx
// PhoneVerifiedScreen.tsx

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  PhoneShell,
  StatusBar,
  HomeIndicator,
  CheckIcon,
} from "../components/shared";

interface PhoneVerifiedScreenProps {
  /** Called after 3.5 s auto-redirect, or when the user taps "Continue". */
  onContinue: () => void;
}

export default function PhoneVerifiedScreen({ onContinue }: PhoneVerifiedScreenProps) {
  const navigate = useNavigate();
  // Auto-redirect after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(onContinue, 3500);
    return () => clearTimeout(timer);
  }, [onContinue]);

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
        alignItems: "center", justifyContent: "center", padding: "32px",
      }}>

        {/* Animated check circle */}
        <div style={{
          width: "96px", height: "96px", borderRadius: "50%",
          background: "linear-gradient(135deg, #2a9df4 0%, #1a7fd4 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 8px 30px rgba(42,157,244,0.35)",
          marginBottom: "28px",
          animation: "popIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both",
        }}>
          <CheckIcon />
        </div>

        {/* Heading */}
        <h2 style={{
          fontSize: "24px", fontWeight: "700", color: "#1a1a1a",
          margin: "0 0 12px", letterSpacing: "-0.5px", textAlign: "center",
        }}>
          Phone Number Verified
        </h2>

        {/* Subtitle */}
        <p style={{
          fontSize: "15px", color: "#8e8e93", textAlign: "center",
          lineHeight: "1.55", maxWidth: "240px", margin: 0,
        }}>
          You will be redirected to the main page in a few moments
        </p>

        {/* Bouncing loading dots */}
        <div style={{ display: "flex", gap: "8px", marginTop: "36px" }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: "8px", height: "8px", borderRadius: "50%",
              backgroundColor: "#2a9df4",
              animation: `dotBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
            }} />
          ))}
        </div>

        {/* Optional manual continue tap */}
        <button
          onClick={() => navigate("/home")}
          style={{
            marginTop: "40px", background: "none", border: "none",
            color: "#2a9df4", fontSize: "14px", fontWeight: "600",
            cursor: "pointer", fontFamily: "inherit", padding: "8px 16px",
            borderRadius: "20px",
          }}
        >
          Continue now →
        </button>

      </div>

      <HomeIndicator />

      {/* Keyframe animations */}
      <style>{`
        @keyframes popIn {
          0%   { transform: scale(0);    opacity: 0; }
          100% { transform: scale(1);    opacity: 1; }
        }
        @keyframes dotBounce {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.4; }
          40%           { transform: scale(1);   opacity: 1;   }
        }
      `}</style>
    </PhoneShell>
    </div>
  );
}