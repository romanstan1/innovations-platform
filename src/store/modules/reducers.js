import {RECEIVE_POSTS} from './actions'

const stubPosts = [
  {
    title: 'Performance Ecomm App',
    description: 'A project to discover and build a performant ecomm app',
    link: 'https://medium.com/',
    date: '10 / 12/ 18'
  },
  {
    title: 'Progessive Web App',
    description: 'The future of web technologies',
    link: 'https://medium.com/',
    date: '18 / 07/ 18'
  },
  {
    title: 'Skills Network',
    description: 'A demo visualisation of company personnel and skills',
    link: 'https://medium.com/',
    date: '12 / 9/ 18'
  },
]

const initialState = {
  posts: stubPosts,
  // posts: [],
  user: null
}

export default (state=initialState, action) => {
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
