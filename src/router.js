import Vue from 'vue'
import Router from 'vue-router'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import NewPost from './views/NewPost.vue'
import ShowPost from './views/ShowPost.vue'
import Main from './views/Main.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      meta: { requiresAuth: true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/posts/new',
      name: 'newPost',
      component: NewPost,
      meta: { requiresAuth: true }
    },
    {
      path: '/posts/:id',
      name: 'showPost',
      component: ShowPost,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const token = localStorage.getItem('token')
  if (requiresAuth) {
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    if (token) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }
})

export default router
