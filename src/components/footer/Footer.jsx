import React from "react";
import "./footer.scss";

const Footer = () => {
  const menuArr = [
    { menu: "About", link: "#about" },
    { menu: "Skills", link: "#skills" },
    { menu: "Project", link: "#portfolio" },
    { menu: "Contact", link: "#contact" },
  ];

  const menu = menuArr.map((item) => (
    <li>
      <a href={item.link} className="link">
        {item.menu}
      </a>
    </li>
  ));

  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="title">Raizo Nakada</h1>
        <ul className="list">{menu}</ul>
        <span className="copy">
          &#169; Raizo Nakada 2023 All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
