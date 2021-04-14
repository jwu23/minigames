import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Game from './game.jsx';

const TicTacToe = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Game />
    </div>
  )
}

export default TicTacToe