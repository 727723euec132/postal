// Shared layout wrapper for dashboard pages with sidebar and top bar.
import React from "react";
import Sidebar from "./Sidebar.jsx";
import TopBar from "./TopBar.jsx";

const AppLayout = ({ sidebarItems, title, children }) => (
  <div className="dashboard">
    <Sidebar items={sidebarItems} />
    <div className="dashboard-main">
      <TopBar title={title} />
      <div className="dashboard-content">{children}</div>
    </div>
  </div>
);

export default AppLayout;
