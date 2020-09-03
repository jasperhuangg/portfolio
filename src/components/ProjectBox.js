/**
 * TODO: change to use jquery for grow in instead of observer
 */

import React from "react";

import "../stylesheets/ProjectBox.css";

export default function ProjectBox(props) {
  const [isVisible, setVisible] = React.useState(true);

  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={
        "project project-" +
        props.type +
        " shadow " +
        GetSizeClass() +
        " grow-in-section" +
        (isVisible ? " is-visible" : "")
      }
      id={props.id}
      onClick={() => props.showDetails()}
      ref={domRef}
    >
      <div className={"project-header " + GetSizeClass() + "-header"}>
        {props.project.title}
      </div>
      <div className={"project-header " + GetSizeClass() + "-brief"}>
        {props.project.brief}
      </div>
      <div className={GetSizeClass() + "-preview text-center"}>
        <img
          src={props.project.preview}
          alt={props.project.title}
          style={{
            width: "85%",
            borderRadius: "15px",
          }}
        />
      </div>
      <div className="project-expand">
        <i className="fas fa-expand"></i>
      </div>
    </div>
  );

  function GetSizeClass() {
    if (props.dimensions.width >= 650) return "project-xl";
    if (props.dimensions.width < 650 && props.dimensions.width > 380)
      return "project-sm";
    if (props.dimensions.width <= 380) return "project-xs";
  }
}
