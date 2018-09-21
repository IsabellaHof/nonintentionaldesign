import { connect } from 'react-redux'
import ImageScreen from '../components/screen/ImageScreen.js'

const mapStateToProps = state => ({
  finds: state.finds,
})

export default connect(
  mapStateToProps,
  null
)(ImageScreen)
