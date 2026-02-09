/**
 * Purpose: Notification list for delay alerts and system updates.
 */
import React from "react";

const NotificationCenter = ({ items }) => (
  <div className="card">
    <h4>Notifications</h4>
    <div style={{ display: "grid", gap: "12px", marginTop: "12px" }}>
      {items.map((item, index) => (
        <div key={index} className="notification">
          <strong>{item.title}</strong>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  </div>
);

export default NotificationCenter;
