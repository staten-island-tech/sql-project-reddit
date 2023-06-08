<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home">
    <nav>
      <RouterLink to="/">Store</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
    <h1>Hadestown Playlist</h1>
    <div class="display">
      <HadestownCards
        v-for="song in songs"
        :key="song.name"
        :name="song.name"
        :ranking="song.ranking"
      />
    </div>
  </div>
</template>

<script>
import HadestownCards from '../components/HadestownCards.vue'
export default {
  components: { HadestownCards },
  data() {
    return {
      songs: [
        {
          name: "All I've ever known",
          ranking: 1
        },
        {
          name: 'When the Chips are Down',
          ranking: 2
        },
        {
          name: 'Wait for Me Reprise',
          ranking: 3
        },
        {
          name: 'Flowers',
          ranking: 4
        },
        { name: 'Chant', ranking: 5 },
        { name: 'Promises', ranking: 6 },
        {
          name: 'Doubt Comes in',
          ranking: 7
        },
        {
          name: 'Any Way the Wind Blows',
          ranking: 8
        },
        {
          name: 'Way Down Hadestown',
          ranking: 9
        },
        {
          name: "Livin' it Up on Top",
          ranking: 10
        },
        {
          name: 'Come Home with Me',
          ranking: 11
        },
        {
          name: 'Wait for Me',
          ranking: 12
        }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 0rem;
}

.display {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
}
</style>
