import ACTIONS from './actions'
import { load } from './services'

const initialState = load('app') || {
  players: [],
  tempGameTitle: null,
  previousGamesTitles: [],
  gameTitle: null,
  games: [{ title: '', players: [], scores: [] }],
}

// players: [], oder
// players.map(player => ...)

export default function reducer(state = initialState, action = {}) {
  //let index, players, value

  switch (action.type) {
  case ACTIONS.LOAD_GAME:
    return {
      ...state,
      games: [
        ...state.games,
        {
          title: action.payload.title,
          player: action.payload.players,
          scores: action.payload.scores,
        },
      ],
    }

  case ACTIONS.REPLACE_PLAYERS:
    return {
      ...state,
      players: action.payload.players,
    }

  case ACTIONS.SAVE_TEMP_GAME_TITLE:
    return {
      ...state,
      tempGameTitle: action.payload.tempGameTitle,
    }

  case ACTIONS.START_GAME:
    return {
      ...state,
      gameTitle: state.tempGameTitle,
      tempGameTitle: null,
    }

  case ACTIONS.END_GAME:
    return {
      ...state,
      previousGamesTitles: [state.gameTitle, ...state.previousGamesTitles],
      gameTitle: null,
      players: [],
    }

  case ACTIONS.RESET_GAME:
    return {
      ...state,
      gameTitle: null,
      players: [],
    }

  case ACTIONS.DELETE_ALL_PLAYERS:
    return {
      ...state,
      players: [],
    }

  case ACTIONS.ADD_PLAYER:
    return {
      ...state,
      players: [
        ...state.players,
        {
          name: action.payload.name,
          scores: [],
          roundScore: 0,
        },
      ],
    }

  case ACTIONS.RESET_ROUND_SCORES:
    return {
      ...state,
      players: state.players.map(player => ({
        ...player,
        roundScore: 0,
      })),
    }

  case ACTIONS.RESET_SCORES:
    return {
      ...state,
      players: state.players.map(player => ({
        ...player,
        scores: [],
      })),
    }
  case ACTIONS.DELETE_PLAYER:
    return {
      ...state,
      players: [
        ...state.players.slice(0, action.payload.index),
        ...state.players.slice(action.payload.index + 1),
      ],
    }

  case ACTIONS.SAVE_ROUND:
    return {
      ...state,

      players: state.players.map(player => {
        return {
          ...player,
          scores: [...player.scores, player.roundScore],
          roundScore: 0,
        }
      }),
    }
  case ACTIONS.UPDATE_ROUNDSCORE:
    return {
      ...state,
      players: [
        ...state.players.slice(0, action.payload.index),
        {
          ...state.players[action.payload.index],
          roundScore:
              state.players[action.payload.index].roundScore +
              action.payload.value,
        },
        ...state.players.slice(action.payload.index + 1),
      ],
    }
  default:
    return state
  }
}
