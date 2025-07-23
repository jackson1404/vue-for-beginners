<template>
  <div>
    <h1>My Firt Vue</h1>
    <p>Likes :  {{ likes }}</p>
    <p v-if="likes > 0">Like > 0 </p>
    <p v-else>Like = 0</p>
    <button @click="LikeAndSubscribe()">Like And Subscribe</button>
    <button @click="likeStatus = !likeStatus">Like Button</button>
    <p v-if="likeStatus">Like Clicked</p>
    <p v-else>Like not clicked</p>
    <input v-model="likes"></input>
    <p>Input : {{ likes }}</p>
    <p v-show="unLikes > 0">UnLikes {{ unLikes }}</p>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      likes : 0,
      unLikes : 0,
      likeStatus : false
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
