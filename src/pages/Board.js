import React, {useState} from 'react'



export default function Board() {
  const initialState = {dice: 1};
  const [one, setOne] = useState(initialState);
  const [two, setTwo] = useState(initialState);
  const [three, setThree] = useState(initialState);
  const [four, setFour] = useState(initialState);
  const [five, setFive] = useState(initialState);
  const [six, setSix] = useState(initialState);

  const initailRollState = true
  const [rollOne, setRollOne] = useState(initailRollState);
  const [rollTwo, setRollTwo] = useState(initailRollState);
  const [rollThree, setRollThree] = useState(initailRollState);
  const [rollFour, setRollFour] = useState(initailRollState);
  const [rollFive, setRollFive] = useState(initailRollState);
  const [rollSix, setRollSix] = useState(initailRollState);

  const rollDice1 = () => {
    const diceValue = Math.ceil(Math.random() * 6);
    setOne({dice: diceValue})
  };
  const rollDice2 = () => {
    const diceValue = Math.ceil(Math.random() * 6);
    setTwo({dice: diceValue})
  };
  const rollDice3 = () => {
    const diceValue = Math.ceil(Math.random() * 6);
    setThree({dice: diceValue})
  };
  const rollDice4 = () => {
    const diceValue = Math.ceil(Math.random() * 6);
    setFour({dice: diceValue})
  };
  const rollDice5 = () => {
    const diceValue = Math.ceil(Math.random() * 6);
    setFive({dice: diceValue})
  };
  const rollDice6 = () => {
    const diceValue = Math.ceil(Math.random() * 6);
    setSix({dice: diceValue})
  };

  function handleClick() {
      rollDice1();
      rollDice2();
      rollDice3();
      rollDice4();
      rollDice5();
      rollDice6();
  }

  const allowRoll = (event) => {
    setRollOne(event);
  }

  console.log('ROLL ONE', rollOne)

  return (
    <div>
      <img 
      src={require(`../images/${one.dice}.png`)} alt='Dice'
      onClick={() => {allowRoll(!rollOne)}}
      />
      <img src={require(`../images/${two.dice}.png`)} alt='Dice'/>
      <img src={require(`../images/${three.dice}.png`)} alt='Dice'/>
      <img src={require(`../images/${four.dice}.png`)} alt='Dice'/>
      <img src={require(`../images/${five.dice}.png`)} alt='Dice'/>
      <img src={require(`../images/${six.dice}.png`)} alt='Dice'/>
      <button onClick={handleClick}>Roll</button>
    </div>
  )
}
