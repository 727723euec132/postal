/**
 * Purpose: User dashboard with parcel history, notifications, and status timeline.
 */
import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";
import DashboardCard from "../components/DashboardCard.jsx";
import NotificationCenter from "../components/NotificationCenter.jsx";

const UserDashboard = () => (
  <div className="layout">
    <Sidebar
      title="Citizen Dashboard"
      links={[
        { label: "History", to: "/dashboard/user" },
        { label: "Search Tracking", to: "/track" },
        { label: "Notifications", to: "/dashboard/user" },
        { label: "Settings", to: "/dashboard/user" },
        { label: "Profile", to: "/dashboard/user" }
      ]}
    />
    <main className="main-content">
      <Topbar
        title="Parcel Overview"
        action={<button className="primary-btn">New Tracking</button>}
      />
      <div className="card-grid">
        <DashboardCard title="Sent Parcels" value="24" status="status-green" />
        <DashboardCard title="Received Parcels" value="18" status="status-green" />
        <DashboardCard title="Delayed Parcels" value="2" status="status-red" />
      </div>
      <div className="card">
        <h3>Articles to be Received</h3>
        <table className="table" style={{ marginTop: "12px" }}>
          <thead>
            <tr>
              <th>Tracking ID</th>
              <th>Status</th>
              <th>ETA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>INP-45821</td>
              <td>
                <span className="status-pill status-yellow">In Transit</span>
              </td>
              <td>2 days</td>
            </tr>
            <tr>
              <td>INP-55210</td>
              <td>
                <span className="status-pill status-red">Delayed</span>
              </td>
              <td>4 days</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card">
        <h3>Delivery Status Timeline</h3>
        <ul style={{ marginTop: "12px", color: "var(--text-secondary)" }}>
          <li>Parcel received at Mumbai Sorting Hub.</li>
          <li>Dispatched to Pune Distribution Center.</li>
          <li>Out for delivery assigned to local officer.</li>
        </ul>
      </div>
      <div className="card">
        <h3>Delay Prediction Indicator</h3>
        <p>Current risk level: Moderate (32% probability).</p>
      </div>
      <NotificationCenter
        items={[
          {
            title: "Delay Alert",
            message: "Parcel INP-55210 delayed due to weather impact."
          }
        ]}
      />
    </main>
  </div>
);

export default UserDashboard;
