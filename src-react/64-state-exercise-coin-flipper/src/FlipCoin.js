import React, { Component } from 'react'
import Coin from './Coin';
import Description from './Description';

export default class FlipCoin extends Component {
  state = {
    head: 0,
    tail: 0,
    isHead: null
  }

  updateHead = () => {
    let isHead = Math.floor(Math.random() * 2) === 0;

    this.setState(st => ({
        isHead : isHead, 
        head   : st.head + (isHead ? 1 : 0), 
        tail   : st.tail + (isHead ? 0 : 1), 
    }))
  }

  handleClick = (e) => {
    this.updateHead();
    console.log(this.state);
    
  }
  

  render() {
    let faceImg = this.state.head + this.state.tail > 0
      ? this.state.isHead
        ? 'img/head.jpg'
        : 'img/tail.jpg'
      : null

    return (
      <div className='FlipCoin'>

        <h1>Let's flip a coin!</h1>
        <button onClick={this.handleClick}>Flip here</button>

        <hr></hr>

        <Coin faceImg={faceImg} />

        <Description total={this.state.head + this.state.tail} head={this.state.head} tail={this.state.tail} />
      </div>
    )
  }
}
