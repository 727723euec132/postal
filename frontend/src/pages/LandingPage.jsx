/**
 * Purpose: Public landing page with tracking search and portal overview.
 */
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="page">
    <div className="topbar">
      <div>
        <h2>Smart Postal Tracking & Delay Portal</h2>
        <p>Official Indian Postal Intelligence System</p>
      </div>
      <div style={{ display: "flex", gap: "12px" }}>
        <Link className="secondary-btn" to="/track">
          Tracking Using ID
        </Link>
        <Link className="primary-btn" to="/auth">
          Login/Register
        </Link>
      </div>
    </div>

    <div style={{ marginTop: "24px" }} className="banner">
      General Update: Nationwide route optimization and weather monitoring active.
    </div>

    <div className="card" style={{ marginTop: "24px" }}>
      <h3>Track an Article Without Login</h3>
      <p>Enter your tracking ID to view current transit location and delay risk.</p>
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
        <Link className="primary-btn" to="/track">
          Search
        </Link>
      </div>
    </div>

    <div className="card" style={{ marginTop: "24px" }}>
      <h3>Postal Service Achievements</h3>
      <ul style={{ marginTop: "12px", color: "var(--text-secondary)" }}>
        <li>99.2% on-time delivery rate in metro corridors.</li>
        <li>AI-based delay prediction across 6,000+ routes.</li>
        <li>Integrated weather intelligence with national coverage.</li>
        <li>Connected office network visualization for transparency.</li>
      </ul>
    </div>
  </div>
);

export default LandingPage;
