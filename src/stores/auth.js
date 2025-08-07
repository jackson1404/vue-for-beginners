import { defineStore } from "pinia";
import api from "../api/axios";
import { toast } from "vue3-toastify";
import axios from "axios";

export const useAuthStore = defineStore('auth', {
  
    state: () => ({
        accessToken: localStorage.getItem('accessToken') || null,
    }),
    actions: {
        async login(username, password){
            const result = await api.post('/auth/login', {username, password}, {withCredentials: true})
            this.accessToken = result.data.accessToken
            localStorage.setItem('accessToken', this.accessToken)
        },
        async refreshNewToken(){
            const res = await api.post('/auth/refreshNewToken', {}, {withCredentials: true})
            this.accessToken = res.data.accessToken
        },
        async logout(){
            await api.post('/auth/logout')
            this.accessToken = null
            localStorage.removeItem('accessToken')
        },
        isTokenExpire(token){
            if(!token) return true;
            try{
                const payload = JSON.parse(atob(token.split('.')[1]));
                const now = Date.now() / 1000;
                return payload.exp < now;
            }catch (e){
                console.error('Invalid token' , e);
                return true;
            }
        },
        checkTokenValidity(){
            if(this.isTokenExpire(this.accessToken)){
                console.log('Token Expired- Logged out');
                this.logout();
            }
        }
    }
})