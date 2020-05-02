import React, { Component } from 'react'
import './ColorBox.css'

const randHex = (digit) => {
  let pool = [...Array(10).keys()].concat('abcde'.split(''))

  return [...Array(digit)].map(i =>
    pool[Math.floor(Math.random() * pool.length)]
  ).join('')
}


export default class ColorBox extends Component {
  state = {
    color: randHex(6),
  }

  updateColor = () => {
    let newColor;

    do {
      newColor = randHex(6);
    } while (newColor === this.state.color)

    this.setState({ color: newColor })
  }

  clickHandler = (event) => {
    this.updateColor()
  }

  // componentDidMount(){
  //   setInterval(this.updateColor, Math.floor(Math.random() * 3000));
  // }

  render() {
    return (
      <div
        className='ColorBox'
        onClick={this.clickHandler}
        style={{ backgroundColor: `#${this.state.color}` }}>

      </div>
    )
  }
}
