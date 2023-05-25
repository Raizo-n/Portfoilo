import React from "react";
import { projectData } from "./Data";

const Works = () => {
  return (
    <div className="container grid">
      {projectData.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img src={item.image} alt="" className="img" />
            <h3 className="title">{item.title}</h3>
            <a href="#" className="work-button">
              Demo <i className="bx bx-right-arrow-alt icon"></i>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Works;
