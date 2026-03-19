# Notes App 🚀

A modern, responsive, and animated personal Notes Application built with the MERN stack (MongoDB, Express, React, Node.js). 
This app allows users to create an account, log in securely, and manage their personal notes.

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS, Framer Motion, Axios, React Router.
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT (JSON Web Tokens), bcryptjs.

## Features
- Complete Authentication (Register & Login) with JWT.
- Create, Read, Update, and Delete notes.
- Secure API endpoints (users can only access their own notes).
- Modern Glassmorphism UI with Framer Motion animations.
- "Our Story" page built in Hinglish explaining the journey.

## Local Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd notes-app
```

### 2. Backend Setup
```bash
cd backend
npm install
```
- Create a `.env` file inside the `backend` folder:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
- Start the backend server:
```bash
npm run dev
# Server will run on http://localhost:5000
```

### 3. Frontend Setup
Open a new terminal and navigate to the root directory.
```bash
cd frontend
npm install
```
- You can create a `.env` file in the `frontend` folder if your API URL is different:
```env
VITE_API_URL=http://localhost:5000/api
```
- Start the frontend server:
```bash
npm run dev
# App will run on http://localhost:5173
```

## Deployment
- **Frontend**: The React app is ready to be built (`npm run build`) and hosted on Netlify or Vercel.
- **Backend**: The Node server is ready to be hosted on Railway, Render, or Heroku. Make sure to configure the Environment variables on the platform.

## Author
Built with ❤️ from 0 to Z.
