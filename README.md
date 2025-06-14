# Zerodha Full-Stack Monorepo

This repository contains the complete Zerodha stock trading platform, including:
- **backend/**: Node.js/Express API with MongoDB
- **dashboard/**: React dashboard for authenticated users
- **frontend/**: React landing page (marketing site)

---

## Project Structure
```
zerodha/
  backend/        # Node.js/Express API
  dashboard/      # React dashboard app
  frontend/       # React landing page
  README.md
  ...
```

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/zerodha.git
cd zerodha
```

### 2. Install Dependencies
- **Backend:**
  ```bash
  cd backend
  npm install
  ```
- **Dashboard:**
  ```bash
  cd ../dashboard
  npm install
  ```
- **Frontend:**
  ```bash
  cd ../frontend
  npm install
  ```

### 3. Environment Variables
- Copy `.env.example` to `.env` in each folder and fill in the required values.
- **Never commit secrets to the repo!**

### 4. Running Locally
- **Backend:**
  ```bash
  cd backend
  npm run dev
  ```
- **Dashboard:**
  ```bash
  cd dashboard
  npm start
  ```
- **Frontend:**
  ```bash
  cd frontend
  npm start
  ```

---

## Deployment

### Frontend & Dashboard (Vercel/Netlify)
- Connect your repo to Vercel/Netlify.
- Set the project root to `frontend/` or `dashboard/` as needed.
- Set environment variables in the dashboard.
- Vercel/Netlify will auto-detect React and build the app.

### Backend (Render/Railway/Heroku)
- Connect your repo to Render/Railway/Heroku.
- Set the project root to `backend/`.
- Set environment variables in the dashboard.
- Render/Railway/Heroku will auto-detect Node.js and run the server.

---

## .gitignore
See below for a recommended monorepo `.gitignore`.

---

## License
[MIT](LICENSE)
#   z e r o d h a  
 