import { createAction } from 'redux-actions'

const ACTIONS = {
  IMAGE_SELECTED: 'IMAGE_SELECTED',
  ADD_COMMENT: 'ADD_COMMENT',
  ON_DELETE_COMMENT: 'ON_DELETE_COMMENT',
  RECEIVE_FINDS: 'RECEIVE_FINDS',
  RECEIVE_SINGLE_FIND: 'RECEIVE_SINGLE_FIND',
}

export const imageSelected = createAction(ACTIONS.IMAGE_SELECTED)
export const addComment = createAction(ACTIONS.ADD_COMMENT)
export const onDeleteComment = createAction(ACTIONS.ON_DELETE_COMMENT)
export const receiveFinds = createAction(ACTIONS.RECEIVE_FINDS)
export const receiveSingleFind = createAction(ACTIONS.RECEIVE_SINGLE_FIND)

export const fetchFinds = () => dispatch => {
  fetch('http://localhost:5000/api/finds/getAll')
    .then(res => res.json())
    .then(finds => {
      dispatch(receiveFinds({ finds }))
    })
}

export const fetchSingleFind = id => dispatch => {
  fetch(`http://localhost:5000/api/finds/${id}`)
    .then(res => res.json())
    .then(find => {
      dispatch(receiveSingleFind({ find }))
    })
}

export default ACTIONS
