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
        <Posts :selected-category="selectedCategory" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Header from '../components/Header'
import Posts from './Posts'

export default {
  name: 'Main',
  components: {
    Header,
    Posts
  },
  data() {
    return {
      selectedCategory: 'all',
      categories: ['all', 'my posts', 'class', 'test', 'general']
    }
  },
  mounted() {
    if (this.$route.query.token) localStorage.setItem('token', this.$route.query.token)
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category
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
