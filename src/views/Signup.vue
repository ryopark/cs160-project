<template>
  <div class="signup">
    <h2 class="title">College Room</h2>
<<<<<<< HEAD
    <div v-if="sentEmail">Thank you for Singing up! we just sent you a verification email!</div>
    <template v-else>
      <AuthenticationForm @submit="signUp" />
      <p>
        Already have your account?
        <router-link to="/login">Login</router-link>
      </p>
    </template>
=======
    <div class="signUpForm">
      <input v-model="email" type="text" placeholder="SJSU email" data-email />
      <input v-model="password" type="password" placeholder="Password" data-password />
      <button @click="signUp">Sign up</button>
      <div v-if="errorMessage">{{ errorMessage }}</div>
    </div>
    <div v-if="errorMessage" class="errorMessage">{{ errorMessage }}</div>
    <p>
      Already have your account?
      <router-link to="/login">Login</router-link>
    </p>
>>>>>>> change the error message div tag
  </div>
</template>

<script>
import firebase from 'firebase'
import AuthenticationForm from '../components/AuthenticationForm'

export default {
  name: 'Signup',
  components: {
    AuthenticationForm
  },
  data() {
    return {
      sentEmail: false
    }
  },
  methods: {
    signUp(email) {
      if (/(\W|^)[\w.+-]*@sjsu\.edu(\W|$)/.test(email)) {
        const actionCodeSettings = {
          url: 'http://' + window.location.host + '/signup',
          handleCodeInApp: true
        }
        firebase
          .auth()
          .sendSignInLinkToEmail(email, actionCodeSettings)
          .then(() => {
            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            window.localStorage.setItem('emailForSignIn', email)
            this.sentEmail = true
          })
          .catch(error => {
            this.errorMessage = error
          })
      } else {
        this.errorMessage = 'email address is not in a valid format. (i.e. exmaple@sjsu.edu)'
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
