<template>
  <div class="new-post">
    <h2 class="title">College Room</h2>
    <form>
      <input v-model="title" type="text" name="title" placeholder="Enter a title.." />
      <b-dropdown v-on:click="cat"  id="dropdown-1" size='sm' variant="primary" text="Categories" class="m-md-2">
      <b-dropdown-item>a</b-dropdown-item>
      <b-dropdown-item>b</b-dropdown-item>
      <b-dropdown-item>c</b-dropdown-item>
      </b-dropdown>
      <textarea v-model="content" placeholder="Enter your text.." />
    </form>
      
      <b-button v-on:click="cancel" variant="info">Cancel</b-button>
      <b-button v-on:click="submit" variant="info">Submit</b-button>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  components: {},
  data() {
    return {
    }
  },
  methods: {
    submit: function() {
      if (this.title == '') {
        alert('Title can not be blank')
      }
      if (this.content == '') {
        alert('Content can not be blank')
      } else {  
        var newPostKey = firebase.database().ref().child('posts').push().key;
        firebase.database().ref('posts/'+ newPostKey).set(
          { 
            "body" : this.content,
            "category" : "class",
            "date" : new Date().toISOString(),
            "title" : this.title,
            "author" : "oko",
            "user_id" : "123455667"
        } 
          , function(error) {
            if (error) {
              alert('The write failed...')
            } else {
              alert('Data saved successfully!')
            }
          });
      }
      this.$router.push({ name: 'Post', params: { postId: newPostKey  } })
    },
    cancel: function() {
      if (this.title || this.content) {
        window.prompt('sometext', 'defaultText')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.new-post {
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    input {
      width: 100%;
      height: 30px;
      border-radius: 4px;
      border: none;
      margin-bottom: 10px;
    }
    textarea {
      resize: none;
      width: 100%;
      height: 500px;
      border-radius: 4px;

      border: none;
    }
  }
  button {
    margin-top: 5px;
    width: 300px;
  }
}
</style>