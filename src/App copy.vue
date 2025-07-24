<template>
  <div>
    <h1>My Firt Vue</h1>
    <p>Likes :  {{ likes }}</p>
    <p v-if="likes > 0">Like > 0 </p>
    <p v-else>Like = 0</p>
    <button @click="LikeAndSubscribe()">Like And Subscribe</button>

    <button v-on:click.right="LikeAndSubscribe()">Right click only </button>
    <input v-on:keyup.enter="submitForm(value)"></input>

    <button @click="likeStatus = !likeStatus">Like Button</button>
    <p v-if="likeStatus">Like Clicked</p>
    <p v-else>Like not clicked</p>
    <input v-model="likes"></input>
    <p>Input : {{ likes }}</p>
    <p v-show="unLikes > 0">UnLikes {{ unLikes }}</p>

    <button @click.prevent.stop="unLikes++">UnLike</button>

    <h3>Tasks: </h3>
    <ul>
      <li v-for="task in tasks" :key="task">{{ task  }}</li>
    </ul>

    <a :href="link">Go for google</a>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      likes : 0,
      value : "hello click enter",
      unLikes : 0,
      likeStatus : false,
      tasks : [
        { id: 1, name: 'Task 1', completed: false },
        { id: 2, name: 'Task 2', completed: true }
      ],
      link : 'https://google.com'
    }
  },
  methods : {
    LikeAndSubscribe(){
      this.likes++;
      alert('like increase')
    },
    submitForm(value){
      alert('Form submitted' + value);
    }
  }
}
</script>
