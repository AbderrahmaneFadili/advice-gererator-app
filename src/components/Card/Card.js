import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const { title, body } = this.props;
    return (
      <div className="card">
        {/* Title */}
        <h6 className="card__title">{title}</h6>
        {/* Body */}
        <p className="card__body">"{body}"</p>
        {/* Line Pattern */}
        <div className="card__line__container">
          <img
            src={
              require("../../assets/images/pattern-divider-desktop.svg").default
            }
            alt=""
          />
        </div>
        {/* Button */}
      </div>
    );
  }
}

export default Card;
