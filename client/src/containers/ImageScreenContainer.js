import { connect } from 'react-redux'
import { imageSelected } from '../actions'

import ImageScreen from '../components/screen/ImageScreen.js'

const mapStateToProps = state => ({
  finds: state.finds,
})

const mapDispatchToProps = dispatch => ({
  onImageClick: index => dispatch(imageSelected({ index })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageScreen)
