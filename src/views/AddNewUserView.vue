<template>
    <h1>Add new User</h1>
    <form @submit.prevent="submitForm">
        <p>User Name: </p>
        <input type="text" v-model="newUser.userName" placeholder="Enter User Name"></input>
        <span v-if="errors.userName" class="error">{{ errors.userName }}</span>
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
        <p>Profile Image:</p>
        <input type="file" @change="selectFile"></input>
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

const errors = ref({});
const file = ref(null);

const selectFile = (event) => {
    file.value = event.target.files[0];
}

const validateForm = () => {  
    errors.value = {};

    if(!newUser.value.userName){
        errors.value.userName = 'User Name is required';
    }

    return Object.keys(errors.value).length == 0;

}

const submitForm = async () => {

    if(!validateForm()){
        return;
    }

    const formData = new FormData();
    formData.append("userDto", new Blob( [JSON.stringify(newUser.value)], {type: 'application/json'} ));
    if(file.value){
        formData.append("profileImg",file.value);
    }

    try{
        const response = await registerUser(formData);
        toast.success("user added succesfully")
    }catch(error){
       toast.error('Error submit new user', error);
    }

}
</script>   
<style scoped>
.error{
    color: red;
    font-size: 0.9em;
}
</style>