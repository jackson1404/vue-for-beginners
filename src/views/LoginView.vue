<template>
    <div class="login">
        <h2>Login Page</h2>
        <span v-if="error">{{ error }}</span>
        <form @submit.prevent="submitLogin">
            <p>User Name: </p>
            <input type="text" v-model="username" placeholder="Enter User Name"></input>
            <br></br>
            <p>Password:</p>
            <input type="password" v-model="password" placeholder="Enter Password"/>
            <button type="submit">Login</button>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth.js';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const error = ref('');
const auth = useAuthStore();
const route = useRouter();

const submitLogin = async () => {
    try {
        await auth.login(username.value, password.value);
        route.push('/')
    } catch (err) {
        console.error("Login failed:", err); // <== See full error

        error.value = 'Invalid Login';
    }
}


</script>