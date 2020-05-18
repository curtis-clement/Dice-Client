import React from 'react'
import {Link} from 'react-router-dom';

import '../CSS/rules.css';

export default function Rules() {
  return (
    <div>
      <header>
        <h1>Rules</h1>
        <hr className='line'/> 
      </header>

      <section className='rulebox'>
        <h3>5000 - A game for any number of players using six dice</h3>

        <p>The object of the game is to accumulate a total of 5000 points. The dice score as follows:</p>
        <p>PUT A TABLE OF THE SCORES HERE</p>
        <p>A straight in the first roll (1 to 6) scores 1500 points</p>
        <p>3 pairs in the first role score 500 points</p>
        <p>6 of a kind = instant win - 5000 points</p>
        <p>
          To play: The first player throws all 6 dice. Any dice which score are set to one side and the remaining dice
          can be thrown again. Scoring dice are again put to one side. This can be repeated as many times as necessary.
        </p>
        <p>
          At least one die must be put aside with each roll in a turn. A player does not have to put aside all scoring
          dice if they do not wish to. For Example: A player may choose to re-roll some scoring dice to try for a 3 of a kind.
        </p>
        <p>
          In each turn a player must score at least 350 points. This is the base score. After the base score is reached the
          player has the option to "stick" (keep the points they have and pass the play to the next player) or continue
          throwing to increase their points. If they stick the points are recorded and the play passes to the next player.
        </p>
        <p>
          With each throw of the dice, at least ONE die must be a scoring die (thus increasing the score of the turn) else
          the entire score for that turn is LOST and play passes to the next player.
        </p>
        <p>
          If all 6 dice score (either all together on one roll or separately on numerous rolls) and have been placed to
          the side, all six dice must be thrown again and scoring continues until the end of the turn. A player can continue
          rolling as long as the score is improved with each throw.
        </p>
        <p>
          When a player has elected to stick or has lost their turn the dice pass to the next player who must either score
          the base score (350) or at least 50 points more than the previous player's score for their turn, whichever is greater.
          Failuer to do so results in the current thrower scoring no points for their turn.
        </p>
        <p>
          After any player scores 5000 or scores over 5000 (unless 6 of a kind is rolled), remaining players get one more
          turn to try to beat that score and win the game.
        </p>
      </section>
      <br />
      <Link to={'/game'}>
        <h3>Click here to play!</h3>
      </Link>
    </div>
  )
}
