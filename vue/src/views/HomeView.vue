<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home">
    <nav>
      <RouterLink to="/">Home Page</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
    <h1>REDDIT</h1>
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 0rem;
}

.display {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
}
</style>
