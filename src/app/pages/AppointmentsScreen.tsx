// AppointmentsScreen.tsx
// "My Appointments" screen — Upcoming | Completed | Cancelled tabs
// iPhone 16: 393 × 852px
//
// Props:
//   initialTab?: "Upcoming" | "Completed" | "Cancelled"  (default "Upcoming")
//   onBack?:     () => void

import { useState } from "react";
import { StatusBar, HomeIndicator, PhoneShell, BackArrow, BottomNav } from "../components/shared";

// ─── Types ────────────────────────────────────────────────────────────────────
type Tab = "Upcoming" | "Completed" | "Cancelled";

interface Appointment {
  id: string;
  date: string;
  time: string;
  name: string;
  location: string;
  bookingId: string;
  img: string;
  remind?: boolean;
}

// ─── Doctor images ────────────────────────────────────────────────────────────
const IMGS = {
  doc1: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&q=80",
  doc2: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=120&q=80",
  doc3: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=120&q=80",
  doc4: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=120&q=80",
  doc5: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=120&q=80",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const UPCOMING: Appointment[] = [
  { id: "1", date: "Mar 25, 2026", time: "10:00 AM", name: "Dr. Nayanathara",   location: "Floor 1, Room 7", bookingId: "#DR4S2SA54", img: IMGS.doc1, remind: true  },
  { id: "2", date: "Mar 30, 2026", time: "11:00 AM", name: "Dr. Harsha Fernando", location: "Floor 2, Room 1", bookingId: "#DR4S2SA54", img: IMGS.doc2, remind: true  },
  { id: "3", date: "Apr 2, 2026",  time: "10:00 AM", name: "Dr. Amila Herath",  location: "Floor 3, Room 4", bookingId: "#DR4S2SA54", img: IMGS.doc3, remind: false },
];

const COMPLETED: Appointment[] = [
  { id: "4", date: "Dec 25, 2025", time: "10:00 AM", name: "Dr. Jayaani Dennis",  location: "Floor 1, Room 1", bookingId: "#DR4S2SA54", img: IMGS.doc4 },
  { id: "5", date: "Aug 25, 2025", time: "10:00 AM", name: "Dr. Sarath Fernando", location: "Floor 2, Room 5", bookingId: "#DR4S2SA54", img: IMGS.doc2 },
  { id: "6", date: "Apr 15, 2025", time: "10:00 AM", name: "Dr. Ruwini Maleesha", location: "Floor 1, Room 3", bookingId: "#DR4S2SA54", img: IMGS.doc1 },
];

const CANCELLED: Appointment[] = [
  { id: "7", date: "Jan 23, 2026", time: "07:00 PM", name: "Dr. Ryan De Silva",   location: "Floor 1, Room 3", bookingId: "#DR4S2SA54", img: IMGS.doc3 },
  { id: "8", date: "Dec 25, 2025", time: "10:00 AM", name: "Dr. Ruwini Maleesha", location: "Floor 2, Room 2", bookingId: "#DR4S2SA54", img: IMGS.doc4 },
  { id: "9", date: "Aug 25, 2025", time: "10:00 AM", name: "Dr. Sarath Fernando", location: "Floor 3, Room 1", bookingId: "#DR4S2SA54", img: IMGS.doc5 },
];

// ─── Remind Me Toggle ─────────────────────────────────────────────────────────
const Toggle = ({ on }: { on: boolean }) => (
  <div style={{
    width: 38, height: 22, borderRadius: 11,
    backgroundColor: on ? "#2196F3" : "#ddd",
    position: "relative", cursor: "pointer", flexShrink: 0,
    transition: "background-color 0.2s",
  }}>
    <div style={{
      position: "absolute", top: 3,
      left: on ? 19 : 3,
      width: 16, height: 16, borderRadius: "50%",
      backgroundColor: "#fff",
      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      transition: "left 0.2s",
    }} />
  </div>
);

// ─── Booking ID link ──────────────────────────────────────────────────────────
const BookingRow = ({ id }: { id: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="9" y1="7" x2="15" y2="7" />
      <line x1="9" y1="11" x2="15" y2="11" />
      <line x1="9" y1="15" x2="12" y2="15" />
    </svg>
    <span style={{ fontSize: 11, color: "#888" }}>Booking ID : </span>
    <span style={{ fontSize: 11, color: "#2196F3", fontWeight: "600" }}>{id}</span>
  </div>
);

// ─── Location row ─────────────────────────────────────────────────────────────
const LocationRow = ({ loc }: { loc: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#888">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
    <span style={{ fontSize: 11, color: "#888" }}>{loc}</span>
  </div>
);

// ─── Appointment Card ─────────────────────────────────────────────────────────
const AppointmentCard = ({
  appt, tab,
}: {
  appt: Appointment; tab: Tab;
}) => (
  <div style={{ backgroundColor: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", marginBottom: 14, overflow: "hidden" }}>

    {/* Date / time header row */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 14px 10px", borderBottom: "1px solid #F2F2F7" }}>
      <span style={{ fontSize: 13, fontWeight: "700", color: "#1a1a1a" }}>
        {appt.date} - {appt.time}
      </span>
      {tab === "Upcoming" && (
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 11, color: "#888" }}>Remind me</span>
          <Toggle on={appt.remind ?? false} />
        </div>
      )}
    </div>

    {/* Doctor info row */}
    <div style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 14px" }}>
      <div style={{ width: 64, height: 64, borderRadius: 12, overflow: "hidden", flexShrink: 0, backgroundColor: "#E8F0F8" }}>
        <img src={appt.img} alt={appt.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
        <p style={{ margin: 0, fontSize: 14, fontWeight: "700", color: "#1a1a1a" }}>{appt.name}</p>
        <LocationRow loc={appt.location} />
        <BookingRow id={appt.bookingId} />
      </div>
    </div>

    {/* Action buttons */}
    <div style={{ padding: "0 14px 14px", display: "flex", gap: 10 }}>
      {tab === "Upcoming" && (
        <>
          <button style={{ flex: 1, padding: "11px 0", borderRadius: 50, border: "1.5px solid #CCC", backgroundColor: "#fff", color: "#555", fontSize: 13, fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}>
            Cancel
          </button>
          <button style={{ flex: 1, padding: "11px 0", borderRadius: 50, border: "none", background: "linear-gradient(135deg,#2DC98A,#18B870)", color: "#fff", fontSize: 13, fontWeight: "700", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 3px 10px rgba(29,184,110,0.3)" }}>
            Start Now
          </button>
        </>
      )}
      {tab === "Upcoming" && appt.id === "2" && null /* second card has Reschedule */}
      {tab === "Completed" && (
        <>
          <button style={{ flex: 1, padding: "11px 0", borderRadius: 50, border: "1.5px solid #2196F3", backgroundColor: "#fff", color: "#2196F3", fontSize: 13, fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}>
            Re-Book
          </button>
          <button style={{ flex: 1, padding: "11px 0", borderRadius: 50, border: "none", backgroundColor: "#2196F3", color: "#fff", fontSize: 13, fontWeight: "700", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 3px 10px rgba(33,150,243,0.3)" }}>
            View
          </button>
        </>
      )}
      {tab === "Cancelled" && (
        <button style={{ flex: 1, padding: "11px 0", borderRadius: 50, border: "none", backgroundColor: "#2196F3", color: "#fff", fontSize: 13, fontWeight: "700", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 3px 10px rgba(33,150,243,0.3)" }}>
          Reschedule
        </button>
      )}
    </div>
  </div>
);

// ─── Upcoming-specific card (1st has Cancel+StartNow, 2nd has Cancel+Reschedule) ─
const UpcomingCard = ({ appt, index }: { appt: Appointment; index: number }) => (
  <div style={{ backgroundColor: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", marginBottom: 14, overflow: "hidden" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 14px 10px", borderBottom: "1px solid #F2F2F7" }}>
      <span style={{ fontSize: 13, fontWeight: "700", color: "#1a1a1a" }}>{appt.date} - {appt.time}</span>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 11, color: "#888" }}>Remind me</span>
        <Toggle on={appt.remind ?? false} />
      </div>
    </div>
    <div style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 14px" }}>
      <div style={{ width: 64, height: 64, borderRadius: 12, overflow: "hidden", flexShrink: 0, backgroundColor: "#E8F0F8" }}>
        <img src={appt.img} alt={appt.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
        <p style={{ margin: 0, fontSize: 14, fontWeight: "700", color: "#1a1a1a" }}>{appt.name}</p>
        <LocationRow loc={appt.location} />
        <BookingRow id={appt.bookingId} />
      </div>
    </div>
    <div style={{ padding: "0 14px 14px", display: "flex", gap: 10 }}>
      <button style={{ flex: 1, padding: "11px 0", borderRadius: 50, border: "1.5px solid #CCC", backgroundColor: "#fff", color: "#555", fontSize: 13, fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}>
        Cancel
      </button>
      {index === 0 ? (
        <button style={{ flex: 1, padding: "11px 0", borderRadius: 50, border: "none", background: "linear-gradient(135deg,#2DC98A,#18B870)", color: "#fff", fontSize: 13, fontWeight: "700", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 3px 10px rgba(29,184,110,0.3)" }}>
          Start Now
        </button>
      ) : (
        <button style={{ flex: 1, padding: "11px 0", borderRadius: 50, border: "none", backgroundColor: "#2196F3", color: "#fff", fontSize: 13, fontWeight: "700", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 3px 10px rgba(33,150,243,0.3)" }}>
          Reschedule
        </button>
      )}
    </div>
  </div>
);

// ─── Main Screen ──────────────────────────────────────────────────────────────
interface AppointmentsScreenProps {
  initialTab?: Tab;
  onBack?: () => void;
}

export default function AppointmentsScreen({ initialTab = "Upcoming", onBack }: AppointmentsScreenProps) {
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);

  const tabLabel = activeTab === "Upcoming" ? "My Appointments" : "My Bookings";

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#111", fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <PhoneShell>
        <StatusBar />

        {/* ── Top nav bar ─────────────────────────────────── */}
        <div style={{ backgroundColor: "#fff", padding: "10px 18px 0", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", alignItems: "center" }}>
              <BackArrow />
            </button>
            <span style={{ fontSize: 17, fontWeight: "700", color: "#1a1a1a", letterSpacing: -0.3 }}>{tabLabel}</span>
            <div style={{ cursor: "pointer", padding: 4 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </div>
          </div>

          {/* ── Tab bar ──────────────────────────────────── */}
          <div style={{ display: "flex", borderBottom: "1.5px solid #F0F0F5" }}>
            {(["Upcoming", "Completed", "Cancelled"] as Tab[]).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                flex: 1, padding: "10px 0 9px", border: "none", background: "none", cursor: "pointer",
                fontSize: 13, fontWeight: activeTab === tab ? "700" : "500",
                color: activeTab === tab ? "#2196F3" : "#AAA",
                borderBottom: activeTab === tab ? "2.5px solid #2196F3" : "2.5px solid transparent",
                fontFamily: "inherit", transition: "color 0.18s",
                marginBottom: -1,
              }}>
                {tab === "Upcoming" ? "Upcomming" : tab}
              </button>
            ))}
          </div>
        </div>

        {/* ── Scrollable content ───────────────────────── */}
        <div style={{ flex: 1, overflowY: "auto", backgroundColor: "#F4F6FB", padding: "16px 16px 8px", scrollbarWidth: "none" }}>

          {activeTab === "Upcoming" && UPCOMING.map((appt, i) => (
            <UpcomingCard key={appt.id} appt={appt} index={i} />
          ))}

          {activeTab === "Completed" && COMPLETED.map(appt => (
            <AppointmentCard key={appt.id} appt={appt} tab="Completed" />
          ))}

          {activeTab === "Cancelled" && CANCELLED.map(appt => (
            <AppointmentCard key={appt.id} appt={appt} tab="Cancelled" />
          ))}

        </div>

        <BottomNav active="Appointments" />
        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}