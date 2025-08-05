<template>
    <div class="login">
        <h2>Login Page</h2>
        <span v-if="error">{{ error }}</span>
        <form @click.prevent="submitLogin">
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
</script>