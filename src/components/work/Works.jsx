import React from "react";
import { projectData } from "./Data";

const Works = () => {
  return (
    <div className="container grid">
      {projectData.map((item) => {
        return (
          <>
            <div className="card" key={item.id}>
              <div className="img-box">
                <img src={item.image} alt="" className="img" />
              </div>
              <h3 className="title">{item.title}</h3>
              <a href="#" className="work-button">
                Demo <i className="bx bx-right-arrow-alt icon"></i>
              </a>
              <a href="#" className="work-button">
                View More... <i className="bx bx-right-arrow-alt icon"></i>
              </a>
            </div>

            <div className="modal">
              <div className="content">
                <img src={item.image} alt="" className="img" />
                <i className="uil uil-times close-icon"></i>
                <h3 className="title">{item.title}</h3>
                <p className="project-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  quos aspernatur amet quibusdam, rem velit repellendus ut
                  mollitia harum dolorum quis et aut dolor inventore repellat
                  quo molestias consectetur commodi.
                </p>
                <p className="tech-title">
                  Technology
                  <i className="item">React</i>
                  <i className="item">SCSS</i>
                  <i className="item">Node.js</i>
                  <i className="item">MySQL</i>
                </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Works;
