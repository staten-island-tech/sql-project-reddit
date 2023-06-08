<template>
  <div>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="nameinput" placeholder="Name" />
      <input type="text" v-model="birthdayinput" placeholder="Birthday" />
      <input type="text" v-model="zodiacinput" placeholder="Zodiac" />
      <button type="submit">Enter</button>
    </form>
    <div v-for="(user, index) in users" :key="index" class="user-box">
      <div class="display-card">
        <h2 class="user-box-name">{{ user.name }}</h2>
        <p class="user-box-birthday">{{ user.birthday }}</p>
        <p class="user-box-zodiac">{{ user.zodiac }}</p>
        <button @click="removeUser(index)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      users: [],
      nameinput: '',
      birthdayinput: '',
      zodiacinput: ''
    }
  },
  methods: {
    submitForm() {
      this.users.push({
        name: this.nameinput,
        birthday: this.birthdayinput,
        zodiac: this.zodiacinput
      })
      this.nameinput = ''
      this.birthdayinput = ''
      this.zodiacinput = ''
    },
    removeUser(index) {
      this.users.splice(index, 1)
    }
  }
}
</script>
