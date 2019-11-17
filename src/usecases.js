import axios from 'axios'

const HTTP = axios.create({
  baseURL: 'http://localhost:8888/api'
})
HTTP.interceptors.request.use(
  config => {
    config.headers['x-access-token'] = localStorage.getItem('token')
    return config
  },
  error => Promise.reject(error)
)

export async function createUser(userName, password) {
  return await HTTP.post('/users/signup', {
    username: userName,
    password: password,
    firstName: 'test1',
    lastName: 'lastName'
  }).then(res => {
    return res
  })
}

export async function login(userName, password) {
  return await HTTP.post('/users/login', {
    username: userName,
    password: password
  }).then(res => {
    console.log(res)
    return res
  })
}
export async function getPosts() {
  return await HTTP.get('/posts').then(res => res)
}

export async function getPost(id) {
  return await HTTP.get(`/posts/${id}`).then(res => res)
}

export async function createPost(form) {
  return await HTTP.post('/posts', { ...form }).then(res => res)
}

export async function newComment(comment) {
  return await HTTP.post('/comments', comment).then(() => {
    return getPost(comment.postId)
  })
}

// export async function logout() {
//   return await HTTP
// }
