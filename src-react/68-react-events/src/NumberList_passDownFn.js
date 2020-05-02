import React, { Component } from "react";

class NumberItem extends Component {
  // add a layer to determine removing value
  handleClick = (e) => {
    this.props.removeFn(this.props.value);
  }

  render() {
    
    return (
      <div className="NumberItem">
        <li>
          {this.props.value}
          <button onClick={this.handleClick}>X</button>
        </li>
      </div>
    );
  }
}

export default class NumberList_passDownFn extends Component {
  state = {
    nums: [1, 2, 2, 2, 3, 4, 5],
  };

  remove = (num) => {
    this.setState((st) => ({
      nums: st.nums.filter((n) => n !== num),
    }));
  };

  render() {
    let nums = this.state.nums.map((n) => (
      <NumberItem value={n} removeFn={this.remove} />
    ));
    return (
      <div className="NumberList_passDownFn" style={{ textAlign: "left" }}>
        <h1>Numbers List</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}
