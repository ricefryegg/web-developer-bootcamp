import React, { Component } from 'react'
import './Dice.css'

export default class Dice extends Component {
  static defaultProps = {
    face: 'one'
  }

  render() {
    return (
      <i className={`Dice fas fa-dice-${this.props.face} ${this.props.rolling ? 'rolling' : ''}`} />
    )
  }
}
