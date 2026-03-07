// PatientDetailsScreen.tsx — Patient Details form (Self or Someone else)
// iPhone 16: 393 × 852px
// Props: bookingFor?: "Self" | "Someone else"

import { useState } from "react";
import { StatusBar, HomeIndicator, PhoneShell, BackArrow } from "../components/shared";

// ── Shared form field components ──────────────────────────────────────────────
const Label = ({ text, required = true }: { text: string; required?: boolean }) => (
  <p style={{ margin:"0 0 6px", fontSize:13, fontWeight:"600", color:"#1a1a1a" }}>
    {text} {required && <span style={{ color:"#F44336" }}>*</span>}
  </p>
);

const TextInput = ({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) => (
  <input
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

const SelectField = ({ value, options, onChange }: { value: string; options: string[]; onChange: (v: string) => void }) => (
  <div style={{ position:"relative", marginBottom:16 }}>
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        width:"100%", padding:"13px 40px 13px 14px",
        borderRadius:10, border:"1.5px solid #E0E0EE",
        fontSize:14, color:"#1a1a1a", backgroundColor:"#fff",
        outline:"none", fontFamily:"inherit", appearance:"none", cursor:"pointer",
      }}
    >
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
    <div style={{ position:"absolute", right:14, top:"50%", transform:"translateY(-50%)", pointerEvents:"none" }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
    </div>
  </div>
);

const TextArea = ({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) => (
  <textarea
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
    rows={5}
    style={{
      width:"100%", boxSizing:"border-box",
      padding:"13px 14px", borderRadius:10,
      border:"1.5px solid #E0E0EE", fontSize:14, color:"#1a1a1a",
      outline:"none", fontFamily:"inherit", resize:"none", backgroundColor:"#fff",
      marginBottom:16,
    }}
  />
);

interface Props { initialBookingFor?: "Self" | "Someone else"; onBack?: () => void; onNext?: () => void; }

export default function PatientDetailsScreen({ initialBookingFor = "Self", onBack, onNext }: Props) {
  const [bookingFor, setBookingFor] = useState(initialBookingFor);
  const [fullName, setFullName] = useState(bookingFor === "Self" ? "Saman Edirimuna" : "Rani Edirimuna");
  const [mobile, setMobile] = useState("+94 78 665 7709");
  const [gender, setGender] = useState(bookingFor === "Self" ? "Male" : "Female");
  const [age, setAge] = useState(bookingFor === "Self" ? "34 Years" : "67 Years");
  const [relationship, setRelationship] = useState("Mother");
  const [problem, setProblem] = useState("");

  const isSelf = bookingFor === "Self";

  return (
    <div style={{ display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh", backgroundColor:"#111", fontFamily:"'SF Pro Display',-apple-system,BlinkMacSystemFont,sans-serif" }}>
      <PhoneShell>
        <StatusBar />

        {/* Nav */}
        <div style={{ backgroundColor:"#fff", padding:"12px 20px 14px", display:"flex", alignItems:"center", flexShrink:0, borderBottom:"1px solid #F2F2F7", position:"relative" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:4, display:"flex" }}><BackArrow /></button>
          <span style={{ fontSize:17, fontWeight:"700", color:"#1a1a1a", position:"absolute", left:"50%", transform:"translateX(-50%)" }}>Patient Details</span>
        </div>

        {/* Scrollable form */}
        <div style={{ flex:1, overflowY:"auto", backgroundColor:"#fff", padding:"22px 20px 0", scrollbarWidth:"none" }}>

          {/* Booking for */}
          <Label text="Booking for" />
          <SelectField
            value={bookingFor}
            options={["Self", "Someone else"]}
            onChange={v => {
              setBookingFor(v as "Self" | "Someone else");
              setFullName(v === "Self" ? "Saman Edirimuna" : "Rani Edirimuna");
              setGender(v === "Self" ? "Male" : "Female");
              setAge(v === "Self" ? "34 Years" : "67 Years");
            }}
          />

          {/* Full Name */}
          <Label text="Full Name" />
          <TextInput value={fullName} onChange={setFullName} />

          {/* Relationship (only for Someone else) */}
          {!isSelf && (
            <>
              <Label text="Relationship" />
              <SelectField value={relationship} options={["Mother", "Father", "Spouse", "Child", "Sibling", "Other"]} onChange={setRelationship} />
            </>
          )}

          {/* Mobile */}
          <Label text="Mobile Number" />
          <TextInput value={mobile} onChange={setMobile} />

          {/* Gender */}
          <Label text="Gender" />
          <SelectField value={gender} options={["Male", "Female", "Other"]} onChange={setGender} />

          {/* Age */}
          <Label text={isSelf ? "Your Age" : "Age"} />
          <SelectField value={age} options={["18 Years", "20 Years", "25 Years", "30 Years", "34 Years", "40 Years", "50 Years", "60 Years", "67 Years", "70 Years"]} onChange={setAge} />

          {/* Write problem */}
          <Label text="Write Your Problem" required={false} />
          <TextArea value={problem} onChange={setProblem} placeholder="Write here..." />

        </div>

        {/* Next button */}
        <div style={{ padding:"12px 20px 16px", backgroundColor:"#fff", flexShrink:0 }}>
          <button onClick={onNext} style={{ width:"100%", padding:"15px 0", borderRadius:50, border:"none", backgroundColor:"#2196F3", color:"#fff", fontSize:15, fontWeight:"700", cursor:"pointer", fontFamily:"inherit", boxShadow:"0 4px 16px rgba(33,150,243,0.4)" }}>
            Next
          </button>
        </div>

        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}