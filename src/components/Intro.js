import React from "react";

import "../stylesheets/Intro.css";

export default function Intro(props) {
  return (
    <div
      className="intro gradient no-select"
      style={{
        width: props.dimensions.width,
        height: props.dimensions.height,
      }}
    >
      <div>
        <div
          id="name"
          className={
            "name" +
            (props.dimensions.width <= 576 && props.dimensions.width > 414
              ? " name-sm"
              : "") +
            (props.dimensions.width <= 414 ? " name-xs" : "")
          }
        >
          JASPER HUANG
        </div>
        <div
          className={
            "greeting" + (props.dimensions.width <= 576 ? " greeting-sm" : "")
          }
        >
          Full Stack Engineer | USC '21
        </div>
        <div className="socials-container">
          <div
            className="social-icon"
            onClick={() => window.open("https://github.com/jasperhuangg/")}
          >
            <i className="fab fa-github-square"></i>
          </div>
          <div
            className="social-icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/jasper-huang-a95269171/")
            }
          >
            <i className="fab fa-linkedin"></i>
          </div>
          <a
            className="social-icon"
            style={{ color: "white" }}
            href="mailto:jasperhu@usc.edu"
          >
            <i className="fas fa-envelope-square"></i>{" "}
          </a>
          <div
            className="social-icon"
            onClick={() =>
              window.open("https://www.instagram.com/jasperhuangg/")
            }
          >
            <i className="fab fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
