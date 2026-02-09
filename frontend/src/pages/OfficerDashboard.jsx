// Cash counter officer dashboard for parcel registration and assignments.
import React from "react";
import AppLayout from "../components/AppLayout.jsx";
import DataTable from "../components/DataTable.jsx";

const OfficerDashboard = () => {
  const sidebarItems = [
    { label: "Track Article", description: "Search by ID", icon: "🔎" },
    { label: "Create Article", description: "New post", icon: "📝" },
    { label: "Register Parcel", description: "System entry", icon: "📦" },
    { label: "Update Details", description: "Modify status", icon: "✏️" },
    { label: "Assign Delivery", description: "Delivery officer", icon: "🚚" },
    { label: "Settings", description: "Officer settings", icon: "⚙️" },
    { label: "Profile", description: "Officer profile", icon: "👤" },
  ];

  return (
    <AppLayout sidebarItems={sidebarItems} title="Cash Counter Officer Dashboard">
      <div className="grid-2">
        <div className="card">
          <h3>Track Article by ID</h3>
          <div className="input-row">
            <input placeholder="Enter tracking ID" />
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </div>
        </div>
        <div className="card">
          <h3>Create a New Article/Post</h3>
          <div className="form-grid">
            <input placeholder="Sender name" />
            <input placeholder="Destination" />
            <input placeholder="Weight" />
            <button className="btn btn-secondary" type="button">
              Create Article
            </button>
          </div>
        </div>
      </div>
      <div className="grid-2">
        <div className="card">
          <h3>Register Parcel in System</h3>
          <div className="form-grid">
            <input placeholder="Tracking ID" />
            <input placeholder="Origin" />
            <input placeholder="Destination" />
            <button className="btn btn-primary" type="button">
              Register Parcel
            </button>
          </div>
        </div>
        <div className="card">
          <h3>Assign Parcel to Delivery Officer</h3>
          <div className="form-grid">
            <input placeholder="Tracking ID" />
            <select>
              <option>Officer A</option>
              <option>Officer B</option>
            </select>
            <button className="btn btn-secondary" type="button">
              Assign
            </button>
          </div>
        </div>
      </div>
      <DataTable
        title="Registered Parcels"
        columns={["Tracking ID", "Status", "Assigned Officer"]}
        rows={[
          ["INP4321", "Registered", "Officer A"],
          ["INP9876", "In Transit", "Officer B"],
        ]}
      />
    </AppLayout>
  );
};

export default OfficerDashboard;
