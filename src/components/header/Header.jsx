import React, { useState } from "react";
import "./header.scss";

const Header = () => {

  // Toggle Menu
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="logo">
          Raizo
        </a>
        <div className={Toggle ? "menu show-menu" : "menu"}>
          <ul className="list grid">
            <li className="item">
              <a href="#home" className="link">
                <i className="uil uil-estate icon active-link"></i> Home
              </a>
            </li>
            <li className="item">
              <a href="#about" className="link">
                <i className="uil uil-user icon"></i> About
              </a>
            </li>
            <li className="item">
              <a href="#skills" className="link">
                <i className="uil uil-file icon"></i> Skills
              </a>
            </li>
            <li className="item">
              <a href="#project" className="link">
                <i className="uil uil-scenery icon"></i> Project
              </a>
            </li>
            <li className="item">
              <a href="#contact" className="link">
                <i className="uil uil-message icon"></i> Contact
              </a>
            </li>
          </ul>
          <i class="uil uil-times close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
