const API_BASE = import.meta.env.VITE_API_BASE ?? "http://localhost:5000/api";

export const fetchOffices = async () => {
  const response = await fetch(`${API_BASE}/offices`);
  return response.json();
};

export const fetchParcels = async () => {
  const response = await fetch(`${API_BASE}/parcels`);
  return response.json();
};

export const fetchDelays = async () => {
  const response = await fetch(`${API_BASE}/delays`);
  return response.json();
};

export const createDelayRequest = async (payload) => {
  const response = await fetch(`${API_BASE}/delays`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return response.json();
};
