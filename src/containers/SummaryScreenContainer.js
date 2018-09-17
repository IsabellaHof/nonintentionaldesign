import { connect } from 'react-redux'
import SummaryScreen from '../components/SummaryScreen'
import { resetScores, endGame } from '../actions'

const mapStateToProps = state => ({
  players: state.players,
})

const mapDispatchToProps = dispatch => ({
  onResetScores: () => dispatch(resetScores()),
  onEndGame: () => dispatch(endGame()),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SummaryScreen)
