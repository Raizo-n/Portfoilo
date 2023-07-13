import React from "react";

const Backend = () => {
  const backEndSkillArr1 = [
    { icon: "bx bxl-nodejs", skill: "Node JS" },
    { icon: "bx bxl-mongodb", skill: "MongoDB" },
    { icon: "bx bxl-badge-check", skill: "MySQL" },
  ];

  const backEndSkill1 = backEndSkillArr1.map((item) => (
    <div className="data">
      <i class={item.icon}></i>
      <div>
        <h3 className="name">{item.skill}</h3>
      </div>
    </div>
  ));

  return (
    <div className="content">
      <h3 className="title">Back-end skills</h3>
      <div className="box">
        <div className="group">{backEndSkill1}</div>
      </div>
    </div>
  );
};

export default Backend;
