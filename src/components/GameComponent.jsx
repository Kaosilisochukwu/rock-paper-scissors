import React from "react";
import Option from "../atom/Option";

const GameComponent = ({ winner }) => {
  return (
    <div className="game-container">
      <div
        className={
          winner === "player" ? `player-choice ${winner}` : "player-choice"
        }
      >
        <Option />
      </div>
      <div
        className={
          winner === "computer"
            ? `computer-choice ${winner}`
            : "computer-choice"
        }
      >
        <Option />
      </div>
    </div>
  );
};

export default GameComponent;
