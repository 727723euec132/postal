// Public parcel tracking page with map, delay reason, and prediction display.
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MapPanel from "../components/MapPanel.jsx";

const TrackingPage = () => {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult({
      trackingId,
      location: "Kolkata Sorting Center",
      delayReason: "Heavy rainfall on eastern corridor",
      delayProbability: 62,
      estimatedHours: 6,
      weatherImpact: "Moderate impact due to monsoon conditions",
    });
  };

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1>Track Parcel</h1>
          <p>Track any parcel with a tracking ID. No login required.</p>
        </div>
        <Link className="btn btn-secondary" to="/">
          Back to Home
        </Link>
      </header>

      <form className="card tracking-form" onSubmit={handleSubmit}>
        <label htmlFor="tracking">Tracking ID</label>
        <div className="input-row">
          <input
            id="tracking"
            value={trackingId}
            onChange={(event) => setTrackingId(event.target.value)}
            placeholder="Enter tracking ID"
            required
          />
          <button className="btn btn-primary" type="submit">
            Track Parcel
          </button>
        </div>
      </form>

      {result ? (
        <div className="tracking-results">
          <MapPanel
            title="Transit Location"
            center={[22.5726, 88.3639]}
            markers={[{ label: result.location, position: [22.5726, 88.3639] }]}
          />
          <div className="card">
            <h3>Delay Prediction</h3>
            <p>
              Delay Probability: <strong>{result.delayProbability}%</strong>
            </p>
            <p>
              Estimated Delay Hours: <strong>{result.estimatedHours} hrs</strong>
            </p>
            <p>
              Reason: <strong>{result.delayReason}</strong>
            </p>
            <p>
              Weather Impact: <strong>{result.weatherImpact}</strong>
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TrackingPage;
