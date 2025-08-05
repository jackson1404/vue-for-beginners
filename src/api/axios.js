import axios from "axios";
import { useAuthStore } from "../stores/auth";

const BASE_URL = 'http://localhost:8080/api/v1';

const api = axios.create({
    baseURL: BASE_URL,
})

api.interceptors.request.use(config => {
    const auth = useAuthStore();
    const token = auth.token;
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

export default api;