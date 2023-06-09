<template>
  <div id="signIn">
    <h1>Sign In</h1>
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
      <button type="button" @click="SignIn()">Enter</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../Client/supabaseClient.js'
import { useUserStore } from '../store/user'
const email = ref('')
const password = ref('')
export default {
  components: { supabase },
  name: 'SignInForm',
  props: {},
  data() {
    return {
      email,
      password,
      store: useUserStore()
    }
  },
  methods: {
    async SignIn() {
      console.log('sign')
      try {
        const { data: user, error } = await supabase.auth.signInWithPassword({
          email: email.value,
          password: password.value
        })
        console.log(user)
        if (error) {
          console.log(error)
        } else {
          const json = JSON.parse(JSON.stringify(user))
          const store = useUserStore()
          store.getUser(json)
          console.log(store.currentUser.user.id)
          this.$router.push({ path: '/CreateNew' })
          email.value = ''
          password.value = ''
        }
      } catch (error) {
        console.log('error')
      }
    }
  }
}
</script>


<style scoped>
#signIn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto; /* Adjust the margin-top value as desired */
  padding: 0rem 20rem;
    background-color: #0d1b2a;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

h1{
 font-size: 4rem;
 color: #415a77;
}

label,
input {
 color: #e0e1dd; 
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