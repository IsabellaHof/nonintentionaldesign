import { connect } from 'react-redux'
import FilterScreen from '../components/screen/FilterScreen.js'
import { fetchFinds, imageSelected } from '../actions'

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
)(FilterScreen)
