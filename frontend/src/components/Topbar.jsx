/**
 * Purpose: Topbar with status and user actions.
 */
import React from "react";

const Topbar = ({ title, action }) => (
  <div className="topbar">
    <div>
      <h3>{title}</h3>
      <p>Smart Postal Tracking & Delay Portal</p>
    </div>
    {action}
  </div>
);

export default Topbar;
