// src/pages/LandingPage.tsx
import { StatusBar, HomeIndicator, PhoneShell } from "../components/shared";

export default function SplashScreen() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#e5e5ea",
        fontFamily:
          "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <PhoneShell>
        <StatusBar />

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#ffffff",
          }}
        >
          {/* Bottom wave — diagonal fill: low on left, rises toward right, fades left→right */}
          <svg
            viewBox="0 0 393 260"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "393px",
              height: "260px",
              display: "block",
            }}
          >
            <defs>
              <linearGradient id="waveGrad" x1="00%" y1="10%" x2="70%" y2="100%">
                <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.2"  />
                <stop offset="50%"  stopColor="#ffffff" stopOpacity="0.5"  />
                <stop offset="100%" stopColor="#0a4cf4" stopOpacity="0.7"    />
              </linearGradient>
            </defs>
            {/* Diagonal: starts bottom-left corner, rises to top-right, fills bottom-right area */}
            <path
              d="M0,230 L393,80 L393,260 L0,260 Z"
              fill="url(#waveGrad)"
            />
          </svg>

          {/* Logo + text block — sits above the wave */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 2,
              marginBottom: "110px",
            }}
          >
            {/* Logo image */}
            <img
              src="/src/app/assets/clinic_flow_logo.png"
              alt="Clinic Flow Logo"
              style={{
                width: "400px",
                height: "400px",
                objectFit: "contain",
                marginBottom: "20px",
              }}
            />

            {/* "Welcome to" — medium grey, regular weight, ~18px */}
            <p
              style={{
                margin: "0 0 4px",
                fontSize: "20px",
                fontWeight: "400",
                color: "#888888",
                letterSpacing: "0.2px",
              }}
            >
              Welcome to
            </p>

            {/* "Clinic Flow" — bold italic blue, ~34px */}
            <h1
              style={{
                margin: 0,
                fontSize: "30px",
                fontWeight: "700",
                color: "#1A6FE0",
                letterSpacing: "0px",
                lineHeight: 1.15,
              }}
            >
              Clinic Flow
            </h1>
          </div>
        </div>

        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}