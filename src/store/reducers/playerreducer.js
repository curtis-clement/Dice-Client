import {ADD_NEW_PLAYER, UPDATE_SCORE} from '../actions/playeraction';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_PLAYER:
      return [
        ...state,
        action.payload
      ]

    case UPDATE_SCORE:
      const newState = state.map(player => {
        if (player.id === action.payload.id) {
          return {...player, score: player.score + action.payload.score}
        } else {
          return player
        }
      })
      return newState
    
    default:
      return state;
  }
}