/**
 * Purpose: Public landing page with tracking search and portal overview.
 */
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="page">
    <header className="navbar">
      <div>
        <h2 style={{ color: "var(--primary-red)" }}>
          Smart Postal Tracking & Delay Portal
        </h2>
        <p>Official Indian Postal Intelligence System</p>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#tracking">Tracking</a>
        <a href="#services">Services</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </div>
      <div style={{ display: "flex", gap: "12px" }}>
        <Link className="secondary-btn" to="/track">
          Tracking Using ID
        </Link>
        <Link className="primary-btn" to="/auth">
          Login/Register
        </Link>
      </div>
    </header>

    <div id="home" style={{ marginTop: "24px" }} className="banner">
      General Update: Nationwide route optimization and weather monitoring active.
    </div>

    <section className="hero">
      <div className="hero-card">
        <h1>Government-Grade Postal Visibility</h1>
        <p>
          Track every article with AI-driven delay prediction, live weather
          intelligence, and national post office network insights designed for
          citizens and officers.
        </p>
        <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
          <Link className="primary-btn" to="/track">
            Track an Article
          </Link>
          <Link className="secondary-btn" to="/auth">
            Officer Login
          </Link>
        </div>
        <div className="stats-row">
          <div className="stat-tile">
            <h3>6,000+</h3>
            <p>Connected post offices</p>
          </div>
          <div className="stat-tile">
            <h3>99.2%</h3>
            <p>On-time delivery</p>
          </div>
          <div className="stat-tile">
            <h3>24x7</h3>
            <p>Monitoring center</p>
          </div>
        </div>
      </div>
      <div className="card" id="tracking">
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
        <p style={{ marginTop: "12px", color: "var(--text-secondary)" }}>
          Citizens can access public tracking. Officers may log in for extended
          analytics, routing, and notifications.
        </p>
      </div>
    </section>

    <section id="services" className="card" style={{ marginTop: "24px" }}>
      <h3 className="section-title">Core Services</h3>
      <div className="card-grid">
        <div className="card">
          <h4>Real-time Tracking</h4>
          <p>End-to-end visibility for every article across the network.</p>
        </div>
        <div className="card">
          <h4>Delay Prediction</h4>
          <p>Random Forest model forecasting delay probability and hours.</p>
        </div>
        <div className="card">
          <h4>Weather Impact</h4>
          <p>Integrated weather alerts with regional impact assessments.</p>
        </div>
      </div>
    </section>

    <section id="achievements" className="card" style={{ marginTop: "24px" }}>
      <h3>Postal Service Achievements</h3>
      <ul style={{ marginTop: "12px", color: "var(--text-secondary)" }}>
        <li>99.2% on-time delivery rate in metro corridors.</li>
        <li>AI-based delay prediction across 6,000+ routes.</li>
        <li>Integrated weather intelligence with national coverage.</li>
        <li>Connected office network visualization for transparency.</li>
      </ul>
    </section>

    <section id="contact" className="card" style={{ marginTop: "24px" }}>
      <h3 className="section-title">Official Support</h3>
      <p>
        For operational assistance, reach the National Postal Operations Center at
        1800-000-POST or email support@indiapost.gov.in.
      </p>
    </section>
  </div>
);

export default LandingPage;
