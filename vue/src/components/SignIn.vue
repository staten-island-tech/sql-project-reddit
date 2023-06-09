<template>
  <div id="signIn">
    <h1>Sign In</h1>
    <br>
    <form>
      <label for="email">Email: </label>
      <input type="email" id="email" v-model="email" />
      <label for="password">Password: </label>
      <input type="password" v-model="password" id="password" />
      <br>
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
          this.$router.push({ path: '/NewView' })
          email.value=''
          password.value=''
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
