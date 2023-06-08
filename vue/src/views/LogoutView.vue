<template>
  <div>
    <nav>
      <RouterLink to="/organshop">Store</RouterLink>
      <RouterLink to="/logout">Logout</RouterLink>
    </nav>
    <h1>Logout</h1>
    <button class="logoutbtn" @click="Logout()">Logout!</button>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import { supabase } from '../lib/supabaseClient.js'
export default {
  components: { supabase },
  data() {
    return {
    }
  },
  methods: {
    async Logout() {
      try {
        console.log('logout successful')
        const { error } = await supabase.auth.signOut()
        if (error) throw error
      } catch (error) {
        console.error(error)
        console.log('not logged in')
      }
    }
  }
}
</script>

<style scoped>
.logoutbtn {
  margin-top: 2rem;
  font-size: 2.5rem;
  border: none;
  border-radius: 15px;
  width: 10rem;
  color: var(--tertiary);
}</style>
