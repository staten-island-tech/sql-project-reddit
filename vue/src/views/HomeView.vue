<template>
  <div>
    <SignUpForm v-if="isSignUp" />
    <SignInForm v-else />
    <h4 @click="isSignUp = !isSignUp">
      {{ isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up" }}
    </h4>
  </div>
</template>

<script>
import { useUserStore } from '../store/user'
import SignUpForm from '../components/SignUp.vue'
import SignInForm from '../components/SignIn.vue'
import { ref } from 'vue'
export default {
  components: {
    SignUpForm,
    SignInForm
  },
  name: 'AuthScreen',
  setup() {
    const isSignUp = ref(true)
    return {
      isSignUp
    }
  },
  data() {
    return {
      store: useUserStore()
    }
  }
}
</script>

<style scoped>

div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h4 {
  cursor: pointer;
  text-decoration: underline;
  color: #6ec2f7;
  font-size: x-large;
}
h4:hover {
  color: #0e9af1;
}


</style>
