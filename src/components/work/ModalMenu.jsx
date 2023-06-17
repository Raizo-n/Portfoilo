import React from "react";
import { projectData } from "./Data";

const ModalMenu = ({ open, onClose }) => {
  if (!open) return null;
  return projectData.map((item) => {
    return (
      <div className="modal">
        <div className="content">
          <i className="uil uil-times close-icon" onClick={onClose}></i>
          <img src={item.image} alt="" className="img" />
          <h3 className="title">{item.title}</h3>
          <p className="project-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quos
            aspernatur amet quibusdam, rem velit repellendus ut mollitia harum
            dolorum quis et aut dolor inventore repellat quo molestias
            consectetur commodi.
          </p>
          <div className="skill">
            <span className="tech-title">Technology</span>
            {/* {item.skill.map((skill) => (
                    <span className="item" key={skill}>{skill}</span>
                  ))} */}
            <span className="item">React</span>
            <span className="item">SCSS</span>
            <span className="item">Node.js</span>
            <span className="item">MySQL</span>
          </div>
        </div>
      </div>
    );
  });
};

export default ModalMenu;
