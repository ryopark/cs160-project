import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import firebase from 'firebase'
import NewPost from './views/NewPost.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
      // meta: {
      //   requiresAuth: true
      // }
    }
    // {
    //   path:'/post/:postId',
    //   name: 'Post',
    //   component: MainPost
    // }
  ]
})

router.beforeEach((to, from, next) => {
  // let currentUser = firebase.auth().currentUser
  // let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  // if (requiresAuth && !currentUser) next('login')
  // else if (!requiresAuth && currentUser) next('comics')
  // else next()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        if (!user.emailVerified) {
          user
            .sendEmailVerification()
            .then(() => {
              alert('confirmation email was sent')
            })
            .catch(error => {
              alert(error)
            })
        }
        next()
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next()
  }
})

export default router
