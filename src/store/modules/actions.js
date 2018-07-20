import {database, messaging, auth} from '../firebase-init'
import firebase from 'firebase'

// Action types

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SUCCESSFUL_UPLOAD = 'SUCCESSFUL_UPLOAD'
export const FAILED_UPLOAD = 'FAILED_UPLOAD'
export const DELETE_POST = 'DELETE_POST'
export const SUCCESSFUL_LOGIN = 'SUCCESSFUL_LOGIN'
export const FAILED_LOGIN = 'FAILED_LOGIN'

// Action creators

export const uploadPost = (dispatch, title, description, link) => {
  const id = database.ref().child('posts').push().key
  const updates = {};
  updates['/posts/' + id] = {
    title, description, link, id,
    display: true,
    date: new Date().toString().slice(4,15)
  }
  database.ref().update(updates, (error) => {
    if(error) {
      console.log('FAILED_UPLOAD', error)
      dispatch({
        type: FAILED_UPLOAD
      })
    } else {
      console.log('SUCCESSFUL_UPLOAD')
      dispatch({
        type: SUCCESSFUL_UPLOAD
      })
    }
  })
}

export const fetchPosts = (dispatch) => {
  database.ref('posts/').on('value', snapshot => {
    const posts =  snapshot.val()
    dispatch({
      type: RECEIVE_POSTS,
      payload: posts? Object.values(posts) : []
    })
  })
}

export const logIn = (dispatch, email, password) => {
  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() =>
  auth.signInWithEmailAndPassword(email, password)).catch( error => {
    console.log("Rrror signing in", error.code, error.message)
  });

  auth.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: SUCCESSFUL_LOGIN,
        payload: user
      })
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
    } else {
      console.log('User signed out')
    }
  })
}

export const toggleDisplayPost = (item) => {
  console.log('item', item)
  database.ref().child('posts/' + item.id).update({
    display: !item.display
  })
}

export const deletePost = (dispatch, id) => {
  database.ref('posts/' + id).remove()
}
