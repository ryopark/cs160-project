<template>
  <div class="thread">
    <Header />
    <b-card class="mt-2" :title="post.title" :sub-title="post.createdAt">
      <b-card-text>{{ post.content }}</b-card-text>
    </b-card>
    <div v-if="post.comments" class="comment-section">
      <h5>comments:</h5>
      <ul class="list-unstyled">
        <b-media v-for="(comment, i) in post.comments" :key="i" tag="li" class="bg-white p-3">
          <div class="d-flex justify-content-between">
            <h5 class="mt-0 mb-1">{{ comment.userRandomName }}</h5>
            <div>{{ comment.createdAt }}</div>
          </div>

          <p class="mb-0">{{ comment.content }}</p>
        </b-media>
      </ul>
    </div>
    <div id="commentBox">
      <b-form-textarea
        id="textarea"
        v-model="newComment"
        placeholder="Add comment here..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>

      <b-button
        :disabled="newComment === ''"
        class="mt-2"
        variant="outline-primary"
        @click.prevent="createComment"
      >add comment</b-button>
    </div>
  </div>
</template>

<script>
import { getPost, newComment } from '../usecases'
import Header from '../components/Header'
export default {
  name: 'ShowPost',
  components: {
    Header
  },
  data() {
    return {
      post: {},
      newComment: ''
    }
  },
  mounted() {
    getPost(this.$route.params.id).then(res => {
      this.post = res.data
    })
  },
  methods: {
    createComment() {
      newComment({ postId: this.post.id, content: this.newComment }).then(res => {
        this.post = res.data
        this.newComment = ''
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.thread {
  margin: 30px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
}
.title {
  color: #2755ff;
}
.comment-section {
  margin-top: 10px;
}
.comment {
  margin-top: 1 px;
  display: flex;
  align-items: left;
  border: 1px;
  box-shadow: 3px 2px 4px rgba(0, 0, 0, 0.3);
  margin: 5px;
  margin-left: 5px;
  padding: 10px;
  background: lightcyan;
}
.new-comment {
  width: 100%;
  margin-top: 10px;
  // margin-left: 10px;
  margin-right: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
