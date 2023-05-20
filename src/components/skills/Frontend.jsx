import React from "react";

const Frontend = () => {
  return (
    <div className="content">
      <h3 className="title">Front-end skills</h3>
      <div className="box">
        <div className="group">
            <div className="data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="name">HTML</h3>
              <span className="level">Basic</span>
            </div>
          </div>
          <div className="data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="name">CSS</h3>
              <span className="level">Basic</span>
            </div>
          </div>
          <div className="data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="name">JavaScript</h3>
              <span className="level">Advanced</span>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="name">React</h3>
              <span className="level">Basic</span>
            </div>
          </div>
          <div className="data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="name">Git</h3>
              <span className="level">Basic</span>
            </div>
          </div>
          <div className="data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="name">BootStrap</h3>
              <span className="level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
