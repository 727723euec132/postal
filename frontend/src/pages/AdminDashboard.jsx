// Admin dashboard for user creation, office map, and prediction analytics.
import React from "react";
import AppLayout from "../components/AppLayout.jsx";
import MapPanel from "../components/MapPanel.jsx";
import ChartPanel from "../components/ChartPanel.jsx";
import DataTable from "../components/DataTable.jsx";

const AdminDashboard = () => {
  const sidebarItems = [
    { label: "Create Users", description: "Delivery/Officer/Admin", icon: "➕" },
    { label: "Office Network", description: "Map & connections", icon: "🗺️" },
    { label: "Delay Probability", description: "Office-to-office", icon: "📊" },
    { label: "Prediction Analytics", description: "ML dashboard", icon: "📈" },
    { label: "System Settings", description: "Configuration", icon: "⚙️" },
  ];

  return (
    <AppLayout sidebarItems={sidebarItems} title="Admin Command Dashboard">
      <div className="grid-2">
        <div className="card">
          <h3>Create New Users</h3>
          <div className="form-grid">
            <input placeholder="Name" />
            <input placeholder="Email" />
            <select>
              <option>Delivery Man</option>
              <option>Officer</option>
              <option>Post Officer</option>
              <option>Admin</option>
            </select>
            <button className="btn btn-primary" type="button">
              Create User
            </button>
          </div>
        </div>
        <ChartPanel
          title="Delay Probability by Route"
          labels={["Delhi → Kolkata", "Kolkata → Mumbai", "Mumbai → Chennai"]}
          values={[35, 62, 48]}
        />
      </div>
      <MapPanel
        title="Post Office Network Map"
        center={[22.5726, 88.3639]}
        markers={[
          { label: "Kolkata GPO", position: [22.5726, 88.3639] },
          { label: "Howrah Office", position: [22.5958, 88.2636] },
        ]}
      />
      <div className="grid-2">
        <DataTable
          title="Connected Offices"
          columns={["Office", "Connected Offices"]}
          rows={[["Kolkata GPO", "Howrah, Barrackpore"]]}
        />
        <div className="card">
          <h3>Prediction Analytics Dashboard</h3>
          <p>Random Forest model monitors delay probability and estimated hours.</p>
          <ul>
            <li>Weather input: Monsoon risk</li>
            <li>Distance input: 340 km</li>
            <li>Historical delays: 14%</li>
          </ul>
          <button className="btn btn-secondary" type="button">
            Open Analytics
          </button>
        </div>
      </div>
    </AppLayout>
  );
};

export default AdminDashboard;
