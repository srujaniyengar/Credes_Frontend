import { API_CONFIG, buildApiUrl } from './config.js';

// Generic API request helper
export const apiRequest = async (endpoint, options = {}) => {
  const url = buildApiUrl(endpoint);
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    timeout: API_CONFIG.TIMEOUT,
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Request failed:', error);
    throw error;
  }
};

// Authentication API calls (for future implementation)
export const authAPI = {
  register: (userData) => apiRequest(API_CONFIG.ENDPOINTS.AUTH.REGISTER, {
    method: 'POST',
    body: JSON.stringify(userData),
  }),
  
  login: (credentials) => apiRequest(API_CONFIG.ENDPOINTS.AUTH.LOGIN, {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),
};

// Tasks API calls (for future implementation)
export const tasksAPI = {
  getAll: () => apiRequest(API_CONFIG.ENDPOINTS.TASKS),
  
  create: (taskData) => apiRequest(API_CONFIG.ENDPOINTS.TASKS, {
    method: 'POST',
    body: JSON.stringify(taskData),
  }),
  
  update: (id, taskData) => apiRequest(`${API_CONFIG.ENDPOINTS.TASKS}${id}/`, {
    method: 'PUT',
    body: JSON.stringify(taskData),
  }),
  
  delete: (id) => apiRequest(`${API_CONFIG.ENDPOINTS.TASKS}${id}/`, {
    method: 'DELETE',
  }),
};

// Users API calls (for future implementation)
export const usersAPI = {
  getAll: () => apiRequest(API_CONFIG.ENDPOINTS.USERS),
  
  getById: (id) => apiRequest(`${API_CONFIG.ENDPOINTS.USERS}${id}/`),
};