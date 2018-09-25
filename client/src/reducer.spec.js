import reducer from './reducer'

describe('reducer', () => {
  describe('IMAGE_SELECTED', () => {
    it('select a image', () => {
      const state = {
        finds: [],
      }

      const action = {
        type: 'IMAGE_SELECTED',
        payload: {
          index: 0,
        },
      }

      expect(reducer(state, action)).toEqual({
        finds: [],
        selectedIndex: 0,
      })
    })
  })
})
