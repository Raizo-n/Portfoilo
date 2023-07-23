import React from "react";
import DisplaySkill from "./DisplaySkill";

const Frontend = () => {
  const frontEndSkillArr1 = [
    { icon: "bx bxl-html5", skill: "HTML" },
    { icon: "bx bxl-css3", skill: "CSS" },
    { icon: "bx bxl-javascript", skill: "JavaScript" },
  ];

  const frontEndSkillArr2 = [
    { icon: "bx bxl-react", skill: "React" },
    { icon: "bx bxl-git", skill: "Git" },
    { icon: "bx bxl-tailwind-css", skill: "Tailwind" },
  ];

  return (
    <div className="content">
      <h3 className="title">Front-end skills</h3>
      <div className="box">
        <div className="group">
          <DisplaySkill skillSet={frontEndSkillArr1} />
        </div>
        <div className="group">
          <DisplaySkill skillSet={frontEndSkillArr2} />
        </div>
      </div>
    </div>
  );
};

export default Frontend;
