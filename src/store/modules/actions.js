export const TEST_ACTION = 'TEST_ACTION'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const testAction = (node) => {
  return dispatch => dispatch({
    type: TEST_ACTION,
    payload: node
  })
}

export const receivePosts = (posts) => {
  return dispatch => dispatch({
    type: RECEIVE_POSTS,
    payload: posts
  })
}
