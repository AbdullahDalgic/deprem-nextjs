import xior from "xior";

const NEXT_API = xior.create({
  baseURL: "/api",
  timeout: 60000,
});

// API Request interceptor
NEXT_API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default NEXT_API;
