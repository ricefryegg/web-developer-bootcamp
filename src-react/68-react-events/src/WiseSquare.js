import React, { Component } from 'react'

export default class WiseSquare extends Component {
  dispenseWisdom() {
    let messages = [
      "Lorem Ipsum，也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。", 
      "由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem Ipsum从西元15世纪起就被作为此领域的标准文本使用。", 
      "它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。", 
    ];

    let randIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[randIndex]);
  }

  render() {
    return (
      <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>
        😍
      </div>
    )
  }
}
