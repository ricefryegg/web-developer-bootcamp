import React, { Component } from 'react'
import './Lottery.css'
import LotteryBall from './LotteryBall'


export default class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBall: 6,
    maxNum: 40,
  }
  state = {
    nums: Array.from({ length: this.props.numBall })
  }

  updateNums = (event) => {
    // let nums = [];
    // for (let i = 0; i < this.props.numBall; i++) {
    //   nums.push(Math.floor(Math.random() * this.props.maxNum))
    // }

    // this.setState({ nums: nums });

    // functional state setting
    this.setState(st => ({
      nums: st.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }))
  }

  handleClick = () => {
    this.updateNums();
  }


  render() {
    return (
      <div className='Lottery'>
        <h1>{this.props.title}</h1>

        <div className='LotteryBalls'>
          {this.state.nums.map(num => <LotteryBall num={num} />)}
        </div>

        <button onClick={this.handleClick}>Generate</button>
      </div>
    )
  }
}
