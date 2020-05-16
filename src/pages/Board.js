import React, {useState} from 'react'
import {Link} from 'react-router-dom';

import '../CSS/board.css';

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
      if (rollOne === true) {
        rollDice1();
      }
      if (rollTwo === true) {
        rollDice2();
      }
      if (rollThree === true) {
        rollDice3();
      }
      if (rollFour === true) {
        rollDice4();
      }
      if (rollFive === true) {
        rollDice5();
      }
      if (rollSix === true) {
        rollDice6();
      }
  };

  const allowRoll1 = (event) => {
    setRollOne(event);
  }
  const allowRoll2 = (event) => {
    setRollTwo(event);
  }
  const allowRoll3 = (event) => {
    setRollThree(event);
  }
  const allowRoll4 = (event) => {
    setRollFour(event);
  }
  const allowRoll5 = (event) => {
    setRollFive(event);
  }
  const allowRoll6 = (event) => {
    setRollSix(event);
  }

  return (
    <div>
      <img 
      src={require(`../images/${one.dice}.png`)} alt='Dice'
      onClick={() => {allowRoll1(!rollOne)}}
      className={!rollOne ? 'dieclick' : null}
      />
      <img 
      src={require(`../images/${two.dice}.png`)} alt='Dice'
      onClick={() => {allowRoll2(!rollTwo)}}
      className={!rollTwo ? 'dieclick' : null}
      />
      <img 
      src={require(`../images/${three.dice}.png`)} alt='Dice'
      onClick={() => {allowRoll3(!rollThree)}}
      className={!rollThree ? 'dieclick' : null}
      />
      <img 
      src={require(`../images/${four.dice}.png`)} alt='Dice'
      onClick={() => {allowRoll4(!rollFour)}}
      className={!rollFour ? 'dieclick' : null}
      />
      <img 
      src={require(`../images/${five.dice}.png`)} alt='Dice'
      onClick={() => {allowRoll5(!rollFive)}}
      className={!rollFive ? 'dieclick' : null}
      />
      <img 
      src={require(`../images/${six.dice}.png`)} alt='Dice'
      onClick={() => {allowRoll6(!rollSix)}}
      className={!rollSix ? 'dieclick' : null}
      />
      <button onClick={handleClick}>Roll</button>

      <div>
        <Link to={'/'}>
          <h3>Back to the Rules</h3>
        </Link>
      </div>
    </div>
  )
}
