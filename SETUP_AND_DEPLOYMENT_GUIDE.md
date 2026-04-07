# Full-Stack Portfolio Setup & Deployment Guide

This guide explains how to set up your newly transformed full-stack structure and deploy it for production. 
Your portfolio now incorporates advanced system design concepts, MVC architecture, security practices, and a functional database.

## 1. Local Setup

### Backend
1. **Navigate to backend folder**: `cd backend`
2. **Install dependencies**: `npm install express cors helmet dotenv mongoose nodemailer express-rate-limit`
3. **Environment Variables**: Create a `.env` file in the `/backend` folder:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/portfolio?retryWrites=true&w=majority
   EMAIL_USER=your_gmail@gmail.com
   EMAIL_PASS=your_gmail_app_password
   RECEIVER_EMAIL=pinakirath99@gmail.com
   FRONTEND_URL=http://localhost:5173
   ```
4. **Acquire Gmail App Password**:
   - Go to Google Account > Security > 2-Step Verification.
   - Scroll to App Passwords > Create one for "Portfolio Mail". Use that 16-character string as `EMAIL_PASS`.
5. **Run Server**: `node server.js` (Or `npm run dev` with nodemon).

### Frontend
1. **Navigate to frontend folder**: `cd frontend`
2. **Environment Variables**: Create a `.env` file in the `/frontend` folder:
   ```env
   VITE_API_URL=http://localhost:5000
   ```
3. **Run Dev Server**: `npm run dev`

---

## 2. Best Practices Used

1. **MVC Architecture**: Code is logically decoupled into Models (Database schemas), Views (React frontend), and Controllers (API Logic).
2. **Security Enhancements**: 
   - `helmet` adds 14+ secure HTTP headers to prevent XSS and clickjacking.
   - `cors` is configured to only allow requests from specific origins.
   - Input validation exists on both Mongoose schemas and React Frontend forms.
   - `express-rate-limit` prevents spam bots from exhausting external email APIs (Nodemailer).
3. **Robust Database Logging**: All form submissions are stored securely in MongoDB, meaning no dropped or lost messages even if the email API briefly fails.
4. **State Handling**: React explicitly handles `idle`, `loading`, `success`, and `error` states to improve UX significantly over traditional blocking operations. 
5. **API Decoupling**: We explicitly removed standard dependencies (like Axios) in favor of the lightweight native Fetch API as requested, reducing bundle size while keeping functionality intact.

---

## 3. Deployment Steps

### Step 1: Database (MongoDB Atlas)
1. Sign in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a Free Cluster. Under Network Access, allow IPs `0.0.0.0/0` (for external DB connections).
3. Under Database Access, create a user and password.
4. Keep the Connection String. You will need it for the Backend deployment.

### Step 2: Backend (Render / Railway)
1. Create an account on [Render.com](https://render.com/).
2. Click **New** > **Web Service** and connect your GitHub repository.
3. Configure the settings:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `node server.js`
4. In the **Environment Variables** section on Render, add:
   - `MONGO_URI` (From Atlas)
   - `EMAIL_USER` (Your email)
   - `EMAIL_PASS` (App Password)
   - `RECEIVER_EMAIL` (Your email)
   - `FRONTEND_URL` (Wait until Vercel is deployed to add this, or skip CORS for testing).
5. Deploy. You will receive an API URL like `https://portfolio-api-xyz.onrender.com`.

### Step 3: Frontend (Vercel)
1. Go to [Vercel.com](https://vercel.com/) and Import your GitHub repository.
2. In the "Framework Preset", verify it says **Vite**.
3. Under **Root Directory**, click edit and select `frontend`.
4. Add Environment Variable:
   - Name: `VITE_API_URL`
   - Value: `https://portfolio-api-xyz.onrender.com` (Your Render backend URL).
5. Click **Deploy**.

## 4. Final Integration Checklist

- Ensure the backend Render URL is set inside Vercel (`VITE_API_URL`).
- Ensure the frontend Vercel URL is added inside Render (`FRONTEND_URL`).
- Test the contact form. It should show a floating label UI, show the loading spinner, send to MongoDB, trigger an email via Nodemailer, and respond with a success toast notification!
