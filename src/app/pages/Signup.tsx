// // src/pages/Signup.tsx

// import { useState } from "react";

// const SriLankaFlag = () => (
//   <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <rect width="20" height="14" rx="2" fill="#8D153A"/>
//     <rect x="0" y="0" width="3" height="14" fill="#FF7722"/>
//     <rect x="3" y="0" width="2" height="14" fill="#009F4D"/>
//     <rect x="5" y="1" width="14" height="12" rx="1" fill="#8D153A"/>
//     <rect x="14" y="2" width="4" height="10" rx="0.5" fill="#FFD100"/>
//     <circle cx="13" cy="7" r="1.2" fill="#FFD100"/>
//     <path d="M8 3.5 L9.5 10.5 L11 3.5" stroke="#FFD100" strokeWidth="0.8" fill="none"/>
//   </svg>
// );

// const GoogleIcon = () => (
//   <svg width="22" height="22" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
//     <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
//     <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
//     <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
//     <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.35-8.16 2.35-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
//   </svg>
// );

// const AppleIcon = () => (
//   <svg width="22" height="22" viewBox="0 0 814 1000" xmlns="http://www.w3.org/2000/svg" fill="#000">
//     <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 405.6 0 284.7 0 168.4c0-69.3 13.5-136.9 41.5-197.3C91.6-105.6 201.9-152.6 294.5-152.6c75.9 0 133.5 45.9 177.1 45.9 41.5 0 107.9-48.5 198.2-48.5 38.8 0 127.4 3.2 190.3 76.9zm-234.5-181.7c37.7-49.4 65.2-116.7 65.2-183.9 0-9-.6-18.2-1.9-26.1-61.6 2.5-133.2 41.5-177.1 97.3-33.3 41.5-65.2 108.8-65.2 177.1 0 9.7 1.3 19.4 1.9 22.3 3.8.6 9 1.3 14.2 1.3 55.8 0 123.7-37.1 162.9-87.9z"/>
//   </svg>
// );

// const ChevronDown = () => (
//   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="6 9 12 15 18 9"/>
//   </svg>
// );

// const BackArrow = () => (
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <line x1="19" y1="12" x2="5" y2="12"/>
//     <polyline points="12 19 5 12 12 5"/>
//   </svg>
// );

// export default function CreateAccount() {
//   const [fullName, setFullName] = useState("Saman Edirimuni");
//   const [email, setEmail] = useState("ABC@gmail.com");
//   const [phone, setPhone] = useState("(94) 726-0592");
//   const [focusedField, setFocusedField] = useState<string | null>(null);

//   return (
//     <div style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       minHeight: "100vh",
//       backgroundColor: "#e5e5ea",
//       fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//     }}>
//       {/* iPhone 16 Shell */}
//       <div style={{
//         width: "393px",
//         height: "852px",
//         backgroundColor: "#fff",
//         borderRadius: "54px",
//         boxShadow: "0 0 0 1px #c0c0c0, 0 30px 80px rgba(0,0,0,0.35), inset 0 0 0 2px #f0f0f0",
//         overflow: "hidden",
//         position: "relative",
//         display: "flex",
//         flexDirection: "column",
//       }}>

//         {/* Status Bar */}
//         <div style={{
//           height: "59px",
//           background: "#fff",
//           display: "flex",
//           alignItems: "flex-end",
//           justifyContent: "space-between",
//           paddingLeft: "28px",
//           paddingRight: "28px",
//           paddingBottom: "10px",
//           position: "relative",
//         }}>
//           {/* Dynamic Island */}
//           <div style={{
//             position: "absolute",
//             top: "12px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             width: "120px",
//             height: "34px",
//             backgroundColor: "#000",
//             borderRadius: "20px",
//           }} />
//           <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-0.3px" }}>9:41</span>
//           <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//             {/* Signal */}
//             <svg width="17" height="12" viewBox="0 0 17 12" fill="#1a1a1a">
//               <rect x="0" y="7" width="3" height="5" rx="0.5"/>
//               <rect x="4.5" y="5" width="3" height="7" rx="0.5"/>
//               <rect x="9" y="2.5" width="3" height="9.5" rx="0.5"/>
//               <rect x="13.5" y="0" width="3" height="12" rx="0.5"/>
//             </svg>
//             {/* WiFi */}
//             <svg width="16" height="12" viewBox="0 0 24 18" fill="none">
//               <path d="M1 6.5C4.9 2.5 10.2 0 16 0s11.1 2.5 15 6.5" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" fill="none"/>
//               <path d="M5 11c2.8-2.8 6.6-4.5 11-4.5s8.2 1.7 11 4.5" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" fill="none"/>
//               <path d="M9 15.5c1.7-1.7 4-2.7 7-2.7s5.3 1 7 2.7" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" fill="none"/>
//               <circle cx="16" cy="19" r="2" fill="#1a1a1a"/>
//             </svg>
//             {/* Battery */}
//             <svg width="26" height="13" viewBox="0 0 26 13" fill="none">
//               <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="#1a1a1a" strokeOpacity="0.35"/>
//               <rect x="2" y="2" width="18" height="9" rx="2" fill="#1a1a1a"/>
//               <path d="M23.5 4.5v4a2 2 0 0 0 0-4z" fill="#1a1a1a" fillOpacity="0.4"/>
//             </svg>
//           </div>
//         </div>

//         {/* Scrollable Content */}
//         <div style={{
//           flex: 1,
//           overflowY: "auto",
//           padding: "0 28px 24px",
//           scrollbarWidth: "none",
//         }}>
//           {/* Back Button */}
//           <div style={{ marginTop: "8px", marginBottom: "28px", cursor: "pointer" }}>
//             <BackArrow />
//           </div>

//           {/* Header */}
//           <div style={{ marginBottom: "32px" }}>
//             <h1 style={{
//               fontSize: "32px",
//               fontWeight: "700",
//               color: "#1a1a1a",
//               margin: "0 0 6px",
//               letterSpacing: "-0.8px",
//               lineHeight: "1.1",
//             }}>
//               Create Account
//             </h1>
//             <p style={{
//               fontSize: "14px",
//               color: "#8e8e93",
//               margin: 0,
//               fontWeight: "400",
//               letterSpacing: "-0.1px",
//             }}>
//               Create an account to continue!
//             </p>
//           </div>

//           {/* Form Fields */}
//           <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

//             {/* Full Name */}
//             <div>
//               <label style={{
//                 display: "block",
//                 fontSize: "13.5px",
//                 fontWeight: "500",
//                 color: "#1a1a1a",
//                 marginBottom: "7px",
//                 letterSpacing: "-0.1px",
//               }}>Full Name</label>
//               <input
//                 type="text"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 onFocus={() => setFocusedField("name")}
//                 onBlur={() => setFocusedField(null)}
//                 style={{
//                   width: "100%",
//                   padding: "14px 16px",
//                   borderRadius: "12px",
//                   border: `1.5px solid ${focusedField === "name" ? "#2a9df4" : "#e0e0e5"}`,
//                   fontSize: "15px",
//                   color: "#1a1a1a",
//                   outline: "none",
//                   boxSizing: "border-box",
//                   backgroundColor: "#fafafa",
//                   transition: "border-color 0.2s ease",
//                   fontFamily: "inherit",
//                   letterSpacing: "-0.2px",
//                 }}
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label style={{
//                 display: "block",
//                 fontSize: "13.5px",
//                 fontWeight: "500",
//                 color: "#1a1a1a",
//                 marginBottom: "7px",
//                 letterSpacing: "-0.1px",
//               }}>Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 onFocus={() => setFocusedField("email")}
//                 onBlur={() => setFocusedField(null)}
//                 style={{
//                   width: "100%",
//                   padding: "14px 16px",
//                   borderRadius: "12px",
//                   border: `1.5px solid ${focusedField === "email" ? "#2a9df4" : "#e0e0e5"}`,
//                   fontSize: "15px",
//                   color: "#1a1a1a",
//                   outline: "none",
//                   boxSizing: "border-box",
//                   backgroundColor: "#fafafa",
//                   transition: "border-color 0.2s ease",
//                   fontFamily: "inherit",
//                   letterSpacing: "-0.2px",
//                 }}
//               />
//             </div>

//             {/* Phone Number */}
//             <div>
//               <label style={{
//                 display: "block",
//                 fontSize: "13.5px",
//                 fontWeight: "500",
//                 color: "#1a1a1a",
//                 marginBottom: "7px",
//                 letterSpacing: "-0.1px",
//               }}>Phone Number</label>
//               <div style={{
//                 display: "flex",
//                 alignItems: "center",
//                 borderRadius: "12px",
//                 border: `1.5px solid ${focusedField === "phone" ? "#2a9df4" : "#e0e0e5"}`,
//                 backgroundColor: "#fafafa",
//                 overflow: "hidden",
//                 transition: "border-color 0.2s ease",
//               }}>
//                 {/* Country Selector */}
//                 <div style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "5px",
//                   padding: "14px 12px 14px 16px",
//                   cursor: "pointer",
//                   borderRight: "1.5px solid #e0e0e5",
//                   flexShrink: 0,
//                 }}>
//                   <SriLankaFlag />
//                   <ChevronDown />
//                 </div>
//                 <input
//                   type="tel"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   onFocus={() => setFocusedField("phone")}
//                   onBlur={() => setFocusedField(null)}
//                   style={{
//                     flex: 1,
//                     padding: "14px 16px",
//                     border: "none",
//                     fontSize: "15px",
//                     color: "#1a1a1a",
//                     outline: "none",
//                     backgroundColor: "transparent",
//                     fontFamily: "inherit",
//                     letterSpacing: "-0.2px",
//                   }}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Register Button */}
//           <button style={{
//             width: "100%",
//             padding: "17px",
//             borderRadius: "50px",
//             background: "linear-gradient(135deg, #2a9df4 0%, #1a7fd4 100%)",
//             color: "#fff",
//             fontSize: "16px",
//             fontWeight: "600",
//             border: "none",
//             cursor: "pointer",
//             marginTop: "32px",
//             letterSpacing: "-0.2px",
//             boxShadow: "0 6px 20px rgba(42, 157, 244, 0.35)",
//             fontFamily: "inherit",
//             transition: "transform 0.1s ease, box-shadow 0.1s ease",
//           }}
//             onMouseDown={(e) => {
//               (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.98)";
//               (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 3px 12px rgba(42,157,244,0.3)";
//             }}
//             onMouseUp={(e) => {
//               (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
//               (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 20px rgba(42,157,244,0.35)";
//             }}
//           >
//             Register
//           </button>

//           {/* Divider */}
//           <div style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "14px",
//             margin: "24px 0",
//           }}>
//             <div style={{ flex: 1, height: "1px", backgroundColor: "#e0e0e5" }} />
//             <span style={{ fontSize: "13px", color: "#8e8e93", fontWeight: "400", whiteSpace: "nowrap" }}>
//               Or Sign Up with
//             </span>
//             <div style={{ flex: 1, height: "1px", backgroundColor: "#e0e0e5" }} />
//           </div>

//           {/* Social Buttons */}
//           <div style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "16px",
//           }}>
//             {[<GoogleIcon />, <AppleIcon />].map((icon, i) => (
//               <button key={i} style={{
//                 width: "56px",
//                 height: "56px",
//                 borderRadius: "50%",
//                 border: "1.5px solid #e0e0e5",
//                 backgroundColor: "#fafafa",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 cursor: "pointer",
//                 transition: "background-color 0.15s ease, border-color 0.15s ease",
//                 boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
//               }}
//                 onMouseEnter={(e) => {
//                   (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#f0f0f5";
//                   (e.currentTarget as HTMLButtonElement).style.borderColor = "#c8c8d0";
//                 }}
//                 onMouseLeave={(e) => {
//                   (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#fafafa";
//                   (e.currentTarget as HTMLButtonElement).style.borderColor = "#e0e0e5";
//                 }}
//               >
//                 {icon}
//               </button>
//             ))}
//           </div>

//           {/* Login Link */}
//           <p style={{
//             textAlign: "center",
//             fontSize: "13.5px",
//             color: "#8e8e93",
//             marginTop: "28px",
//             letterSpacing: "-0.1px",
//           }}>
//             Already have an account?{" "}
//             <span style={{
//               color: "#2a9df4",
//               fontWeight: "600",
//               cursor: "pointer",
//             }}>
//               Login
//             </span>
//           </p>
//         </div>

//         {/* Home Indicator */}
//         <div style={{
//           height: "34px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexShrink: 0,
//         }}>
//           <div style={{
//             width: "134px",
//             height: "5px",
//             backgroundColor: "#1a1a1a",
//             borderRadius: "3px",
//             opacity: 0.18,
//           }} />
//         </div>
//       </div>
//     </div>
//   );
// }

// src/pages/Signup.tsx

import { useState } from "react";
import {BackArrow, GoogleIcon, AppleIcon, StatusBar, HomeIndicator, PhoneShell, PhoneInputField } from "../components/shared";

export default function CreateAccount() {
  const [fullName, setFullName] = useState("Saman Edirimuni");
  const [email, setEmail] = useState("ABC@gmail.com");
  const [phone, setPhone] = useState("(94) 726-0592");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#e5e5ea",
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      <PhoneShell>
        <StatusBar />

        {/* Scrollable Content */}
        <div style={{
          flex: 1,
          overflowY: "auto",
          padding: "0 28px 24px",
          scrollbarWidth: "none",
        }}>
          {/* Back Button */}
          <div style={{ marginTop: "8px", marginBottom: "28px", cursor: "pointer" }}>
            <BackArrow />
          </div>

          {/* Header */}
          <div style={{ marginBottom: "32px" }}>
            <h1 style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#1a1a1a",
              margin: "0 0 6px",
              letterSpacing: "-0.8px",
              lineHeight: "1.1",
            }}>
              Create Account
            </h1>
            <p style={{
              fontSize: "14px",
              color: "#8e8e93",
              margin: 0,
              fontWeight: "400",
              letterSpacing: "-0.1px",
            }}>
              Create an account to continue!
            </p>
          </div>

          {/* Form Fields */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

            {/* Full Name */}
            <div>
              <label style={{
                display: "block",
                fontSize: "13.5px",
                fontWeight: "500",
                color: "#1a1a1a",
                marginBottom: "7px",
                letterSpacing: "-0.1px",
              }}>Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  border: `1.5px solid ${focusedField === "name" ? "#2a9df4" : "#e0e0e5"}`,
                  fontSize: "15px",
                  color: "#1a1a1a",
                  outline: "none",
                  boxSizing: "border-box",
                  backgroundColor: "#fafafa",
                  transition: "border-color 0.2s ease",
                  fontFamily: "inherit",
                  letterSpacing: "-0.2px",
                }}
              />
            </div>

            {/* Email */}
            <div>
              <label style={{
                display: "block",
                fontSize: "13.5px",
                fontWeight: "500",
                color: "#1a1a1a",
                marginBottom: "7px",
                letterSpacing: "-0.1px",
              }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  border: `1.5px solid ${focusedField === "email" ? "#2a9df4" : "#e0e0e5"}`,
                  fontSize: "15px",
                  color: "#1a1a1a",
                  outline: "none",
                  boxSizing: "border-box",
                  backgroundColor: "#fafafa",
                  transition: "border-color 0.2s ease",
                  fontFamily: "inherit",
                  letterSpacing: "-0.2px",
                }}
              />
            </div>

            {/* Phone Input */}
            <PhoneInputField value={phone} onChange={setPhone} />
          </div>

          {/* Register Button */}
          <button style={{
            width: "100%",
            padding: "17px",
            borderRadius: "50px",
            background: "linear-gradient(135deg, #2a9df4 0%, #1a7fd4 100%)",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            marginTop: "32px",
            letterSpacing: "-0.2px",
            boxShadow: "0 6px 20px rgba(42, 157, 244, 0.35)",
            fontFamily: "inherit",
            transition: "transform 0.1s ease, box-shadow 0.1s ease",
          }}
            onMouseDown={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.98)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 3px 12px rgba(42,157,244,0.3)";
            }}
            onMouseUp={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 20px rgba(42,157,244,0.35)";
            }}
          >
            Register
          </button>

          {/* Divider */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            margin: "24px 0",
          }}>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#e0e0e5" }} />
            <span style={{ fontSize: "13px", color: "#8e8e93", fontWeight: "400", whiteSpace: "nowrap" }}>
              Or Sign Up with
            </span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#e0e0e5" }} />
          </div>

          {/* Social Buttons */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
          }}>
            {[<GoogleIcon />, <AppleIcon />].map((icon, i) => (
              <button key={i} style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                border: "1.5px solid #e0e0e5",
                backgroundColor: "#fafafa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background-color 0.15s ease, border-color 0.15s ease",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#f0f0f5";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#c8c8d0";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#fafafa";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#e0e0e5";
                }}
              >
                {icon}
              </button>
            ))}
          </div>

          {/* Login Link */}
          <p style={{
            textAlign: "center",
            fontSize: "13.5px",
            color: "#8e8e93",
            marginTop: "28px",
            letterSpacing: "-0.1px",
          }}>
            Already have an account?{" "}
            <span style={{
              color: "#2a9df4",
              fontWeight: "600",
              cursor: "pointer",
            }}>
              Login
            </span>
          </p>
        </div>

        <HomeIndicator />
      </PhoneShell>
    </div>
  );
}