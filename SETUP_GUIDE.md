# 🚀 Portfolio Setup & Deployment Guide

This guide will walk you through setting up your shiny new monorepo, both locally and in production.

## 📁 Repository Structure
To avoid conflicts, move any remaining React files in the root to `/frontend` so your repository looks precisely like this:

```
/portfolio-project
├── /frontend  (React, Vite, Tailwind app)
├── /backend   (Node.js, Express, MongoDB API)
└── RESUME.md
```

---

## 🛠 LOCAL SETUP

### 1. Backend Setup
Navigate to your backend folder and install the required packages:

```bash
cd backend
npm install
```

Create a `.env` file in the `/backend` directory (if not already created) and populate it with your local development variables:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/portfolio
FRONTEND_URL=http://localhost:5173
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
RECEIVER_EMAIL=your_email@gmail.com
ADMIN_TOKEN=supersecretadminpassword
```

Run the backend server in development mode:
```bash
npm run dev
```

### 2. Frontend Setup
Navigate to the frontend folder and install the required packages:

```bash
cd frontend
npm install
```

Create a `.env` file in the `/frontend` directory:
```env
VITE_API_URL=http://localhost:5000
```

Start the frontend application:
```bash
npm run dev
```

---

## 🌐 DEPLOYMENT GUIDE

### Option A: Vercel (Frontend) + Render (Backend) *[Recommended]*

#### Deploying the Backend (Render)
1. Push your monorepo to GitHub.
2. Go to **Render** -> **New Web Service**.
3. Connect your GitHub repository.
4. Set the **Root Directory** to `backend`.
5. Build Command: `npm install`
6. Start Command: `npm start`
7. Add all backend environment variables from your `.env` to the **Environment** tab on Render.
8. Provide the `FRONTEND_URL` later once your frontend is hosted.

#### Deploying the Frontend (Vercel)
1. Go to **Vercel** -> **Add New Project**.
2. Select your repository.
3. Edit the **Root Directory** to `frontend`.
4. Ensure the framework preset is **Vite**.
5. Add the Environment Variable:
   - `VITE_API_URL` = `https://your-backend-app.onrender.com`
6. Deploy!
7. **Important**: Go back to Render and update the `FRONTEND_URL` to match your Vercel URL so that CORS accepts incoming requests.

*(Optional: Set up an App Password down the line for Google SMTP `EMAIL_PASS` in your Google Account for the backend email config to work securely)*
