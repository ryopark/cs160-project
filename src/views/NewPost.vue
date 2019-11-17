<template>
  <div class="new-post">
    <h2 class="title">College Room</h2>

    <b-form @submit.prevent="onSubmit" @reset="onCancel">
      <b-form-group class="inputGroup" label="Title:" label-for="input-title">
        <b-form-input v-model="form.title" class="input-title" required placeholder="Enter Title"></b-form-input>
      </b-form-group>

      <b-form-group class="inputGroup" label="category:" label-for="input-category">
        <b-form-select v-model="form.category" class="input-category" :options="categories" required />
      </b-form-group>

      <b-form-group class="inputGroup" label="Content:" label-for="input-content">
        <b-form-textarea v-model="form.content" class="input-content" required placeholder="Enter Content" />
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button class="ml-1" type="reset" variant="secondary">Cancel</b-button>
    </b-form>
  </div>
</template>
<script>
import { createPost } from '../usecases'

export default {
  name: 'NewPost',
  components: {},
  data() {
    return {
      form: {
        title: '',
        category: '',
        content: ''
      },
      categories: ['class', 'general', 'test']
    }
  },
  methods: {
    onSubmit() {
      if (Object.keys(this.form).every(key => this.form[key] !== '')) {
        createPost(this.form).then(res => {
          this.$router.push({ name: 'showPost', params: { id: res.data.id } })
        })
      } else {
        alert('something wrong')
      }
    },
    onCancel: function() {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.new-post {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  form {
    width: 800px;

    .inputGroup {
      text-align: left;
    }
    .input-title {
      width: 100%;
      height: 30px;
      border-radius: 4px;
      margin-bottom: 10px;
    }
    .input-content {
      resize: none;
      width: 100%;
      height: 500px;
      border-radius: 4px;
    }
  }
  button {
    margin-top: 5px;
    width: 300px;
  }
}
</style>
