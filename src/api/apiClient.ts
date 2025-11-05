// apiClient.ts
import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios';
import {
  clearAccessToken,
  getAccessToken,
  setAccessToken,
} from '../lib/auth';
import { AUTH_ENDPOINTS } from './auth/endpoints';

// --- Отслеживаем состояние обновление Refresh-токена ---
let isRefreshing = false;
// --- Очередь приостановленных запросов, как только токен обновится, повторяем запросы ---
const failedQueue: ((token: string) => void)[] = [];

// Функция навигации для ручного перехода на страницу авторизации
let navigateFn: ((path: string) => void) | null = null;

// Вызывается из глобальной компоненты
export const setNavigate = (navigate: (path: string) => void) => {
  navigateFn = navigate;
};

// --- Создаём клиента для обработки запросов ---
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  withCredentials: true, // отправляем cookie вместе с запросами
  timeout: 10_000,
});

// Дополняем запрос токеном перед отправкой
apiClient.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,          // при успешном запросе(2xx) -> ничего не делаем
  async (error: AxiosError) => {   // обрабатываем ошибки сервера
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };  // сохраняем изначальный запрос(упавший с ошибкой)

    if (error.response?.status === 401 && !originalRequest._retry) {   // если статус 401(Ошибка авторизации) и запрос ещё не поступал(!_retry)
      if (isRefreshing) {                                              // Если знаем уже знаем об ошибке авторизации (отправили запрос на обновление токена(isRefreshing)), то просто добавляем запрос в очередь
        return new Promise((resolve) => {
          failedQueue.push((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(apiClient(originalRequest));
          });
        });
      }

      originalRequest._retry = true;                                   // Помечаем запрос обработанным, чтобы при повторной ошибке просто его отклонить
      isRefreshing = true;                                             // Помечаем, что сейчас будет запущен процесс обновления

      try {
        const response = await apiClient.get(AUTH_ENDPOINTS.REFRESH);
        const newToken = response.data.accessToken;
        setAccessToken(newToken);

        failedQueue.forEach((resolve) => resolve(newToken));           // Разбираем очередь отклонённых запросов, подставляя новый токен
        failedQueue.length = 0;

        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return apiClient(originalRequest);                             // Повторно отправляем наш начальный запрос, вызвавший смуту   
      } catch (refreshError) {
        clearAccessToken();
        if (navigateFn) {
          navigateFn('/auth/login');                                   // При неудаче, отправляем на страницу авторизации.
        }
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;