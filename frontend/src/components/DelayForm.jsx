import React, { useMemo, useState } from "react";

const defaultWeather = "rain, wind";

const DelayForm = ({ offices, onSubmit }) => {
  const [officeId, setOfficeId] = useState("");
  const [weatherSummary, setWeatherSummary] = useState("");
  const [weatherFactors, setWeatherFactors] = useState(defaultWeather);
  const [reason, setReason] = useState("Severe weather alert issued by meteorology");

  const factorList = useMemo(() => {
    return weatherFactors
      .split(",")
      .map((factor) => factor.trim())
      .filter(Boolean);
  }, [weatherFactors]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!officeId) return;

    onSubmit({
      officeId,
      weatherSummary,
      weatherFactors: factorList,
      reason,
    });
  };

  return (
    <form className="delay-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="office">Courier office</label>
        <select
          id="office"
          value={officeId}
          onChange={(event) => setOfficeId(event.target.value)}
          required
        >
          <option value="">Select office</option>
          {offices.map((office) => (
            <option key={office._id} value={office._id}>
              {office.name} — {office.location}
            </option>
          ))}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="summary">Weather summary</label>
        <input
          id="summary"
          value={weatherSummary}
          onChange={(event) => setWeatherSummary(event.target.value)}
          placeholder="Heavy rain and strong winds expected for 48 hours"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="factors">Weather factors (comma separated)</label>
        <input
          id="factors"
          value={weatherFactors}
          onChange={(event) => setWeatherFactors(event.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="reason">Dispatch reason</label>
        <textarea
          id="reason"
          rows="3"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        />
      </div>
      <button type="submit">Create delay request</button>
    </form>
  );
};

export default DelayForm;
