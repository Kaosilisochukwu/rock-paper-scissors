import React from "react";
import Option from "../atom/Option";
import { data } from "../data/options";
//import background from "/assets/images/bg-pentagon.svg";
import "./Component.css";

const OptionComponent = () => {
  return (
    <div className="bg-container">
      <div
        className="options-container"
        style={{
          backgroundImage: `url(/assets/images/bg-pentagon.svg)`,
        }}
      >
        <Option imageUrl={data.Scissors.imageUrl} className="scissors" />
        <Option imageUrl={data.Spock.imageUrl} className="spock" />
        <Option imageUrl={data.Lizard.imageUrl} className="lizard" />
        <Option imageUrl={data.Rock.imageUrl} className="rock" />
        <Option imageUrl={data.Paper.imageUrl} className="paper" />
      </div>
    </div>
  );
};

export default OptionComponent;
