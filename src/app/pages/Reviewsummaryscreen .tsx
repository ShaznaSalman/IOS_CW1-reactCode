// ReviewSummaryScreen.tsx — Review Summary before payment
// iPhone 16: 393 × 852px

import { StatusBar, HomeIndicator, PhoneShell, BackArrow } from "../components/shared";

const LAB_IMG = "https://images.unsplash.com/photo-1530026405186-ed1f139313f7?w=600&q=80";

const Row = ({ label, value, valueColor = "#1a1a1a", bold = false }: {
  label: string; value: string; valueColor?: string; bold?: boolean;
}) => (
  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingBottom:14, marginBottom:14, borderBottom:"1px solid #F2F2F7" }}>
    <span style={{ fontSize:14, color:"#888", fontWeight:"400" }}>{label}</span>
    <span style={{ fontSize:14, color: valueColor, fontWeight: bold ? "700" : "500" }}>{value}</span>
  </div>
);

interface Props { onBack?: () => void; onPay?: () => void; onChangePayment?: () => void; }

export default function ReviewSummaryScreen({ onBack, onPay, onChangePayment }: Props) {
  return (
    <div style={{ display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh", backgroundColor:"#111", fontFamily:"'SF Pro Display',-apple-system,BlinkMacSystemFont,sans-serif" }}>
      <PhoneShell>
        <StatusBar />

        {/* Nav */}
        <div style={{ backgroundColor:"#fff", padding:"12px 20px 14px", display:"flex", alignItems:"center", flexShrink:0, borderBottom:"1px solid #F2F2F7", position:"relative" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:4, display:"flex" }}><BackArrow /></button>
          <span style={{ fontSize:17, fontWeight:"700", color:"#1a1a1a", position:"absolute", left:"50%", transform:"translateX(-50%)" }}>Review Summary</span>
        </div>

        {/* Body */}
        <div style={{ flex:1, overflowY:"auto", backgroundColor:"#fff", padding:"20px 20px 0", scrollbarWidth:"none" }}>

          {/* Lab image banner */}
          <div style={{ width:"100%", height:130, borderRadius:16, overflow:"hidden", marginBottom:22 }}>
            <img src={LAB_IMG} alt="Lab" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          </div>

          {/* Summary rows */}
          <Row label="Date & Hour" value="October 4, 2026 | 07:00 PM" />
          <Row label="Service"     value="X - Ray" />
          <Row label="Booking for" value="Self" />
          <Row label="Amount"      value="Rs 2000" />

          {/* Red note */}
          <p style={{ margin:"0 0 16px", fontSize:12, color:"#F44336", fontWeight:"500", lineHeight:1.5 }}>
            *Please note that this is the consultation fee only
          </p>

          {/* Divider */}
          <div style={{ height:1, backgroundColor:"#F2F2F7", marginBottom:16 }} />

          {/* Total row */}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:22 }}>
            <span style={{ fontSize:15, fontWeight:"700", color:"#1a1a1a" }}>Total</span>
            <span style={{ fontSize:15, fontWeight:"800", color:"#1a1a1a" }}>Rs 2000</span>
          </div>

          {/* Payment method row */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 16px", backgroundColor:"#F8F8FC", borderRadius:12, marginBottom:16 }}>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              {/* Card icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"/>
                <line x1="2" y1="10" x2="22" y2="10"/>
              </svg>
              <span style={{ fontSize:14, fontWeight:"600", color:"#1a1a1a" }}>Card</span>
            </div>
            <button onClick={onChangePayment} style={{ background:"none", border:"none", cursor:"pointer", fontSize:13, color:"#2196F3", fontWeight:"700", fontFamily:"inherit", padding:0 }}>
              Change
            </button>
          </div>

        </div>

        {/* Pay Now button */}
        <div style={{ padding:"12px 20px 16px", backgroundColor:"#fff", flexShrink:0 }}>
          <button onClick={onPay} style={{ width:"100%", padding:"15px 0", borderRadius:50, border:"none", backgroundColor:"#2196F3", color:"#fff", fontSize:15, fontWeight:"700", cursor:"pointer", fontFamily:"inherit", boxShadow:"0 4px 16px rgba(33,150,243,0.4)" }}>
            Pay Now
          </button>
        </div>

        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}