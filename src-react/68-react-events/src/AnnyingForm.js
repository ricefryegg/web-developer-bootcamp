import React, { Component } from 'react'

export default class AnnyingForm extends Component {
  handleKeyUp(event) {
    alert(event.keyCode === 56 ? '!!!56!!!' : event.keyCode);
    console.log(event);
  }

  render() {
    return (
      <div className='AnnyingForm'>
        <h3>Type here:</h3>
        <textarea onKeyUp={this.handleKeyUp} />
      </div>
    )
  }
}
