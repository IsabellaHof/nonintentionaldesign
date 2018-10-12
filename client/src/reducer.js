import ACTIONS from './actions'
import { load } from './services.js'

const initialState = load('app') || {
  selectedIndex: null,
  comments: [],
}

export default function reducer(state = initialState, action = {}) {
  const { payload } = action

  switch (action.type) {
  case ACTIONS.RECEIVE_SINGLE_FIND:
    return {
      ...state,
      find: action.payload.find,
    }
  case ACTIONS.RECEIVE_FINDS:
    return {
      ...state,
      finds: action.payload.finds,
    }

  case ACTIONS.IMAGE_SELECTED:
    return {
      ...state,
      selectedIndex: payload.index,
    }

  case ACTIONS.ADD_COMMENT:
    return {
      ...state,
      comments: [...state.comments, action.payload],
    }

  case ACTIONS.ON_DELETE_COMMENT:
    return {
      ...state,
      comments: [
        ...state.comments.slice(0, action.payload),
        ...state.comments.slice(action.payload + 1),
      ],
    }
  default:
    return state
  }
}
