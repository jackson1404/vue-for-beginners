<template>
    <div>
        <h1>User Lists</h1>
        <button >Add New User</button>
    <ul>
        <li v-for="user in userList" :key="user">
            {{  user.userName }}
        <span>
            <button @click="goEditUser(user.userId)">edit</button>
        </span>
        <span>
            <button>delete</button>
        </span>
        </li>
        
    </ul>
    </div>
</template>

<script setup>
import { ref , onMounted} from 'vue';
import {fetchUsers} from '../api/EmployeeService.js'
import { useRouter } from 'vue-router';
import EditUserView from './EditUserView.vue';

const userList = ref([]);

const router = useRouter();

onMounted(async () => {
    try{
        userList.value = await fetchUsers();
    } catch (err){
        alert('Failed to load user ', err);
    }
})

const goEditUser = (userId) => {
    console.log('Reach', userId);
    router.push({name: 'EditUserView', params: {userId}})
}
</script>