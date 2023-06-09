<template>
  <nav>
    <router-link to="/">Logout</router-link>
    <router-link to="/createnew">Make a Post</router-link>
    <router-link to="/organshop">Public Posts</router-link>
    <router-link to="/Signup">About Me</router-link>
  </nav>

  <main>
    <div class="watchnav">
      <watch-button class="Watchbutton" @click="toggleWatchDiv">About Me #</watch-button>
    </div>
    <div v-show="watchdiv" class="watchdiv">
      <div class="watchitemsdiv">
        <h3>My Hashtags</h3>
        <watch
          v-for="item in store.watch"
          :key="item.film"
          :name="item.film"
          :rating="item.rating"
          :image="item.image"
        ></watch>
      </div>
    </div>
    <div class="disney">
      <card
        v-for="disney in disneys"
        :key="disney.film"
        :name="disney.film"
        :image="disney.image"
        :description="disney.description"
      ></card>
    </div>
  </main>
</template>

<script>
import Card from '../components/Card.vue'
import AddToWatchButton from '../components/AddToWatch.vue'
import WatchButton from '../components/WatchButton.vue'
import Watch from '../components/Watch.vue'
import { store } from '../components/store.js'

export default {
  name: 'Disney',
  components: {
    Card,
    AddToWatchButton,
    WatchButton,
    Watch
  },
  data() {
    return {
      store,
      watchdiv: false,
      disneys: [
        {
          film: 'Mexican',
          image: 'https://i.pinimg.com/736x/5b/57/59/5b5759ffb021650b5c0d094245812af6.jpg'
        },
        {
          film: 'Nyc',
          image: 'https://i.pinimg.com/originals/c5/5b/f2/c55bf2415fc595f8b80905118473d097.jpg'
        },
        {
          film: 'Compsci',
          image: 'https://i.pinimg.com/originals/64/a4/c2/64a4c212a61a5c47f4b859d4b2046d0c.jpg'
        },
        {
          film: 'Mandolorian',
          image: 'https://i.pinimg.com/736x/71/30/05/71300593668fe1a1dad0f4fa4ff0a084.jpg'
        }
      ]
    }
  },
  methods: {
    toggleWatchDiv() {
      this.watchdiv = !this.watchdiv
    }
  }
}
</script>

<style scoped>
.disney,
.watchdiv,
.watchnav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.watchdiv {
  width: 700px;
  background-color: rgb(121, 202, 246);
  text-align: center;
  padding: 15px;
  margin: auto;
  margin-bottom: 30px;
  border-radius: 50px;
}
* {
  color: rgb(77, 30, 30);
}
h3 {
  font-family: 'New Walt Disney Font', sans-serif;
  font-size: 2.5vh;
  font-weight: bold;
}
</style>
