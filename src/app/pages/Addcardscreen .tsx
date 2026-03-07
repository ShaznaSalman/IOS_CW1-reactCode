// AddCardScreen.tsx — Add Card for Lab
// iPhone 16: 393 × 852px

import { useState } from "react";
import { StatusBar, HomeIndicator, PhoneShell, BackArrow } from "../components/shared";

// ── Golden bank card visual ───────────────────────────────────────────────────
const BankCard = ({ name, number, expiry }: { name: string; number: string; expiry: string }) => (
  <div style={{
    width: "100%", height: 190, borderRadius: 18,
    background: "linear-gradient(135deg, #C8960C 0%, #E8B84B 30%, #F5D178 55%, #C8960C 80%, #A67800 100%)",
    position: "relative", overflow: "hidden",
    boxShadow: "0 8px 28px rgba(0,0,0,0.32)",
    marginBottom: 24,
  }}>
    {/* Subtle pattern overlay */}
    <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.18) 0%, transparent 60%)" }} />

    {/* PG BANK label */}
    <div style={{ position:"absolute", top:20, left:22, display:"flex", flexDirection:"column" }}>
      <span style={{ fontSize:13, fontWeight:"800", color:"#fff", letterSpacing:1, textShadow:"0 1px 2px rgba(0,0,0,0.3)" }}>PG BANK</span>
    </div>

    {/* GOLD label top-right */}
    <div style={{ position:"absolute", top:20, right:22 }}>
      <span style={{ fontSize:11, fontWeight:"700", color:"rgba(255,255,255,0.85)", letterSpacing:2 }}>GOLD</span>
    </div>

    {/* VISA logo top-right below GOLD */}
    <div style={{ position:"absolute", top:14, right:18 }}>
      <svg width="52" height="18" viewBox="0 0 52 18">
        <text x="0" y="16" fontSize="18" fontWeight="900" fontStyle="italic" fill="rgba(255,255,255,0.9)" fontFamily="serif">VISA</text>
      </svg>
    </div>

    {/* Chip */}
    <div style={{ position:"absolute", top:52, left:22, width:38, height:28, borderRadius:5, background:"linear-gradient(135deg, #D4A017 0%, #F0C040 50%, #D4A017 100%)", border:"1px solid rgba(255,255,255,0.4)", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ width:24, height:18, borderRadius:3, border:"1px solid rgba(255,255,255,0.5)", display:"grid", gridTemplateColumns:"1fr 1fr", gridTemplateRows:"1fr 1fr", gap:2, padding:2 }}>
        {[0,1,2,3].map(i => <div key={i} style={{ backgroundColor:"rgba(255,255,255,0.35)", borderRadius:1 }} />)}
      </div>
    </div>

    {/* Contactless icon */}
    <div style={{ position:"absolute", top:54, left:68 }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 6C8.69 6 6 8.69 6 12" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 10c-1.1 0-2 .9-2 2" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>

    {/* Card number */}
    <div style={{ position:"absolute", top:96, left:22, right:22 }}>
      <span style={{ fontSize:16, fontWeight:"700", color:"#fff", letterSpacing:3, textShadow:"0 1px 3px rgba(0,0,0,0.4)", fontFamily:"monospace" }}>
        {number || "4000  1234  1234  9010"}
      </span>
    </div>

    {/* Expiry + CVV labels */}
    <div style={{ position:"absolute", bottom:42, left:22, display:"flex", flexDirection:"column" }}>
      <span style={{ fontSize:8, color:"rgba(255,255,255,0.7)", fontWeight:"600", letterSpacing:0.5, textTransform:"uppercase" }}>Expiry/10</span>
      <span style={{ fontSize:12, color:"#fff", fontWeight:"700", marginTop:2 }}>01/10</span>
    </div>

    {/* Card holder */}
    <div style={{ position:"absolute", bottom:42, left:100, display:"flex", flexDirection:"column" }}>
      <span style={{ fontSize:8, color:"rgba(255,255,255,0.7)", fontWeight:"600", letterSpacing:0.5, textTransform:"uppercase" }}>Card Holder Name</span>
      <span style={{ fontSize:12, color:"#fff", fontWeight:"700", marginTop:2 }}>{name || "CARD HOLDER NAME"}</span>
    </div>

    {/* VISA bottom-right */}
    <div style={{ position:"absolute", bottom:16, right:18 }}>
      <svg width="56" height="18" viewBox="0 0 56 18">
        <text x="0" y="16" fontSize="18" fontWeight="900" fontStyle="italic" fill="rgba(255,255,255,0.85)" fontFamily="serif">VISA</text>
      </svg>
    </div>

    {/* Bottom light strip */}
    <div style={{ position:"absolute", bottom:0, left:0, right:0, height:32, background:"rgba(0,0,0,0.15)" }} />
  </div>
);

// ── Field label ───────────────────────────────────────────────────────────────
const FieldLabel = ({ text }: { text: string }) => (
  <p style={{ margin:"0 0 8px", fontSize:13, fontWeight:"600", color:"#555" }}>{text}</p>
);

const InputField = ({ value, onChange, placeholder, type = "text" }: {
  value: string; onChange: (v: string) => void; placeholder?: string; type?: string;
}) => (
  <input
    type={type}
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
    style={{
      width:"100%", boxSizing:"border-box",
      padding:"13px 14px", borderRadius:10,
      border:"1.5px solid #E0E0EE", fontSize:14, color:"#1a1a1a",
      outline:"none", fontFamily:"inherit", backgroundColor:"#fff",
      marginBottom:16,
    }}
  />
);

interface Props { onBack?: () => void; onAddCard?: () => void; }

export default function AddCardScreen({ onBack, onAddCard }: Props) {
  const [name, setName]       = useState("Saman Edirimuna");
  const [number, setNumber]   = useState("**** 9876 **** ****");
  const [expiry, setExpiry]   = useState("02/30");
  const [cvv, setCvv]         = useState("");
  const [saveCard, setSaveCard] = useState(true);

  return (
    <div style={{ display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh", backgroundColor:"#111", fontFamily:"'SF Pro Display',-apple-system,BlinkMacSystemFont,sans-serif" }}>
      <PhoneShell>
        <StatusBar />

        {/* Nav */}
        <div style={{ backgroundColor:"#fff", padding:"12px 20px 14px", display:"flex", alignItems:"center", flexShrink:0, borderBottom:"1px solid #F2F2F7", position:"relative" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:4, display:"flex" }}><BackArrow /></button>
          <span style={{ fontSize:17, fontWeight:"700", color:"#1a1a1a", position:"absolute", left:"50%", transform:"translateX(-50%)" }}>Add Card</span>
        </div>

        {/* Body */}
        <div style={{ flex:1, overflowY:"auto", backgroundColor:"#fff", padding:"22px 20px 0", scrollbarWidth:"none" }}>
          <BankCard name={name} number={number} expiry={expiry} />

          <FieldLabel text="Card Holder Name" />
          <InputField value={name} onChange={setName} placeholder="Saman Edirimuna" />

          <FieldLabel text="Card Number" />
          <InputField value={number} onChange={setNumber} placeholder="**** **** **** ****" />

          <div style={{ display:"flex", gap:14 }}>
            <div style={{ flex:1 }}>
              <FieldLabel text="Expiry Date" />
              <InputField value={expiry} onChange={setExpiry} placeholder="02/30" />
            </div>
            <div style={{ flex:1 }}>
              <FieldLabel text="CVV" />
              <InputField value={cvv} onChange={setCvv} placeholder="000" type="password" />
            </div>
          </div>

          {/* Save card checkbox */}
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:24 }}>
            <div
              onClick={() => setSaveCard(!saveCard)}
              style={{
                width:20, height:20, borderRadius:5,
                backgroundColor: saveCard ? "#2196F3" : "#fff",
                border: saveCard ? "none" : "1.5px solid #CCCCDD",
                display:"flex", alignItems:"center", justifyContent:"center",
                cursor:"pointer", flexShrink:0,
              }}
            >
              {saveCard && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
            </div>
            <span style={{ fontSize:13, color:"#555", fontWeight:"500" }}>Save Card</span>
          </div>
        </div>

        {/* Add Card button */}
        <div style={{ padding:"12px 20px 16px", backgroundColor:"#fff", flexShrink:0 }}>
          <button onClick={onAddCard} style={{ width:"100%", padding:"15px 0", borderRadius:50, border:"none", backgroundColor:"#2196F3", color:"#fff", fontSize:15, fontWeight:"700", cursor:"pointer", fontFamily:"inherit", boxShadow:"0 4px 16px rgba(33,150,243,0.4)" }}>
            Add Card
          </button>
        </div>

        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}