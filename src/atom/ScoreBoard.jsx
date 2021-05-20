import React from "react";
import "./Option.css";

const ScoreBoard = ({ score }) => {
  return (
    <div className="board">
      <div className="rule-header">SCORE</div>
      <div style={{ fontWeight: "700", fontSize: "5rem" }}>{score}</div>
    </div>
  );
};

export default ScoreBoard;
