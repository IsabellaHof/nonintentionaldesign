import { connect } from 'react-redux'
import { imageSelected } from '../actions'
import { fetchFinds } from '../actions'
import ImageScreen from '../components/screen/ImageScreen.js'

const mapStateToProps = state => ({
  finds: state.finds,
})

const mapDispatchToProps = dispatch => ({
  onImageClick: index => dispatch(imageSelected({ index })),
  fetchFinds: () => dispatch(fetchFinds()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageScreen)
