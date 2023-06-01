import React from "react";
import hand from "../../assets/433.png";

const Data = () => {
  return (
    <div className="data">
      <h1 className="title">
        Raizo Nakada
        <img src={hand} alt="" className="hand-icon" />
      </h1>
      <h3 className="subtitle">Front-end Developer</h3>
      <p className="description">Based in Vancouver</p>
      <a href="#contact" className="button button--flex hello-btn">
        Say Hello
      </a>
    </div>
  );
};

export default Data;
