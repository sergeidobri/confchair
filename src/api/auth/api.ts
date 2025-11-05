import apiClient from '../apiClient';
import { AUTH_ENDPOINTS } from './endpoints';
import {
  type LoginRequest,
  type RegisterRequest,
  type TokenResponse,
} from './types';

export const authApi = {
  register: (data: RegisterRequest) =>
    apiClient.post(AUTH_ENDPOINTS.REGISTER, data),

  login: (data: LoginRequest) =>
    apiClient.post<TokenResponse>(AUTH_ENDPOINTS.LOGIN, data),

  refresh: () => 
    apiClient.get<TokenResponse>(AUTH_ENDPOINTS.REFRESH),
};