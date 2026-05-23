import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
const api = axios.create({ baseURL: API_BASE_URL, headers: { 'Content-Type': 'application/json' } });
api.interceptors.request.use((config) => { const token = localStorage.getItem('token'); if (token) config.headers.Authorization = `Bearer ${token}`; return config; });
api.interceptors.response.use((r) => r, async (error) => {
  const req = error.config;
  if (error.response?.status === 401 && !req._retry) { req._retry = true; try { const { data } = await axios.post(`${API_BASE_URL}/auth/refresh`, { refreshToken: localStorage.getItem('refreshToken') }); localStorage.setItem('token', data.token); req.headers.Authorization = `Bearer ${data.token}`; return api(req); } catch(e) { localStorage.removeItem('token'); localStorage.removeItem('refreshToken'); window.location.href = '/login'; return Promise.reject(e); } }
  return Promise.reject(error);
});
export default api;
export const authAPI = { sendOTP: (phone) => api.post('/auth/send-otp', { phone }), verifyOTP: (phone, code) => api.post('/auth/verify-otp', { phone, code }), getProfile: () => api.get('/auth/me'), updateProfile: (data) => api.put('/auth/profile', data), setPin: (pin) => api.post('/auth/set-pin', { pin }) };
export const vehicleAPI = { getAll: (params) => api.get('/vehicles', { params }), getById: (id) => api.get(`/vehicles/${id}`) };
export const walletAPI = { getWallet: () => api.get('/wallet'), getTransactions: (params) => api.get('/wallet/transactions', { params }), fundPaystack: (amount) => api.post('/wallet/fund/paystack', { amount }), fundCrypto: (coin, amount) => api.post('/wallet/fund/crypto', { coin, amount }), verifyPin: (pin) => api.post('/wallet/verify-pin', { pin }) };
export const orderAPI = { create: (vehicleId, method) => api.post('/orders', { vehicleId, paymentMethod: method }), getAll: () => api.get('/orders'), getById: (id) => api.get(`/orders/${id}`) };
export const requestAPI = { submit: (data) => api.post('/requests', data), getAll: () => api.get('/requests') };
export const financeAPI = { apply: (data) => api.post('/finance/apply', data), getStatus: () => api.get('/finance/status'), uploadDocs: (fd) => api.post('/finance/upload-docs', fd, { headers: { 'Content-Type': 'multipart/form-data' } }) };
export const notificationAPI = { getAll: (params) => api.get('/notifications', { params }), markRead: (id) => api.put(`/notifications/${id}/read`) };