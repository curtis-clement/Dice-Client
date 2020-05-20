export const ADD_NEW_PLAYER = 'ADD_NEW_PLAYER';
export const UPDATE_SCORE = 'UPDATE_SCORE';

function addNewPlayer(player) {
  return {
    type: 'ADD_NEW_PLAYER',
    payload: player
  }
};

export const addPlayer = (name, id) => {
  return (dispatch, getState) => {
    const player = {
      name: name,
      id: id,
      score: 0
    }
    dispatch(addNewPlayer(player))
  }
}

function updateScore(player){
  return {
    type: 'UPDATE_SCORE',
    payload: player
  }
};

export const addNewScore = (id, score) => {
  return (dispatch, getState) => {
    const player = {
      id: id,
      score: score
    }
    dispatch(updateScore(player));
  }
}