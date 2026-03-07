// TrackingScreen.tsx — Screen 2: Tracking Process (queue + Scan QR)
// iPhone 16: 393 × 852px

import { StatusBar, HomeIndicator, PhoneShell, BackArrow } from "../components/shared";

const DOCTOR_IMG = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=160&q=80";

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:11 }}>
    <span style={{ fontSize:13, color:"#AAAAAA" }}>{label}</span>
    <span style={{ fontSize:13, color:"#1a1a1a", fontWeight:"500" }}>{value}</span>
  </div>
);

interface Props { onBack?: () => void; onScanQR?: () => void; }

export default function TrackingScreen({ onBack, onScanQR }: Props) {
  return (
    <div style={{ display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh", backgroundColor:"#111", fontFamily:"'SF Pro Display',-apple-system,BlinkMacSystemFont,sans-serif" }}>
      <PhoneShell>
        <StatusBar />

        {/* Nav */}
        <div style={{ backgroundColor:"#fff", padding:"12px 20px 14px", display:"flex", alignItems:"center", flexShrink:0, borderBottom:"1px solid #F2F2F7", position:"relative" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:4, display:"flex" }}><BackArrow /></button>
          <span style={{ fontSize:17, fontWeight:"700", color:"#1a1a1a", position:"absolute", left:"50%", transform:"translateX(-50%)" }}>My Appointment</span>
        </div>

        {/* Body */}
        <div style={{ flex:1, overflowY:"auto", backgroundColor:"#fff", padding:"22px 22px 0", scrollbarWidth:"none" }}>

          {/* Doctor row */}
          <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:26 }}>
            <div style={{ position:"relative", flexShrink:0 }}>
              <div style={{ width:68, height:68, borderRadius:"50%", overflow:"hidden", border:"3px solid #D6E8F8" }}>
                <img src={DOCTOR_IMG} alt="" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top" }} />
              </div>
              <div style={{ position:"absolute", bottom:1, right:1, width:20, height:20, borderRadius:"50%", backgroundColor:"#2196F3", border:"2px solid #fff", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
            </div>
            <div>
              <p style={{ margin:0, fontSize:16, fontWeight:"700", color:"#1a1a1a" }}>Dr. Nayanathara</p>
              <p style={{ margin:"3px 0 0", fontSize:13, color:"#999" }}>Cardiologist</p>
            </div>
          </div>

          {/* Queue number cards */}
          <div style={{ display:"flex", gap:10, marginBottom:28 }}>
            {/* CURRENT */}
            <div style={{ flex:1, border:"1.5px solid #E0E0E8", borderRadius:12, padding:"10px 14px" }}>
              <p style={{ margin:"0 0 6px", fontSize:10, color:"#AAA", fontWeight:"600", letterSpacing:0.5, textTransform:"uppercase" }}>Current</p>
              <p style={{ margin:0, fontSize:26, fontWeight:"700", color:"#1a1a1a", letterSpacing:-0.5 }}>12</p>
            </div>
            {/* YOUR NO — highlighted */}
            <div style={{ flex:1, border:"2px solid #2196F3", borderRadius:12, padding:"10px 14px", backgroundColor:"#F0F8FF" }}>
              <p style={{ margin:"0 0 6px", fontSize:10, color:"#2196F3", fontWeight:"600", letterSpacing:0.5, textTransform:"uppercase" }}>Your No.</p>
              <p style={{ margin:0, fontSize:26, fontWeight:"700", color:"#2196F3", letterSpacing:-0.5 }}>21</p>
            </div>
            {/* WAIT */}
            <div style={{ flex:1, border:"1.5px solid #E0E0E8", borderRadius:12, padding:"10px 14px" }}>
              <p style={{ margin:"0 0 6px", fontSize:10, color:"#AAA", fontWeight:"600", letterSpacing:0.5, textTransform:"uppercase" }}>Wait</p>
              <p style={{ margin:0, fontSize:26, fontWeight:"700", color:"#1a1a1a", letterSpacing:-0.5 }}>5<span style={{ fontSize:14, fontWeight:"600" }}>min</span></p>
            </div>
          </div>

          {/* Scheduled Appointment */}
          <p style={{ margin:"0 0 14px", fontSize:15, fontWeight:"700", color:"#1a1a1a" }}>Scheduled Appointment</p>
          <InfoRow label="Date"        value="March 25, 2026" />
          <InfoRow label="Time"        value="10:00 AM" />
          <InfoRow label="Booking for" value="Self" />

          <div style={{ height:1, backgroundColor:"#F2F2F7", margin:"20px 0" }} />

          {/* Patient Info */}
          <p style={{ margin:"0 0 14px", fontSize:15, fontWeight:"700", color:"#1a1a1a" }}>Patient Info.</p>
          <InfoRow label="Full Name" value="Saman Edirimuna" />
          <InfoRow label="Gender"    value="Male" />
          <InfoRow label="Age"       value="34" />
          <InfoRow label="Problem"   value="Pains" />
        </div>

        {/* Scan QR button */}
        <div style={{ padding:"16px 22px 18px", backgroundColor:"#fff" }}>
          <button onClick={onScanQR} style={{ width:"100%", padding:"15px 0", borderRadius:50, border:"none", backgroundColor:"#2196F3", color:"#fff", fontSize:15, fontWeight:"700", cursor:"pointer", fontFamily:"inherit", boxShadow:"0 4px 14px rgba(33,150,243,0.4)" }}>
            Scan QR
          </button>
        </div>
        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}