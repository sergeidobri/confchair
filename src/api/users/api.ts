import apiClient from '@api/apiClient';
import { USERS_ENDPOINTS } from './endpoints';

export const usersApi = {
  getUser: async () => {
    const response = await apiClient.get(USERS_ENDPOINTS.GET_USER);
    return await response.data;
  },
};