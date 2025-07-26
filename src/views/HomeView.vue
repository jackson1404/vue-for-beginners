<template>
    <h1> Home Page </h1>
    <p> Welcome to home page</p>

    <form @submit.prevent="submitTask">
        <h1>Task form</h1>
        <input type="text" v-model="newTask" id="newTask" name="newTask"></input>
        <button type="submit">Submit</button>"
    </form>

    <ul>
        <li v-for="(task, index) in tasks" :key="task">
            {{ task }}
            <span >
                <button @click="deleteTask(index)">*</button>
            </span>
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';

const tasks = ref(['Task1', 'Task2']);
const newTask = ref('');
const submitTask = () =>{
    if(newTask.value.trim() !== ''){
        tasks.value.push(newTask.value);
        newTask.value = '';
    }
};
const deleteTask = (index) =>{
    tasks.value.splice(index, 1);
}
</script>