// Top status bar for dashboards showing context and alert banner.
import React from "react";

const TopBar = ({ title }) => (
  <header className="topbar">
    <div>
      <h1>{title}</h1>
      <p>Official Indian Postal Intelligence System</p>
    </div>
    <div className="topbar-alert">
      <span className="alert-dot" />
      Live update: Weather monitoring active across all offices.
    </div>
  </header>
);

export default TopBar;
