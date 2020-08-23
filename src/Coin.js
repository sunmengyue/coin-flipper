import React, { Component } from "react";
import head from "./img/head.jpg";
import tail from "./img/tail.jpg";
import "./coin.css";

class Coin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={head} alt="coin" className="coin-img" />
      </div>
    );
  }
}

export default Coin;
