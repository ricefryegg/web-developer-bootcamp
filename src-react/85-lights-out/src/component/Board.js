import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

const createCellState = (nRow, nCol, trueRatio) =>
  [...Array(nRow)].map(() =>
    [...Array(nCol)].map(() => Math.random() < trueRatio)
  );

export default class Board extends Component {
  static defaultProps = {
    nRow: 5,
    nCol: 5,
    initLightOnRatio: 0.1,
  };

  state = {
    lightArr: createCellState(
      this.props.nRow,
      this.props.nCol,
      this.props.initLightOnRatio
    ),
    isWin: false,
  };

  flipCells = (row, col) => {
    let { nRow, nCol } = this.props;
    let lightArrNew = this.state.lightArr;

    function flipCell(row, col) {
      if (row >= 0 && row < nRow && col >= 0 && col < nCol) {
        lightArrNew[row][col] = !lightArrNew[row][col];
      }
    }

    flipCell(row, col); // self
    flipCell(row - 1, col); // upper
    flipCell(row + 1, col); // lower
    flipCell(row, col - 1); // left
    flipCell(row, col + 1); // right

    // check if every cell is false
    let isWin = lightArrNew.every((row) => row.every((cell) => !cell));

    this.setState({ lightArr: lightArrNew, isWin: isWin });
  };

  reset = () => {
    this.setState({
      lightArr: createCellState(
        this.props.nRow,
        this.props.nCol,
        this.props.initLightOnRatio
      ),
      isWin: false,
    });
  };

  render() {
    const winning = (
      <div>
        <div className="Board-title"></div>
      </div>
    );

    const table = (
      <table className="Board">
        <tbody>
          {[...Array(this.props.nRow)].map((_, i) => (
            <tr key={`tr${i}`}>
              {[...Array(this.props.nCol)].map((_, j) => (
                <Cell
                  lightOn={this.state.lightArr[i][j]}
                  clickFn={this.flipCells}
                  nRow={i}
                  nCol={j}
                  key={`${i}-${j}`}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );

    return (
      <div>
        {this.state.isWin ? (
          <div class="winner" onClick={this.reset} style={{"cursor": "pointer"}}>
            <div className="neon-orange">You</div>
            <div className="neon-blue">Win</div>
          </div>
        ) : (
          <div>
            <div class="Board-title">
              <div className="neon-orange">Lights</div>
              <div className="neon-blue">Out</div>
            </div>
            {table}
          </div>
        )}
      </div>
    );
  }
}
