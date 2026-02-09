# Smart Postal Tracking & Delay Portal

Purpose: This repository delivers a full MERN + ML system for postal tracking, role-based dashboards, weather intelligence, and Random Forest delay prediction.

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

Create a `.env` file (use `.env.example` for reference):

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/smart-postal
JWT_SECRET=replace-with-secure-secret
ML_SERVICE_URL=http://localhost:7000
WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
WEATHER_API_KEY=replace-with-weather-api-key
```

Run the API:

```bash
npm run dev
```

Key endpoints:
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/parcels/track/:trackingId`
- `POST /api/parcels/track/:trackingId/predict`
- `POST /api/parcels/track/:trackingId/weather`
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
VITE_API_URL=http://localhost:5000/api
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
  "weather": 1,
  "distance": 350,
  "route": 2,
  "weekday": 3,
  "historicalDelays": 2
}
```

## Notes

- Role-based dashboards route users after login based on role.
- Weather data uses live APIs and is stored per parcel.
- ML predictions are logged for analytics and compliance.
