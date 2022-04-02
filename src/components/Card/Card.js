import React, { Component } from "react";
import Button from "../Button/Button";
import "./Card.css";

class Card extends Component {
  render() {
    const { title, body, generateAdvice } = this.props;
    return (
      <div className="card">
        {/* Title */}
        <h6 className="card__title">{title}</h6>
        {/* Body */}
        <p className="card__body">"{body}"</p>
        {/* Line Pattern */}
        <div className="card__line__container">
          <img
            className="pattern-desktop"
            src={
              require("../../assets/images/pattern-divider-desktop.svg").default
            }
            alt="pattern desktop"
          />
          <img
            className="pattern-mobile"
            src={
              require("../../assets/images/pattern-divider-mobile.svg").default
            }
            alt="pattern mobile"
          />
        </div>
        {/* Button */}
        <Button onClick={generateAdvice} />
      </div>
    );
  }
}

export default Card;
