/**
 * Purpose: Admin dashboard for system management and office network insights.
 */
import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";
import MapPanel from "../components/MapPanel.jsx";
import ChartWidget from "../components/ChartWidget.jsx";

const AdminDashboard = () => (
  <div className="layout">
    <Sidebar
      title="Admin Command"
      links={[
        { label: "Create Users", to: "/dashboard/admin" },
        { label: "Office Map", to: "/dashboard/admin" },
        { label: "Delay Analytics", to: "/dashboard/admin/analytics" },
        { label: "System Settings", to: "/dashboard/admin" }
      ]}
    />
    <main className="main-content">
      <Topbar
        title="Admin Operations"
        action={<button className="primary-btn">Create User</button>}
      />
      <div className="card-grid">
        <div className="card">
          <h4>Create New Users</h4>
          <p>Provision delivery man, officer, and admin accounts.</p>
        </div>
        <div className="card">
          <h4>Delay Probability</h4>
          <p>View office-to-office delay probability insights.</p>
        </div>
        <div className="card">
          <h4>System Settings</h4>
          <p>Manage authentication, roles, and configurations.</p>
        </div>
      </div>
      <MapPanel label="Post Office Network Map" />
      <ChartWidget title="Delay Probability by Office Corridor" />
    </main>
  </div>
);

export default AdminDashboard;
