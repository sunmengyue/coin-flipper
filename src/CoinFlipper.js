import React, { Component } from "react";
import Coin from "./Coin";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>;
        <Coin />
        <button>Flip MEEE</button>
        <p>Out of 3 flips, there have been one head and two tails</p>
      </div>
    );
  }
}

export default CoinFlipper;
