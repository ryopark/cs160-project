<template>
  <div class="Post">
    <Header />
    <b-row class="mt-4">
      <b-col cols="2">
        <h4 class="text-left ml-3">Categories</h4>
        <b-list-group class="categoryList">
          <b-list-group-item
            v-for="category in categories"
            :key="category"
            class="category text-left"
            :class="{ selected: category === selectedCategory }"
            @click="selectCategory(category)"
            >{{ category }}</b-list-group-item
          >
        </b-list-group>
      </b-col>
      <b-col cols="9">
        <h3 class="text-left">> {{ selectedCategory }}</h3>
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
              <small class="text-muted">{{ post.date }}</small>
            </div>

            <p class="mb-1 text-left text-truncate">{{ post.body }}</p>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Header from '../components/Header'
import { getPosts } from '../firebaseAPI'
export default {
  name: 'Posts',
  components: {
    Header
  },
  data() {
    return {
      selectedCategory: 'all',
      categories: ['all', 'class', 'test', 'general'],
      posts: []
    }
  },
  computed: {
    filteredPosts() {
      if (this.selectedCategory === 'all') return this.posts
      return this.posts.filter(post => post.category === this.selectedCategory)
    }
  },
  mounted() {
    getPosts().then(result => {
      this.posts = result
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
.Post {
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
