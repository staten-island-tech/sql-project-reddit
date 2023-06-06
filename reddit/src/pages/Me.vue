<script setup>
import useAuthUser from "@/composables/UseAuthUser";
const { user } = useAuthUser();
</script>

<template>
  <div v-if="user.value">
    <div>Hello {{ user.value.user_metadata.name }}</div>
  </div>
</template>

