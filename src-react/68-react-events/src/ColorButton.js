import React, { Component } from "react";

export default class ColorButton extends Component {
  static defaultProps = {
    colors: ["#e056fd", "#eb4d4b", "#badc58", "#f0932b"],
  };

  state = {
    color: "cyan",
  };

  changeColor = (c) => {
    // return callback fn for onClick event to set specific color.
    return () => this.setState({ color: c });
  };

  render() {
    return (
      <div
        className="ColorButton"
        style={{ backgroundColor: this.state.color }}
      >
        {this.props.colors.map((c) => (
          <button
            style={{ backgroundColor: c, fontSize: "2em" , borderRadius: '25%'}}
            onClick={this.changeColor(c)}
          >
            Click on me!
          </button>
        ))}
      </div>
    );
  }
}
