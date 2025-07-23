<template>
  <div>
    <h1>My Firt Vue</h1>
    <p>Likes :  {{ likes }}</p>
    <p v-if="likes > 0">Like > 0 </p>
    <p v-else>Like = 0</p>
    <button v-on:click="LikeAndSubscribe()">Like And Subscribe</button>
    <input v-model="likes"></input>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      likes : 0
    }
  },
  methods : {
    LikeAndSubscribe(){
      this.likes++;
      alert('like increase')
    }
  }
}
</script>
