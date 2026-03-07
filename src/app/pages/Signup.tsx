// src/pages/Signup.tsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BackArrow, GoogleIcon, AppleIcon, StatusBar, HomeIndicator, PhoneShell, PhoneInputField } from "../components/shared";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("Saman Edirimuni");
  const [email, setEmail] = useState("ABC@gmail.com");
  const [phone, setPhone] = useState("(94) 726-0592");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#1a1a1a",
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      <PhoneShell>
        <StatusBar />

        {/* Scrollable Content */}
        <div style={{
          flex: 1,
          overflowY: "auto",
          padding: "0 28px 24px",
          scrollbarWidth: "none",
        }}>
          {/* Back Button */}
          <div onClick={() => navigate("/login")}style={{ marginTop: "8px", marginBottom: "28px", cursor: "pointer" }}>
            <BackArrow />
          </div>

          {/* Header */}
          <div style={{ marginBottom: "32px" }}>
            <h1 style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#1a1a1a",
              margin: "0 0 6px",
              letterSpacing: "-0.8px",
              lineHeight: "1.1",
            }}>
              Create Account
            </h1>
            <p style={{
              fontSize: "14px",
              color: "#8e8e93",
              margin: 0,
              fontWeight: "400",
              letterSpacing: "-0.1px",
            }}>
              Create an account to continue!
            </p>
          </div>

          {/* Form Fields */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

            {/* Full Name */}
            <div>
              <label style={{
                display: "block",
                fontSize: "13.5px",
                fontWeight: "500",
                color: "#1a1a1a",
                marginBottom: "7px",
                letterSpacing: "-0.1px",
              }}>Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  border: `1.5px solid ${focusedField === "name" ? "#2a9df4" : "#e0e0e5"}`,
                  fontSize: "15px",
                  color: "#1a1a1a",
                  outline: "none",
                  boxSizing: "border-box",
                  backgroundColor: "#fafafa",
                  transition: "border-color 0.2s ease",
                  fontFamily: "inherit",
                  letterSpacing: "-0.2px",
                }}
              />
            </div>

            {/* Email */}
            <div>
              <label style={{
                display: "block",
                fontSize: "13.5px",
                fontWeight: "500",
                color: "#1a1a1a",
                marginBottom: "7px",
                letterSpacing: "-0.1px",
              }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  border: `1.5px solid ${focusedField === "email" ? "#2a9df4" : "#e0e0e5"}`,
                  fontSize: "15px",
                  color: "#1a1a1a",
                  outline: "none",
                  boxSizing: "border-box",
                  backgroundColor: "#fafafa",
                  transition: "border-color 0.2s ease",
                  fontFamily: "inherit",
                  letterSpacing: "-0.2px",
                }}
              />
            </div>

            {/* Phone Input */}
            <PhoneInputField value={phone} onChange={setPhone} />
          </div>

          {/* Register Button */}
          <button 
          onClick={() => navigate("/login")}
          style={{
            width: "100%",
            padding: "17px",
            borderRadius: "50px",
            background: "linear-gradient(135deg, #2a9df4 0%, #1a7fd4 100%)",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            marginTop: "32px",
            letterSpacing: "-0.2px",
            boxShadow: "0 6px 20px rgba(42, 157, 244, 0.35)",
            fontFamily: "inherit",
            transition: "transform 0.1s ease, box-shadow 0.1s ease",
          }}
            onMouseDown={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.98)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 3px 12px rgba(42,157,244,0.3)";
            }}
            onMouseUp={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 20px rgba(42,157,244,0.35)";
            }}
          >
            Register
          </button>

          {/* Divider */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            margin: "24px 0",
          }}>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#e0e0e5" }} />
            <span style={{ fontSize: "13px", color: "#8e8e93", fontWeight: "400", whiteSpace: "nowrap" }}>
              Or Sign Up with
            </span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#e0e0e5" }} />
          </div>

          {/* Social Buttons */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
          }}>
            {[<GoogleIcon />, <AppleIcon />].map((icon, i) => (
              <button key={i} style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                border: "1.5px solid #e0e0e5",
                backgroundColor: "#fafafa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background-color 0.15s ease, border-color 0.15s ease",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#f0f0f5";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#c8c8d0";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#fafafa";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#e0e0e5";
                }}
              >
                {icon}
              </button>
            ))}
          </div>

          {/* Login Link */}
          <p style={{
            textAlign: "center",
            fontSize: "13.5px",
            color: "#8e8e93",
            marginTop: "28px",
            letterSpacing: "-0.1px",
          }}>
            Already have an account?{" "}
            <span 
            onClick={() => navigate("/login")}
            style={{
              color: "#2a9df4",
              fontWeight: "600",
              cursor: "pointer",
            }}>
              Login
            </span>
          </p>
        </div>

        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}