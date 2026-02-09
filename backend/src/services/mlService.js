// Service to call the ML microservice for delay prediction.
import axios from "axios";

export const requestDelayPrediction = async (features) => {
  const baseUrl = process.env.ML_SERVICE_URL || "http://localhost:8000";
  const response = await axios.post(`${baseUrl}/predict`, features);
  return response.data;
};
