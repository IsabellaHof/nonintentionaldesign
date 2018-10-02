import { createAction } from 'redux-actions'

const ACTIONS = {
  IMAGE_SELECTED: 'IMAGE_SELECTED',
  ADD_COMMENT: 'ADD_COMMENT',
  ON_DELETE_COMMENT: 'ON_DELETE_COMMENT',
}

export const imageSelected = createAction(ACTIONS.IMAGE_SELECTED)
export const addComment = createAction(ACTIONS.ADD_COMMENT)
export const onDeleteComment = createAction(ACTIONS.ON_DELETE_COMMENT)

export default ACTIONS
