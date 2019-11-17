<template>
  <div class="login">
    <h2 class="title">College Room</h2>
    <AuthenticationForm submit-label="Login" @submit="submit" />
    <p>
      You don't have an account?
      <router-link to="/signup">create account now!!</router-link>
    </p>
    <p v-if="errorMessage" class="mt-1">{{ errorMessage }}</p>
  </div>
</template>

<script>
import AuthenticationForm from '../components/AuthenticationForm'
import { login, reSendVerificaiton } from '../usecases'
export default {
  name: 'Login',
  components: {
    AuthenticationForm
  },
  data() {
    return {
      errorMessage: ''
    }
  },
  methods: {
    makeToast(message) {
      this.$bvToast.toast(`${message}`, {
        title: 'Verification is not completed',
        autoHideDelay: 5000,
        toaster: 'b-toaster-bottom-left',
        variant: 'warning',
        appendToast: false
      })
    },

    submit(email, password) {
      login(email, password)
        .then(res => {
          localStorage.setItem('token', res.data.token)
          this.$router.push('/')
        })
        .catch(e => {
          const eMessage = e.response.data.error.message
          if (eMessage === 'Authentication failed') {
            this.errorMessage = 'Email or Password is incorrect'
          } else if (eMessage === 'Email must be verified in order to complete authentication') {
            reSendVerificaiton({ username: email }).then(() => this.makeToast('we sent verification email again'))
          }
        })
    }
  }
}
</script>
