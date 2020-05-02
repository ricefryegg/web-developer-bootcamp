import React, { Component } from 'react'
import './ColorBoxes.css'
import ColorBox from './ColorBox'

export default class ColorBoxes extends Component {
  static defaultProps = {
    numBoxes: 18
  }

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() =>
      <ColorBox />
    )
    return (
      <div className='ColorBoxes'>
        {boxes}
      </div>
    )
  }
}
