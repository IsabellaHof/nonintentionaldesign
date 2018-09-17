import React, { Component } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import PlayerInputContainer from '../containers/PlayerInputContainer'

export default class SetupScreen extends Component {
  static propTypes = {
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeletePlayer: PropTypes.func.isRequired,
    onDeleteAllPlayers: PropTypes.func.isRequired,
    gameTitle: PropTypes.string.isRequired,
  }
  render() {
    const { players, onDeletePlayer, onDeleteAllPlayers } = this.props

    return (
      <div>
        <h1>{this.props.gameTitle} SetupScreen</h1>
        {players.map((player, index) => (
          <div data-test-id="SetupScreen-player" key={index}>
            {player.name}
            <button onClick={() => onDeletePlayer(index)}>&times;</button>
          </div>
        ))}

        <PlayerInputContainer />
        <Button
          data-test-id="SetupScreen-deleteplayer"
          small
          onClick={onDeleteAllPlayers}
        >
          Clear All Players
        </Button>
        {this.renderWarningOrPlayButton()}
      </div>
    )
  }

  renderWarningOrPlayButton() {
    const { players } = this.props
    return players.length ? (
      <Link to="/summary" style={{ textDecoration: 'none' }}>
        <Button>Play!</Button>
      </Link>
    ) : (
      <div data-test-id="SetupScreen-hint">add one Player!</div>
    )
  }
}
