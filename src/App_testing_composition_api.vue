<template>
  <div>
    <button @click="increment">Click increase</button>
    
    <p>Count: {{ count }}</p>
    <p v-text="toDos.name"></p>
    <ul>
      <li v-for="item in itemList" :key="item">{{ item }}</li>
    </ul>

    <button @click="toggleStatus">Toggle button</button>
  </div>
  
</template>

<script setup>
import { ref, reactive } from 'vue';

const count = ref(0);
const status = ref(false)
const toDos = reactive({
  name : 'Task1',
  completed : false
})
const itemList = ['Item 1', 'Item 2', 'Item 3'];

function increment(){
  count.value++;
  alert('Count incremented to ' + count.value);
}

const toggleStatus = () => {  
  status.value = !status.value;
  alert('Status toggled to ' + (status.value ? 'ON' : 'OFF'));
}
</script>
