import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TicTacToe from './games/tictactoe.jsx';
import Connect4 from './games/connect4.jsx';
import Minesweeper from './games/minesweeper.jsx';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/tictactoe' component={TicTacToe}></Route>
      <Route exact path='/connect4' component={Connect4}></Route>
      <Route exact path='/minesweeper' component={Minesweeper}></Route>
    </Switch>
  )
}

export default Routes;