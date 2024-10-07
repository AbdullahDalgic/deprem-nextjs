import xior from "xior";
import { API_URL } from "../constants";

const API = xior.create({
  baseURL: API_URL + "/api",
  timeout: 60000,
  headers: {
    // "Cache-Control": "max-age=2",
    // no cache
    "Cache-Control": "no-cache",
  },
});

// API Request interceptor
API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.resolve(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.resolve(error);
  }
);

export default API;
