import { connect } from 'react-redux'
import DetailScreen from '../components/screen/DetailScreen.js'

const mapStateToProps = state => ({
  state: state,
  finds: state.finds,
  selectedIndex: state.selectedIndex,
})

export default connect(
  mapStateToProps,
  null
)(DetailScreen)
