import React, { Component } from 'react'
import SummaryCard from './SummaryCard'
import Button from './Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class SummaryScreen extends Component {
  static propTypes = {
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    onEndGame: PropTypes.func.isRequired,
  }
  render() {
    const { players, onEndGame } = this.props
    return (
      <div>
        <h1>Summary Screen</h1>
        {players.map((player, index) => (
          <SummaryCard key={index} title={player.name} scores={player.scores} />
        ))}
        <Link to="/game" style={{ textDecoration: 'none' }}>
          <Button>add round</Button>
        </Link>
        <Link to="/setup" style={{ textDecoration: 'none' }}>
          <Button> Back To Setup</Button>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button onClick={onEndGame}> End Game</Button>
        </Link>
      </div>
    )
  }
}
