/**
 * Purpose: Login and registration page with role selection.
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api.js";

const roleRoutes = {
  user: "/dashboard/user",
  officer: "/dashboard/officer",
  admin: "/dashboard/admin",
  delivery: "/dashboard/delivery",
  postofficer: "/dashboard/post-officer"
};

const LoginRegisterPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ role: "User", email: "", password: "" });
  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    setMessage("");
    try {
      const response = await api.post("/auth/login", {
        email: loginData.email,
        password: loginData.password
      });
      const { token, role } = response.data;
      localStorage.setItem("postalToken", token);
      const target = roleRoutes[role] || "/";
      navigate(target);
    } catch (error) {
      setMessage("Login failed. Please check your credentials.");
    }
  };

  const handleRegister = async () => {
    setMessage("");
    try {
      await api.post("/auth/register", {
        name: registerData.name,
        email: registerData.email,
        password: registerData.password
      });
      setMessage("Registration successful. Please login with your credentials.");
    } catch (error) {
      setMessage("Registration failed. Try a different email.");
    }
  };

  return (
    <div className="page">
      <div className="topbar">
        <div>
          <h2>Login / Register</h2>
          <p>Role-based access for Indian Postal operations</p>
        </div>
      </div>

      {message && (
        <div className="card" style={{ marginTop: "16px" }}>
          <p>{message}</p>
        </div>
      )}

      <div className="card-grid" style={{ marginTop: "24px" }}>
        <div className="card">
          <h3>Login</h3>
          <p>Select role and sign in.</p>
          <select
            style={{ width: "100%", marginTop: "12px", padding: "10px" }}
            value={loginData.role}
            onChange={(event) =>
              setLoginData({ ...loginData, role: event.target.value })
            }
          >
            <option>User</option>
            <option>Officer</option>
            <option>Admin</option>
            <option>Delivery Man</option>
            <option>Post Officer</option>
          </select>
          <input
            type="email"
            placeholder="Email"
            value={loginData.email}
            onChange={(event) =>
              setLoginData({ ...loginData, email: event.target.value })
            }
            style={{ width: "100%", marginTop: "12px", padding: "10px" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(event) =>
              setLoginData({ ...loginData, password: event.target.value })
            }
            style={{ width: "100%", marginTop: "12px", padding: "10px" }}
          />
          <button className="primary-btn" style={{ marginTop: "16px" }} onClick={handleLogin}>
            Login
          </button>
        </div>
        <div className="card">
          <h3>User Registration</h3>
          <p>Registration available only for citizen users.</p>
          <input
            type="text"
            placeholder="Full Name"
            value={registerData.name}
            onChange={(event) =>
              setRegisterData({ ...registerData, name: event.target.value })
            }
            style={{ width: "100%", marginTop: "12px", padding: "10px" }}
          />
          <input
            type="email"
            placeholder="Email"
            value={registerData.email}
            onChange={(event) =>
              setRegisterData({ ...registerData, email: event.target.value })
            }
            style={{ width: "100%", marginTop: "12px", padding: "10px" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={registerData.password}
            onChange={(event) =>
              setRegisterData({ ...registerData, password: event.target.value })
            }
            style={{ width: "100%", marginTop: "12px", padding: "10px" }}
          />
          <button
            className="secondary-btn"
            style={{ marginTop: "16px" }}
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
