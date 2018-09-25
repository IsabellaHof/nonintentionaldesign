import ACTIONS from './actions'
import finds from './data/finds.js'

const initialState = {
  finds: finds,
  selectedIndex: null,
}

export default function reducer(state = initialState, action = {}) {
  const { payload } = action

  switch (action.type) {
  case ACTIONS.IMAGE_SELECTED:
    return {
      ...state,
      selectedIndex: payload.index,
    }

  default:
    return state
  }
}
