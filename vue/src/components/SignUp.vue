<template>
  <div id="signUp">
    <h1>Sign Up</h1>
    <br />
    <form>
      <label for="email">Email: </label>
      <input type="email" id="email" v-model="email" />
      <label for="password">Password: </label>
      <input type="password" id="password" v-model="password" />
      <br />
      <button type="button" @click="SignUp()">Enter</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../Client/supabaseClient.js'
const email = ref('')
const password = ref('')
export default {
  components: { supabase },
  name: 'SignUpForm',
  props: {},
  data() {
    return {
      email,
      password
    }
  },
  methods: {
    async SignUp() {
      if (password.value.length < 6) {
        alert('please make your password longer then 6 characters!')
      } else {
        try {
          const { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value
          })
          console.log(email.value)
          alert('please check your email to confirm signup!')
          if (error) throw error
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
}
</script>

<style scoped>
#signUp {
  display: flex;
  flex-direction: column;
  margin: 5px auto;
  padding: 0rem 20rem;
  align-items: center;
}
button {
  display: flex;
  margin: auto;
}
input {
  display: flex;
}
</style>
