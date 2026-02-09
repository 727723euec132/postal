// Post office officer dashboard for office-level parcel operations.
import React from "react";
import AppLayout from "../components/AppLayout.jsx";
import DataTable from "../components/DataTable.jsx";
import NotificationList from "../components/NotificationList.jsx";

const PostOfficerDashboard = () => {
  const sidebarItems = [
    { label: "Update Status", description: "Mark received", icon: "📌" },
    { label: "Assign Delivery", description: "Allocate parcel", icon: "🚚" },
    { label: "Add Delivery Man", description: "Office staff", icon: "➕" },
    { label: "Track Parcels", description: "Search by ID", icon: "🔎" },
    { label: "Notifications", description: "Office alerts", icon: "🔔" },
    { label: "Settings", description: "Office settings", icon: "⚙️" },
  ];

  return (
    <AppLayout sidebarItems={sidebarItems} title="Post Officer Dashboard">
      <div className="grid-2">
        <div className="card">
          <h3>Update Post Status</h3>
          <div className="form-grid">
            <input placeholder="Tracking ID" />
            <select>
              <option>Received at office</option>
              <option>Out for delivery</option>
            </select>
            <button className="btn btn-primary" type="button">
              Update Status
            </button>
          </div>
        </div>
        <div className="card">
          <h3>Add Delivery Man</h3>
          <div className="form-grid">
            <input placeholder="Name" />
            <input placeholder="Contact" />
            <button className="btn btn-secondary" type="button">
              Add Staff
            </button>
          </div>
        </div>
      </div>
      <div className="grid-2">
        <DataTable
          title="Assign Parcel to Delivery Officer"
          columns={["Tracking ID", "Assigned To", "Action"]}
          rows={[["INP7788", "Delivery Man A", "Assigned"]]}
        />
        <NotificationList
          items={[
            {
              title: "Office Alert",
              message: "Parcel INP7788 reached office. Awaiting dispatch.",
              level: "risk",
            },
          ]}
        />
      </div>
    </AppLayout>
  );
};

export default PostOfficerDashboard;
