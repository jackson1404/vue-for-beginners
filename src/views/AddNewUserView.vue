<template>
    <h1>Add new User</h1>
    <form @submit.prevent="submitForm">
        <input type="text" v-model="newUser.userName"></input>
    </form>
</template>
<script setup>
import { ref } from 'vue';

const newUser = ref({
    userName: '',
    userEmail: '',
    userPassword: '',
    userAddress: '',
    isEmailVerificationRequired: false
})
</script>   