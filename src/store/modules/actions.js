import {database, messaging} from '../firebase-init'

// Action types

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// export const FETCH_POSTS = 'FETCH_POSTS'

// Action creators

// export const testAction = (node) => {
//   return dispatch => dispatch({
//     type: TEST_ACTION,
//     payload: node
//   })
// }
//
// export const receivePosts = (posts) => {
//   return dispatch => dispatch({
//     type: RECEIVE_POSTS,
//     payload: posts
//   })
// }

export const fetchPosts = (dispatch) => {
  database.ref('posts/').once('value', snapshot => {
    const posts =  snapshot.val()
    dispatch({
      type: RECEIVE_POSTS,
      payload:posts
    })
  });
}
