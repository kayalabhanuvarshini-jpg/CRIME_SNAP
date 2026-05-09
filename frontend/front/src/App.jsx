import { Routes, Route } from "react-router-dom";

/* AUTH PAGES */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

/* USER DASHBOARD */
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import ReportComplaint from "./pages/dashboard/ReportComplaint";
import MyComplaints from "./pages/dashboard/MyComplaints";
import ComplaintDetails from "./pages/dashboard/ComplaintDetails";
import Profile from "./pages/dashboard/Profile";
import TrackStatus from "./pages/dashboard/TrackStatus";

/* ADMIN */
import AdminLogin from "./pages/admin/login";
import AdminDashboard from "./pages/admin/dashboard";

export default function App() {

  return (
    <Routes>

      {/* AUTH PAGES */}
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* ADMIN */}
      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />

      <Route
        path="/admin/dashboard"
        element={<AdminDashboard />}
      />

      {/* USER DASHBOARD */}
      <Route
        path="/dashboard"
        element={<DashboardLayout />}
      >

        {/* DEFAULT PAGE */}
        <Route
          index
          element={<DashboardHome />}
        />

        {/* NESTED PAGES */}
        <Route
          path="report"
          element={<ReportComplaint />}
        />

        <Route
          path="my-complaints"
          element={<MyComplaints />}
        />

        <Route
          path="complaint-details"
          element={<ComplaintDetails />}
        />

        <Route
          path="profile"
          element={<Profile />}
        />

        <Route
          path="track-status"
          element={<TrackStatus />}
        />

      </Route>

    </Routes>
  );
}