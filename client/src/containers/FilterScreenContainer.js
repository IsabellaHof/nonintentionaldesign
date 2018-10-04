import { connect } from 'react-redux'
import FilterScreen from '../components/screen/FilterScreen.js'

const mapStateToProps = state => ({
  finds: state.finds,
  selectedIndex: state.selectedIndex,
})

export default connect(
  mapStateToProps,
  null
)(FilterScreen)
