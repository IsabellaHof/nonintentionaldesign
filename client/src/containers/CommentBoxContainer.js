import { connect } from 'react-redux'
import { addComment, onDeleteComment } from '../actions'
import CommentBox from '../components/CommentBox'

const mapStateToProps = state => ({
  comments: state.find,
})

const mapDispatchToProps = dispatch => ({
  addComment: text => dispatch(addComment({ text })),
  onDeleteComment: index => dispatch(onDeleteComment(index)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentBox)
