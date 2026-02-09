// Login and registration page for all portal roles.
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleLogin = (event) => {
    event.preventDefault();
    const destinations = {
      user: "/dashboard/user",
      officer: "/dashboard/officer",
      admin: "/dashboard/admin",
      delivery: "/dashboard/delivery",
      post_officer: "/dashboard/post-officer",
    };
    navigate(destinations[role]);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    navigate("/dashboard/user");
  };

  return (
    <div className="auth page">
      <header className="page-header">
        <div>
          <h1>Login / Register</h1>
          <p>Secure access for users, officers, delivery staff, and admins.</p>
        </div>
        <Link className="btn btn-secondary" to="/">
          Back to Home
        </Link>
      </header>

      <div className="auth-grid">
        <form className="card" onSubmit={handleLogin}>
          <h3>Login</h3>
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            required
          />
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            value={form.password}
            onChange={(event) => setForm({ ...form, password: event.target.value })}
            required
          />
          <label htmlFor="role">Role</label>
          <select id="role" value={role} onChange={(event) => setRole(event.target.value)}>
            <option value="user">User</option>
            <option value="officer">Officer</option>
            <option value="delivery">Delivery Man</option>
            <option value="post_officer">Post Officer</option>
            <option value="admin">Admin</option>
          </select>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>

        <form className="card" onSubmit={handleRegister}>
          <h3>Register (User Only)</h3>
          <label htmlFor="register-name">Name</label>
          <input
            id="register-name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            required
          />
          <label htmlFor="register-email">Email</label>
          <input
            id="register-email"
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            required
          />
          <label htmlFor="register-password">Password</label>
          <input
            id="register-password"
            type="password"
            value={form.password}
            onChange={(event) => setForm({ ...form, password: event.target.value })}
            required
          />
          <button className="btn btn-secondary" type="submit">
            Register User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
