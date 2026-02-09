/**
 * Purpose: Shared sidebar navigation for dashboard views.
 */
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ title, links }) => (
  <aside className="sidebar">
    <div>
      <h2>{title}</h2>
      <p>Official Indian Postal Intelligence</p>
    </div>
    <nav>
      {links.map((link) => (
        <Link key={link.label} to={link.to}>
          {link.label}
        </Link>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
