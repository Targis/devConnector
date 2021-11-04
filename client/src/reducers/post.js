import {
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
} from '../actions/types'

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
}

export default function post(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      }
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false,
      }
    case POST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.postId ? { ...post, likes: payload.likes } : post
        ),
        loading: false,
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
      }
    case ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
      }
    default:
      return state
  }
}
