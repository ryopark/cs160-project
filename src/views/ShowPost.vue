<template>
  <div class="thread">
    <h2 class="title">{{ post.title }}</h2>
    <h5>Date: {{ post.date }}</h5>
    <span class>
      <strong>{{ post.body }}</strong>
    </span>
    <div :key="comments" class="comment-section">
      <div v-for="comment in comments" :key="comment" class="comment">
        <p>
          <span>{{ comment.timestamp }}</span>
          <br />
          <strong>{{ comment.user_id }} says:</strong>
          <span>{{ comment.message }}</span>
        </p>
      </div>
    </div>
    <div class="add-comment">
      <button id="addCommentButton" @click="showCommentBox(false)">Add Comment</button>
      <div id="commentBox">
        <textarea id="newCommentBox" v-model="content" class="new-comment" placeholder="Enter your comment here.." />
        <button id="publishCommentButton" @click="publishComment">Publish Comment</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'ShowPost',
  data() {
    return {
      post: {},
      comments: {}
    }
  },
  mounted() {
    this.showCommentBox(true)
    const self = this
    firebase
      .database()
      .ref('/threads/' + this.$route.params.id)
      .once('value')
      .then(function(snapshot) {
        self.post = snapshot.val()
      })
    firebase
      .database()
      .ref('/comments/' + this.$route.params.id)
      .once('value')
      .then(function(snapshot) {
        self.comments = snapshot.val()
      })
  },
  methods: {
    showCommentBox: function(reset) {
      var commentBox = document.getElementById('commentBox')
      var addCommentButton = document.getElementById('addCommentButton')
      if (!reset && commentBox.style.display === 'none') {
        addCommentButton.style.display = 'none'
        commentBox.style.display = 'block'
      } else {
        addCommentButton.style.display = 'block'
        commentBox.style.display = 'none'
      }
    },
    publishComment: function() {
      const self = this
      const comment = {
        message: document.getElementById('newCommentBox').value,
        timestamp: new Date().toISOString(),
        user_id: 'temp_username'
      }
      firebase
        .database()
        .ref('/comments/' + this.$route.params.id)
        .push(comment)
        .then(function(response) {
          const temp = self.comments
          temp[response.key] = comment
          self.comments = temp
          self.$forceUpdate()
          document.getElementById('newCommentBox').value = ''
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.thread {
  margin: 10px;
  position: absolute;
  width: 95%;
  box-shadow: 3px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 10px;
  background: white;
  text-align: left;
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
