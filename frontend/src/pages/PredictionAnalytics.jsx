/**
 * Purpose: Admin analytics dashboard focused on delay prediction insights.
 */
import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";
import ChartWidget from "../components/ChartWidget.jsx";

const PredictionAnalytics = () => (
  <div className="layout">
    <Sidebar
      title="Prediction Analytics"
      links={[
        { label: "Admin Home", to: "/dashboard/admin" },
        { label: "Prediction Analytics", to: "/dashboard/admin/analytics" }
      ]}
    />
    <main className="main-content">
      <Topbar title="Prediction Analytics" />
      <div className="card-grid">
        <ChartWidget title="Delay Probability Distribution" />
        <ChartWidget title="Route vs Weather Impact" />
        <ChartWidget title="Historical Delay Trends" />
      </div>
    </main>
  </div>
);

export default PredictionAnalytics;
