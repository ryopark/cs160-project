<template>
  <b-navbar class="Header">
    <h3 class="title" href="#">CollegeRoom</h3>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="#">setting</b-nav-item>
      <b-nav-item href="#">logout</b-nav-item>
      <b-nav-item href="#" class="ml-2 createPost">Create Post</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header'
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
