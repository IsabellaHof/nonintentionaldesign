import React, { Component } from 'react'
import EditCard from './EditCard'
import Button from './Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class GameScreen extends Component {
  static propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    resetRoundScores: PropTypes.func,
    onUpdateScore: PropTypes.func,
    onSaveRound: PropTypes.func,
  }
  render() {
    const { players, resetRoundScores, onUpdateScore, onSaveRound } = this.props
    return (
      <React.Fragment>
        <div className="App">
          <h1>(Game Name) Game Screen</h1>
          {players.map((player, index) => (
            <EditCard
              key={index}
              title={player.name}
              score={player.roundScore}
              onUpdate={score => onUpdateScore(index, score)}
            />
          ))}
          <Link to="/summary" style={{ textDecoration: 'none' }}>
            <Button onClick={onSaveRound}>Save Round</Button>
          </Link>
          <Button onClick={resetRoundScores}>Reset Round Scores</Button>
        </div>
      </React.Fragment>
    )
  }
}
