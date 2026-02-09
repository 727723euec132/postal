/**
 * Purpose: Public tracking page with map, delay reason, and prediction output.
 */
import React from "react";
import MapPanel from "../components/MapPanel.jsx";

const TrackingPage = () => (
  <div className="page">
    <div className="topbar">
      <div>
        <h2>Track Parcel</h2>
        <p>Public access tracking by ID</p>
      </div>
      <div className="status-pill status-yellow">Delay Risk: Medium</div>
    </div>

    <div className="card" style={{ marginTop: "24px" }}>
      <h3>Tracking ID Lookup</h3>
      <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
        <input
          type="text"
          placeholder="Enter Tracking ID"
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "12px",
            border: "1px solid #ddd"
          }}
        />
        <button className="primary-btn">Track</button>
      </div>
    </div>

    <MapPanel label="Transit Location" />

    <div className="card-grid">
      <div className="card">
        <h4>Delay Reason</h4>
        <p>Monsoon rainfall causing routing adjustments near regional hubs.</p>
      </div>
      <div className="card">
        <h4>Predicted Delay (ML)</h4>
        <p>Delay Probability: 32%</p>
        <p>Estimated Hours: 4.5 hrs</p>
      </div>
      <div className="card">
        <h4>Weather Impact</h4>
        <p>Heavy rain reported along corridor. Impact: High delay risk.</p>
      </div>
    </div>
  </div>
);

export default TrackingPage;
