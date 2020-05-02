import React, { Component } from "react";
import "./Cell.css";

export default class Cell extends Component {
  static defaultProps = {
    lightOn: false,
  };

  handleClick = (e) => {
    this.props.clickFn(this.props.nRow, this.props.nCol);
  };

  render() {
    let classes = `Cell ${this.props.lightOn && "lightOn"}`;
    return (
      <td className={classes} onClick={this.handleClick} />
    );
  }
}
