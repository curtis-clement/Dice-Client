export const ADD_NEW_PLAYER = 'ADD_NEW_PLAYER';

function addNewPlayer(player) {
  console.log('NEW PLAYER', player)
  return {
    type: 'ADD_NEW_PLAYER',
    payload: player
  }
};

export const addPlayer = (name, id) => {
  return (dispatch, getState) => {
    const player = {
      name: name,
      id: id
    }

    dispatch(addNewPlayer(player))
    console.log('ADD PLAYER ACTION', name, id)
  }
}