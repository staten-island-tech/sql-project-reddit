<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
nav {
  width: 100%;
  font-size: 3rem;
  text-align: center;
  font-family: 'Jaldi', sans-serif;
  font-weight: bold;
  margin-bottom: 1rem;
}

nav a.router-link-exact-active {
  color: red;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
