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
      return state
    
    default:
      return state;
  }
}