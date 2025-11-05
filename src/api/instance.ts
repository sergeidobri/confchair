import axios from 'axios';
import { clearAccessToken, getAccessToken, setAccessToken } from '../lib/auth';
import { authApi } from './auth/api';
import { useNavigate } from 'react-router-dom';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  withCredentials: true,
  timeout: 10_000,
});

// add token
apiClient.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// handle errors (401)
let isRefreshing = false;
let failedQueue: Array<(token: string) => void> = [];

apiClient.interceptors.response.use(
  (response) => response,  // 2xx
  async (error) => {       // 4xx
    const originalRequest = error.config;
    const navigate = useNavigate();

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          failedQueue.push((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(apiClient(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await authApi.refresh();
        const newToken = response.data.accessToken;
        setAccessToken(newToken);

        failedQueue.forEach((prom) => prom(newToken));
        failedQueue = [];

        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        clearAccessToken();
        navigate("/auth/login");
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;