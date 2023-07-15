import React, { useState } from "react";
import { projectData } from "./Data";
import Work1 from "../../assets/Screenshot (62).png";
import WebDesignImg from "../../assets/MuscleGym-WebSite.png";


const Works = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => setToggleState(index);
  return (
    <div className="work-container grid">
      <div className="work-content">
        {/* Card */}
        <div className="card">
          <div className="img-box">
            <img src={WebDesignImg} alt="" className="img" />
          </div>
          <h3 className="title">Web Design</h3>
          <div className="flex-box">
          <a href="https://web-dev2-final-project.vercel.app/" className="work-button">
            Demo <i className="bx bx-right-arrow-alt icon"></i>
          </a>
          <div className="work-button" onClick={() => toggleTab(1)}>
            View More... <i className="bx bx-right-arrow-alt icon"></i>
          </div>
          <a href="https://github.com/Raizo-n" className="work-button">
            <i className="uil uil-github git-icon"></i> GitHub
          </a>
          </div>
        </div>
        {/* modal */}
        <div className={toggleState === 1 ? "modal active-modal" : "modal"}>
          <div className="content">
            <i
              className="uil uil-times close-icon"
              onClick={() => toggleTab(0)}
            ></i>
            <img src={Work1} alt="" className="img" />
            <h3 className="title">Web Design</h3>
            <p className="project-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quos
              aspernatur amet quibusdam, rem velit repellendus ut mollitia harum
              dolorum quis et aut dolor inventore repellat quo molestias
              consectetur commodi.
            </p>
            <div className="skill">
              <span className="tech-title">Technology</span>
              <span className="item">React</span>
              <span className="item">SCSS</span>
              <span className="item">Node.js</span>
            </div>
          </div>
        </div>
      </div>
      <div className="work-content">
        {/* Card */}
        <div className="card">
          <div className="img-box">
            <img src={Work1} alt="" className="img" />
          </div>
          <h3 className="title">Social App</h3>
          <a href="#" className="work-button">
            Demo <i className="bx bx-right-arrow-alt icon"></i>
          </a>
          <div className="work-button" onClick={() => toggleTab(2)}>
            View More... <i className="bx bx-right-arrow-alt icon"></i>
          </div>
          <a href="https://github.com/Raizo-n" className="work-button">
            <i className="uil uil-github git-icon"></i> GitHub
          </a>
        </div>
        {/* modal */}
        <div className={toggleState === 2 ? "modal active-modal" : "modal"}>
          <div className="content">
            <i
              className="uil uil-times close-icon"
              onClick={() => toggleTab(0)}
            ></i>
            <img src={Work1} alt="" className="img" />
            <h3 className="title">Social App</h3>
            <p className="project-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quos
              aspernatur amet quibusdam, rem velit repellendus ut mollitia harum
              dolorum quis et aut dolor inventore repellat quo molestias
              consectetur commodi.
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
      </div>
      <div className="work-content">
        {/* Card */}
        <div className="card">
          <div className="img-box">
            <img src={Work1} alt="" className="img" />
          </div>
          <h3 className="title">Web Design</h3>
          <a href="#" className="work-button">
            Demo <i className="bx bx-right-arrow-alt icon"></i>
          </a>
          <div className="work-button" onClick={() => toggleTab(3)}>
            View More... <i className="bx bx-right-arrow-alt icon"></i>
          </div>
          <a href="https://github.com/Raizo-n" className="work-button">
            <i className="uil uil-github git-icon"></i> GitHub
          </a>
        </div>
        {/* modal */}
        <div className={toggleState === 3 ? "modal active-modal" : "modal"}>
          <div className="content">
            <i
              className="uil uil-times close-icon"
              onClick={() => toggleTab(0)}
            ></i>
            <img src={Work1} alt="" className="img" />
            <h3 className="title">Web Design</h3>
            <p className="project-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quos
              aspernatur amet quibusdam, rem velit repellendus ut mollitia harum
              dolorum quis et aut dolor inventore repellat quo molestias
              consectetur commodi.
            </p>
            <div className="skill">
              <span className="tech-title">Technology</span>
              <span className="item">HTML</span>
              <span className="item">CSS</span>
              <span className="item">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
      <div className="work-content">
        {/* Card */}
        <div className="card">
          <div className="img-box">
            <img src={Work1} alt="" className="img" />
          </div>
          <h3 className="title">E-commerce</h3>
          <a href="#" className="work-button">
            Demo <i className="bx bx-right-arrow-alt icon"></i>
          </a>
          <div className="work-button" onClick={() => toggleTab(4)}>
            View More... <i className="bx bx-right-arrow-alt icon"></i>
          </div>
          <a href="https://github.com/Raizo-n" className="work-button">
            <i className="uil uil-github git-icon"></i> GitHub
          </a>
        </div>
        {/* modal */}
        <div className={toggleState === 4 ? "modal active-modal" : "modal"}>
          <div className="content">
            <i
              className="uil uil-times close-icon"
              onClick={() => toggleTab(0)}
            ></i>
            <img src={Work1} alt="" className="img" />
            <h3 className="title">E-commerce</h3>
            <p className="project-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quos
              aspernatur amet quibusdam, rem velit repellendus ut mollitia harum
              dolorum quis et aut dolor inventore repellat quo molestias
              consectetur commodi.
            </p>
            <div className="skill">
              <span className="tech-title">Technology</span>
              <span className="item">React</span>
              <span className="item">SCSS</span>
              <span className="item">Node.js</span>
              <span className="item">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
