import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {addPlayer, addNewScore} from '../store/actions/playeraction';
import {selectAllPlayers} from '../store/selectors/playerselector';

import '../CSS/board.css';

export default function Board() {
  const allPlayers = useSelector(selectAllPlayers);
  const dispatch = useDispatch();
  
  const dieInitialState = id => ({
    id,
    roll: true,
    value: 1
  })
  const initialState = [...Array(6).keys()].map(id => dieInitialState(id));
  const [all, setAll] = useState(initialState)

  const [newPlayer, setNewPlayer] = useState('');
  const [player, setPlayer] = useState();
  const [score, setScore] = useState();

  const rollDice = () => {
    const newRoll = all.map(die =>
      die.roll ? {...die, value: Math.ceil(Math.random() * 6)} : die
      )
    setAll(newRoll);
  }

  const disableRoll = id => {
    const newRoll = all.map(die => 
      die.id === id ? {...die, roll: !die.roll} : die
      );
    setAll(newRoll);
  }

  function createPlayer(event) {
    const playerId = allPlayers.players.length + 1
      event.preventDefault();
      dispatch(addPlayer(
        newPlayer,
        playerId
      ));
      setNewPlayer('');
  }

  function updateScore(event) {
    event.preventDefault();
    dispatch(addNewScore(
      player, score
    ))
    setScore([]);
    setNewPlayer('');
  };

  const generateDice = () =>
    all.map(die => (
      <img 
        src={require(`../images/${die.value}.png`)}
        key={die.id}
        alt='Dice'
        onClick={() => disableRoll(die.id)}
        className={!die.roll ? 'dieclick' : 'die'}
      />
    ))

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
            <div key={player.id} className='playerboard'>
              <div className='playername'>
                {player.name}
              </div>

              <div className='playername'>{player.score}</div>
            </div>
          )
        })}
      </article>

      <article className='dice'>
        {generateDice()}
        <button className='roll' onClick={rollDice}>
          Roll
        </button>
      </article>

      <article className='add'>
        <h4>Add A Player</h4>
          <form onSubmit={createPlayer}>
            <br/>
              <input 
              className='addplayer'
              type='text'
              placeholder='Player Name'
              value={newPlayer}
              onChange={event => setNewPlayer(event.target.value)}
              />
            <button
             type='submit'>
              Add
            </button>
          </form>
      </article>
      </section>

      <section className='updatescore'>
      <article>
          <form onSubmit={updateScore}>
          <select className='select' onChange={event => setPlayer(parseInt(event.target.value))}>
              <option>Select Player</option>
              {allPlayers.players.map(player => {
                return (
                  <option
                  key={player.id} 
                  value={player.id}
                  >{player.name}</option>
                )
              })}
          </select>
          <input 
          className='addscore'
          onChange={event => setScore(parseInt(event.target.value))}
          type='number'
          value={score}
          />
          <button type='submit'>+</button>
          </form>
      </article>
      </section>
    </main>
  )
}
