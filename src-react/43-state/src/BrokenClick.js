import React, { Component } from 'react'

export default class BrokenClick extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false
    }
    // this.handleClick = this.handleClick.bind(this)

  }

  // handleClick(event) {
  //   this.setState({clicked: true});
  // }
  handleClick = () => {
    this.setState({ clicked: this.state.clicked ? false : true })
  }


  render() {
    return (
      <div>
        <h1>{this.state.clicked ? 'Clicked!!!' : 'Not Clicked'}</h1>
        <button className='btn btn-primary' onClick={this.handleClick}>Tooggle</button>
      </div>
    )
  }
}
