import React from "react";

const Rulespage = ({ close, display }) => {
  return (
    <div className="rule-container" style={{ display: display }}>
      <div className="rule-wrapper">
        <div className="rules-header">
          <div>RULES</div>
          <div onClick={close} style={{ cursor: "pointer" }}>
            X
          </div>
        </div>
        <div
          className="rule"
          style={{
            backgroundImage: `url(/assets/images/image-rules-bonus.svg)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Rulespage;
