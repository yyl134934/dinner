import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default instance;
