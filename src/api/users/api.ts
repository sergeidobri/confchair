import apiClient from '../apiClient';
import { USERS_ENDPOINTS } from './endpoints';

export const usersApi = {
  getUser: () => 
    apiClient.get(USERS_ENDPOINTS.GET_USER),
};