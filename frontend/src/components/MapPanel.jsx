/**
 * Purpose: Map placeholder for transit location and route visualization.
 */
import React from "react";

const MapPanel = ({ label }) => (
  <div className="card">
    <h4>{label}</h4>
    <div className="map-placeholder">Map integration (Leaflet/Mapbox)</div>
  </div>
);

export default MapPanel;
