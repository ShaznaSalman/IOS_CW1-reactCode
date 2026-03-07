import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import VerifyOTP from "./pages/verifyOTP";
import Verified from "./pages/Verified";
import HomeScreen from "./pages/Home";
import ServicesScreen from "./pages/Services";
import AppointmentsScreen from "./pages/AppointmentsScreen";
import MapScreen from "./pages/Mapscreen";
import ProfileScreen from "./pages/Profilescreen";
import NotificationsScreen from "./pages/Notificationsscreen";
import MyAppointmentScreen from "./pages/myappointmentscreen";
import TrackingScreen from "./pages/Trackingscreen";
import VoiceCallScreen from "./pages/Voicecallscreen";
import ConsultationCompleteScreen from "./pages/Consultationcompletescreen";
import PharmacyDetailScreen from "./pages/Pharmacydetailscreen ";
import PharmacyBookingSuccessScreen from "./pages/Pharmacybookingsuccessscreen ";
import PharmacyOrderCompleteScreen from "./pages//Pharmacyordercompletescreen ";
import LabDetailsScreen    from "./pages/Labdetailsscreen ";
import PatientDetailsScreen from "./pages/Patientdetailsscreen ";
import PaymentScreen    from "./pages/Paymentscreen ";
import AddCardScreen          from "./pages/Addcardscreen ";
import ReviewSummaryScreen    from "./pages/Reviewsummaryscreen ";
import PaymentSuccessScreen from "./pages/Paymentsuccessscreen ";
import BookingSuccessScreen  from "./pages/Bookingsuccessscreen ";
import DoctorDetailScreen    from "./pages/Doctordetailscreen ";
import BookAppointmentScreen from "./pages/Bookappointmentscreen ";
import SelectPackageScreen   from "./pages/Selectpackagescreen ";
import DoctorReviewSummaryScreen  from "./pages/Doctorreviewsummaryscreen ";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<VerifyOTP />} />
        <Route path="/verified" element={<Verified />} />

        <Route path="/home" element={<HomeScreen />} />
        <Route path="/services" element={<ServicesScreen />} />
        <Route path="/map" element={<MapScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/notifications" element={<NotificationsScreen />} />

        <Route path="/appointments" element={<AppointmentsScreen />} />  
        <Route path="/appointment/detail"   element={<MyAppointmentScreen />} />
        <Route path="/appointment/tracking" element={<TrackingScreen />} />
        <Route path="/appointment/scan"     element={<VoiceCallScreen />} />
        <Route path="/appointment/complete" element={<ConsultationCompleteScreen />} />

        <Route path="/doctor"  element={<DoctorDetailScreen  />} />
        <Route path="/doctor/book" element={<BookAppointmentScreen />} />
        <Route path="/doctor/package" element={<SelectPackageScreen />} />
        <Route path="/doctor/patient-details"  element={<PatientDetailsScreen />} />
        <Route path="/doctor/payment" element={<PaymentScreen />} />
        <Route path="/doctor/add-card" element={<AddCardScreen />} /> 
        <Route path="/doctor/summary" element={<DoctorReviewSummaryScreen />} />
        <Route path="/doctor/payment-success" element={
          <PaymentSuccessScreen
            entityName="Dr. Ryan De Silva"
            amount="Rs 4000"
            patientName="Saman Edirimuna"
            date="4 Oct, 2026"
            time="07:00 PM"
          />
        } />
        <Route path="/doctor/booking-success" element={
          <BookingSuccessScreen
            entityName="Dr. Ryan De Silva"
            amount="Rs 4000"
            patientName="Saman Edirimuna"
            date="4 Oct, 2026"
            time="07:00 PM"
          />
        } />

        <Route path="/pharmacy/detail" element={<PharmacyDetailScreen />} />
        <Route path="/pharmacy/booking-success" element={<PharmacyBookingSuccessScreen />} />
        <Route path="/pharmacy/order-complete" element={<PharmacyOrderCompleteScreen />} />

        <Route path="/lab" element={<LabDetailsScreen />} />
        <Route path="/lab/patient-details" element={<PatientDetailsScreen/>} />
        <Route path="/lab/payment" element={<PaymentScreen />} />
        <Route path="/lab/add-card" element={<AddCardScreen />} /> 
        <Route path="/lab/summary" element={<ReviewSummaryScreen />} />
        <Route path="/lab/payment-success" element={
          <PaymentSuccessScreen
            entityName="X - Ray Lab"
            amount="Rs 2000"
            patientName="Saman Edirimuna"
            date="4 Oct, 2026"
            time="07:00 PM"
          />
        } />        
        <Route path="/lab/booking-success" element={
          <BookingSuccessScreen
            entityName="X - Ray Lab"
            amount="Rs 2000"
            patientName="Saman Edirimuna"
            date="4 Oct, 2026"
            time="07:00 PM"
          />
        } />
      </Routes>
    </BrowserRouter>

  );
}

export default App;