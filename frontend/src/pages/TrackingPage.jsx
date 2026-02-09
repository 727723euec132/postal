/**
 * Purpose: Public tracking page with map, delay reason, and prediction output.
 */
import React, { useState } from "react";
import MapPanel from "../components/MapPanel.jsx";
import api from "../services/api.js";

const TrackingPage = () => {
  const [trackingId, setTrackingId] = useState("");
  const [parcel, setParcel] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTrack = async () => {
    if (!trackingId.trim()) {
      setError("Please enter a tracking ID.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await api.get(`/parcels/track/${trackingId}`);
      setParcel(response.data);
    } catch (err) {
      setError("Tracking ID not found or service unavailable.");
      setParcel(null);
    } finally {
      setLoading(false);
    }
  };

  return (
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
            value={trackingId}
            onChange={(event) => setTrackingId(event.target.value)}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "12px",
              border: "1px solid #ddd"
            }}
          />
          <button className="primary-btn" onClick={handleTrack}>
            {loading ? "Tracking..." : "Track"}
          </button>
        </div>
        {error && <p style={{ marginTop: "12px", color: "var(--status-red)" }}>{error}</p>}
        {parcel && (
          <p style={{ marginTop: "12px", color: "var(--text-secondary)" }}>
            Current Status: {parcel.status} | Location: {parcel.currentLocation}
          </p>
        )}
      </div>

      <MapPanel label="Transit Location" />

      <div className="card-grid">
        <div className="card">
          <h4>Delay Reason</h4>
          <p>
            {parcel?.prediction?.reason ||
              "Monsoon rainfall causing routing adjustments near regional hubs."}
          </p>
        </div>
        <div className="card">
          <h4>Predicted Delay (ML)</h4>
          <p>Delay Probability: {parcel?.prediction?.delayProbability ?? 32}%</p>
          <p>Estimated Hours: {parcel?.prediction?.estimatedHours ?? 4.5} hrs</p>
        </div>
        <div className="card">
          <h4>Weather Impact</h4>
          <p>
            {parcel?.weatherData?.impact ||
              "Heavy rain reported along corridor. Impact: High delay risk."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;
