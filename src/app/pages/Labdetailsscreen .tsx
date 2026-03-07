// LabDetailsScreen.tsx — Lab detail page with day/time picker + Book Appointment
// iPhone 16: 393 × 852px

import { useState } from "react";
import { HomeIndicator, PhoneShell, BackArrow } from "../components/shared";

const LAB_IMG = "https://images.unsplash.com/photo-1530026405186-ed1f139313f7?w=600&q=80";

// ── Shared sub-components ─────────────────────────────────────────────────────
const WhiteStatusBar = () => (
  <div style={{ position:"absolute", top:0, left:0, right:0, height:59, display:"flex", alignItems:"flex-end", justifyContent:"space-between", paddingLeft:28, paddingRight:28, paddingBottom:10, zIndex:10 }}>
    <div style={{ position:"absolute", top:12, left:"50%", transform:"translateX(-50%)", width:120, height:34, backgroundColor:"#000", borderRadius:20 }} />
    <span style={{ fontSize:15, fontWeight:"600", color:"#fff", letterSpacing:-0.3 }}>9:41</span>
    <div style={{ display:"flex", alignItems:"center", gap:6 }}>
      <svg width="17" height="12" viewBox="0 0 17 12" fill="#fff"><rect x="0" y="7" width="3" height="5" rx="0.5"/><rect x="4.5" y="5" width="3" height="7" rx="0.5"/><rect x="9" y="2.5" width="3" height="9.5" rx="0.5"/><rect x="13.5" y="0" width="3" height="12" rx="0.5"/></svg>
      <svg width="16" height="12" viewBox="0 0 24 18" fill="none"><path d="M1 6.5C4.9 2.5 10.2 0 16 0s11.1 2.5 15 6.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M5 11c2.8-2.8 6.6-4.5 11-4.5s8.2 1.7 11 4.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M9 15.5c1.7-1.7 4-2.7 7-2.7s5.3 1 7 2.7" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="19" r="2" fill="#fff"/></svg>
      <svg width="26" height="13" viewBox="0 0 26 13" fill="none"><rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="rgba(255,255,255,0.55)"/><rect x="2" y="2" width="18" height="9" rx="2" fill="#fff"/><path d="M23.5 4.5v4a2 2 0 0 0 0-4z" fill="rgba(255,255,255,0.4)"/></svg>
    </div>
  </div>
);

const Chip = ({ label, color, icon }: { label: string; color: string; icon?: React.ReactNode }) => (
  <div style={{ display:"flex", alignItems:"center", gap:4, backgroundColor:"#fff", borderRadius:20, padding:"5px 10px", border:`1.5px solid ${color}40` }}>
    {icon}
    <span style={{ fontSize:11, color, fontWeight:"600" }}>{label}</span>
  </div>
);

const DAYS = [
  { day:"Today", date:"4 Oct" },
  { day:"Mon",   date:"5 Oct" },
  { day:"Tue",   date:"6 Oct" },
  { day:"Wed",   date:"7 Oct" },
];
const TIMES = ["7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"];

interface Props { onBack?: () => void; onBook?: () => void; }

export default function LabDetailsScreen({ onBack, onBook }: Props) {
  const [selDay, setSelDay] = useState(0);
  const [selTime, setSelTime] = useState(0);

  return (
    <div style={{ display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh", backgroundColor:"#111", fontFamily:"'SF Pro Display',-apple-system,BlinkMacSystemFont,sans-serif" }}>
      <PhoneShell>

        {/* Hero image */}
        <div style={{ position:"relative", height:220, flexShrink:0, overflow:"hidden" }}>
          <img src={LAB_IMG} alt="Lab" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0) 100%)" }} />
          <WhiteStatusBar />
          {/* Back */}
          <button onClick={onBack} style={{ position:"absolute", bottom:36, left:14, width:36, height:36, borderRadius:"50%", backgroundColor:"rgba(255,255,255,0.9)", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 2px 8px rgba(0,0,0,0.2)" }}>
            <BackArrow />
          </button>
          {/* Share + Heart */}
          <div style={{ position:"absolute", bottom:36, right:14, display:"flex", gap:8 }}>
            <div style={{ width:36, height:36, borderRadius:"50%", backgroundColor:"rgba(255,255,255,0.9)", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", boxShadow:"0 2px 8px rgba(0,0,0,0.2)" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2.2" strokeLinecap="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </div>
            <div style={{ width:36, height:36, borderRadius:"50%", backgroundColor:"#E53935", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", boxShadow:"0 2px 8px rgba(0,0,0,0.25)" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#fff"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
          </div>
        </div>

        {/* White card curved top */}
        <div style={{ flex:1, overflowY:"auto", backgroundColor:"#fff", borderTopLeftRadius:30, borderTopRightRadius:30, marginTop:-30, position:"relative", zIndex:2, scrollbarWidth:"none", boxShadow:"0 -4px 16px rgba(0,0,0,0.08)" }}>
          <div style={{ padding:"18px 18px 0" }}>

            {/* Name row */}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
              <div>
                <p style={{ margin:0, fontSize:18, fontWeight:"800", color:"#1a1a1a", letterSpacing:-0.3 }}>X - Ray</p>
                <p style={{ margin:"3px 0 0", fontSize:12, color:"#999" }}>Radiology, Skeletal</p>
              </div>
              <div style={{ display:"flex", gap:12, marginTop:2 }}>
                {[
                  { label:"Call", icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.71 3.37a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l1.08-1.08a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
                  { label:"Map", icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg> },
                ].map(btn => (
                  <div key={btn.label} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:3 }}>
                    <div style={{ width:40, height:40, borderRadius:"50%", backgroundColor:"#E8F4FD", display:"flex", alignItems:"center", justifyContent:"center" }}>{btn.icon}</div>
                    <span style={{ fontSize:11, color:"#2196F3", fontWeight:"600" }}>{btn.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location / Hours */}
            <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:5 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#2196F3"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span style={{ fontSize:12, color:"#555" }}>Ground Floor, B-Wing</span>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:16 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#2196F3"><circle cx="12" cy="12" r="10"/></svg>
              <span style={{ fontSize:12, color:"#555" }}>Mon - Sat | 10:00 AM - 08:00 PM</span>
            </div>

            {/* About */}
            <p style={{ margin:"0 0 5px", fontSize:14, fontWeight:"700", color:"#1a1a1a" }}>About</p>
            <p style={{ margin:"0 0 12px", fontSize:12, color:"#777", lineHeight:1.65 }}>
              Our X-ray department provides fast and accurate imaging to help diagnose <span style={{ color:"#2196F3", fontWeight:"600" }}>Read more</span>
            </p>

            {/* Chips row 1 */}
            <div style={{ display:"flex", gap:7, marginBottom:8, flexWrap:"wrap" }}>
              <Chip label="Certified" color="#2196F3" icon={<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>}/>
              <Chip label="HIPAA - compliant" color="#2196F3" icon={<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}/>
              <Chip label="15-20 min" color="#2196F3" icon={<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}/>
            </div>
            {/* Chips row 2 — red + teal */}
            <div style={{ display:"flex", gap:7, marginBottom:18, flexWrap:"wrap" }}>
              <Chip label="No Prep" color="#F44336" icon={<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#F44336" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>}/>
              <Chip label="Online Results" color="#00897B" icon={<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#00897B" strokeWidth="2"><rect x="3" y="3" width="18" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>}/>
              <Chip label="Within 24hrs" color="#2196F3" icon={<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}/>
            </div>

            {/* Divider */}
            <div style={{ height:1, backgroundColor:"#EBEBF0", marginBottom:16 }} />

            {/* Book Appointment section */}
            <p style={{ margin:"0 0 12px", fontSize:10, fontWeight:"700", color:"#BBBBCC", letterSpacing:1.1, textTransform:"uppercase" }}>Book Appointment</p>

            {/* Day picker */}
            <p style={{ margin:"0 0 10px", fontSize:14, fontWeight:"700", color:"#1a1a1a" }}>Day</p>
            <div style={{ display:"flex", gap:8, marginBottom:18, overflowX:"auto", scrollbarWidth:"none" }}>
              {DAYS.map((d, i) => (
                <button key={i} onClick={() => setSelDay(i)} style={{
                  display:"flex", flexDirection:"column", alignItems:"center",
                  padding:"8px 14px", borderRadius:50, border:"none", cursor:"pointer",
                  backgroundColor: selDay === i ? "#2196F3" : "#F4F6FB",
                  color: selDay === i ? "#fff" : "#555",
                  flexShrink:0, fontFamily:"inherit",
                }}>
                  <span style={{ fontSize:11, fontWeight:"600", marginBottom:2 }}>{d.day}</span>
                  <span style={{ fontSize:12, fontWeight:"700" }}>{d.date}</span>
                </button>
              ))}
            </div>

            {/* Time picker */}
            <p style={{ margin:"0 0 10px", fontSize:14, fontWeight:"700", color:"#1a1a1a" }}>Time</p>
            <div style={{ display:"flex", gap:8, marginBottom:20, overflowX:"auto", scrollbarWidth:"none" }}>
              {TIMES.map((t, i) => (
                <button key={i} onClick={() => setSelTime(i)} style={{
                  padding:"10px 16px", borderRadius:50, border:"none", cursor:"pointer",
                  backgroundColor: selTime === i ? "#2196F3" : "#F4F6FB",
                  color: selTime === i ? "#fff" : "#555",
                  fontSize:13, fontWeight:"700", flexShrink:0, fontFamily:"inherit",
                  whiteSpace:"nowrap",
                }}>
                  {t}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height:1, backgroundColor:"#EBEBF0", marginBottom:16 }} />

            {/* Total Service Fee */}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:4 }}>
              <div>
                <p style={{ margin:0, fontSize:14, fontWeight:"700", color:"#1a1a1a" }}>Total Service Fee</p>
                <p style={{ margin:"4px 0 0", fontSize:11, color:"#F44336", fontWeight:"500" }}>*This is the lab service fee only</p>
              </div>
              <span style={{ fontSize:16, fontWeight:"800", color:"#1a1a1a" }}>Rs. 2000</span>
            </div>
            <div style={{ height:20 }} />
          </div>
        </div>

        {/* Book Appointment CTA */}
        <div style={{ padding:"12px 18px 16px", backgroundColor:"#fff", flexShrink:0, borderTop:"1px solid #F2F2F7" }}>
          <button onClick={onBook} style={{ width:"100%", padding:"15px 0", borderRadius:50, border:"none", backgroundColor:"#2196F3", color:"#fff", fontSize:15, fontWeight:"700", cursor:"pointer", fontFamily:"inherit", boxShadow:"0 4px 16px rgba(33,150,243,0.4)" }}>
            Book Appointment
          </button>
        </div>

        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}