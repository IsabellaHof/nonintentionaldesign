import { connect } from 'react-redux'
import DetailScreen from '../components/screen/DetailScreen.js'
import { fetchSingleFind } from '../actions'

const mapStateToProps = state => ({
  find: state.find,
  selectedIndex: state.selectedIndex,
})

const mapDispatchToProps = dispatch => ({
  fetchSingleFind: id => dispatch(fetchSingleFind(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailScreen)
