<script>
import Card from '../components/Card.vue'
import AddtoWatchButton from '../components/AddtoWatch.vue'
import WatchButton from '../components/WatchButton.vue'
import Watch from '../components/Watch.vue'
import { store } from '../components/store.js'
export default {
  name: 'Disney',
  components: {
    Card,
    AddtoWatchButton,
    WatchButton,
    Watch
  },
  methods: {},
  data() {
    return {
      store,
      watchdiv: false,
      watchs: [],
      disneys: [
        {
          film: 'Mandolorian',
          rating: '8.7/10',
          image: 'https://i.pinimg.com/736x/71/30/05/71300593668fe1a1dad0f4fa4ff0a084.jpg',
          description:
            'After the fall of the Galactic Empire, a lone gunfighter makes his way through the outer reaches of the lawless galaxy.'
        },
        {
          film: 'Bluey',
          rating: '9.5/10',
          image: 'https://i.pinimg.com/736x/7e/19/12/7e191278d4478d14f5fd5aa8a3201e3e.jpg',
          description:
            'Follows the adventures of a Blue Heeler puppy, Bluey. Follow her into all kinds of funny and unpredictable situations.'
        },
        {
          film: 'Owl house',
          rating: '8.4/10',
          image: 'https://i.pinimg.com/736x/de/94/10/de9410cd63f2e73dac410367943f741a.jpg',
          description:
            'Self-assured teenager Luz stumbles upon a portal to a magical realm where  Luz pursues her dream of becoming a witch.'
        },
        {
          film: 'Loki',
          rating: '8.2/10',
          image: 'https://i.pinimg.com/236x/7a/57/6c/7a576ca06598dff1cb818359114b8130.jpg',
          description:
            "Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after Avengers:Endgame."
        },
        {
          film: 'Love Victor',
          rating: '8/10',
          image: 'https://i.pinimg.com/236x/80/e1/e0/80e1e0052a4c2bf827c13d91821517f5.jpg',
          description:
            'Love, Victor about a closeted gay teenager who is forced to come out , navigating the ups and downs of a new high school '
        },
        {
          film: 'Phineas and Ferb',
          rating: '8.1/10',
          image: 'https://i.pinimg.com/originals/83/08/8d/83088dc0e2143995db5b77a5aad1e796.jpg',
          description:
            'Phinea and Ferb are determined to make every day of their summer vacation fun while older sister Candace is tattling on them '
        },
        {
          film: 'Gravity Falls',
          rating: '8.9/10',
          image: 'https://i.pinimg.com/550x/ea/48/bb/ea48bbabc2ac1a60af4138349d4f7a3d.jpg',
          description:
            'Twins Dipper and Mabel Pines are sent to spend the summer with their great-uncle, in the mysterious town of Gravity Falls'
        },
        {
          film: 'Hanna Montanna',
          rating: '5.2/10',
          image: 'https://i.pinimg.com/originals/16/98/16/1698162345d82cf08618be71632318f7.jpg',
          description:
            ' Miley Stewart lives a double life, transforming herself into famous pop singer Hannah Montana.'
        },
        {
          film: 'WandaVision',
          rating: '7.9/10',
          image: 'https://i.pinimg.com/originals/73/38/24/73382422a4ffbca13387134140564bae.jpg',
          description:
            'Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.'
        },
        {
          film: 'SVSTFOE',
          rating: '7.9/10',
          image: 'https://i.pinimg.com/originals/b8/c9/36/b8c9363585a4dab2ef9826086fb4e640.jpg',
          description:
            'Star and Marco battles villains both in their high school and throughout the universe  as she attempts to protect her powerful wand.'
        },
        {
          film: 'Jessie ',
          rating: '6/10',
          image: 'https://i.pinimg.com/originals/97/90/dc/9790dc9c6c08bff9c805c2aa3dbec3f1.jpg',
          description:
            "Jessie is a small-town teen who leaves her Texas roots to take a job as a nanny for the Ross family's four precocious kids in New York"
        },
        {
          film: 'Obi-Wan Kenobi',
          rating: '7.1/10',
          image: 'https://i.pinimg.com/originals/f3/72/45/f3724559ff0186bc74798d6ef9cc2895.jpg',
          description:
            'The Jedi Master faces consequences of his greatest defeat the downfall and corruption of his one-time friend and apprentice.'
        }
      ]
    }
  }
}
</script>

<template>
  <main>
    <div class="watchnav">
      <WatchButton class="Watchbutton" @click="watchdiv = !watchdiv">Watch</WatchButton>
    </div>
    <div v-show="watchdiv" class="watchdiv">
      <div class="watchitemsdiv">
        <h3>Watch List</h3>
        <Watch
          v-for="item in store.watch"
          :key="item.film"
          :name="item.film"
          :rating="item.rating"
          :image="item.image"
        />
      </div>
    </div>
    <div class="disney">
      <Card
        v-for="disney in disneys"
        :key="disney.film"
        :name="disney.film"
        :rating="disney.rating"
        :image="disney.image"
        :description="disney.description"
      />
    </div>
  </main>
</template>

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
  color: rgb(255, 255, 255);
}
h3 {
  font-family: 'New Walt Disney Font', sans-serif;
  font-size: 2.5vh;
  font-weight: bold;
}
</style>
