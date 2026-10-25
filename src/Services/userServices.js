import api from '../api/axios.js';

export const registerUser = async (data) => {
  const response = await api.post('/auth/register', data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await api.post('/auth/login', data);
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post('/auth/logout');
  return response.data;
};

export const deactivateUser = async () => {
  const response = await api.delete('/auth/account');
  return response.data;
};

export const uploadImage = async (file) => {
  const data = new FormData();
  data.append('image', file);
  const response = await api.post('/uploads/image', data);
  return response.data;
};
