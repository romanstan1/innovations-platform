export const TEST_ACTION = 'TEST_ACTION'

export const testAction = (node) => {
  return dispatch => dispatch({
    type: TEST_ACTION,
    payload: node
  })
}
