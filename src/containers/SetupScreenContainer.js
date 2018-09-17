import { connect } from 'react-redux'
import { deletePlayer, deleteAllPlayers } from '../actions'
import SetupScreen from '../components/SetupScreen'

const mapStateToProps = state => ({
  players: state.players,
  gameTitle: state.gameTitle,
})

const mapDispatchToProps = dispatch => ({
  onDeletePlayer: index => dispatch(deletePlayer({ index })),
  onDeleteAllPlayers: () => dispatch(deleteAllPlayers()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupScreen)
