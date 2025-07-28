<template>
    <h1>User Edit Page for this user Id: {{ userId }}</h1>

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