<template>
  <div class="Posts">
    <b-list-group class="postList w-75">
      <b-list-group-item
        v-for="post in filteredPosts"
        :key="post.id"
        href="#"
        class="post flex-column align-items-start p-4"
        @click="clickPost(post.id)"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ post.title }}</h5>
          <small class="text-muted">{{ post.createdAt }}</small>
        </div>

        <p class="mb-1 text-left text-truncate">{{ post.content }}</p>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { getPosts, getMyPosts } from '../usecases'
export default {
  name: 'Posts',
  props: {
    selectedCategory: {
      type: String,
      default: 'all'
    }
  },
  data() {
    return {
      posts: [],
      myPosts: []
    }
  },
  computed: {
    filteredPosts() {
      if (this.selectedCategory === 'all') return this.posts
      if (this.selectedCategory === 'my posts') return this.myPosts
      return this.posts.filter(post => post.category === this.selectedCategory)
    }
  },
  mounted() {
    getPosts().then(res => {
      this.posts = res.data
    })
    getMyPosts().then(res => {
      this.myPosts = res.data.posts
    })
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category
    },
    clickPost(postId) {
      this.$router.push({ name: 'showPost', params: { id: postId } })
    }
  }
}
</script>

<style lang="scss" scoped>
.Posts {
  .header {
    height: 70px;
    background: #cececece;
  }
  .categoryList {
    .category {
      border: none;
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0);
      &:hover {
        opacity: 0.8;
      }
      &.selected {
        color: #2755ff;
      }
    }
  }
  .postList {
    .post {
      border: none;
    }
  }
}
</style>
