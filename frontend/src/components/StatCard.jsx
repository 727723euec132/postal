// Card component to show key metrics on dashboards.
import React from "react";

const StatCard = ({ title, value, status }) => (
  <div className={`card stat-card ${status}`}>
    <h3>{title}</h3>
    <p className="stat-value">{value}</p>
    <span className="status-pill">{status}</span>
  </div>
);

export default StatCard;
