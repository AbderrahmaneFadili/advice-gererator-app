import React from "react";
import "./Button.css";
function Button({ onClick }) {
  return (
    <button className="button button__refresh" onClick={() => onClick()}>
      <img src={require("../../assets/images/icon-dice.svg").default} />
    </button>
  );
}
export default Button;
