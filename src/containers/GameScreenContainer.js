import { connect } from 'react-redux'
import { updateScore, saveRound, resetRoundScores } from '../actions'
import GameScreen from '../components/GameScreen'

const mapStateToProps = state => ({
  players: state.players,
})

const mapDispatchToProps = dispatch => ({
  onUpdateScore: (index, value) => dispatch(updateScore({ index, value })),
  onSaveRound: () => dispatch(saveRound()),
  resetRoundScores: () => dispatch(resetRoundScores()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen)
