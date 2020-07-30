import React from "react";

import "../stylesheets/Navbar.css";

export default function Navbar(props) {
  function GetNavbarClasses() {
    const scrollPos = props.scrollPos;
    const windowHeight = props.dimensions.height;

    if (scrollPos < windowHeight / 2) return "navbar no-select";
    if (scrollPos >= windowHeight / 2)
      return "navbar no-select navbar-fill shadow";
  }

  function isNavbarFilled() {
    const scrollPos = props.scrollPos;
    const windowHeight = props.dimensions.height;

    if (scrollPos < windowHeight / 2) return false;
    if (scrollPos >= windowHeight / 2) return true;
  }

  return (
    <div className={GetNavbarClasses()}>
      {isNavbarFilled() ? (
        <div className="navbar-title" onClick={() => props.scrollToTop()}>
          JASPER HUANG
        </div>
      ) : (
        <div></div>
      )}
      {props.dimensions.width >= 768 ? (
        <div className="navbar-links-container">
          <div
            className="navbar-link"
            onClick={() => window.open(props.Resume)}
          >
            RESUME
          </div>
          <div className="navbar-link" onClick={() => props.scrollToAbout()}>
            ABOUT
          </div>
          <div className="navbar-link" onClick={() => props.scrollToProjects()}>
            PROJECTS
          </div>
          <div className="navbar-link" onClick={() => props.scrollToContact()}>
            CONTACT
          </div>
        </div>
      ) : (
        <div
          className="navbar-mobile-toggle"
          onClick={() => props.showNavbarOverlay()}
        >
          <i class="fas fa-bars"></i>
        </div>
      )}
    </div>
  );
}
