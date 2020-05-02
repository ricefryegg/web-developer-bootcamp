import React, { Component } from "react";

export default class CopyDemo extends Component {
  handleCopy() {
    alert("Stop stealing!!!");
  }
  render() {
    return (
      <div>
        <h3>Try copy this:</h3>
        <section
          style={{ width: "300px", display: "inline-block" }}
          onCopy={this.handleCopy}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat
          augue et dolor efficitur ultrices. Curabitur urna leo, finibus
          vehicula ex vel, sollicitudin porta velit. Duis pellentesque tellus
          eros, sed gravida neque pharetra sit amet. Phasellus elementum risus
          lectus, a iaculis velit aliquam at. Phasellus posuere, mi sed maximus
          finibus, dolor dolor congue mauris, a posuere diam orci eu mi. Donec
          tellus nisl, bibendum a iaculis eu, feugiat quis nunc. Sed consectetur
          tempor molestie. Ut mattis auctor massa, vel rhoncus ipsum cursus et.
          Curabitur at sollicitudin ipsum, et vulputate nulla. Duis eget tortor
          eu nulla rhoncus aliquet. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Aenean iaculis, leo eget
          tempor tincidunt, nibh mi imperdiet odio, vel consectetur purus neque
          vel sapien. Maecenas vitae leo scelerisque, dapibus nulla sit amet,
          tincidunt ante. Maecenas eget urna vulputate odio placerat interdum.
        </section>
      </div>
    );
  }
}
