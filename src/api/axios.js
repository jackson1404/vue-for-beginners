import axios from "axios";
import { useAuthStore } from "../stores/auth";

const BASE_URL = 'http://localhost:8080/api/v1';

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

api.interceptors.request.use(config => {
    const auth = useAuthStore();
    const token = auth.token;
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

api.interceptors.response.use(
  res => res,
  async error => {
    const auth = useAuthStore()
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        await auth.refreshNewToken()
        originalRequest.headers.Authorization = `Bearer ${auth.accessToken}`
        return api(originalRequest)
      } catch {
        auth.logout()
      }
    }
    return Promise.reject(error)
  }
)

export default api;