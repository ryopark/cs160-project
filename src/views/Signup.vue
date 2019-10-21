<template>
  <div class="signup">
    <h2 class="title">College Room</h2>
    <div class="signUpForm">
      <input v-model="email" type="text" placeholder="SJSU email" data-email />
      <input v-model="password" type="password" placeholder="Password" data-password />
      <button @click="signUp">Sign up</button>
    </div>
    <div v-if="errorMessage" class="errorMessage">{{ errorMessage }}</div>
    <p>
      Already have your account?
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signup',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: null
    }
  },
  methods: {
    signUp: function() {
      if (/(\W|^)[\w.+-]*@sjsu\.edu(\W|$)/.test(this.email)) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.errorMessage = null
            this.$router.push('/')
          })
          .catch(error => {
            this.errorMessage = error.message
          })
      } else {
        this.errorMessage = 'Email has to be sjsu.edu'
      }
    }
  }
}
</script>

<style lang="scss">
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
