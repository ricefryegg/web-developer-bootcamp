import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./imgs/0.jpg";
import img1 from "./imgs/1.jpg";
import img2 from "./imgs/2.jpg";
import img3 from "./imgs/3.jpg";
import img4 from "./imgs/4.jpg";
import img5 from "./imgs/5.jpg";
import img6 from "./imgs/6.jpg";
import { randomWord } from "./words";

let word = randomWord();

// in case of different input sequence
const removeE = (arr, e) => {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === e) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
  };

  state = {
    charLeft: word.split(""),
    nWrong: 0,
    guessed: new Set(),
    answer: word,
  };

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord = () => {
    return this.state.answer
      .split("")
      .map((char) => (this.state.guessed.has(char) ? char : "_"));
  };

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess = (evt) => {
    let char = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(char),
      nWrong: st.nWrong + (st.answer.includes(char) ? 0 : 1),
      charLeft: st.answer.includes(char)
        ? removeE(st.charLeft, char)
        : st.charLeft,
    }));
  };

  gameOver = () => {
    return (
      this.state.nWrong === this.props.maxWrong ||
      this.state.charLeft.length === 0
    );
  };

  handleRestart = () => {
    let word = randomWord();

    this.setState((st) => ({
      charLeft: word.split(""),
      nWrong: 0,
      guessed: new Set(),
      answer: word,
    }));
  };

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
      <button
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr) || this.gameOver()}
        key={ltr}
      >
        {ltr}
      </button>
    ));
  }

  /** render: render game */
  render() {
    const restartBtn = (
      <div>
        {this.gameOver() ? (
          <button
            className="Hangman-btns"
            id="reset"
            onClick={this.handleRestart}
          >
            Restart
          </button>
        ) : (
          ""
        )}
      </div>
    );

    const gameStatus =
      this.state.charLeft.length === 0 ? (
        <p className="Hangman-word" style={{ fontSize: "1em" }}>
          You Win!
        </p>
      ) : (
        <p className="Hangman-word" style={{ fontSize: "1em" }}>
          You Lose
        </p>
      );

    return (
      <div className="Hangman">
        <h1>Hangman</h1>
        <img
          src={this.props.images[this.state.nWrong]}
          alt={this.state.nWrong + " wrong guesses"}
        />
        <p>Number wrong: {this.state.nWrong}</p>
        <p className="Hangman-word">
          {this.gameOver() ? this.state.answer : this.guessedWord()}
        </p>
        <p className="Hangman-btns">
          {this.gameOver() ? gameStatus : this.generateButtons()}
        </p>
        {restartBtn}
      </div>
    );
  }
}

export default Hangman;
