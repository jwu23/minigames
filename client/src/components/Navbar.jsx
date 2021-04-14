import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar-items">
          <Link to="/tictactoe">TicTacToe</Link>
        </li>
        <li className="navbar-items">
          <Link to="/connect4">Connect 4</Link>
        </li>
        <li className="navbar-items">
          <Link to="/minesweeper">Minesweeper</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;