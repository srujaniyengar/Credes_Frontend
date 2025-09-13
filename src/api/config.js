// API configuration for Credes Backend
export const API_CONFIG = {
  BASE_URL: 'https://credes-backend.onrender.com',
  ENDPOINTS: {
    AUTH: {
      REGISTER: '/auth/register/',
      LOGIN: '/auth/login/',
    },
    TASKS: '/tasks/',
    USERS: '/users/',
  },
  TIMEOUT: 10000, // 10 seconds
};

// Helper function to build full URL
export const buildApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};