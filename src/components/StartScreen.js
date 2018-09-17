import React, { Component } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import GameInputContainer from '../containers/GameInputContainer'

export default class StartScreen extends Component {
  static propTypes = {
    gameTitle: PropTypes.string,
    onStartGame: PropTypes.func.isRequired,
    previousGamesTitles: PropTypes.arrayOf(PropTypes.string),
    onResetGame: PropTypes.func.isRequired,
    onLoadGame: PropTypes.func.isRequired,
  }
  render() {
    const { gameTitle, onStartGame, onResetGame } = this.props
    return (
      <div>
        <h1> {gameTitle || 'Welcome'}</h1>
        {this.renderGameList()}
        <GameInputContainer />
        <Link to="/setup" style={{ textDecoration: 'none' }}>
          <Button onClick={onStartGame}>Start Game</Button>
        </Link>
        <Button onClick={onResetGame}>Reset game</Button>
      </div>
    )
  }
  renderGameList() {
    const { previousGamesTitles, onLoadGame } = this.props
    return (
      <ul>
        <Link to="/summary" style={{ textDecoration: 'none' }}>
          {previousGamesTitles.map((title, index) => (
            <li onClick={onLoadGame} key={index}>
              {title}
            </li>
          ))}
        </Link>
      </ul>
    )
  }
}
