<script setup>
import { ref } from "vue";
import useAuthUser from "@/composables/UseAuthUser";
import { useRouter } from "vue-router";

// Use necessary composables
const router = useRouter();
const { register } = useAuthUser();

// Form reactive ref to keep up with the form data
const form = ref({
  name: "",
  email: "",
  password: "",
});

// function to hand the form submit
const handleSubmit = async () => {
  try {
    // use the register method from the AuthUser composable
    await register(form.value);

    // and redirect to a EmailConfirmation page the will instruct
    // the user to confirm they're email address
    router.push({
      name: "EmailConfirmation",
      query: { email: form.value.email },
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
    <label>Email <input v-model="form.email" type="email" /></label>
    <label>Password <input v-model="form.password" type="password" /></label>
    <button>Register</button>
  </form>
</template>

<style>
/* Add your custom CSS styles here */
form {
  width: 100%;
  max-width: 400px;
  margin: auto;
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
</style>