import { GET_PROFILE, PROFILE_ERROR } from '../actions/types'

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
}

export default function profile(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      }
    case PROFILE_ERROR:
      return {
        ...state,
        profile: null,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}