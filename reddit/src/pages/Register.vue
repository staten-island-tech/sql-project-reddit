<script setup>
import { ref } from "vue";
import useAuthUser from "@/composables/UseAuthUser";
import { useRouter } from "vue-router";

const router = useRouter();
const { register } = useAuthUser();

const form = ref({
  name: "",
  password: "",
});

const handleSubmit = async () => {
  try {
    await register({
      name: form.value.name,
      password: form.value.password,
    });

 router.push({
      name: "Me",
    });
  } catch (error) {
    alert(error.message);
  }
};
</script>

<template>
  <form class="max-w-lg m-auto" @submit.prevent="handleSubmit">
    <h1 class="text-3xl mb-5">Register</h1>
    <label>Name <input v-model="form.name" type="text" /></label>
    <label>Password <input v-model="form.password" type="password" /></label>
    <button type="submit">Register</button>
  </form>
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