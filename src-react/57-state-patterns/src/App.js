import React from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from './Icon';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Icon />

      {/* Lottery state */}
      <Lottery />
      <Lottery title='Mini Daily' numBall={4} maxNum={10} />

    </div>
  );
}

export default App;
