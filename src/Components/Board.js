import React, { Component } from 'react';
const Colors = ['blue', 'red'];
const Size = 9;
let BoardColors = [];

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: -1
    };
  }

  nextLevel(key) {
    if (this.state.changed !== -1) {
      if (this.state.changed === key) {
        this.props.assertSelection();
      } else {
        this.props.errorSelection();
      }
      this.setState((prevState, props) => ({
        changed: -1
      }));
    } else {
      let change = Math.round(Math.random() * Size);
      this.setState((prevState, props) => ({
        changed: change
      }));
    }
    this.props.toggleStep();
  }

  render() {
    let i = 0,
      dots = [];

    if (this.state.changed !== -1) {
      for (;i < Size; i++) {
        const sel = i;
        if (i === this.state.changed) {
          dots.push(
            <div className={Colors[1 - BoardColors[i]] + ' dot'} key={ i } onClick={() => this.nextLevel(sel)}></div>
          );
        } else {
          dots.push(
            <div className={Colors[BoardColors[i]] + ' dot'} key={ i } onClick={() => this.nextLevel(sel)}></div>
          );
        }
      }
    } else {
      BoardColors = [];
      const randomColor = () => {
        return Math.round(Math.random());
      };
      for (;i < Size; i++) {
        let col = randomColor();
        BoardColors.push(col);
        dots.push(
          <div className={Colors[col] + ' dot'} key={ i } onClick={this.nextLevel.bind(this)}></div>
        );
      }
    }

    return (
      <div className="Board">
        {dots}
      </div>
    );
  }
}

export default Board;