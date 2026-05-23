import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Attach JWT token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token refresh on 401
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const { data } = await axios.post(`${API_BASE_URL}/auth/refresh`, { refreshToken });
        localStorage.setItem('token', data.token);
        originalRequest.headers.Authorization = `Bearer ${data.token}`;
        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;

// Auth endpoints
export const authAPI = {
  sendOTP: (phone) => api.post('/auth/send-otp', { phone }),
  verifyOTP: (phone, code) => api.post('/auth/verify-otp', { phone, code }),
  getProfile: () => api.get('/auth/me'),
  updateProfile: (data) => api.put('/auth/profile', data),
  setPin: (pin) => api.post('/auth/set-pin', { pin }),
};

// Vehicle endpoints
export const vehicleAPI = {
  getAll: (params) => api.get('/vehicles', { params }),
  getById: (id) => api.get(`/vehicles/${id}`),
};

// Wallet endpoints
export const walletAPI = {
  getWallet: () => api.get('/wallet'),
  getTransactions: (params) => api.get('/wallet/transactions', { params }),
  fundPaystack: (amount) => api.post('/wallet/fund/paystack', { amount }),
  fundCrypto: (coin, amount) => api.post('/wallet/fund/crypto', { coin, amount }),
  verifyPin: (pin) => api.post('/wallet/verify-pin', { pin }),
};

// Order endpoints
export const orderAPI = {
  create: (vehicleId, paymentMethod) => api.post('/orders', { vehicleId, paymentMethod }),
  getAll: () => api.get('/orders'),
  getById: (id) => api.get(`/orders/${id}`),
};

// Request endpoints
export const requestAPI = {
  submit: (data) => api.post('/requests', data),
  getAll: () => api.get('/requests'),
};

// Finance endpoints
export const financeAPI = {
  apply: (data) => api.post('/finance/apply', data),
  getStatus: () => api.get('/finance/status'),
  uploadDocs: (formData) => api.post('/finance/upload-docs', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
};

// Notification endpoints
export const notificationAPI = {
  getAll: (params) => api.get('/notifications', { params }),
  markRead: (id) => api.put(`/notifications/${id}/read`),
};
