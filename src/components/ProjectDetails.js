import React from "react";

import "../stylesheets/ProjectDetails.css";

export default function ProjectDetails(props) {
  return (
    <div
      id="project-details"
      className={
        "project-details-container" +
        (props.showing ? " project-details-container-displaying" : "")
      }
      onClick={() => props.hide()}
      style={{
        width: props.dimensions.width,
        height: props.dimensions.height,
      }}
    >
      <div
        className={
          "project-details shadow" +
          (props.showing ? " project-details-displaying" : "")
        }
        style={{
          width: 0.7 * props.dimensions.width,
          height: 0.7 * props.dimensions.height,
        }}
      >
        <div
          className={
            "project-details-header " + GetSizeClass() + "-details-header"
          }
        >
          {props.project.title}
        </div>
        <div className="project-details-links">
          {props.project.links === undefined
            ? ""
            : props.project.links.map((link) => {
                return (
                  <div
                    key={link.url}
                    className="project-details-link-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(link.url);
                    }}
                  >
                    <i className={GetLinkLogo(link)} />
                    <span>{GetBtnText(link)}</span>
                  </div>
                );
              })}
        </div>
        <h3 className="project-details-section-header">Skills Used</h3>
        <div className="project-details-bullets">
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
              {props.project.skills}
            </li>
          </ul>
        </div>
        <h3 className="project-details-section-header">
          {props.project.whyBullets && props.project.whyBullets.length ? "Why?" : ""}
        </h3>
        <div className="project-details-bullets">
          <ul>
            {props.project.aboutBullets === undefined
              ? ""
              : props.project.whyBullets.map((whyBullet) => {
                return (
                  <li
                    key={whyBullet}
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
                    {whyBullet}
                  </li>
                );
              })}
          </ul>
        </div>
        <h3 className="project-details-section-header">About</h3>
        <div className="project-details-bullets">
          <ul>
            {props.project.aboutBullets === undefined
              ? ""
              : props.project.aboutBullets.map((aboutBullet) => {
                  return (
                    <li
                      key={aboutBullet}
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
                      {aboutBullet}
                    </li>
                  );
                })}
          </ul>
        </div>
        <h3 className="project-details-section-header">
          {props.project.solutionsBullets !== undefined &&
          props.project.solutionsBullets.length > 0
            ? "Engineering Challenges & Solutions"
            : ""}
        </h3>
        <div className="project-details-bullets">
          <ul>
            {props.project.solutionsBullets === undefined
              ? ""
              : props.project.solutionsBullets.map((solutionsBullet) => {
                  return (
                    <li
                      key={solutionsBullet}
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
                      {solutionsBullet}
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>
    </div>
  );

  function GetSizeClass() {
    if (props.dimensions.width >= 650) return "project-xl";
    if (props.dimensions.width < 650 && props.dimensions.width > 380)
      return "project-sm";
    if (props.dimensions.width <= 380) return "project-xs";
  }

  function GetLinkLogo(link) {
    if (link.type === "Github")
      return "project-details-link fab fa-github-square";
    if (link.type === "Demo") return "project-details-link fas fa-link";
  }

  function GetBtnText(link) {
    if (link.type === "Github") return "View Source";
    if (link.type === "Demo") return "Live Link";
  }
}
