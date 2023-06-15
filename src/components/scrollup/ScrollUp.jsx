import React from "react";
import "./scrollUp.scss";

const ScrollUp = () => {
  window.addEventListener("scroll", function() {
    const scrollUp = document.querySelector(".scrollUp");
    // when the scroll is higher than 560 viewport height,
    // add the show-scroll class to a tag with the scroll
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    <a href="#home" className="scrollUp">
      <i className="uil uil-arrow-up icon"></i>
    </a>
  );
};

export default ScrollUp;
