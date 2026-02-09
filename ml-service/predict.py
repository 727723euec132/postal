# Flask microservice exposing the /predict endpoint for delay probability.
import joblib
import numpy as np
from flask import Flask, jsonify, request

app = Flask(__name__)
model = joblib.load("model.joblib")


@app.post("/predict")
def predict():
    """Predict delay probability and estimated hours based on input features."""
    payload = request.get_json(force=True)
    features = payload.get("features", {})

    vector = np.array(
        [
            features.get("weather", 0),
            features.get("distance", 0),
            features.get("route", 0),
            features.get("weekday", 0),
            features.get("historical_delays", 0),
        ]
    ).reshape(1, -1)

    estimated_hours = float(model.predict(vector)[0])
    delay_probability = min(100, max(0, estimated_hours * 4))

    return jsonify(
        {
            "delay_probability": round(delay_probability, 2),
            "estimated_hours": round(estimated_hours, 2),
            "reason": "Weather and route risk factors",
        }
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
