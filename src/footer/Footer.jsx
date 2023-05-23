import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="title">Raizo Nakada</h1>

        <ul className="list">
          <li>
            <a href="#about" className="link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="link">
              Project
            </a>
          </li>
        </ul>

        <span className="copy">&#169; Raizo Nakada All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
