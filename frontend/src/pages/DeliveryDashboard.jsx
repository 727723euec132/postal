/**
 * Purpose: Delivery man dashboard for daily delivery routing and status.
 */
import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";
import MapPanel from "../components/MapPanel.jsx";

const DeliveryDashboard = () => (
  <div className="layout">
    <Sidebar
      title="Delivery Officer"
      links={[
        { label: "Today's Deliveries", to: "/dashboard/delivery" },
        { label: "Delivered Posts", to: "/dashboard/delivery" },
        { label: "Optimized Route", to: "/dashboard/delivery" },
        { label: "Settings", to: "/dashboard/delivery" },
        { label: "Profile", to: "/dashboard/delivery" }
      ]}
    />
    <main className="main-content">
      <Topbar
        title="Delivery Route Plan"
        action={<button className="secondary-btn">Start Route</button>}
      />
      <div className="card">
        <h3>Posts to be Delivered Today</h3>
        <ul style={{ marginTop: "12px", color: "var(--text-secondary)" }}>
          <li>INP-23810 - Sector 21, Gurgaon</li>
          <li>INP-88219 - MG Road, Pune</li>
          <li>INP-11920 - Andheri West, Mumbai</li>
        </ul>
      </div>
      <div className="card">
        <h3>Posts Already Delivered</h3>
        <ul style={{ marginTop: "12px", color: "var(--text-secondary)" }}>
          <li>INP-55677 - Delivered at 10:20 AM</li>
          <li>INP-33140 - Delivered at 11:05 AM</li>
        </ul>
      </div>
      <MapPanel label="Today Path & Stops" />
    </main>
  </div>
);

export default DeliveryDashboard;
