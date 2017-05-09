import { FETCH_ALBUMS } from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      return [...state, ...action.payload.data]
    default:
      return state
  }
}