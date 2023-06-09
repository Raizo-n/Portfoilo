import React, { useState } from "react";
import { projectData } from "./Data";

const Works = () => {
  const [toggleState, setToggleState] = useState(0)

  const toggleTag = (index) => {
    setToggleState(index)
  }

  return (
    <div className="container grid">
      {projectData.map((item) => {
        return (
          <>
          {/* Card */}
            <div className="card" key={item.id}>
              <div className="img-box">
                <img src={item.image} alt="" className="img" />
              </div>
              <h3 className="title">{item.title}</h3>
              <a href="#" className="work-button">
                Demo <i className="bx bx-right-arrow-alt icon"></i>
              </a>
              <a href="#" className="work-button" onClick={()=>toggleTag(1)}>
                View More... <i className="bx bx-right-arrow-alt icon"></i>
              </a>
            </div>
            {/* modal */}
            <div className={toggleState === 1 ? "modal active-modal" : 'modal'} >
              <div className="content">
                <i className="uil uil-times close-icon" onClick={()=>toggleTag(0)}></i>
                <img src={item.image} alt="" className="img" />
                <h3 className="title">{item.title}</h3>
                <p className="project-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  quos aspernatur amet quibusdam, rem velit repellendus ut
                  mollitia harum dolorum quis et aut dolor inventore repellat
                  quo molestias consectetur commodi.
                </p>
                <div className="skill">
                  <span className="tech-title">Technology</span>
                  <span className="item">React</span>
                  <span className="item">SCSS</span>
                  <span className="item">Node.js</span>
                  <span className="item">MySQL</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Works;
