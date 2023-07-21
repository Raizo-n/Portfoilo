import React from "react";
import DisplaySkill from "./DisplaySkill";

const Backend = () => {
  const backEndSkillArr1 = [
    { icon: "bx bxl-nodejs", skill: "Node JS" },
    { icon: "bx bxl-mongodb", skill: "MongoDB" },
    { icon: "bx bxs-badge-check", skill: "MySQL" },
  ];

  return (
    <div className="content">
      <h3 className="title">Back-end skills</h3>
      <div className="box">
        <div className="group">
          <DisplaySkill skillSet={backEndSkillArr1} />
        </div>
      </div>
    </div>
  );
};

export default Backend;
