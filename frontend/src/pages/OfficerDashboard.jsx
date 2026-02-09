/**
 * Purpose: Cash counter officer dashboard for parcel creation and updates.
 */
import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";
import MapPanel from "../components/MapPanel.jsx";

const OfficerDashboard = () => (
  <div className="layout">
    <Sidebar
      title="Cash Counter Officer"
      links={[
        { label: "Track Article", to: "/track" },
        { label: "Create Article", to: "/dashboard/officer" },
        { label: "Register Parcel", to: "/dashboard/officer" },
        { label: "Update Parcel", to: "/dashboard/officer" },
        { label: "Assign Delivery", to: "/dashboard/officer" },
        { label: "Settings", to: "/dashboard/officer" },
        { label: "Profile", to: "/dashboard/officer" }
      ]}
    />
    <main className="main-content">
      <Topbar
        title="Officer Operations"
        action={<button className="primary-btn">New Parcel</button>}
      />
      <div className="card-grid">
        <div className="card">
          <h4>Register Parcel</h4>
          <p>Capture sender, recipient, and routing details.</p>
        </div>
        <div className="card">
          <h4>Update Parcel Details</h4>
          <p>Update status, location, or metadata.</p>
        </div>
        <div className="card">
          <h4>Assign Delivery Officer</h4>
          <p>Allocate parcel to delivery staff for final mile.</p>
        </div>
      </div>
      <MapPanel label="Office Transit Map" />
    </main>
  </div>
);

export default OfficerDashboard;
