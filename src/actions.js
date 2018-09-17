import { createAction } from 'redux-actions'

const ACTIONS = {
  DELETE_ALL_PLAYERS: 'DELETE_ALL_PLAYERS',
  ADD_PLAYER: 'ADD_PLAYER',
  UPDATE_ROUNDSCORE: 'UPDATE_ROUNDSCORE',
  RESET_SCORES: 'RESET_SCORES',
  RESET_ROUND_SCORES: 'RESET_ROUND_SCORES',
  DELETE_PLAYER: 'DELETE_PLAYER',
  SAVE_ROUND: 'SAVE_ROUND',
  START_GAME: 'START_GAME',
  SAVE_TEMP_GAME_TITLE: 'SAVE_TEMP_GAME_TITLE',
  END_GAME: 'END_GAME',
  RESET_GAME: 'RESET_GAME',
  LOAD_PLAYERS_FROM_SERVER: 'LOAD_PLAYERS_FROM_SERVER',
  REPLACE_PLAYERS: 'REPLACE_PLAYERS',
  LOAD_GAME: 'LOAD_GAME',
}

export const addPlayer = createAction(ACTIONS.ADD_PLAYER)
export const deletePlayer = createAction(ACTIONS.DELETE_PLAYER)
export const deleteAllPlayers = createAction(ACTIONS.DELETE_ALL_PLAYERS)
export const resetScores = createAction(ACTIONS.RESET_SCORES)
export const resetRoundScores = createAction(ACTIONS.RESET_ROUND_SCORES)
export const updateScore = createAction(ACTIONS.UPDATE_ROUNDSCORE)
export const saveRound = createAction(ACTIONS.SAVE_ROUND)
export const startGame = createAction(ACTIONS.START_GAME)
export const saveTempGameTitle = createAction(ACTIONS.SAVE_TEMP_GAME_TITLE)
export const resetGame = createAction(ACTIONS.RESET_GAME)
export const endGame = createAction(ACTIONS.END_GAME)
export const loadGame = createAction(ACTIONS.LOAD_GAME)
export const replacePlayers = createAction(ACTIONS.REPLACE_PLAYERS)
export const loadPlayersFromServer = () => dispatch => {
  fetch('http://localhost:3001/players')
    .then(res => res.json())
    .then(players => {
      dispatch(replacePlayers({ players }))
    })
}

export default ACTIONS
