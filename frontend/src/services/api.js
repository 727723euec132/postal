// API client utilities for portal backend communication.
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE ?? "http://localhost:5000/api";

export const login = async (payload) => {
  const response = await axios.post(`${API_BASE}/auth/login`, payload);
  return response.data;
};

export const registerUser = async (payload) => {
  const response = await axios.post(`${API_BASE}/auth/register`, payload);
  return response.data;
};

export const fetchTracking = async (trackingId) => {
  const response = await axios.get(`${API_BASE}/parcels/track/${trackingId}`);
  return response.data;
};

export const fetchOffices = async () => {
  const response = await axios.get(`${API_BASE}/offices`);
  return response.data;
};

export const fetchPredictions = async () => {
  const response = await axios.get(`${API_BASE}/predictions/logs`);
  return response.data;
};
