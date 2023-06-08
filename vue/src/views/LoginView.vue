<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Store</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="organshop">Store Pt2</RouterLink>
  </nav>
  <h1>Login</h1>
  <div class="login">
    <form class="reqs">
      <label for="email">Email:</label> <input type="text" id="email" v-model="email" />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
    </form>
    <button class="loginbtn" @click="Login()">Login</button>
    <RouterLink to="/signup" class="signup">Don't have an account? Create one!</RouterLink>
  </div>
    <button class="logoutbtn" @click="LogOut()">Logout!</button>
</template>

<script>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
const email = ref('')
const password = ref('')
export default {
  components: { supabase },
  data() {
    return {
      email,
      password,
    }
  },
  methods: {
    async Login() {
      try {
        console.log(email.value, password.value)
        const { error } = await supabase.auth.signInWithPassword({
          email: email.value,
          password: password.value,
        })
        if (error) throw error
      } catch (error) {
        console.error(error)
      }
    },  
    async LogOut() {
      try{
      const {error} = await supabase.auth.signOut(
        console.log(email.value))
        if (error) throw error
      } catch (error) {
        console.error(error)
        console.log("you suck")
      }
    }
  },
}
</script>

<style scoped>
.login {
  margin: auto;
  padding: 2rem;
  font-size: 6rem;
  font-family: 'Jaldi', sans-serif;
  background: var(--secondary);
  width: 60rem;
  border-radius: 3rem;
  color: var(--tertiary);
  border: 0.5rem solid var(--fourth);
  box-shadow: 0 20px 20px 10px rgba(0, 0, 0, 0.5);
}
h2 {
  font-size: 3rem;
  margin-top: 1rem;
  color: var(--tertiary);
  margin-bottom: 0rem;
}
.signup {
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
.loginbtn, .logoutbtn {
  margin-top: 2rem;
  font-size: 2.5rem;
  border: none;
  border-radius: 15px;
  width: 10rem;
  color: var(--tertiary);
}
#username,
#email,
#password {
  border: none;
  height: 40px;
}
</style>
