import React from "react";

const DisplaySkill = ({ skillSet }) => {
  return skillSet.map((item) => (
    <div className="data">
      <i class={item.icon}></i>
      <div>
        <h3 className="name">{item.skill}</h3>
      </div>
    </div>
  ));
};

export default DisplaySkill;
