import firebase from 'firebase'

export async function getPosts() {
  return firebase
    .database()
    .ref('posts')
    .once('value')
    .then(snapshot => {
      let posts = []
      snapshot.forEach(post => {
        posts.push({ ...post.val(), id: post.key })
      })
      return posts
    })
}

export async function getPost(postId) {
  return firebase
    .database()
    .ref(`/posts/${postId}`)
    .once('value')
    .then(snapshot => snapshot.val())
}

export async function getCommentsByPost(postId) {
  return firebase
    .database()
    .ref(`/postHasComments/${postId}`)
    .once('value')
    .then(snapshot => {
      let comments = []
      snapshot.forEach(commentSnap => {
        firebase
          .database()
          .ref(`/comments/${commentSnap.key}`)
          .once('value')
          .then(comment => {
            comments.push(comment.val())
          })
      })
      return comments
    })
}

export async function createComments(postId, userId) {
  // 1 uniquename をゲットする
  const ref = firebase.database().ref()
  const postMembers = ref.child(`postMembers/${postId}`)
  postMembers.once('value', snap => {
    let userUniqueName = null
    snap.forEach(userSnap => {
      if (userSnap.getKey() === userId) {
        userUniqueName = userSnap.val
      }
    })
    if (!userUniqueName) userUniqueName = generateUniqueName()
  })
}

const generateUniqueName = () => {
  return 'aaa'
}
