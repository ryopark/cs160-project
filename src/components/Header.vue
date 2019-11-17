<template>
  <b-navbar class="Header">
    <h3>
      <router-link class="title" to="/">College Room</router-link>
    </h3>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item @click.prevent="logout">logout</b-nav-item>
      <b-nav-item class="ml-2 createPost" @click.prevent="goCreatePost">Create Post</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { logout } from '../usecases'

export default {
  name: 'Header',
  methods: {
    logout() {
      logout()
      this.$router.push('login')
    },
    goCreatePost() {
      this.$router.push('posts/new')
    }
  }
}
</script>

<style lang="scss" scoped>
.Header {
  .title {
    color: #2755ff !important;
  }
  .createPost {
    background: #2755ff !important;
    border-radius: 24px;
    padding: 2px 6px;
    a {
      color: #ffffff !important;
    }
  }
}
</style>
