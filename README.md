# Smart Postal Tracking & Delay Portal

A full MERN + ML system for postal tracking, role-based dashboards, and delay prediction analytics.

## Project Structure

```
backend/      # Express + MongoDB API
frontend/     # React + Vite UI
ml-service/   # Flask ML microservice (Random Forest)
```

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGODB_URI=mongodb://127.0.0.1:27017/postal
PORT=5000
JWT_SECRET=replace-with-secure-secret
ML_SERVICE_URL=http://localhost:8000
WEATHER_API_URL=https://api.open-meteo.com/v1/forecast
WEATHER_API_KEY=your-key-if-required
```

Run the API:

```bash
npm run dev
```

Key endpoints:
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/offices`
- `GET /api/parcels/track/:trackingId`
- `POST /api/predictions`
- `GET /api/weather?location=...`

## Frontend Setup

```bash
cd frontend
npm install
```

Run the UI:

```bash
npm run dev
```

Set the API base URL when needed:

```
VITE_API_BASE=http://localhost:5000/api
```

## ML Service Setup

```bash
cd ml-service
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python train.py
python predict.py
```

The ML service exposes `POST /predict` with payload:

```json
{
  "features": {
    "weather": 1,
    "distance": 350,
    "route": 2,
    "weekday": 3,
    "historical_delays": 0.15
  }
}
```

## Notes

- Role-based dashboards route users after login based on role.
- Weather data can use live APIs; fallback mock data is provided when keys are absent.
- ML predictions are logged for analytics and compliance.
