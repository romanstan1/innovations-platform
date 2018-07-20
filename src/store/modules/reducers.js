import {RECEIVE_POSTS, SUCCESSFUL_LOGIN} from './actions'

const initialState = {
  posts: [],
  user: null,
  loggedIn: false
}

export default (state=initialState, action) => {
  switch(action.type){
    case RECEIVE_POSTS: {
      return {
        ...state,
        posts: action.payload
      }
    }
    case SUCCESSFUL_LOGIN: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload
      }
    }
    default: return state
  }
}
