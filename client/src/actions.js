import { createAction } from 'redux-actions'

const ACTIONS = {
  IMAGE_SELECTED: 'IMAGE_SELECTED',
}

export const imageSelected = createAction(ACTIONS.IMAGE_SELECTED)

export default ACTIONS
