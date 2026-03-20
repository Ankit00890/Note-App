import axios from 'axios';

const api = axios.create({
  // Automatically uses Render backend (fallback for local if .env is missing)
  baseURL: import.meta.env.VITE_API_URL || 'https://note-app-wnqb.onrender.com/api',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
