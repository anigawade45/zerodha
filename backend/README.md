# Backend

This is the backend for the Zerodha stock trading dashboard.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file with your environment variables (see `.env.example` if available).
3. Start the backend server:
   ```bash
   npm start
   ```

## Environment Variables
- `MONGO_URL`: MongoDB connection string
- `JWT_SECRET`: Secret for JWT authentication
- `PORT`: Port to run the backend (default: 5000)

## Scripts
- `npm start` — Start the server
- `npm run dev` — Start the server with nodemon (if configured)

## Project Structure
- `model/` — Mongoose models
- `schemas/` — Mongoose schemas
- `middleware/` — Express middleware
- `index.js` — Main server file

## API Endpoints
- `/funds` — Get/add/withdraw funds
- `/holdings` — Get holdings
- `/positions` — Get/add positions
- `/orders` — Get/add orders
- `/watchlist` — Get/add/remove watchlist items
- `/summary` — Get account summary

## Notes
- Ensure MongoDB is running before starting the backend.
- All endpoints require authentication. 