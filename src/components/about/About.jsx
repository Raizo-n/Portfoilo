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
            My name is "Raizo Nakada". I am a Japanese Front-end Developer, currently living in Vancouver Canada.
            I am good at making steady efforts toward my goals.
            Since nothing happens overnight, especially programming,
            so I keep learning about it step by step and also enjoy the journey of programming.
          </p>
          <a download="" href="" className="button button--flex">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
