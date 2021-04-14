import React from 'react';
import Navbar from './Navbar.jsx'
import { Switch, Route } from 'react-router-dom'
// import Routes from './Routes.jsx';

import TicTacToe from './games/tictactoe/tictactoe.jsx';
import Connect4 from './games/connect4/connect4.jsx';
import Minesweeper from './games/minesweeper.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/tictactoe' component={TicTacToe}></Route>
        <Route exact path='/connect4' component={Connect4}></Route>
        <Route exact path='/minesweeper' component={Minesweeper}></Route>
      </Switch>
    </div>
  );
}

export default App;