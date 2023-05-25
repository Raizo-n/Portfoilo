
import React from 'react'

const Backend = () => {
    return (
      <div className="content">
        <h3 className="title">Back-end skills</h3>
        <div className="box">
          <div className="group">
            <div className="data">
              <i class="bx bxl-nodejs"></i>
              <div>
                <h3 className="name">Node JS</h3>
                <span className="level">Basic</span>
              </div>
            </div>
            <div className="data">
              <i class="bx bxl-mongodb"></i>
              <div>
                <h3 className="name">MongoDB</h3>
                <span className="level">Basic</span>
              </div>
            </div>
            <div className="data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="name">My SQL</h3>
                <span className="level">Basic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Backend
