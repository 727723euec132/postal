// Fallback page for unknown routes.
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="page">
    <div className="card">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for is unavailable.</p>
      <Link className="btn btn-primary" to="/">
        Return Home
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
