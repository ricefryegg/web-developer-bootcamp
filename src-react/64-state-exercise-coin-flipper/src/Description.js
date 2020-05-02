import React, { Component } from 'react'

export default class Description extends Component {
  render() {
    return (
      <div className='Description'>
        <p>
          Out of {this.props.total} flips, there have been {this.props.head} heads, and {this.props.tail} tails.
        </p>
      </div>
    )
  }
}
