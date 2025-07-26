<template>
    <h1>User Lists</h1>
    <ul>
        <li >

        </li>
    </ul>
</template>

<script setup>
import { ref , onMounted} from 'vue';
import fetchUsers from '@/api/EmployeeService';

const userList = ref([]);

onMounted(async () => {
    try{
        userList.value = await fetchUsers();
    } catch (err){
        alert('Failed to load user ', err);
    }
})

</script>