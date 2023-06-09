<template>
  <div>
    <div v-show="watchitems" class="watchitems">
      <h2 class="name">{{ film }}</h2>
      <img :src="image" alt="" />
      <p>{{ film }}</p>
      <removefromWatchButton @click="watchitems = !watchitems">
        Remove {{ film }} from Hashtags
      </removefromWatchButton>
    </div>
  </div>
</template>

<script>
import removefromWatchButton from './RemovefromWatch.vue'
export default {
  film: 'Watch',
  props: {
    film: String,
    rating: Number,
    image: String
  },
  data() {
    return {
      totalofitem: 1,
      watchitems: true
    }
  },
  components: {
    removefromWatchButton
  },
  methods: {}
}
</script>
<style scoped>
img {
  width: 100px;
  height: 150px;
  border-radius: 10%;
}
button {
  width: 200px;
  font-size: 15px;
  border: 10px white;
  border-radius: 50px;
  background-color: rgb(56, 34, 180);
  color: white;
  height: 20px;
  margin-top: 10px;
  transition: 0.5s;
  margin-bottom: 10px;
}
button:hover {
  transform: scale(1.2);
}
button:active {
  transform: scale(0.9);
}
</style>
