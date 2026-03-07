// PaymentScreen.tsx — Lab Payment Methods
// iPhone 16: 393 × 852px

import { useState } from "react";
import { StatusBar, HomeIndicator, PhoneShell, BackArrow } from "../components/shared";

// ── Radio circle ──────────────────────────────────────────────────────────────
const Radio = ({ selected }: { selected: boolean }) => (
  <div style={{
    width:22, height:22, borderRadius:"50%",
    border:`2px solid ${selected ? "#2196F3" : "#DDDDEE"}`,
    backgroundColor: selected ? "#2196F3" : "#fff",
    display:"flex", alignItems:"center", justifyContent:"center",
    flexShrink:0,
  }}>
    {selected && <div style={{ width:8, height:8, borderRadius:"50%", backgroundColor:"#fff" }} />}
  </div>
);

type Method = "card" | "bank" | "cash";

interface Props { onBack?: () => void; onNext?: () => void; }

export default function PaymentScreen({ onBack, onNext }: Props) {
  const [selected, setSelected] = useState<Method>("card");

  const SectionTitle = ({ text }: { text: string }) => (
    <p style={{ margin:"0 0 14px", fontSize:15, fontWeight:"700", color:"#1a1a1a", letterSpacing:-0.2 }}>{text}</p>
  );

  const OptionRow = ({
    id, label, icon, topBorder = false, bottomBorder = false,
  }: { id: Method; label: string; icon: React.ReactNode; topBorder?: boolean; bottomBorder?: boolean }) => (
    <button
      onClick={() => setSelected(id)}
      style={{
        width:"100%", display:"flex", alignItems:"center", gap:14,
        padding:"15px 16px", border:"none", backgroundColor:"#fff",
        borderTop: topBorder ? "1px solid #F2F2F7" : "none",
        borderBottom: bottomBorder ? "1px solid #F2F2F7" : "none",
        cursor:"pointer", fontFamily:"inherit", textAlign:"left",
      }}
    >
      <div style={{ width:38, height:38, borderRadius:10, backgroundColor:"#F4F6FB", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
        {icon}
      </div>
      <span style={{ flex:1, fontSize:14, fontWeight:"600", color:"#1a1a1a" }}>{label}</span>
      <Radio selected={selected === id} />
    </button>
  );

  return (
    <div style={{ display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh", backgroundColor:"#111", fontFamily:"'SF Pro Display',-apple-system,BlinkMacSystemFont,sans-serif" }}>
      <PhoneShell>
        <StatusBar />

        {/* Nav */}
        <div style={{ backgroundColor:"#fff", padding:"12px 20px 14px", display:"flex", alignItems:"center", flexShrink:0, borderBottom:"1px solid #F2F2F7", position:"relative" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:4, display:"flex" }}><BackArrow /></button>
          <span style={{ fontSize:17, fontWeight:"700", color:"#1a1a1a", position:"absolute", left:"50%", transform:"translateX(-50%)" }}>Payment Methods</span>
        </div>

        {/* Body */}
        <div style={{ flex:1, overflowY:"auto", backgroundColor:"#F4F6FB", padding:"22px 18px", scrollbarWidth:"none" }}>

          {/* Credit & Debit Card section */}
          <SectionTitle text="Credit & Debit Card" />
          <div style={{ backgroundColor:"#fff", borderRadius:14, overflow:"hidden", boxShadow:"0 2px 10px rgba(0,0,0,0.05)", marginBottom:22 }}>
            <OptionRow
              id="card"
              label="Add New Card"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2"/>
                  <line x1="2" y1="10" x2="22" y2="10"/>
                </svg>
              }
            />
          </div>

          {/* Other Payment Options */}
          <SectionTitle text="Other Payment Options" />
          <div style={{ backgroundColor:"#fff", borderRadius:14, overflow:"hidden", boxShadow:"0 2px 10px rgba(0,0,0,0.05)" }}>
            <OptionRow
              id="bank"
              label="Bank Transfer"
              bottomBorder
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#37474F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="22" x2="21" y2="22"/>
                  <line x1="6" y1="18" x2="6" y2="11"/>
                  <line x1="10" y1="18" x2="10" y2="11"/>
                  <line x1="14" y1="18" x2="14" y2="11"/>
                  <line x1="18" y1="18" x2="18" y2="11"/>
                  <polygon points="12 2 20 7 4 7"/>
                </svg>
              }
            />
            <OptionRow
              id="cash"
              label="Cash Payment"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="6" width="20" height="12" rx="2"/>
                  <circle cx="12" cy="12" r="3"/>
                  <line x1="6" y1="12" x2="6" y2="12"/>
                  <line x1="18" y1="12" x2="18" y2="12"/>
                </svg>
              }
            />
          </div>
        </div>

        {/* Next button */}
        <div style={{ padding:"12px 18px 16px", backgroundColor:"#fff", flexShrink:0, borderTop:"1px solid #F2F2F7" }}>
          <button onClick={onNext} style={{ width:"100%", padding:"15px 0", borderRadius:50, border:"none", backgroundColor:"#2196F3", color:"#fff", fontSize:15, fontWeight:"700", cursor:"pointer", fontFamily:"inherit", boxShadow:"0 4px 16px rgba(33,150,243,0.4)" }}>
            Next
          </button>
        </div>

        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}