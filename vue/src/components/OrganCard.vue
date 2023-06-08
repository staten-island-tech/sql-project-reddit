<template>
  <div class="organcards">
    <img :src="image" alt="" />
    <h2 class="name">{{ name }}</h2>
    <p class="desc">{{ description }}</p>
    <label class="container"
      >{{ organ_one }}
      <p>${{ cost_one }}</p>
      <input type="checkbox" checked="checked" />
      <span class="checkmark"></span>
    </label>
    <label class="container"
      >{{ organ_two }}
      <p>${{ cost_two }}</p>
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
    <label class="container"
      >{{ organ_three }}
      <p>${{ cost_three }}</p>
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
    <AddtoCartButton @click="test">Add {{ name }} to Cart ${{ cost_total }}</AddtoCartButton>
  </div>
</template>

<script>
import AddtoCartButton from './AddtoCart.vue'
import { organstore } from './organstore.js'

export default {
  name: 'Card',
  props: {
    name: String,
    image: String,
    description: String,
    cost_one: Number,
    cost_two: Number,
    cost_three: Number,
    organ_one: String,
    organ_two: String,
    cost_three: String,
    cost_total: Number
  },
  data() {
    return {
      organstore
    }
  },
  components: {
    AddtoCartButton
  },
  methods: {
    test() {
      this.organstore.cart.push({
        name: this.name,
        cost_total: this.cost_total,
        image: this.image
      })
      console.log(this.organstore.cart)
    }
  }
}
</script>

<style scoped>
.organcards {
  margin: auto;
}
img {
  width: 200px;
}
h2 {
  font-size: 3vh;
}
.desc {
  color: aliceblue; /* sry i just needed it to stop giving me errors  */
}
.name {
  font-weight: bold;
}
</style>
