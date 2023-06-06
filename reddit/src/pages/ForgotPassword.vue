<script setup>
import useAuthUser from "@/composables/UseAuthUser";
import { ref } from "vue";

const { sendPasswordResetEmail } = useAuthUser();

const email = ref("");

const handlePasswordReset = async () => {
  await sendPasswordResetEmail(email.value);
  alert(`Password reset email sent to: ${email.value}`);
};
</script>

<template>
  <form class="max-w-lg m-auto" @submit.prevent="handlePasswordReset">
    <h1 class="text-3xl mb-5">Forgot Password?</h1>
    <label>Email <input v-model="email" type="email" /></label>
    <button type="submit">Send Reset Email</button>
  </form>
</template>
