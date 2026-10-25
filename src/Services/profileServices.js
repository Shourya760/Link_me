import api from '../api/axios.js';

let profileRequest;

export const getMyProfile = async () => {
  if (!profileRequest) {
    profileRequest = api.get('/profiles/me').finally(() => { profileRequest = null; });
  }
  const response = await profileRequest;
  return response.data;
};

export const updateMyProfile = async (data) => {
  const response = await api.patch('/profiles/me', data);
  return response.data;
};

export const getPublicProfile = async (username) => {
  const response = await api.get(`/profiles/${encodeURIComponent(username)}`);
  return response.data;
};
