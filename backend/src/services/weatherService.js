// Service to fetch and normalize weather data for a location.
import axios from "axios";

export const fetchWeatherForLocation = async (location) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const apiUrl = process.env.WEATHER_API_URL || "https://api.open-meteo.com/v1/forecast";

  if (!apiKey) {
    return {
      summary: "Clear",
      temperature: 28,
      impact: "Low",
    };
  }

  const response = await axios.get(apiUrl, {
    params: {
      q: location,
      key: apiKey,
    },
  });

  const data = response.data?.current || response.data?.current_weather || {};
  return {
    summary: data.condition?.text || "Partly cloudy",
    temperature: data.temp_c || data.temperature || 25,
    impact: data.condition?.text?.includes("rain") ? "High" : "Moderate",
  };
};
