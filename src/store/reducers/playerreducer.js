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
      console.log('STATE', ...state)
      const newState = state.map(player => {
        console.log('ACTION', action)
        if (player.id === action.payload.id) {
          console.log('PLAYER', player)
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