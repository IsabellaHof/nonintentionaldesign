import ACTIONS from './actions'
import finds from './data/finds.js'
import { load } from './services.js'

const initialState = load('app') || {
  finds: finds,
  selectedIndex: null,
  comments: [],
}

export default function reducer(state = initialState, action = {}) {
  const { payload } = action

  switch (action.type) {
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
