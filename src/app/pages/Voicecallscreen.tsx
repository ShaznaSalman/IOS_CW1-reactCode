// VoiceCallScreen.tsx — Screen 3: Voice Call / QR Scanner
// iPhone 16: 393 × 852px
// Full blue background with centred QR code and camera button

import { StatusBar, HomeIndicator, PhoneShell } from "../components/shared";

// ── QR code built from SVG rectangles (matches design QR pattern) ─────────────
const QRCode = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    {/* White background */}
    <rect width="200" height="200" fill="#fff" />

    {/* ── Top-left position square ── */}
    <rect x="10" y="10" width="56" height="56" rx="4" fill="#1a1a1a"/>
    <rect x="18" y="18" width="40" height="40" rx="2" fill="#fff"/>
    <rect x="26" y="26" width="24" height="24" rx="1" fill="#1a1a1a"/>

    {/* ── Top-right position square ── */}
    <rect x="134" y="10" width="56" height="56" rx="4" fill="#1a1a1a"/>
    <rect x="142" y="18" width="40" height="40" rx="2" fill="#fff"/>
    <rect x="150" y="26" width="24" height="24" rx="1" fill="#1a1a1a"/>

    {/* ── Bottom-left position square ── */}
    <rect x="10" y="134" width="56" height="56" rx="4" fill="#1a1a1a"/>
    <rect x="18" y="142" width="40" height="40" rx="2" fill="#fff"/>
    <rect x="26" y="150" width="24" height="24" rx="1" fill="#1a1a1a"/>

    {/* ── Data modules (centre area pattern) ── */}
    {/* Row 1 */}
    <rect x="76" y="10" width="8" height="8" fill="#1a1a1a"/><rect x="92" y="10" width="8" height="8" fill="#1a1a1a"/><rect x="108" y="10" width="8" height="8" fill="#1a1a1a"/><rect x="124" y="10" width="8" height="8" fill="#1a1a1a"/>
    {/* Row 2 */}
    <rect x="84" y="20" width="8" height="8" fill="#1a1a1a"/><rect x="100" y="20" width="8" height="8" fill="#1a1a1a"/><rect x="116" y="20" width="8" height="8" fill="#1a1a1a"/>
    {/* Row 3 */}
    <rect x="76" y="30" width="8" height="8" fill="#1a1a1a"/><rect x="92" y="30" width="8" height="8" fill="#1a1a1a"/><rect x="108" y="30" width="8" height="8" fill="#1a1a1a"/><rect x="124" y="30" width="8" height="8" fill="#1a1a1a"/>
    {/* Row 4 */}
    <rect x="80" y="42" width="8" height="8" fill="#1a1a1a"/><rect x="96" y="42" width="8" height="8" fill="#1a1a1a"/><rect x="112" y="42" width="8" height="8" fill="#1a1a1a"/>
    {/* Row 5 */}
    <rect x="76" y="54" width="8" height="8" fill="#1a1a1a"/><rect x="100" y="54" width="8" height="8" fill="#1a1a1a"/><rect x="120" y="54" width="8" height="8" fill="#1a1a1a"/>

    {/* Left column data */}
    <rect x="10" y="76" width="8" height="8" fill="#1a1a1a"/><rect x="26" y="76" width="8" height="8" fill="#1a1a1a"/><rect x="42" y="76" width="8" height="8" fill="#1a1a1a"/><rect x="58" y="76" width="8" height="8" fill="#1a1a1a"/>
    <rect x="18" y="88" width="8" height="8" fill="#1a1a1a"/><rect x="34" y="88" width="8" height="8" fill="#1a1a1a"/><rect x="50" y="88" width="8" height="8" fill="#1a1a1a"/>
    <rect x="10" y="100" width="8" height="8" fill="#1a1a1a"/><rect x="26" y="100" width="8" height="8" fill="#1a1a1a"/><rect x="42" y="100" width="8" height="8" fill="#1a1a1a"/><rect x="58" y="100" width="8" height="8" fill="#1a1a1a"/>
    <rect x="18" y="112" width="8" height="8" fill="#1a1a1a"/><rect x="34" y="112" width="8" height="8" fill="#1a1a1a"/><rect x="50" y="112" width="8" height="8" fill="#1a1a1a"/>
    <rect x="10" y="124" width="8" height="8" fill="#1a1a1a"/><rect x="42" y="124" width="8" height="8" fill="#1a1a1a"/><rect x="58" y="124" width="8" height="8" fill="#1a1a1a"/>

    {/* Centre data block */}
    <rect x="76" y="76" width="8" height="8" fill="#1a1a1a"/><rect x="92" y="76" width="8" height="8" fill="#1a1a1a"/><rect x="108" y="76" width="8" height="8" fill="#1a1a1a"/><rect x="124" y="76" width="8" height="8" fill="#1a1a1a"/><rect x="140" y="76" width="8" height="8" fill="#1a1a1a"/>
    <rect x="84" y="88" width="8" height="8" fill="#1a1a1a"/><rect x="100" y="88" width="8" height="8" fill="#1a1a1a"/><rect x="116" y="88" width="8" height="8" fill="#1a1a1a"/><rect x="132" y="88" width="8" height="8" fill="#1a1a1a"/>
    <rect x="76" y="100" width="8" height="8" fill="#1a1a1a"/><rect x="92" y="100" width="8" height="8" fill="#1a1a1a"/><rect x="108" y="100" width="8" height="8" fill="#1a1a1a"/><rect x="124" y="100" width="8" height="8" fill="#1a1a1a"/><rect x="140" y="100" width="8" height="8" fill="#1a1a1a"/>
    <rect x="80" y="112" width="8" height="8" fill="#1a1a1a"/><rect x="96" y="112" width="8" height="8" fill="#1a1a1a"/><rect x="128" y="112" width="8" height="8" fill="#1a1a1a"/><rect x="144" y="112" width="8" height="8" fill="#1a1a1a"/>
    <rect x="76" y="124" width="8" height="8" fill="#1a1a1a"/><rect x="92" y="124" width="8" height="8" fill="#1a1a1a"/><rect x="108" y="124" width="8" height="8" fill="#1a1a1a"/><rect x="136" y="124" width="8" height="8" fill="#1a1a1a"/>

    {/* Right-bottom data */}
    <rect x="134" y="76" width="8" height="8" fill="#1a1a1a"/><rect x="150" y="76" width="8" height="8" fill="#1a1a1a"/><rect x="166" y="76" width="8" height="8" fill="#1a1a1a"/><rect x="182" y="76" width="8" height="8" fill="#1a1a1a"/>
    <rect x="142" y="88" width="8" height="8" fill="#1a1a1a"/><rect x="158" y="88" width="8" height="8" fill="#1a1a1a"/><rect x="174" y="88" width="8" height="8" fill="#1a1a1a"/>
    <rect x="134" y="100" width="8" height="8" fill="#1a1a1a"/><rect x="150" y="100" width="8" height="8" fill="#1a1a1a"/><rect x="182" y="100" width="8" height="8" fill="#1a1a1a"/>
    <rect x="158" y="112" width="8" height="8" fill="#1a1a1a"/><rect x="174" y="112" width="8" height="8" fill="#1a1a1a"/>
    <rect x="134" y="124" width="8" height="8" fill="#1a1a1a"/><rect x="150" y="124" width="8" height="8" fill="#1a1a1a"/><rect x="166" y="124" width="8" height="8" fill="#1a1a1a"/>

    {/* Bottom row data */}
    <rect x="76" y="150" width="8" height="8" fill="#1a1a1a"/><rect x="92" y="150" width="8" height="8" fill="#1a1a1a"/><rect x="108" y="150" width="8" height="8" fill="#1a1a1a"/><rect x="124" y="150" width="8" height="8" fill="#1a1a1a"/><rect x="140" y="150" width="8" height="8" fill="#1a1a1a"/>
    <rect x="84" y="162" width="8" height="8" fill="#1a1a1a"/><rect x="100" y="162" width="8" height="8" fill="#1a1a1a"/><rect x="116" y="162" width="8" height="8" fill="#1a1a1a"/>
    <rect x="76" y="174" width="8" height="8" fill="#1a1a1a"/><rect x="92" y="174" width="8" height="8" fill="#1a1a1a"/><rect x="108" y="174" width="8" height="8" fill="#1a1a1a"/><rect x="132" y="174" width="8" height="8" fill="#1a1a1a"/>
    <rect x="80" y="182" width="8" height="8" fill="#1a1a1a"/><rect x="124" y="182" width="8" height="8" fill="#1a1a1a"/><rect x="140" y="182" width="8" height="8" fill="#1a1a1a"/>
  </svg>
);

interface Props { onCapture?: () => void; }

export default function VoiceCallScreen({ onCapture }: Props) {
  return (
    <div style={{ display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh", backgroundColor:"#111", fontFamily:"'SF Pro Display',-apple-system,BlinkMacSystemFont,sans-serif" }}>
      <PhoneShell>
        {/* Blue status bar */}
        <div style={{
          height:"59px", background:"#1A73E8", display:"flex", alignItems:"flex-end",
          justifyContent:"space-between", paddingLeft:"28px", paddingRight:"28px",
          paddingBottom:"10px", position:"relative", flexShrink:0,
        }}>
          <div style={{ position:"absolute", top:"12px", left:"50%", transform:"translateX(-50%)", width:"120px", height:"34px", backgroundColor:"#000", borderRadius:"20px" }} />
          <span style={{ fontSize:"15px", fontWeight:"600", letterSpacing:"-0.3px", color:"#fff" }}>9:41</span>
          <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
            <svg width="17" height="12" viewBox="0 0 17 12" fill="#fff"><rect x="0" y="7" width="3" height="5" rx="0.5"/><rect x="4.5" y="5" width="3" height="7" rx="0.5"/><rect x="9" y="2.5" width="3" height="9.5" rx="0.5"/><rect x="13.5" y="0" width="3" height="12" rx="0.5"/></svg>
            <svg width="16" height="12" viewBox="0 0 24 18" fill="none"><path d="M1 6.5C4.9 2.5 10.2 0 16 0s11.1 2.5 15 6.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M5 11c2.8-2.8 6.6-4.5 11-4.5s8.2 1.7 11 4.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M9 15.5c1.7-1.7 4-2.7 7-2.7s5.3 1 7 2.7" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="19" r="2" fill="#fff"/></svg>
            {/* Green battery */}
            <svg width="26" height="13" viewBox="0 0 26 13" fill="none"><rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="rgba(255,255,255,0.5)"/><rect x="2" y="2" width="18" height="9" rx="2" fill="#4CAF50"/><path d="M23.5 4.5v4a2 2 0 0 0 0-4z" fill="rgba(255,255,255,0.4)"/></svg>
          </div>
        </div>

        {/* Full blue body */}
        <div style={{ flex:1, background:"linear-gradient(180deg, #1A73E8 0%, #1557C0 100%)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", position:"relative" }}>

          {/* QR code card */}
          <div style={{
            backgroundColor:"#fff", borderRadius:20, padding:20,
            boxShadow:"0 12px 48px rgba(0,0,0,0.35)",
            display:"flex", alignItems:"center", justifyContent:"center",
          }}>
            <QRCode />
          </div>

          {/* Camera capture button */}
          <button
            onClick={onCapture}
            style={{
              position:"absolute", bottom:36,
              width:56, height:56, borderRadius:"50%",
              backgroundColor:"rgba(255,255,255,0.25)",
              border:"2px solid rgba(255,255,255,0.6)",
              display:"flex", alignItems:"center", justifyContent:"center",
              cursor:"pointer",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </button>
        </div>

        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}