// MapScreen.tsx — Clinic Flow Map (hospital floor plan)
// iPhone 16: 393 × 852px

import { StatusBar, HomeIndicator, PhoneShell, BottomNav } from "../components/shared";

export default function MapScreen() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#111" }}>
      <PhoneShell>
        <StatusBar />

        {/* Search bar */}
        <div style={{ backgroundColor: "#fff", padding: "10px 16px 12px", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: 9, alignItems: "center" }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 8, backgroundColor: "#F5F5FA", borderRadius: 12, padding: "10px 14px", border: "1px solid #EBEBF0" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#BBBBCC" strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              <span style={{ fontSize: 14, color: "#BBBBCC" }}>Search Doctor, Hospital</span>
            </div>
            <div style={{ width: 42, height: 42, borderRadius: 11, backgroundColor: "#2196F3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 12px rgba(33,150,243,0.38)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
                <circle cx="5" cy="6" r="1.8" fill="#fff" stroke="none" />
                <circle cx="12" cy="12" r="1.8" fill="#fff" stroke="none" />
                <circle cx="19" cy="18" r="1.8" fill="#fff" stroke="none" />
                <line x1="7" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="10" y2="12" />
                <line x1="14" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="17" y2="18" />
              </svg>
            </div>
          </div>
        </div>

        {/* Floor plan map */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden", backgroundColor: "#F0F0F0" }}>
          {/* Floor plan SVG */}
          <svg width="393" height="100%" viewBox="0 0 393 650" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>

            {/* Background */}
            <rect width="393" height="650" fill="#EBEBEB" />

            {/* ── Outer hospital boundary ── */}
            <rect x="20" y="20" width="353" height="590" rx="4" fill="#F8F8F8" stroke="#CCC" strokeWidth="1.5" />

            {/* ── Corridors / hallways ── */}
            {/* Horizontal main corridor */}
            <rect x="20" y="290" width="353" height="36" fill="#E2E2E2" stroke="#CCC" strokeWidth="1" />
            {/* Vertical left corridor */}
            <rect x="20" y="20" width="36" height="590" fill="#E2E2E2" stroke="#CCC" strokeWidth="1" />
            {/* Vertical right corridor */}
            <rect x="337" y="20" width="36" height="590" fill="#E2E2E2" stroke="#CCC" strokeWidth="1" />

            {/* ── Top-left area: AD ROOM ── */}
            <rect x="56" y="20" width="100" height="120" rx="2" fill="#fff" stroke="#CCC" strokeWidth="1" />
            <text x="106" y="85" textAnchor="middle" fontSize="9" fill="#888" fontWeight="600">AD ROOM</text>

            {/* ── Top-middle: SPECIAL WARD-1 ── */}
            <rect x="156" y="20" width="120" height="120" rx="2" fill="#fff" stroke="#CCC" strokeWidth="1" />
            <text x="216" y="85" textAnchor="middle" fontSize="9" fill="#888" fontWeight="600">SPECIAL WARD-1</text>

            {/* ── Top-right rooms ── */}
            <rect x="276" y="20" width="61" height="60" rx="2" fill="#fff" stroke="#CCC" strokeWidth="1" />
            <text x="306" y="54" textAnchor="middle" fontSize="8" fill="#888">ROOM</text>
            <rect x="276" y="80" width="61" height="60" rx="2" fill="#fff" stroke="#CCC" strokeWidth="1" />
            <text x="306" y="114" textAnchor="middle" fontSize="8" fill="#888">ROOM</text>

            {/* ── Middle-left: DOCTOR ROOM ── */}
            <rect x="56" y="140" width="90" height="150" rx="2" fill="#fff" stroke="#CCC" strokeWidth="1" />
            <text x="101" y="218" textAnchor="middle" fontSize="9" fill="#888" fontWeight="600">DOCTOR</text>
            <text x="101" y="230" textAnchor="middle" fontSize="9" fill="#888" fontWeight="600">ROOM</text>

            {/* ── Middle-center: WAITING HALL ── */}
            <rect x="146" y="140" width="130" height="150" rx="2" fill="#fff" stroke="#CCC" strokeWidth="1" />
            <text x="211" y="218" textAnchor="middle" fontSize="9" fill="#888" fontWeight="600">WAITING HALL</text>

            {/* ── Middle-right: SPECIAL WARD-2 ── */}
            <rect x="276" y="140" width="61" height="150" rx="2" fill="#fff" stroke="#CCC" strokeWidth="1" />
            <text x="306" y="218" textAnchor="middle" fontSize="8" fill="#888" fontWeight="600">SPECIAL</text>
            <text x="306" y="230" textAnchor="middle" fontSize="8" fill="#888" fontWeight="600">WARD-2</text>

            {/* ── LIFT ── */}
            <rect x="56" y="326" width="50" height="50" rx="2" fill="#fff" stroke="#CCC" strokeWidth="1" />
            <text x="81" y="355" textAnchor="middle" fontSize="9" fill="#888" fontWeight="600">LIFT</text>

            {/* ── LOBBY FOR CIRCULATION ── */}
            <rect x="106" y="326" width="170" height="50" rx="2" fill="#fff" stroke="#CCC" strokeWidth="1" />
            <text x="191" y="351" textAnchor="middle" fontSize="9" fill="#888">LOBBY FOR</text>
            <text x="191" y="363" textAnchor="middle" fontSize="9" fill="#888">CIRCULATION</text>

            {/* ── SPECIAL WARD-3 ── */}
            <rect x="276" y="326" width="61" height="50" rx="2" fill="#fff" stroke="#CCC" strokeWidth="1" />
            <text x="306" y="349" textAnchor="middle" fontSize="8" fill="#888">SPECIAL</text>
            <text x="306" y="361" textAnchor="middle" fontSize="8" fill="#888">WARD-3</text>

            {/* ── TOILET rows ── */}
            <rect x="56" y="376" width="50" height="40" rx="2" fill="#fff" stroke="#CCC" strokeWidth="1" />
            <text x="81" y="401" textAnchor="middle" fontSize="8" fill="#888">TOILET</text>
            <rect x="276" y="376" width="61" height="40" rx="2" fill="#fff" stroke="#CCC" strokeWidth="1" />
            <text x="306" y="401" textAnchor="middle" fontSize="8" fill="#888">TOILET</text>

            {/* ── SPECIAL WARD-4 ── */}
            <rect x="106" y="416" width="170" height="100" rx="2" fill="#fff" stroke="#CCC" strokeWidth="1" />
            <text x="191" y="469" textAnchor="middle" fontSize="9" fill="#888" fontWeight="600">SPECIAL WARD-4</text>

            {/* ── Bottom-left: TOILET ── */}
            <rect x="56" y="416" width="50" height="50" rx="2" fill="#fff" stroke="#CCC" strokeWidth="1" />
            <text x="81" y="445" textAnchor="middle" fontSize="8" fill="#888">TOILET</text>

            {/* ── NURSING STATION ── */}
            <rect x="56" y="466" width="50" height="80" rx="2" fill="#fff" stroke="#CCC" strokeWidth="1" />
            <text x="81" y="503" textAnchor="middle" fontSize="7.5" fill="#888">NURSING</text>
            <text x="81" y="515" textAnchor="middle" fontSize="7.5" fill="#888">STATION</text>

            {/* ── Bottom right rooms ── */}
            <rect x="276" y="416" width="61" height="100" rx="2" fill="#fff" stroke="#CCC" strokeWidth="1" />
            <text x="306" y="470" textAnchor="middle" fontSize="8" fill="#888">ROOM</text>

            {/* ── Bottom storage ── */}
            <rect x="106" y="516" width="170" height="80" rx="2" fill="#fff" stroke="#CCC" strokeWidth="1" />
            <text x="191" y="560" textAnchor="middle" fontSize="9" fill="#888">STORAGE</text>

            {/* ── Dimension tick marks ── */}
            <line x1="56" y1="15" x2="156" y2="15" stroke="#999" strokeWidth="0.7" />
            <line x1="56" y1="12" x2="56" y2="18" stroke="#999" strokeWidth="0.7" />
            <line x1="156" y1="12" x2="156" y2="18" stroke="#999" strokeWidth="0.7" />
            <text x="106" y="12" textAnchor="middle" fontSize="7" fill="#999">4.4</text>

            <line x1="156" y1="15" x2="276" y2="15" stroke="#999" strokeWidth="0.7" />
            <line x1="276" y1="12" x2="276" y2="18" stroke="#999" strokeWidth="0.7" />
            <text x="216" y="12" textAnchor="middle" fontSize="7" fill="#999">4.8</text>

            {/* ── Location PIN markers ── */}

            {/* Green pin — AD ROOM area */}
            <g transform="translate(95, 55)">
              <path d="M0 -22 C-10 -22 -16 -14 -16 -7 C-16 4 0 18 0 18 C0 18 16 4 16 -7 C16 -14 10 -22 0 -22Z" fill="#4CAF50" />
              <circle cx="0" cy="-7" r="7" fill="#fff" />
            </g>

            {/* Blue pin — SPECIAL WARD-1 */}
            <g transform="translate(210, 50)">
              <path d="M0 -22 C-10 -22 -16 -14 -16 -7 C-16 4 0 18 0 18 C0 18 16 4 16 -7 C16 -14 10 -22 0 -22Z" fill="#2196F3" />
              <circle cx="0" cy="-7" r="7" fill="#fff" />
              <circle cx="0" cy="-7" r="4" fill="#2196F3" />
            </g>

            {/* Dark pin — middle-left (Doctor Room) */}
            <g transform="translate(125, 175)">
              <path d="M0 -20 C-9 -20 -14 -13 -14 -6 C-14 4 0 16 0 16 C0 16 14 4 14 -6 C14 -13 9 -20 0 -20Z" fill="#37474F" />
              <circle cx="0" cy="-6" r="6" fill="#fff" />
            </g>

            {/* Red pin — Waiting Hall */}
            <g transform="translate(190, 210)">
              <path d="M0 -22 C-10 -22 -16 -14 -16 -7 C-16 4 0 18 0 18 C0 18 16 4 16 -7 C16 -14 10 -22 0 -22Z" fill="#F44336" />
              <circle cx="0" cy="-7" r="7" fill="#fff" />
              <circle cx="0" cy="-7" r="3.5" fill="#F44336" />
            </g>

            {/* Blue pin with inner dot — corridor junction */}
            <g transform="translate(160, 290)">
              <path d="M0 -18 C-8 -18 -13 -11 -13 -5 C-13 4 0 15 0 15 C0 15 13 4 13 -5 C13 -11 8 -18 0 -18Z" fill="#2196F3" />
              <circle cx="0" cy="-5" r="5.5" fill="#fff" />
              <circle cx="0" cy="-5" r="3" fill="#2196F3" />
            </g>

            {/* Small blue dot — lower right */}
            <circle cx="192" cy="300" r="6" fill="#2196F3" />
            <circle cx="192" cy="300" r="3" fill="#fff" />

          </svg>
        </div>

        <BottomNav active="Map" />
        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}