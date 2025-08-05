import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore('auth', {
  
    state: () => ({
        token: localStorage.getItem('token') || null,
    }),
    actions: {
        async login(username, password){
            const result = axios.post('http://localhost:8080/auth/login', {
                username, password
            })
            this.token = result.data.token
            localStorage.setItem('token', this.token)
        },
        logout(){
            this.token = null
            localStorage.removeItem('token')
        }
    }
})