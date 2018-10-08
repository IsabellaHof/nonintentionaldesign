import { connect } from 'react-redux'
import FilterScreen from '../components/screen/FilterScreen.js'
import { fetchFinds } from '../actions'

const mapStateToProps = state => ({
  finds: state.finds,
})

const mapDispatchToProps = dispatch => ({
  fetchFinds: () => dispatch(fetchFinds()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterScreen)
