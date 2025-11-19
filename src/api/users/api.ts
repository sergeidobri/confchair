import apiClient from '@api/apiClient';
import { USERS_ENDPOINTS } from './endpoints';
import type { UserUpdateRequest } from './types';

export const usersApi = {
  getUser: async () => {
    const response = await apiClient.get(USERS_ENDPOINTS.GET_USER);
    return await response.data;
  },
  updateUser: async (data: UserUpdateRequest) => {
    const response = await apiClient.patch(USERS_ENDPOINTS.UPDATE_USER, data);
    return await response.data;
  },
};
