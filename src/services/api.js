// services/api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const cancelBooking = (bookingId) => API.put(`/bookings/cancel/${bookingId}`);
export const getNearbyShops = (lat, lon) => API.get(`/shops/nearby?lat=${lat}&lon=${lon}`);
export const reportMissingBag = (bagDetails) => API.post('/missing-bags/report', bagDetails);
export const getMissingBags = (userId) => API.get(`/missing-bags/${userId}`);
export const getTicketPrice = (params) => API.get('/tickets/price', { params });

