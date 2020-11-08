<!-- @format -->

<template>
  <div>
    <form action="submit">
      <p>Username</p>
      <input type="text" v-model="username" />
      <p>Password</p>
      <input type="password" v-model="password" />
    </form>
    <button @click="handleLogin()">Login</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Login',
  setup() {
    const user = ''
    const password = ''
    const handleLogin = (user: string, password: string) => {
      //if username and password are right let them keep going
      //if not, you gotta goooo
    }

    return { user, password, handleLogin }
  },
})
</script>

<style scoped></style>
