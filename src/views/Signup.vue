<template>
  <div class="signup">
    <h2 class="title">College Room</h2>
    <div v-if="sentEmail">Thank you for Singing up! we just sent you a verification email!</div>
    <template v-else>
      <AuthenticationForm submit-label="Signup" @submit="signUp" />
      <p>
        Already have your account?
        <router-link to="/login">Login</router-link>
      </p>
    </template>
  </div>
</template>

<script>
import AuthenticationForm from '../components/AuthenticationForm'
import { createUser } from '../usecases'

export default {
  name: 'Signup',
  components: {
    AuthenticationForm
  },
  data() {
    return {
      sentEmail: false,
      token: this.$route.query.token || ''
    }
  },
  methods: {
    signUp(email, password) {
      if (/(\W|^)[\w.+-]*@sjsu\.edu(\W|$)/.test(email)) {
        createUser(email, password).then(() => {
          this.sentEmail = true
        })
      } else {
        this.errorMessage = 'email address is not in a valid format. (i.e. exmaple@sjsu.edu)'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  color: #2755ff;
}
.signUpForm {
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
