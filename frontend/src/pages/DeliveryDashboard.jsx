// Delivery man dashboard for daily routes and delivery status.
import React from "react";
import AppLayout from "../components/AppLayout.jsx";
import DataTable from "../components/DataTable.jsx";
import MapPanel from "../components/MapPanel.jsx";

const DeliveryDashboard = () => {
  const sidebarItems = [
    { label: "Today Deliveries", description: "Stops & parcels", icon: "🗺️" },
    { label: "Delivered", description: "Completed posts", icon: "✅" },
    { label: "Route Planner", description: "Optimized path", icon: "📍" },
    { label: "Settings", description: "Preferences", icon: "⚙️" },
    { label: "Profile", description: "Your profile", icon: "👤" },
  ];

  return (
    <AppLayout sidebarItems={sidebarItems} title="Delivery Man Dashboard">
      <div className="grid-2">
        <DataTable
          title="Posts to be Delivered Today"
          columns={["Tracking ID", "Stop", "Status"]}
          rows={[
            ["INP1122", "Salt Lake", "Pending"],
            ["INP3344", "Park Street", "Pending"],
          ]}
        />
        <DataTable
          title="Posts Already Delivered"
          columns={["Tracking ID", "Stop", "Delivered At"]}
          rows={[["INP5566", "Howrah", "10:30 AM"]]}
        />
      </div>
      <MapPanel
        title="Today Path (Optimized Route)"
        center={[22.5726, 88.3639]}
        markers={[
          { label: "Stop 1", position: [22.5726, 88.3639] },
          { label: "Stop 2", position: [22.585, 88.4] },
        ]}
        route={[
          [22.5726, 88.3639],
          [22.585, 88.4],
        ]}
      />
    </AppLayout>
  );
};

export default DeliveryDashboard;
