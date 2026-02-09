/**
 * Purpose: Application routes for the Smart Postal Tracking & Delay Portal.
 */
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import TrackingPage from "./pages/TrackingPage.jsx";
import LoginRegisterPage from "./pages/LoginRegisterPage.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import OfficerDashboard from "./pages/OfficerDashboard.jsx";
import DeliveryDashboard from "./pages/DeliveryDashboard.jsx";
import PostOfficerDashboard from "./pages/PostOfficerDashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import PredictionAnalytics from "./pages/PredictionAnalytics.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/track" element={<TrackingPage />} />
    <Route path="/auth" element={<LoginRegisterPage />} />
    <Route path="/dashboard/user" element={<UserDashboard />} />
    <Route path="/dashboard/officer" element={<OfficerDashboard />} />
    <Route path="/dashboard/delivery" element={<DeliveryDashboard />} />
    <Route path="/dashboard/post-officer" element={<PostOfficerDashboard />} />
    <Route path="/dashboard/admin" element={<AdminDashboard />} />
    <Route path="/dashboard/admin/analytics" element={<PredictionAnalytics />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
