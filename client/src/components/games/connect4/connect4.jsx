import React from 'react';
import { Link } from 'react-router-dom';
import Game from './game.jsx';

const Connect4 = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Game />
    </div>
  )
}

export default Connect4;