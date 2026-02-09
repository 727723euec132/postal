// Notification list for delay alerts and operational updates.
import React from "react";

const NotificationList = ({ items }) => (
  <div className="card">
    <h3>Notifications</h3>
    <ul className="notification-list">
      {items.map((item) => (
        <li key={item.title} className={`notification ${item.level}`}>
          <strong>{item.title}</strong>
          <p>{item.message}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default NotificationList;
