import api from "./axios";

const BASE_URL = 'http://localhost:8080/api/v1';

export const fetchUsers = () => api.get('/users/getAllUsers').then(res => res.data);

export const registerUser = (formData) => 
    api.post('/auth/userSignUp', formData, {
        headers: {
            'Content-Type' : 'multipart/form-data'
        },
     }).then(res => res.data);

export const getUserById = (userId) => 
    api.get('/users/getUserById', {params: {userId}}).then(res => res.data);

export const updateUser = (userId, userData) => 
    api.put('/updateUser', {params: {userId}}, userData).then(res => res.data);

export const deleteUser = (userId) => api.delete('/deleteUser', {params: {userId}}).then(res => res.data);