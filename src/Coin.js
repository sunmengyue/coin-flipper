import React, { Component } from "react";
import "./coin.css";

class Coin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="coin">
        <img src={this.props.info.imgSrc} alt={this.props.info.side} />
      </div>
    );
  }
}

export default Coin;
