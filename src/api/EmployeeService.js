import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';

export const fetchUsers = () => axios.get(`${BASE_URL}/users/getAllUsers`).then(res => res.data);

export const registerUser = (formData) =>
     axios.post(`${BASE_URL}/auth/userSignUp`, formData, {
        headers: {
            'Content-Type' : 'multipart/form-data'
        },
     }).then(res => res.data);

export const getUserById = (userId) => axios.get(`${BASE_URL}/users/getUserById`, {params: {userId}}).then(res => res.data);

export const updateUser = (userId, userData) => axios.put(`${BASE_URL}/updateUser`, {params: {userId}}, userData).then(res => res.data);

export const deleteUser = (userId) => axios.delete(`${BASE_URL}/deleteUser`, {params: {userId}}).then(res => res.data);