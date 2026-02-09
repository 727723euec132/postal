// User dashboard with parcel history, notifications, and delay predictions.
import React from "react";
import AppLayout from "../components/AppLayout.jsx";
import StatCard from "../components/StatCard.jsx";
import DataTable from "../components/DataTable.jsx";
import Timeline from "../components/Timeline.jsx";
import NotificationList from "../components/NotificationList.jsx";

const UserDashboard = () => {
  const sidebarItems = [
    { label: "Parcel History", description: "Sent/Received totals", icon: "📦" },
    { label: "Tracking Search", description: "Search by ID", icon: "🔎" },
    { label: "Notifications", description: "Delay alerts", icon: "🔔" },
    { label: "Settings", description: "Preferences", icon: "⚙️" },
    { label: "Profile", description: "Your account", icon: "👤" },
  ];

  return (
    <AppLayout sidebarItems={sidebarItems} title="User Dashboard">
      <div className="grid-3">
        <StatCard title="Parcels Sent" value="18" status="on-time" />
        <StatCard title="Parcels Received" value="24" status="on-time" />
        <StatCard title="Delay Risk" value="Medium" status="risk" />
      </div>
      <div className="grid-2">
        <DataTable
          title="Articles to be Received"
          columns={["Tracking ID", "Origin", "Status", "ETA"]}
          rows={[
            ["INP1234", "Delhi", "In Transit", "Tomorrow"],
            ["INP5678", "Mumbai", "At Office", "Today"],
          ]}
        />
        <NotificationList
          items={[
            {
              title: "Delay Alert",
              message: "Parcel INP1234 delayed due to weather risk.",
              level: "risk",
            },
            {
              title: "Delivery Update",
              message: "Parcel INP5678 out for delivery.",
              level: "on-time",
            },
          ]}
        />
      </div>
      <div className="grid-2">
        <Timeline
          steps={[
            { label: "Registered", time: "08:00", status: "on-time" },
            { label: "In Transit", time: "13:00", status: "risk" },
            { label: "At Office", time: "18:00", status: "on-time" },
          ]}
        />
        <div className="card">
          <h3>Delay Prediction Indicator</h3>
          <p className="indicator risk">62% probability of delay on east corridor.</p>
          <p>Estimated delay: 6 hours. Weather impact: Moderate.</p>
        </div>
      </div>
    </AppLayout>
  );
};

export default UserDashboard;
