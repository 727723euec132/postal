// Controllers for weather lookup and impact summaries.
import { Parcel } from "../models/Parcel.js";
import { fetchWeatherForLocation } from "../services/weatherService.js";

export const getWeatherImpact = async (req, res) => {
  const { location, parcelId } = req.query;
  const weather = await fetchWeatherForLocation(location);

  if (parcelId) {
    await Parcel.findByIdAndUpdate(parcelId, { weatherData: weather });
  }

  return res.json({ location, weather });
};
