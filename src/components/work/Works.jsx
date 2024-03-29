import React, { useState } from "react";
import { projectData } from "./Data";
import Work1 from "../../assets/Screenshot (62).png";
import WebDesignImg from "../../assets/MuscleGym-WebSite.png";
// import MovieAppImg from "../../assets/MovieApp.png";
import MovieAppImg from "../../assets/Movie-App.png";
import WeatherAppImg from "../../assets/WeatherApp.png";

const Works = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => setToggleState(index);
  return (
    <div className="work-container grid">
      {/* Web Design */}
      <div className="work-content">
        {/* Card */}
        <div className="card">
          <div className="img-box">
            <img src={WebDesignImg} alt="" className="img" />
          </div>
          <h3 className="title">Web Design</h3>
          <div className="flex-box">
            <a
              href="https://web-dev2-final-project.vercel.app/"
              className="demo-button"
              // className="work-button demo-button button"
            >
              Demo
            </a>
            <div className="work-button" onClick={() => toggleTab(1)}>
              View More... <i className="bx bx-right-arrow-alt icon"></i>
            </div>
            <a
              href="https://github.com/Raizo-n/WebDev2_FinalProject"
              className="work-button"
            >
              <i className="uil uil-github git-icon"></i> GitHub
            </a>
          </div>
        </div>
        {/* modal */}
        <div className={toggleState === 1 ? "modal active-modal" : "modal"}>
          <div className="content">
            <i
              className="uil uil-times close-icon"
              onClick={() => toggleTab(0)}
            ></i>
            <img src={WebDesignImg} alt="" className="img" />
            <h3 className="title">Web Design</h3>
            <p className="project-desc">
              I created a web site for a gym using hamburger menu, carousel, and
              accordion.
            </p>
            <div className="skill">
              <span className="tech-title">Technology</span>
              <span className="item">React</span>
              <span className="item">SCSS</span>
              <span className="item">Node.js</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social App *not yet*/}
      <div className="work-content">
        {/* Card */}
        <div className="card">
          <div className="img-box">
            <img src={Work1} alt="" className="img" />
          </div>
          <h3 className="title">Social App</h3>
          <a href="#" className="work-button">
            Demo <i className="bx bx-right-arrow-alt icon"></i>
          </a>
          <div className="work-button" onClick={() => toggleTab(2)}>
            View More... <i className="bx bx-right-arrow-alt icon"></i>
          </div>
          <a href="https://github.com/Raizo-n" className="work-button">
            <i className="uil uil-github git-icon"></i> GitHub
          </a>
        </div>
        {/* modal */}
        <div className={toggleState === 2 ? "modal active-modal" : "modal"}>
          <div className="content">
            <i
              className="uil uil-times close-icon"
              onClick={() => toggleTab(0)}
            ></i>
            <img src={Work1} alt="" className="img" />
            <h3 className="title">Social App</h3>
            <p className="project-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quos
              aspernatur amet quibusdam, rem velit repellendus ut mollitia harum
              dolorum quis et aut dolor inventore repellat quo molestias
              consectetur commodi.
            </p>
            <div className="skill">
              <span className="tech-title">Technology</span>
              <span className="item">React</span>
              <span className="item">SCSS</span>
              <span className="item">Node.js</span>
              <span className="item">MySQL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Movie App */}
      <div className="work-content">
        {/* Card */}
        <div className="card">
          <div className="img-box">
            <img src={MovieAppImg} alt="" className="img" />
          </div>
          <h3 className="title">Movie App</h3>
          <a
            href="https://react-redux-final-project.vercel.app/"
            className="work-button"
          >
            Demo <i className="bx bx-right-arrow-alt icon"></i>
          </a>
          <div className="work-button" onClick={() => toggleTab(3)}>
            View More... <i className="bx bx-right-arrow-alt icon"></i>
          </div>
          <a
            href="https://github.com/Raizo-n/React-Redux_FinalProject"
            className="work-button"
          >
            <i className="uil uil-github git-icon"></i> GitHub
          </a>
        </div>
        {/* modal */}
        <div className={toggleState === 3 ? "modal active-modal" : "modal"}>
          <div className="content">
            <i
              className="uil uil-times close-icon"
              onClick={() => toggleTab(0)}
            ></i>
            <img src={MovieAppImg} alt="" className="img" />
            <h3 className="title">Movie App</h3>
            <p className="project-desc">
              This app allows you to search for a movie or show. You can get
              detailed information of it by clicking each movie or show image. I
              built this app using OMDb API.
            </p>
            <div className="skill">
              <span className="tech-title">Technology</span>
              <span className="item">SCSS</span>
              <span className="item">React</span>
            </div>
          </div>
        </div>
      </div>

      {/* Weather App */}
      <div className="work-content">
        {/* Card */}
        <div className="card">
          <div className="img-box">
            <img src={WeatherAppImg} alt="" className="img" />
          </div>
          <h3 className="title">Weather App</h3>
          <a
            href="https://weather-app-eta-gilt.vercel.app/"
            className="work-button"
          >
            Demo <i className="bx bx-right-arrow-alt icon"></i>
          </a>
          <div className="work-button" onClick={() => toggleTab(4)}>
            View More... <i className="bx bx-right-arrow-alt icon"></i>
          </div>
          <a
            href="https://github.com/Raizo-n/React-weatherApp"
            className="work-button"
          >
            <i className="uil uil-github git-icon"></i> GitHub
          </a>
        </div>
        {/* modal */}
        <div className={toggleState === 4 ? "modal active-modal" : "modal"}>
          <div className="content">
            <i
              className="uil uil-times close-icon"
              onClick={() => toggleTab(0)}
            ></i>
            <img src={WeatherAppImg} alt="" className="img" />
            <h3 className="title">Weather App</h3>
            <p className="project-desc">
              You can search for the big city, which population is more than one
              million people in the world, and get the weather forecast for it.
              By hitting the accordion on the weekly forecast section, you can
              get more detailed information of the day. I built this app using
              OpenWeatherMap API and GeoDB API with places autocomplete. Also, I
              used two packages, react-select and react-assemble.
            </p>
            <div className="skill">
              <span className="tech-title">Technology</span>
              <span className="item">CSS</span>
              <span className="item">React</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
