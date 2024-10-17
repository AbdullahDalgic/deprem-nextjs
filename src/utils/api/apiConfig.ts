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
