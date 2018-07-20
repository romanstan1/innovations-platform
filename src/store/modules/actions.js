import {database, messaging} from '../firebase-init'

// Action types

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SUCCESSFUL_UPLOAD = 'SUCCESSFUL_UPLOAD'
export const UNSUCCESSFUL_UPLOAD = 'UNSUCCESSFUL_UPLOAD'
export const DELETE_POST = 'DELETE_POST'

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
      console.log('UNSUCCESSFUL_UPLOAD', error)
      dispatch({
        type: UNSUCCESSFUL_UPLOAD
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
  });
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
