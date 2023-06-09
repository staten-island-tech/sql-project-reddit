<template>
  <div id="signUp">
    <h1>Sign Up</h1>
    <br />
    <form>
         <div class="input-group">
      <label for="email">Email: </label>
      <input type="email" id="email" v-model="email" />
      </div>
         <div class="input-group">
      <label for="password">Password: </label>
      <input type="password" id="password" v-model="password" />
      </div>
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
  justify-content: center;
  align-items: center;
  margin: 50px auto; /* Adjust the margin-top value as desired */
  padding: 0rem 20rem;
  background-color: #0d1b2a; /* Set the background color to #0d1b2a */
}

h1 {
  font-size: 4rem;
  color: #e0e1dd; /* Set the font color to #e0e1dd */
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

label,
input {
  color: #415a77; /* Set the color of labels and inputs to #415a77 */
}

.input {
  width: 300px; /* Adjust the width as desired */
  height: 50px; /* Adjust the height as desired */
  font-size: 1.6rem; /* Adjust the font size as desired */
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px; /* Adjust the width as desired */
  height: 60px; /* Adjust the height as desired */
  font-size: 1.8rem; /* Adjust the font size as desired */
  margin: 10px auto;
}
</style>