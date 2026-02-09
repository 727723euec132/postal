"""
Purpose: Train a Random Forest model for delay prediction and persist to disk.
"""
import joblib
import numpy as np
from sklearn.ensemble import RandomForestRegressor


def build_training_data():
    """Generate a small synthetic dataset for initial model bootstrapping."""
    weather = np.random.randint(0, 3, 200)
    distance = np.random.uniform(10, 1200, 200)
    route = np.random.randint(0, 5, 200)
    weekday = np.random.randint(0, 6, 200)
    historical_delays = np.random.randint(0, 10, 200)

    features = np.column_stack(
        [weather, distance, route, weekday, historical_delays]
    )
    delay_hours = (
        0.01 * distance
        + weather * 1.2
        + historical_delays * 0.3
        + np.random.normal(0, 1, 200)
    )
    return features, delay_hours


def train_model(output_path: str = "model.pkl") -> None:
    """Train and save the Random Forest model."""
    features, target = build_training_data()
    model = RandomForestRegressor(n_estimators=120, random_state=42)
    model.fit(features, target)
    joblib.dump(model, output_path)
    print(f"Model saved to {output_path}")


if __name__ == "__main__":
    train_model()
