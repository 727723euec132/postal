// Sidebar navigation component for dashboards.
import React from "react";

const Sidebar = ({ items }) => (
  <aside className="sidebar">
    <div className="sidebar-brand">
      <span className="brand-dot" />
      <div>
        <h2>Smart Postal</h2>
        <p>Tracking & Delay Portal</p>
      </div>
    </div>
    <nav>
      {items.map((item) => (
        <div className="sidebar-item" key={item.label}>
          <span className="sidebar-icon">{item.icon}</span>
          <div>
            <p className="sidebar-label">{item.label}</p>
            <span className="sidebar-sub">{item.description}</span>
          </div>
        </div>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
