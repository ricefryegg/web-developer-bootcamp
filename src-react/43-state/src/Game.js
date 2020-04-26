import React, { Component } from 'react'

class Game extends Component {
  // state = {   // needs babel
  //   score: 10,
  //   gameOver: false,
  // }
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      gameOver: false,
    }
  }

  render() {
    return (
      <div className='Game'>
        <h1>
          Your Score Is: {this.state.score}
        </h1>
      </div>
    );
  }
}

export default Game;