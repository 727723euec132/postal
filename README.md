# Postal Weather Delay Prediction System

A MERN stack project that predicts courier delivery delays using weather factors, routes delay approvals to dispatch, and notifies affected customers once approved.

## Project Structure

```
frontend/  # React + Vite UI
backend/   # Express + MongoDB API
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
```

Run the API:

```bash
npm run dev
```

Key endpoints:
- `GET /api/health`
- `GET /api/offices`
- `GET /api/parcels`
- `GET /api/delays`
- `POST /api/delays`
- `PATCH /api/delays/:id/approve`

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

## Notes

- Courier offices, parcels, and delay requests are stored in MongoDB.
- Delay approvals update parcel ETAs and simulate notifications in the backend logs.
