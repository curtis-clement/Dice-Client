import React, {useState} from 'react'



export default function Board() {
  const initialState = {dice: 1};
  const [state, setState] = useState(initialState);

  const rollDice = () => {
    const diceValue = Math.ceil(Math.random() * 6);
    setState({dice: diceValue})
  }

  return (
    <div>
      <img src={require(`../images/${state.dice}.png`)} alt='Dice'/>
      <button onClick={rollDice}>Roll</button>
    </div>
  )
}
