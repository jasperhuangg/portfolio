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
          "gradient-text about-me-paragraph about-me-brief"
        }
        style={{ marginBottom: "50px" }}
      >
        Full stack engineer with an eye for UI design and a passion for creating
        great tech.
      </div>
      <div
        id="about-me-p1"
        className={
          "about-me-paragraph"
        }
        style={{ marginBottom: "25px" }}
      >
        Self-starter, creative, and problem-solver with a passion for
        learning new technologies and creating seamless user experiences. Enjoys the process of ensuring system components work
        well together to bring the best experience for users.
      </div>
      <div
        id="about-me-p2"
        className={
          "about-me-paragraph"
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
          "about-me-paragraph"
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
              />
              Typescript, Javascript, GraphQL, Java, Python, PHP, SQL, HTML, CSS
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
              />
              React/React Native, Redux, Node.js, Express.js, Apollo GraphQL,
              ReactiveX, jQuery, Bootstrap
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
              />
              MongoDB, Firebase, MySQL, Google Cloud SQL, DynamoDB
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
              />
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
              />
              Agile Methodologies, Web Service Architectures (Async,
              Client/Server, MVC, RESTful APIs, Publish/Subscribe), Git
              Versioning (Github/Bitbucket)
            </li>
          </ul>
        </div>
      </div>
      <div
        id="about-me-p3"
        className={
          "about-me-paragraph"
        }
        style={{ marginBottom: "100px" }}
      >
        In my free-time I like making music, working on side projects,
        reading Medium articles, and hitting the
        gym. Please don't hesitate to{" "}
        <span className="email" onClick={() => props.scrollToContact()}>
          contact
        </span>{" "}
        me for new opportunities or if you just want to have a chat!
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

    return (
      props.scrollPos >=
      elementTop + elementHeight * 0.25 - props.dimensions.height
    );
  }
}
