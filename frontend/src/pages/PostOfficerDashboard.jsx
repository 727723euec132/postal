/**
 * Purpose: Post officer dashboard for office-level parcel operations.
 */
import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";
import NotificationCenter from "../components/NotificationCenter.jsx";

const PostOfficerDashboard = () => (
  <div className="layout">
    <Sidebar
      title="Post Office"
      links={[
        { label: "Update Status", to: "/dashboard/post-officer" },
        { label: "Assign Delivery", to: "/dashboard/post-officer" },
        { label: "Add Delivery Man", to: "/dashboard/post-officer" },
        { label: "Track Parcels", to: "/track" },
        { label: "Settings", to: "/dashboard/post-officer" },
        { label: "Notifications", to: "/dashboard/post-officer" }
      ]}
    />
    <main className="main-content">
      <Topbar
        title="Post Office Control"
        action={<button className="primary-btn">Mark Received</button>}
      />
      <div className="card-grid">
        <div className="card">
          <h4>Update Post Status</h4>
          <p>Mark parcel received and update backend location info.</p>
        </div>
        <div className="card">
          <h4>Assign Parcel</h4>
          <p>Allocate parcel to delivery officer for final mile.</p>
        </div>
        <div className="card">
          <h4>Add Delivery Man</h4>
          <p>Register delivery officers under this post office.</p>
        </div>
      </div>
      <NotificationCenter
        items={[
          {
            title: "Inbound Alert",
            message: "4 parcels arriving from Delhi Hub in next 6 hours."
          }
        ]}
      />
    </main>
  </div>
);

export default PostOfficerDashboard;
