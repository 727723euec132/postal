"""
Purpose: Flask ML microservice exposing /predict for delay probability and hours.
"""
from __future__ import annotations

import joblib
import numpy as np
from flask import Flask, jsonify, request

app = Flask(__name__)
MODEL_PATH = "model.pkl"


def load_model():
    """Load the trained Random Forest model from disk."""
    try:
        return joblib.load(MODEL_PATH)
    except FileNotFoundError:
        return None


MODEL = load_model()


def compute_probability(hours: float) -> float:
    """Convert estimated hours to a probability score between 0 and 1."""
    return min(max(hours / 24, 0), 1)


@app.route("/predict", methods=["POST"])
def predict_delay():
    """Predict delay probability and estimated hours from provided features."""
    payload = request.json or {}
    features = [
        payload.get("weather", 0),
        payload.get("distance", 0),
        payload.get("route", 0),
        payload.get("weekday", 0),
        payload.get("historicalDelays", 0),
    ]

    if MODEL is None:
        return jsonify({"message": "Model not trained. Run train.py first."}), 400

    prediction_hours = MODEL.predict([features])[0]
    probability = compute_probability(prediction_hours)

    return jsonify(
        {
            "delayProbability": round(probability * 100, 2),
            "estimatedHours": round(float(prediction_hours), 2),
            "reason": "Random Forest prediction based on operational signals"
        }
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=7000)
