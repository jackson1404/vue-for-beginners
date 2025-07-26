<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">Go to About page</router-link>
        <router-link to="/users">User List</router-link>
        <router-link to="/adduser">Add New User</router-link>
    </nav>
</template>

<style scoped>
nav a {
  margin-right: 10px;
  text-decoration: none;
  color: blue;
}
</style>
