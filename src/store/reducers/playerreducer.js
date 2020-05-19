import {ADD_NEW_PLAYER} from '../actions/playeraction';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_PLAYER:
      return [
        ...state,
        action.payload
      ]
    
    default:
      return state;
  }
}