/**
 * Purpose: Login and registration page with role selection.
 */
import React from "react";

const LoginRegisterPage = () => (
  <div className="page">
    <div className="topbar">
      <div>
        <h2>Login / Register</h2>
        <p>Role-based access for Indian Postal operations</p>
      </div>
    </div>

    <div className="card-grid" style={{ marginTop: "24px" }}>
      <div className="card">
        <h3>Login</h3>
        <p>Select role and sign in.</p>
        <select style={{ width: "100%", marginTop: "12px", padding: "10px" }}>
          <option>User</option>
          <option>Officer</option>
          <option>Admin</option>
          <option>Delivery Man</option>
          <option>Post Officer</option>
        </select>
        <input
          type="email"
          placeholder="Email"
          style={{ width: "100%", marginTop: "12px", padding: "10px" }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{ width: "100%", marginTop: "12px", padding: "10px" }}
        />
        <button className="primary-btn" style={{ marginTop: "16px" }}>
          Login
        </button>
      </div>
      <div className="card">
        <h3>User Registration</h3>
        <p>Registration available only for citizen users.</p>
        <input
          type="text"
          placeholder="Full Name"
          style={{ width: "100%", marginTop: "12px", padding: "10px" }}
        />
        <input
          type="email"
          placeholder="Email"
          style={{ width: "100%", marginTop: "12px", padding: "10px" }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{ width: "100%", marginTop: "12px", padding: "10px" }}
        />
        <button className="secondary-btn" style={{ marginTop: "16px" }}>
          Register
        </button>
      </div>
    </div>
  </div>
);

export default LoginRegisterPage;
