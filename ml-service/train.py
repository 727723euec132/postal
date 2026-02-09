# Training script for the Random Forest delay prediction model.
import joblib
import numpy as np
from sklearn.ensemble import RandomForestRegressor


def generate_sample_data():
    """Create synthetic training data for delay prediction."""
    rng = np.random.default_rng(42)
    weather = rng.integers(0, 3, size=200)  # 0 clear, 1 rain, 2 storm
    distance = rng.integers(10, 1200, size=200)
    route = rng.integers(0, 5, size=200)
    weekday = rng.integers(0, 6, size=200)
    historical = rng.random(size=200)
    delay_hours = (weather * 2 + distance / 200 + route + historical * 5 + weekday / 3) * 2
    features = np.column_stack([weather, distance, route, weekday, historical])
    return features, delay_hours


def main():
    """Train and persist the Random Forest regressor."""
    features, target = generate_sample_data()
    model = RandomForestRegressor(n_estimators=120, random_state=42)
    model.fit(features, target)
    joblib.dump(model, "model.joblib")


if __name__ == "__main__":
    main()
