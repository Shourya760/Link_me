import axios from 'axios';

const apiBaseUrl = (
  import.meta.env.VITE_API_URL || 'https://linkme-backend-ceiv.onrender.com/api'
).replace(/\/+$/, '');

const api = axios.create({
  baseURL: apiBaseUrl,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('linkme_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => {
    const profile = response.data?.profile;
    if (profile) {
      for (const field of ['customLinks', 'photos', 'achievements']) {
        profile[field] = (profile[field] || []).map((item) => ({ ...item, id: item.id || item._id }));
      }
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('linkme_token');
      localStorage.removeItem('linkme_profile');
      if (!['/login', '/register'].includes(window.location.pathname)) {
        window.location.replace('/login');
      }
    }
    return Promise.reject(error);
  }
);

export default api;
