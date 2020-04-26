import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick';
import StateClicker from './StateClicker';

function App() {
  return (
    <div className="App">
      <Rando maxNum='7' />

      <Button />

      <BrokenClick />

      <hr />

      <StateClicker />
    </div>
  );
}

export default App;
