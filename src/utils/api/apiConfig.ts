import xior from "xior";
import { API_URL } from "../constants";

const cacheSeconds = 10;

const API = xior.create({
  baseURL: API_URL + "/api",
  timeout: 60000,
  headers: {
    "Cache-Control": `${cacheSeconds}`,
    Pragma: `${cacheSeconds}`,
    Expires: `${cacheSeconds}`,
  },
  next: { revalidate: cacheSeconds },
});

// API Request interceptor
API.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("auth-token="))
        ?.split("=")[1];

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
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
