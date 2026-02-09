/**
 * Purpose: Reusable data card for dashboard KPIs.
 */
import React from "react";

const DashboardCard = ({ title, value, status }) => (
  <div className="card">
    <p>{title}</p>
    <h2>{value}</h2>
    {status && <span className={`status-pill ${status}`}>{status}</span>}
  </div>
);

export default DashboardCard;
