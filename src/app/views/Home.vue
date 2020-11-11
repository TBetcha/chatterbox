<!-- @format -->

<template>
  <div class="home">
    <Splash msg="Welcome to ChatterBox" />
    <img alt="Vue logo" src="./../assets/chatbub.png" />
    <Login />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Splash from '@/components/Splash.vue' // @ is an alias to /src
import Login from '@/components/Login.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Splash,
    Login,
  },
})
</script>

<style scoped>
.btn {
  font-weight: bold;
  color: #da5e6f;
}
</style>
