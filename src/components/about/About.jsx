import React from "react";
import "./about.scss";
import AboutImg from "../../assets/MyImg.jpg";
import Info from "./Info";
// import CV from '../../assets/';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About me</h2>
      <span className="section_subtitle">My introduction</span>
      <div className="container about_container grid">
        <img src={AboutImg} alt="" className="img" />
        <div className="data">
          {/* <Info /> */}
          <p className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
            natus esse aspernatur, quibusdam neque quisquam dolor unde beatae
            officiis? Dolor adipisci commodi, pariatur voluptates molestias
            vitae tenetur vel at fuga.
          </p>
          <a download='' href='' className="button button--flex">Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default About;
