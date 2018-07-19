import {RECEIVE_POSTS} from './actions'

const initialState = {
  posts: [],
  user: null
}

export default (state=initialState, action)=>{
  switch(action.type){
    case RECEIVE_POSTS: {
      return {
        ...state,
        posts: action.payload
      }
    }
    default: return state
  }
}
