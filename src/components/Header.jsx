import React from "react";
import ScoreBoard from "../atom/ScoreBoard";
import "./Component.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-options">
        <div>ROCK</div>
        <div>PAPER</div>
        <div>SCISSORS</div>
        <div>LIZARD</div>
        <div>SPOCK</div>
      </div>
      <ScoreBoard score={3} />
    </div>
  );
};

export default Header;
