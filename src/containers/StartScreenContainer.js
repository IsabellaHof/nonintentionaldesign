import StartScreen from '../components/StartScreen'
import { connect } from 'react-redux'
import { startGame, resetGame, loadGame } from '../actions'

const mapStateToProps = state => ({
  gameTitle: state.gameTitle,
  previousGamesTitles: state.previousGamesTitles,
})

const mapDispatchToProps = dispatch => ({
  onStartGame: () => dispatch(startGame()),
  onResetGame: () => dispatch(resetGame()),
  onLoadGame: () => dispatch(loadGame()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScreen)
