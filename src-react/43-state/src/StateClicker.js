import React, { Component } from 'react'


export default class StateClicker extends Component {
  // shortcut of super(props)...
  state = { num: 1 }

  // use class property to avoid binding
  randint = () => {
    this.setState({ num: Math.floor(Math.random() * 10) });
  }

  render() {
    let btn = this.state.num === 7
      ? 'You win!'
      : <button className='btn btn-lg btn-warning' onClick={this.randint}>Random Number</button>

    return (
      <div>
        <h1>Number is {this.state.num}</h1>
        {btn}
      </div>
    )
  }
}
