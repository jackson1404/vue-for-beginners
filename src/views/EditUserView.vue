<template>
    <div>
        <h1>User Edit Page for this user Id: {{ userId }}</h1>
        <div v-if="user">
            <p>User Name: </p>
            <input v-model="user.userName"></input>
            <p>User Email: </p>
            <input v-model="user.userEmail"></input>
            <p>User Address: </p>
            <input v-model="user.userAddress"></input>

            <button @click="updateUser">Update</button>
        </div>
        <div v-else>
            <h3>Loading user...</h3>
        </div>
    </div>

</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getUserById} from '@/api/EmployeeService.js';

const route = useRoute();
const user = ref(null);

const userId = route.params.userId;

onMounted(async () => {
    try{
         user.value = await getUserById(userId);
         console.log('user list', user.value);
         alert('User fetch');
    } catch(err){
        console.log('Failed to fetch user', err);
    }
})


</script>