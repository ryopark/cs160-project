<template>
  <form @submit.prevent="submit">
    <input v-model="email" type="text" placeholder="SJSU email" data-email />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit" :disabled="isSubmitting">{{ submitLabel }}</button>
    <div v-if="errorMessage" class="errorMessage">{{ errorMessage }}</div>
  </form>
</template>

<script>
export default {
  name: 'AuthenticationForm',
  props: ['submitLabel'],
  data() {
    return {
      email: '',
      password: '',
      errorMessage: null,
      isSubmitting: false
    }
  },
  methods: {
    submit() {
      if (/(\W|^)[\w.+-]*@sjsu\.edu(\W|$)/.test(this.email)) {
        this.isSubmitting = true
        this.$emit('submit', this.email, this.password)
        this.isSubmitting = false
      } else {
        this.errorMessage = 'email address is not in a valid format. (i.e. exmaple@sjsu.edu)'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    padding: 0 10px;
    margin-bottom: 10px;
    width: 300px;
    height: 30px;
  }
  button {
    width: 300px;
    height: 40px;
    border-radius: 4px;
    background: #2755ff;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
  }
}
</style>
