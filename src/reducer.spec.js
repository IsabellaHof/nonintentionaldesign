import reducer from './reducer'
import ACTIONS from './actions'

describe('reducer', () => {
  it('always return a state', () => {
    const state = {
      players: [{ foo: 'bar' }],
    }

    expect(reducer(state, { foo: 'bar' })).toBe(state)
    expect(reducer(state, {})).toBe(state)
  })

  describe(ACTIONS.ADD_PLAYER, () => {
    it('creates a player with a name', () => {
      const state = {
        players: [],
      }

      const action = {
        type: ACTIONS.ADD_PLAYER,
        payload: {
          name: 'John Doe',
        },
      }

      expect(reducer(state, action)).toEqual({
        players: [
          {
            name: 'John Doe',
            roundScore: 0,
            scores: [],
          },
        ],
      })
    })
  })

  describe(ACTIONS.DELETE_ALL_PLAYERS, () => {
    it('makes the players an empty array', () => {
      const state = {
        players: [{ foo: 'bar' }, { baz: 'foobar' }],
      }
      const action = { type: ACTIONS.DELETE_ALL_PLAYERS }
      const newState = reducer(state, action)
      expect(reducer(state, action)).toEqual({ players: [] })
      expect(newState).not.toBe(state)
    })
  })

  describe(ACTIONS.RESET_SCORES, () => {
    it('resets the scores', () => {
      const state = {
        players: [{ name: 'Foo', scores: [20, 10, -5], roundScore: 20 }],
      }

      const action = { type: ACTIONS.RESET_SCORES }
      expect(reducer(state, action)).toEqual({
        players: [{ name: 'Foo', scores: [], roundScore: 20 }],
      })
    })
  })

  describe(ACTIONS.DELETE_PLAYER, () => {
    it('delets a single player', () => {
      const state = {
        players: [
          { name: 'Foo', scores: [20, 10, -5], roundScore: 20 },
          { name: 'Baz', scores: [0, 5, -15], roundScore: 30 },
        ],
      }

      const action = {
        type: ACTIONS.DELETE_PLAYER,
        payload: {
          index: 0,
        },
      }

      expect(reducer(state, action)).toEqual({
        players: [{ name: 'Baz', scores: [0, 5, -15], roundScore: 30 }],
      })
    })
  })

  describe(ACTIONS.SAVE_ROUND, () => {
    it('add roundScore to score', () => {
      const state = {
        players: [{ name: 'Bar', scores: [20, 10, -5], roundScore: 20 }],
      }
      const action = { type: ACTIONS.SAVE_ROUND }
      expect(reducer(state, action)).toEqual({
        players: [{ name: 'Bar', scores: [20, 10, -5, 20], roundScore: 0 }],
      })
    })
  })

  describe(ACTIONS.UPDATE_ROUNDSCORE, () => {
    it('calculates total score', () => {
      const state = {
        players: [{ name: 'Bar', scores: [20, 10, 0], roundScore: 20 }],
      }
      const action = {
        type: ACTIONS.UPDATE_ROUNDSCORE,
        payload: {
          index: 0,
          value: 30,
        },
      }
      expect(reducer(state, action)).toEqual({
        players: [{ name: 'Bar', scores: [20, 10, 0], roundScore: 50 }],
      })
    })
  })
})
