import api from '../api/axios.js';

let profileRequest;

export const getMyProfile = async () => {
  if (!profileRequest) {
    profileRequest = api.get('/profiles/me').finally(() => { profileRequest = null; });
  }
  return (await profileRequest).data;
};

export const updateMyProfile = async (data) => (await api.patch('/profiles/me', data)).data;
export const getPublicProfile = async (username) => (await api.get(`/profiles/${encodeURIComponent(username)}`)).data;
