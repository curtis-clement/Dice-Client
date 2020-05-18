export const ADD_NEW_PLAYER = 'ADD_NEW_PLAYER';

function addNewPlayer(data) {
  return {
    type: 'ADD_NEW_PLAYER',
    payload: data
  }
};

export const addPlayer = (name, id) => {
  return (dispatch, getState) => {
    dispatch(addNewPlayer(name))
    console.log('ADD PLAYER ACTION', name)
  }
}