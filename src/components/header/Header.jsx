import React, { useState } from "react";
import "./header.scss";

const Header = () => {
  /*-------- Change Background Header --------*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // when the scroll is higher than 200 viewport height,
    // add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*-------- Toggle Menu --------*/
  const [Toggle, showMenu] = useState(false);

  const menuArr = [
    { menu: "Home", link: "#home" },
    { menu: "About", link: "#about" },
    { menu: "Skills", link: "#skills" },
    { menu: "Project", link: "#project" },
    { menu: "Contact", link: "#contact" },
  ];

  const menu = menuArr.map((item) => (
    <li className="item">
      <a href={item.link} className="link">
        <i className="uil uil-estate icon active-link"></i> {item.menu}
      </a>
    </li>
  ));

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="logo">Raizo</a>
        <div className={Toggle ? "menu show-menu" : "menu"}>
          <ul className="list grid">{menu}</ul>
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
