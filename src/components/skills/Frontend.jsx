import React from "react";

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

  const frontEndSkill1 = frontEndSkillArr1.map((item) => (
    <div className="data">
      <i class={item.icon}></i>
      <div>
        <h3 className="name">{item.skill}</h3>
      </div>
    </div>
  ));

  const frontEndSkill2 = frontEndSkillArr2.map((item) => (
    <div className="data">
      <i class={item.icon}></i>
      <div>
        <h3 className="name">{item.skill}</h3>
      </div>
    </div>
  ));

  return (
    <div className="content">
      <h3 className="title">Front-end skills</h3>
      <div className="box">
        <div className="group">{frontEndSkill1}</div>
        <div className="group">{frontEndSkill2}</div>
      </div>
    </div>
  );
};

export default Frontend;
