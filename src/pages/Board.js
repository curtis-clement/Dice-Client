import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {addPlayer} from '../store/actions/playeraction';
import {selectAllPlayers} from '../store/selectors/playerselector';

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

  const [player, setPlayer] = useState('');
  const [score, setScore] = useState();

  const dispatch = useDispatch();

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

  // const playerId = Math.floor(Math.random() * 1000000)

  const allPlayers = useSelector(selectAllPlayers);
  console.log('ALL PLAYERS', allPlayers.players)

  function createPlayer(event) {
    const playerId = allPlayers.players.length + 1
      event.preventDefault();
      console.log('PLAYER ADDED', player, playerId)
      dispatch(addPlayer(
        player,
        playerId
      ));
      setPlayer('');
  }

  function updateScore(event) {
    event.preventDefault();
    console.log('PLAYER ID AND SCORE', player, score)
    // dispatch()
    setScore([]);
    setPlayer('');
  }

  return (
    <main>
      <header>
        <h2>Dice - 5000</h2>
      </header>

      <div>
        <Link to={'/'}>
          <h3>Back to the Rules</h3>
        </Link>
      </div>

      <section className='board'>
      <article className='players'>
        <h4>Current Players</h4>

          <div className='headers'>
          <div className='subtitle'>
            <h5>Player</h5>
          </div>
          <div className='subtitle'>
            <h5>Score</h5>
          </div>
          </div>

        {allPlayers.players.map(player => {
          return (
            <div className='playerboard'>
              <div className='playername'>
                {player.name}
              </div>

              <div className='playername'>
                {player.score}
              </div>
            </div>
          )
        })}
      </article>

      <article className='dice'>
      <img 
      src={require(`../images/${one.dice}.png`)} alt='Dice'
      onClick={() => {allowRoll1(!rollOne)}}
      className={!rollOne ? 'dieclick' : 'die'}
      />
      <img 
      src={require(`../images/${two.dice}.png`)} alt='Dice'
      onClick={() => {allowRoll2(!rollTwo)}}
      className={!rollTwo ? 'dieclick' : 'die'}
      />
      <img 
      src={require(`../images/${three.dice}.png`)} alt='Dice'
      onClick={() => {allowRoll3(!rollThree)}}
      className={!rollThree ? 'dieclick' : 'die'}
      />
      <img 
      src={require(`../images/${four.dice}.png`)} alt='Dice'
      onClick={() => {allowRoll4(!rollFour)}}
      className={!rollFour ? 'dieclick' : 'die'}
      />
      <img 
      src={require(`../images/${five.dice}.png`)} alt='Dice'
      onClick={() => {allowRoll5(!rollFive)}}
      className={!rollFive ? 'dieclick' : 'die'}
      />
      <img 
      src={require(`../images/${six.dice}.png`)} alt='Dice'
      onClick={() => {allowRoll6(!rollSix)}}
      className={!rollSix ? 'dieclick' : 'die'}
      />
      <button
      className='roll'
      onClick={handleClick}>Roll
      </button>
      </article>

      <article className='add'>
        <h4>Add A Player</h4>
          <form onSubmit={createPlayer}>
            <label>Player Name</label>
            <br/>
              <input 
              type='text'
              placeholder='Player Name'
              value={player}
              onChange={event => setPlayer(event.target.value)}
              />
            <button type='submit'>
              Add
            </button>
          </form>

          <form onSubmit={updateScore}>
              {allPlayers.players.map(player => {
                return (
                  <div>
                  {player.name}
                  <input 
                  type='number'
                  value={score}
                  onChange={event => {setScore(event.target.value)}}
                  />
                  <button 
                  type='submit'
                  onClick={() => {
                    setPlayer(player.id)
                  }
                  }
                  >+</button>
                  </div>
              )})}
          </form>
      </article>
      </section>
    </main>
  )
}


// onSubmit={event => {
//   event.preventDefault();
//   setPlayer(player.id)
//   setScore(event.target.value)
// }}
