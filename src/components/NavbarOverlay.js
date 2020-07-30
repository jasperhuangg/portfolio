import React from "react";

import "../stylesheets/Navbar.css";

export default function NavbarOverlay(props) {
  return (
    <div
      className={
        "navbar-overlay" +
        (props.displaying ? " navbar-overlay-displaying" : "")
      }
    >
      <div className="navbar-overlay-collapse" onClick={() => props.hide()}>
        <i className="fas fa-times"></i>
      </div>
      <div
        className="navbar-overlay-link"
        onClick={() => window.open(props.Resume)}
      >
        RESUME
      </div>
      <div
        className="navbar-overlay-link"
        onClick={() => {
          props.hide();
          setTimeout(() => props.scrollToAbout(), 250);
        }}
      >
        ABOUT
      </div>
      <div
        className="navbar-overlay-link"
        onClick={() => {
          props.hide();
          setTimeout(() => props.scrollToProjects(), 250);
        }}
      >
        PROJECTS
      </div>
      <div
        className="navbar-overlay-link"
        onClick={() => {
          props.hide();
          setTimeout(() => props.scrollToContact(), 250);
        }}
      >
        CONTACT
      </div>
    </div>
  );
}
