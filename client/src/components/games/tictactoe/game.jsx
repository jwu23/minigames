import React from 'react';
import Board from './board.jsx';

const Game = () => {
  return (
    <div>
      <div className="tic-players">
        <div>
          Player 1
          <input></input>
        </div>
        <div>
          Player 2
          <input></input>
        </div>
      </div>
      <Board />
    </div>
  )
}

export default Game;