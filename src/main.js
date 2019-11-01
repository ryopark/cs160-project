import Vue from 'vue'

import firebase from 'firebase'

import App from './App.vue'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './custom.scss'

Vue.use(BootstrapVue)


Vue.config.productionTip = false

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
}
firebase.initializeApp(config)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
