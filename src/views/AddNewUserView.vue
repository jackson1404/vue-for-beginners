<template>
    <h1>Add new User</h1>
    <form @submit.prevent="submitForm">
        <p>User Name: </p>
        <input type="text" v-model="newUser.userName" placeholder="Enter User Name"></input>
        <br></br>
        <p>User Email: </p>
        <input type="email" v-model="newUser.userEmail" placeholder="Enter User Email"></input>
        <br></br>
        <p>User Password: </p>
        <input type="password" v-model="newUser.userPassword" placeholder="Enter User Password"></input>
        <br></br>
        <p>User Address: </p>
        <input type="text" v-model="newUser.userAddress" placeholder="Enter User Address"></input>
        <br></br>
        <button type="submit">Sign Up</button>
    </form>
</template>
<script setup>
import { ref } from 'vue';
import {registerUser} from '@/api/EmployeeService.js';
import { toast } from 'vue3-toastify';

const newUser = ref({
    userName: '',
    userEmail: '',
    userPassword: '',
    userAddress: '',
    isEmailVerificationRequired: false
})
const submitForm = async () => {
    try{
        const response = await registerUser(newUser.value);
        toast.success("user added succesfully")
    }catch(error){
       toast.error('Error submit new user', error);
    }

}
</script>   