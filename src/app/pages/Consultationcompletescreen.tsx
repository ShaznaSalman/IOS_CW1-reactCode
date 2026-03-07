// ConsultationCompleteScreen.tsx — Screen 4: Consultation Complete
// iPhone 16: 393 × 852px

import { StatusBar, HomeIndicator, PhoneShell, BackArrow } from "../components/shared";

interface Props { onBack?: () => void; onGoPharmacy?: () => void; onGoECG?: () => void; onGoXRay?: () => void; }

export default function ConsultationCompleteScreen({ onBack, onGoPharmacy, onGoECG, onGoXRay }: Props) {
  return (
    <div style={{ display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh", backgroundColor:"#111", fontFamily:"'SF Pro Display',-apple-system,BlinkMacSystemFont,sans-serif" }}>
      <PhoneShell>
        <StatusBar />

        {/* Nav */}
        <div style={{ backgroundColor:"#fff", padding:"12px 20px 14px", display:"flex", alignItems:"center", flexShrink:0, borderBottom:"1px solid #F2F2F7", position:"relative" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:4, display:"flex" }}><BackArrow /></button>
          <span style={{ fontSize:17, fontWeight:"700", color:"#1a1a1a", position:"absolute", left:"50%", transform:"translateX(-50%)" }}>Consultation Complete</span>
        </div>

        {/* Body */}
        <div style={{ flex:1, overflowY:"auto", backgroundColor:"#fff", padding:"22px 20px", scrollbarWidth:"none" }}>

          {/* ── Prescription card ───────────────────────────── */}
          <div style={{ border:"1.5px solid #E8E8EE", borderRadius:14, padding:"16px 16px 18px", marginBottom:22 }}>
            {/* Header row */}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
              <span style={{ fontSize:15, fontWeight:"700", color:"#1a1a1a" }}>Prescription</span>
              {/* Blue count badge */}
              <div style={{ width:26, height:26, borderRadius:"50%", backgroundColor:"#2196F3", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontSize:12, fontWeight:"700", color:"#fff" }}>4</span>
              </div>
            </div>

            {/* Drug rows */}
            {[
              { name:"Amoxillin",  dose:"500mg" },
              { name:"Paracetamol", dose:"650mg" },
              { name:"Cetirizine", dose:"100mg" },
            ].map(drug => (
              <div key={drug.name} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
                <span style={{ fontSize:13, color:"#444", fontWeight:"500" }}>{drug.name}</span>
                <span style={{ fontSize:13, color:"#888", fontWeight:"400" }}>{drug.dose}</span>
              </div>
            ))}

            {/* Go to Pharmacy button */}
            <button
              onClick={onGoPharmacy}
              style={{ width:"100%", marginTop:6, padding:"13px 0", borderRadius:50, border:"none", backgroundColor:"#2196F3", color:"#fff", fontSize:14, fontWeight:"700", cursor:"pointer", fontFamily:"inherit", boxShadow:"0 4px 12px rgba(33,150,243,0.35)" }}
            >
              Go to Pharmacy
            </button>
          </div>

          {/* ── Required Lab Tests ─────────────────────────────── */}
          <p style={{ margin:"0 0 14px", fontSize:15, fontWeight:"700", color:"#1a1a1a" }}>Required Lab Tests</p>

          {/* ECG row */}
          <div style={{ border:"1.5px solid #E8E8EE", borderRadius:14, padding:"14px 16px", marginBottom:12, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <span style={{ fontSize:14, fontWeight:"600", color:"#1a1a1a" }}>ECG</span>
              {/* Urgent red badge */}
              <div style={{ backgroundColor:"#FF5252", borderRadius:6, padding:"2px 8px" }}>
                <span style={{ fontSize:10, color:"#fff", fontWeight:"700", letterSpacing:0.3 }}>URGENT</span>
              </div>
            </div>
            <button
              onClick={onGoECG}
              style={{ backgroundColor:"#2196F3", borderRadius:8, border:"none", padding:"6px 12px", color:"#fff", fontSize:12, fontWeight:"700", cursor:"pointer", fontFamily:"inherit" }}
            >
              Go to ECG
            </button>
          </div>

          {/* X-Ray row */}
          <div style={{ border:"1.5px solid #E8E8EE", borderRadius:14, padding:"14px 16px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <span style={{ fontSize:14, fontWeight:"600", color:"#1a1a1a" }}>X - Ray</span>
            <button
              onClick={onGoXRay}
              style={{ backgroundColor:"#2196F3", borderRadius:8, border:"none", padding:"6px 12px", color:"#fff", fontSize:12, fontWeight:"700", cursor:"pointer", fontFamily:"inherit" }}
            >
              Go to XRay
            </button>
          </div>

        </div>

        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}