<script setup>
import { ref } from "vue";
import useAuthUser from "@/composables/UseAuthUser";
import { useRouter } from "vue-router";

const router = useRouter();
const { login, loginWithSocialProvider } = useAuthUser();

const form = ref({
  email: "",
  password: "",
});

const handleLogin = async (provider) => {
  try {
    if (provider) {
      await loginWithSocialProvider(provider);
    } else {
      await login({
        username: form.value.email,
        password: form.value.password,
      });
    }
    router.push({ name: "Me" });
  } catch (error) {
    alert(error.message);
  }
};
</script>

<template>
  <div class="max-w-lg m-auto">
    <form @submit.prevent="handleLogin">
      <h1 class="text-3xl mb-5">Login</h1>
      <label>Email <input v-model="form.email" type="email" /></label>
      <label>Password <input v-model="form.password" type="password" /></label>
      <button type="submit">Login</button>
      <router-link to="/forgotPassword">Forgot Password?</router-link>
    </form>
    <div class="mt-5">
      <a @click.prevent="handleLogin('github')">Github</a>
    </div>
  </div>
</template>



<style>
/* Add your custom CSS styles here */
div {
  width: 100%;
  max-width: 400px;
  margin: auto;
}

form {
  margin-bottom: 1rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 0.25rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
}

a {
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #4caf50;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
}
</style>