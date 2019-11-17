<template>
  <div class="login">
    <h2 class="title">College Room</h2>
    <AuthenticationForm submit-label="Login" @submit="submit" />
    <p>
      You don't have an account?
      <router-link to="/signup">create account now!!</router-link>
    </p>
  </div>
</template>

<script>
import AuthenticationForm from '../components/AuthenticationForm'
import { login } from '../usecases'
export default {
  name: 'Login',
  components: {
    AuthenticationForm
  },
  methods: {
    submit(email, password) {
      login(email, password).then(res => {
        localStorage.setItem('token', res.data.token)
        this.$router.push('/')
      })
    }
  }
}
</script>
