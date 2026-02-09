/**
 * Purpose: Weather controller to fetch live weather and expose impact data.
 */
const axios = require("axios");

const fetchWeather = async (req, res) => {
  const { location } = req.query;
  if (!location) {
    return res.status(400).json({ message: "Location query is required" });
  }

  const weatherResponse = await axios.get(
    `${process.env.WEATHER_API_URL}?q=${location}&appid=${process.env.WEATHER_API_KEY}&units=metric`
  );

  const weather = weatherResponse.data;
  const description = weather.weather?.[0]?.description || "clear";
  const impact = description.includes("rain") || description.includes("storm")
    ? "High delay risk"
    : "Normal operations";

  return res.json({
    location,
    description,
    temperature: weather.main?.temp,
    impact
  });
};

module.exports = {
  fetchWeather
};
