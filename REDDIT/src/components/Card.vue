<template>
  <div class="cards">
    <h2 class="name">{{ name }}</h2>
    <img :src="image" alt="" />
    <p>{{ rating }}</p>
    <p class="desc">{{ description }}</p>
    <AddtoWatchButton @click="test">Add {{ name }} to Watch </AddtoWatchButton>
  </div>
</template>
<style>
@import url("https://fonts.cdnfonts.com/css/new-walt-disney-font");
</style>

<script>
import AddtoWatchButton from "./AddtoWatch.vue";
import { store } from "./store.js";
export default {
  name: "Card",
  props: {
    name: String,
    rating: Number,
    image: String,
    description: String,
  },
  data() {
    return {
      store,
    };
  },
  components: {
    AddtoWatchButton,
  },
  methods: {
    test() {
      this.store.watch.push({
        name: this.name,
        rating: this.rating,
        image: this.image,
      });
      console.log(this.store.watch);
    },
  },
};
</script>

<style scoped>
.cards {
  width: 350px;
  background-color: rgb(19, 114, 192);
  text-align: center;
  padding: 15px;
  margin: auto;
  margin-bottom: 30px;
  border-radius: 50px;
  height: 370px;
  margin-left: 50px;
  margin-right: 50px;
}
img {
  width: 100px;
  height: 150px;
  border-radius: 10%;
}
h2 {
  font-family: "New Walt Disney Font", sans-serif;
  font-size: 2.5vh;
  font-weight: bold;
}
.desc {
  margin-top: 10px;
}
.name {
  font-weight: bold;
  font-family: "New Walt Disney Font", sans-serif;
  font-size: 5vh;
  font-weight: bold;
}
</style>
