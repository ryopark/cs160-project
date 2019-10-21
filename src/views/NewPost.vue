<template>
  <div class="new-post">
    <h2 class="title">College Room</h2>
    <form>
      <label for="title">Create a New Post</label>
      <input v-model="title" type="text" name="title" placeholder="Enter a title.." />
      <textarea v-model="content" placeholder="Enter your text.." />
    </form>
    <button @click="cancel">Cancel</button>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
// import router from '../router'

export default {
  components: {},
  data() {
    return {
      title: '',
      content: '',
      errorMessage: null
    }
  },
  methods: {
    submit: function() {
      if (this.title == '') {
        this.errorMessage = 'Please enter a title'
      }
      if (!this.content == '') {
        this.errorMessage = 'Content can not be blank'
      } else {
        //TO DO store the data
        //router.push()
        ////need to redirect to {main post} page..
        ////.....
        ////####safe updated post to firebase.
      }
    },
    cancel: function() {
      if (this.title || this.content) {
        window.prompt('sometext', 'defaultText')
        //pop up a message box 'are you sure you want to discard the change'
        //back to last page visted if yes stay otherwise
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
