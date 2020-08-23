import React, { Component } from "react";
import Coin from "./Coin";

class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      { side: "head", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tail", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      coin: null,
      totalFlips: 0,
      headsCount: 0,
      tailsCount: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flip() {
    const newCoin = this.props.coins[
      Math.floor(Math.random() * this.props.coins.length)
    ];
    this.setState((curSt) => {
      return {
        coin: newCoin,
        totalFlips: curSt.totalFlips + 1,
        headsCount:
          newCoin.side === "head"
            ? this.state.headsCount + 1
            : this.state.headsCount,
        tailsCount: this.state.tailsCount + (newCoin.side === "tail" ? 1 : 0),
      };
    });
    //  Below is wrong:
    //   headsCount:
    //     curState.coin === this.props.coins[0]
    //       ? curState.headNumCount + 1
    //       : curState.headNumCount,
    //   tailsCount:
    //     curState.coin === this.props.coins[1]
    //       ? curState.tailNumCount + 1
    //       : curState.tailNumCount,
  }

  handleClick() {
    this.flip();
  }
  render() {
    return (
      <div className="CoinFlipper">
        <h2>Let's flip a coin!</h2>
        {this.state.coin && <Coin info={this.state.coin} />}
        <button onClick={this.handleClick}>Flip MEEE</button>
        <p>
          Out of {this.state.totalFlips} flips, there have been{" "}
          {this.state.headsCount} head and {this.state.tailsCount} tails
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
