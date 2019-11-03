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

export default {
  name: 'Post',
  components: {
    Header
  },
  data() {
    return {
      selectedCategory: 'all',
      categories: ['all', 'class', 'test', 'general'],
      posts: [
        {
          body:
            'When Vue is updating a list of elements rendered with v-for, by default it uses an “in-place patch” strategy. If the order of the data items has changed, instead of moving the DOM elements to match the order of the items, Vue will patch each element in-place and make sure it reflects what should be rendered at that particular index. This is similar to the behavior of',
          category: 'class',
          date: '12/10/2019',
          title: 'Test1',
          id: '1',
          user_id: 'EdaUq5sA4ZX0Iatw2H87SOERQlf2'
        },
        {
          body: 'This is the thread body',
          category: 'test',
          date: '12/10/2019',
          title: 'Test2',
          id: '2',
          user_id: 'EdaUq5sA4ZX0Iatw2H87SOERQlf2'
        },
        {
          body: 'This is the thread body',
          category: 'class',
          date: '12/10/2019',
          title: 'Test3',
          user_id: 'EdaUq5sA4ZX0Iatw2H87SOERQlf2',
          id: '3'
        },
        {
          body: 'This is the thread body',
          category: 'general',
          date: '12/10/2019',
          title: 'Test4',
          user_id: 'EdaUq5sA4ZX0Iatw2H87SOERQlf2',
          id: '4'
        }
      ]
    }
  },
  computed: {
    filteredPosts() {
      if (this.selectedCategory === 'all') return this.posts
      return this.posts.filter(post => post.category === this.selectedCategory)
    }
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
