<!-- @format -->

<template>
  <div class="signup">
    <img alt="newuser" src="./../assets/newuser.png" />
    <h1>Oh, so you wanna sing up huh</h1>
    <h3>
      We're glad to have you <br />
      Please fill out the form below
    </h3>
    <hr />
    <hr />
    <form>
      <p>Name</p>
      <input type="text" />
      <p>Username</p>
      <input type="text" />
      <p>E-mail</p>
      <input type="email" />
      <p>Password</p>
      <input type="password" />
    </form>
    <br />
    <hr />
    <hr />
    <h4>Already have an account?</h4>
    <router-link to="/">Login</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SignUp',
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
