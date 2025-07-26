<template>
    <div>
        <h1>User Lists</h1>
        <button >Add New User</button>
    <ul>
        <li v-for="user in userList" :key="user">
            {{  user.userName }}
        </li>
    </ul>
    </div>
</template>

<script setup>
import { ref , onMounted} from 'vue';
import {fetchUsers} from '../api/EmployeeService.js'

const userList = ref([]);

onMounted(async () => {
    try{
        userList.value = await fetchUsers();
    } catch (err){
        alert('Failed to load user ', err);
    }
})

</script>