/**
 * Purpose: Not found page for invalid routes.
 */
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="page">
    <div className="card">
      <h2>Page Not Found</h2>
      <p>The requested page does not exist.</p>
      <Link className="primary-btn" to="/">
        Return Home
      </Link>
    </div>
  </div>
);

export default NotFound;
