import { connect } from 'react-redux'
import DetailScreen from '../components/screen/DetailScreen.js'

const mapStateToProps = state => ({
  finds: state.finds,
  selectedIndex: state.selectedIndex,
})

// const mapDispatchToProps = dispatch => ({
//   onUpdateScore: (index, value) => dispatch(updateScore({ index, value })),
//   onSaveRound: () => dispatch(saveRound()),
//   resetRoundScores: () => dispatch(resetRoundScores()),
// })

export default connect(
  mapStateToProps,
  null
)(DetailScreen)
