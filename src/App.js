import React from 'react';
import {Switch, Route} from 'react-router';

import Rules from './pages/Rules';
import Board from './pages/Board';

import './App.css';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={Rules} />
      <Route path='/game' component={Board} />
    </Switch>
    </div>
  );
}

export default App;
