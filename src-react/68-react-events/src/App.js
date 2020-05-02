import React from 'react';
import './App.css';
import WiseSquare from './WiseSquare';
import WiseSquareProps from './WiseSquareProps';
import AnnyingForm from './AnnyingForm';
import CopyDemo from './CopyDemo';
import ColorButton from './ColorButton';
import NumberList_passDownFn from './NumberList_passDownFn';

function App() {
  return (
    <div className="App">
      {/* <WiseSquare />
      <WiseSquareProps />

      <AnnyingForm />

      <CopyDemo/> */}

      <ColorButton />

      <NumberList_passDownFn />
    </div>
  );
}

export default App;
