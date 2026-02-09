// Root application component with route definitions for the portal.
import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import TrackingPage from "./pages/TrackingPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import OfficerDashboard from "./pages/OfficerDashboard.jsx";
import DeliveryDashboard from "./pages/DeliveryDashboard.jsx";
import PostOfficerDashboard from "./pages/PostOfficerDashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const App = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/tracking" element={<TrackingPage />} />
    <Route path="/auth" element={<AuthPage />} />
    <Route path="/dashboard/user" element={<UserDashboard />} />
    <Route path="/dashboard/officer" element={<OfficerDashboard />} />
    <Route path="/dashboard/delivery" element={<DeliveryDashboard />} />
    <Route path="/dashboard/post-officer" element={<PostOfficerDashboard />} />
    <Route path="/dashboard/admin" element={<AdminDashboard />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default App;
