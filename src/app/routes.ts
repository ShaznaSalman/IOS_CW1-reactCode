import { createBrowserRouter } from "react-router";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { ServiceDetail } from "./pages/ServiceDetail";
import { MyAccount } from "./pages/MyAccount";
import { MyBookings } from "./pages/MyBookings";
import { BookingDetail } from "./pages/BookingDetail";
import { Payment } from "./pages/Payment";
import { PaymentSuccess } from "./pages/PaymentSuccess";
import { ManageAddress } from "./pages/ManageAddress";
import { AddPatient } from "./pages/AddPatient";
import { LabPackages } from "./pages/LabPackages";
import { PatientList } from "./pages/PatientList";
import { SelectPatient } from "./pages/SelectPatient";
import { VolumeDiscount } from "./pages/VolumeDiscount";
import { Prescriptions } from "./pages/Prescriptions";
import { LabReports } from "./pages/LabReports";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/services",
    Component: Services,
  },
  {
    path: "/service/:id",
    Component: ServiceDetail,
  },
  {
    path: "/my-account",
    Component: MyAccount,
  },
  {
    path: "/my-bookings",
    Component: MyBookings,
  },
  {
    path: "/booking/:id",
    Component: BookingDetail,
  },
  {
    path: "/payment",
    Component: Payment,
  },
  {
    path: "/payment-success",
    Component: PaymentSuccess,
  },
  {
    path: "/manage-address",
    Component: ManageAddress,
  },
  {
    path: "/add-patient",
    Component: AddPatient,
  },
  {
    path: "/lab-packages",
    Component: LabPackages,
  },
  {
    path: "/patient-list",
    Component: PatientList,
  },
  {
    path: "/select-patient",
    Component: SelectPatient,
  },
  {
    path: "/volume-discount",
    Component: VolumeDiscount,
  },
  {
    path: "/prescriptions",
    Component: Prescriptions,
  },
  {
    path: "/lab-reports",
    Component: LabReports,
  },
]);
