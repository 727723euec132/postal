// Map panel embedding Leaflet maps for tracking and office visualization.
import React from "react";
import { MapContainer, Marker, Popup, Polyline, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapPanel = ({ title, center, markers, route }) => (
  <div className="card map-panel">
    <h3>{title}</h3>
    <MapContainer center={center} zoom={6} scrollWheelZoom={false} className="map-container">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker key={marker.label} position={marker.position}>
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}
      {route ? <Polyline positions={route} color="#FFC72C" /> : null}
    </MapContainer>
  </div>
);

export default MapPanel;
