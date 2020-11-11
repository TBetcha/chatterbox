<!-- @format -->

<template>
  <div>
    <form action="submit">
      <p>Username</p>
      <input type="text" v-model="username" />
      <p>Password</p>
      <input type="password" v-model="password" />
    </form>
    <button class="btn" @click="handleLogin()">Login</button>
    <router-link to="signup">
      <button class="btn">New Here?</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import VueRouter from 'vue-router'

export default defineComponent({
  name: 'Login',
  setup(context) {
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

<style scoped>
.btn {
  font-weight: bold;
  color: #da5e6f;
  cursor: pointer;
}
.btn:active {
  background-color: white;
}
</style>
