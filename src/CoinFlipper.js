import React, { Component } from "react";
import Coin from "./Coin";

class CoinFlipper extends Component {
  static defaultProps = {
    faces: ["head", "tail"],
  };
  constructor(props) {
    super(props);
    this.state = {
      face: "",
      totalFlips: 0,
      headNumCount: 0,
      tailNumCount: 0,
    };
    this.handleFlip = this.handleFlip.bind(this);
  }

  flip() {
    this.setState((curState) => ({
      face: this.props.faces[
        Math.floor(Math.random() * this.props.faces.length)
      ],
      totalFlips: curState.totalFlips + 1,
      headNumCount:
        curState.face === "head"
          ? curState.headNumCount + 1
          : curState.headNumCount,
      tailNumCount:
        curState.face === "tail"
          ? curState.tailNumCount + 1
          : curState.tailNumCount,
    }));
  }

  handleFlip() {
    this.flip();
  }
  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>;
        <Coin />
        <button onClick={this.handleFlip}>Flip MEEE</button>
        <p>{`Out of ${this.state.totalFlips} flips, there have been ${this.state.headNumCount} head and ${this.state.tailNumCount} tails`}</p>
      </div>
    );
  }
}

export default CoinFlipper;
