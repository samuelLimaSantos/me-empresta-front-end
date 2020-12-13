import axios from 'axios';

// export const environment = 'http://localhost:3333';
export const environment = 'https://me-empresta-backend.herokuapp.com';

const api = axios.create({
  baseURL: environment,
});

export default api;
