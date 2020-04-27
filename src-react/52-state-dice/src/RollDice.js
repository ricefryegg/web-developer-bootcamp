import React, { Component } from 'react'
import './RollDice.css';
import Dice from './Dice'

let randDice = () => {
  let randIndex = Math.floor(Math.random() * 6);
  return ['one', 'two', 'three', 'four', 'five', 'six'][randIndex];
}


export default class RollDice extends Component {
  state = {
    rolling: false,
    dice_1: 'one',
    dice_2: 'one',
  }

  // pick new face number and set rolling to true
  toRoll = (event) => {
    // set the rolling state first
    this.setState({ rolling: true, })

    // wait one second, reset rolling to false
    setTimeout(() => {
      this.setState({
        dice_1: randDice(),
        dice_2: randDice(),
      });
      this.setState({ rolling: false })
    }, 1000);
  }

  render() {
    let roll_btn = this.state.rolling
      ? <button disable>Rolling...</button>
      : <button onClick={this.toRoll} >Roll Dice!</button>

    return (
      <div className='RollDice'>
        <div className='RollDice-container'>
          <Dice face={this.state.dice_1} rolling={this.state.rolling} />
          <Dice face={this.state.dice_2} rolling={this.state.rolling} />

        </div>

        {roll_btn}
      </div>
    )
  }
}
