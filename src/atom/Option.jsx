import React from "react";
//import scissors from "../assets/icon-scissors.svg";
import "./Option.css";

const Option = ({ style, imageUrl, className }) => {
  return (
    <div
      className={`option-container ${className}`}
      style={{ position: "absolute", ...style }}
    >
      <div className="option">
        <img src={imageUrl} alt="Option" className="item" />
      </div>
    </div>
  );
};

export default Option;
