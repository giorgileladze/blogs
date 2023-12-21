import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
});

api.interceptors.request.use(
    config => {
        // TODO: do not include token on each and every request, create it optional to include whenever it is needed
        config.headers['Authorization'] = `Bearer ${process.env.REACT_APP_TOKEN}`;
        return config;
    }, 
    error => {
        return Promise.reject(error);
    }
  );

export default api;