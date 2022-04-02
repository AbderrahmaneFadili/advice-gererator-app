import React from "react";
import "./Button.css";
function Button() {
  return (
    <button className="button button__refresh">
      <img src={require("../../assets/images/icon-dice.svg").default} />
    </button>
  );
}
export default Button;
