import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';

export const fetchUsers = () => axios.get(`${BASE_URL}/getAllUsers`).then(res => res.data);

export const registerUser = (userData) => axios.post(`${BASE_URL}/auth/userSignUp`, userData).then(res => res.data);

export const getUserById = (userId) => axios.get(`${BASE_URL}/getUserById`, {params: {userId}}).then(res => res.data);

export const updateUser = (userId, userData) => axios.put(`${BASE_URL}/updateUser`, {params: {userId}}, userData).then(res => res.data);

export const deleteUser = (userId) => axios.delete(`${BASE_URL}/deleteUser`, {params: {userId}}).then(res => res.data);