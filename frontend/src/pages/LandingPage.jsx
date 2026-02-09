// Public landing page with tracking entry and portal highlights.
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="landing">
    <header className="landing-hero">
      <nav className="landing-nav">
        <div className="brand">
          <span className="brand-dot" />
          Smart Postal Tracking & Delay Portal
        </div>
        <div className="nav-actions">
          <Link className="btn btn-secondary" to="/tracking">
            Tracking Using ID
          </Link>
          <Link className="btn btn-primary" to="/auth">
            Login / Register
          </Link>
        </div>
      </nav>
      <div className="banner">General Update: Live weather monitoring is active nationwide.</div>
      <div className="landing-grid">
        <div>
          <h1>Official Indian Postal Intelligence System</h1>
          <p>
            Track parcels, monitor delays, and access role-based dashboards with real-time
            logistics insights.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/tracking">
              Track Parcel Now
            </Link>
            <Link className="btn btn-secondary" to="/auth">
              Login / Register
            </Link>
          </div>
        </div>
        <div className="landing-card">
          <h3>Postal Service Achievements</h3>
          <ul>
            <li>Nationwide same-day dispatch monitoring.</li>
            <li>Integrated delay prediction analytics.</li>
            <li>Dedicated officer and delivery dashboards.</li>
          </ul>
          <p className="landing-note">
            Trusted by postal officers and citizens for secure, reliable delivery intelligence.
          </p>
        </div>
      </div>
    </header>

    <section className="landing-info">
      <div className="card">
        <h3>Citizen Services</h3>
        <p>Public tracking without login and clear delivery status timelines.</p>
      </div>
      <div className="card">
        <h3>Officer Command Center</h3>
        <p>Register parcels, manage assignments, and coordinate dispatch.</p>
      </div>
      <div className="card">
        <h3>Data-Driven Forecasting</h3>
        <p>Random Forest delay prediction with weather impact analysis.</p>
      </div>
    </section>
  </div>
);

export default LandingPage;
