import React, { Component } from 'react'

export default class Coin extends Component {
  render() {
    return (
      <div className='Coin'>
        {this.props.faceImg == null ? '': <img src={this.props.faceImg} alt='' />}
        
      </div>
    )
  }
}
