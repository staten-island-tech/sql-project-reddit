<template>
  <nav>
    <RouterLink to="/">Store</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
  <h1>Signup</h1>
  <div class="signup">
    <form class="reqs">
      <label for="email">Email:</label> <input type="text" id="email" v-model="email" />
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
    </form>
    <button class="signupbtn" @click="SignUp()">Signup</button>
    <nav>
      <RouterLink to="/login" class="login">Already have an account? Login!</RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
const email = ref('')
const username = ref('')
const password = ref('')
</script>

<style scoped>
.signup {
  margin: auto;
  padding: 2rem;
  font-size: 6rem;
  font-family: 'Jaldi', sans-serif;
  background: var(--secondary);
  width: 60rem;
  border-radius: 20px;
  color: var(--tertiary);
  border: 0.5rem solid var(--fourth);
  box-shadow: 0 20px 20px 10px rgba(0, 0, 0, 0.5);
}
.login {
  font-size: 2rem;
  margin-top: 1rem;
  color: var(--tertiary);
  display: flex;
  flex-direction: column;
}
.reqs {
  display: flex;
  flex-direction: column;
}
.signupbtn {
  margin-top: 2rem;
  font-size: 2.5rem;
  border: none;
  border-radius: 15px;
  width: 12rem;
  color: var(--tertiary);
}
#username,
#email,
#password {
  border: none;
  height: 40px;
}
</style>
