import React from "react";
import $ from "jquery";

import "../stylesheets/AboutMe.css";

export default function AboutMe(props) {
  return (
    <div className="about-me">
      <div style={{ marginBottom: "50px" }}></div>
      <div
        id="about-me-brief"
        className={
          "gradient-text about-me-paragraph about-me-brief" +
          (getIsDisplaying("about-me-brief") ? " grow-in" : "")
        }
        style={{ marginBottom: "50px" }}
      >
        Full stack engineer with an eye for UI design and a passion for creating
        great products.
      </div>
      <div
        id="about-me-p1"
        className={
          "about-me-paragraph" +
          (getIsDisplaying("about-me-p1") ? " grow-in" : "")
        }
        style={{ marginBottom: "25px" }}
      >
        I'm a self-starter, creative, and problem-solver with a passion for
        learning new technologies and creating seamless user experiences. I
        enjoy working along the entire stack to ensure system components work
        well together to bring the best experience for users.
      </div>
      <div
        id="about-me-p2"
        className={
          "about-me-paragraph" +
          (getIsDisplaying("about-me-p2") ? " grow-in" : "")
        }
        style={{ marginBottom: "25px" }}
      >
        I thrive when working in multidisciplinary teams and I'm skilled at
        discussing technical concepts with people in non-technical roles. I'm
        also skilled at:
      </div>

      <div
        id="about-me-skills"
        className={
          "about-me-paragraph" +
          (getIsDisplaying("about-me-skills") ? " grow-in" : "")
        }
        style={{ marginBottom: "25px" }}
      >
        <div
          className="project-details-bullets"
          style={{
            fontFamily: "SF-Pro-Light",
          }}
        >
          <ul>
            <li
              style={{
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <i
                className="fas fa-angle-right"
                style={{
                  paddingRight: "1em",
                }}
              ></i>
              Javascript, Typescript, Java, Python, PHP, C++, SQL, HTML, CSS
            </li>
            <li
              style={{
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <i
                className="fas fa-angle-right"
                style={{
                  paddingRight: "1em",
                }}
              ></i>
              React.js, Node.js, Express.js, jQuery, Bootstrap
            </li>
            <li
              style={{
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <i
                className="fas fa-angle-right"
                style={{
                  paddingRight: "1em",
                }}
              ></i>
              MongoDB, MySQL
            </li>
            <li
              style={{
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <i
                className="fas fa-angle-right"
                style={{
                  paddingRight: "1em",
                }}
              ></i>
              Enzyme, Jest, Cucumber, Selenium, jUnit
            </li>
            <li
              style={{
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <i
                className="fas fa-angle-right"
                style={{
                  paddingRight: "1em",
                }}
              ></i>
              Agile Methodologies, Web Service Architectures (Async,
              Client/Server, MVC, RESTful APIs), Git Versioning
              (Github/Bitbucket)
            </li>
          </ul>
        </div>
      </div>
      <div
        id="about-me-p3"
        className={
          "about-me-paragraph" +
          (getIsDisplaying("about-me-p3") ? " grow-in" : "")
        }
        style={{ marginBottom: "100px" }}
      >
        You can catch me in my free-time making music, working on side projects,
        reading articles about my favorite frameworks, and hitting the gym.
        Please don't hesitate to{" "}
        <span className="email" onClick={() => props.scrollToContact()}>
          contact
        </span>{" "}
        me for new opportunities or if you just want to talk tech!
        <div className="d-flex justify-content-center">
          <span className="resume" onClick={() => window.open(props.Resume)}>
            RESUME
          </span>
        </div>
      </div>
    </div>
  );

  function getIsDisplaying(id) {
    if ($("#" + id).offset() === undefined) return false;
    const elementTop = $("#" + id).offset().top;
    const elementHeight = $("#" + id).height();

    if (
      props.scrollPos >=
      elementTop + elementHeight * 0.25 - props.dimensions.height
    )
      return true;
    else return false;
  }
}
