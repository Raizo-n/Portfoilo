import React from "react";
import "./home.scss";
import Social from "./Social";
import Data from "./Data";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="container grid">
        <div className="content grid">
          <Social />
          <div className="img"></div>
          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
