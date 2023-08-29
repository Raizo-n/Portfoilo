import React from "react";
import "./work.scss";
import Works from "./Works";

const Work = () => {
  return (
    <section className="work container section" id="project">
      <h2 className="section_title"><span className="title-span">Project</span></h2>
      <span className="section_subtitle">Most recent works</span>
      <Works />
    </section>
  );
};

export default Work;
