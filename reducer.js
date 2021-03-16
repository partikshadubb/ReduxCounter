import types from './types'

const initialState = {
  counter :0,
}

function reducer(state = initialState, action) {
    switch (action.type) {
      case types.INCREASE_COUNT:
        return {
          ...state,
          counter : state.counter + 1,
          
        }
      case types.DECREASE_COUNT:
        return {
          ...state,
          counter : state.counter - 1,
        }
      default:
        return state
    }
  }
  export default reducer;
