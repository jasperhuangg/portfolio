import React, { useState, useEffect } from "react";
import useScrollPosition from "@react-hook/window-scroll";
import $, { get } from "jquery";

import ProjectBox from "./ProjectBox";
import ProjectDetails from "./ProjectDetails";
import OverlayShadow from "./OverlayShadow";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Navbar from "./Navbar";
import NavbarOverlay from "./NavbarOverlay";
import {PROJECTS} from "../util/Projects"

import "../stylesheets/Main.css";

import Resume from "../assets/Jasper_Huang_Resume.pdf";

export default function Main() {
  const [currentProject, setCurrentProject] = useState({});
  const [detailsShowing, setDetailsShowing] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const scrollPos = useScrollPosition(60);
  const [navbarOverlayDisplaying, setNavbarOverlayDisplaying] = useState(false);

  function handleResize() {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  function handleEscape(e) {
    if (e.keyCode === 27) setDetailsShowing(false);
  }

  function scrollToAbout() {
    $("html, body").animate(
      {
        scrollTop: $("#about-section-start").offset().top,
      },
      {
        duration: 500,
        easing: "swing",
      }
    );
  }

  function scrollToProjects() {
    $("html, body").animate(
      {
        scrollTop: $("#projects-section-start").offset().top - 60,
      },
      500
    );
  }

  function scrollToContact() {
    $("html, body").animate(
      {
        scrollTop: $("#contact-section-start").offset().top - 60,
      },
      500
    );
  }

  function scrollToTop() {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  }

  function getIsDisplaying(id) {
    if ($("#" + id).offset() === undefined) return false;
    const elementTop = $("#" + id).offset().top;
    const elementHeight = $("#" + id).height();

    if (scrollPos >= elementTop + elementHeight * 0.25 - dimensions.height)
      return true;
    else return false;
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    document.addEventListener("keydown", handleEscape, false);
  }, []);

  return (
    <>
      <div className="main">
        <Navbar
          dimensions={dimensions}
          scrollPos={scrollPos}
          scrollToAbout={() => scrollToAbout()}
          scrollToProjects={() => scrollToProjects()}
          scrollToContact={() => scrollToContact()}
          scrollToTop={() => scrollToTop()}
          Resume={Resume}
          showNavbarOverlay={() => {
            $("#project-details").scrollTop(0);
            setNavbarOverlayDisplaying(true);
          }}
        />
        <NavbarOverlay
          scrollToAbout={() => scrollToAbout()}
          scrollToProjects={() => scrollToProjects()}
          scrollToContact={() => scrollToContact()}
          Resume={Resume}
          displaying={navbarOverlayDisplaying}
          hide={() => setNavbarOverlayDisplaying(false)}
        />

        <Intro dimensions={dimensions} scrollToAbout={() => scrollToAbout()} />
        <h1 id="about-section-start" className="section-header"></h1>

        <AboutMe
          dimensions={dimensions}
          scrollPos={scrollPos}
          scrollToContact={() => scrollToContact()}
          Resume={Resume}
        />
        {detailsShowing ? (
          <OverlayShadow
            hide={() => {
              setDetailsShowing(false);
            }}
          />
        ) : (
          ""
        )}
        <ProjectDetails
          dimensions={dimensions}
          project={currentProject}
          showing={detailsShowing}
          hide={() => {
            setDetailsShowing(false);
          }}
        />

        <h1
          id="projects-section-start"
          className={
            "gradient-text section-header" +
            (getIsDisplaying("projects-section-start") ? " grow-in-fast" : "")
          }
        >
          Projects
        </h1>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
          }}
        >
          <div
            className="projects-container"
            style={{
              gridTemplateColumns:
                dimensions.width > 1200 ? "595px 595px" : dimensions.width,
            }}
          >
            {PROJECTS.map((project) => {
              return (
                <ProjectBox
                  key={project.title}
                  id={project.title.replace(/ /g, "-")}
                  type="dark"
                  dimensions={dimensions}
                  project={project}
                  showDetails={() => {
                    setCurrentProject(project);
                    setDetailsShowing(true);
                  }}
                />
              );
            })}
          </div>
        </div>
        <h1
          style={{ marginTop: "50px" }}
          id="contact-section-start"
          className={
            "gradient-text section-header" +
            (getIsDisplaying("projects-section-start") ? " grow-in-fast" : "")
          }
        >
          {/* Contact */}
        </h1>
        <div className="contact-section">
          <div>Like what you see? Let's talk!</div>
          <div
            style={{
              marginLeft: "0.5em",
              marginRight: "0.5em",
              marginTop: "1em",
            }}
            className="gradient-text email"
            href="mailto:jasperhu@usc.edu"
          >
            {" "}
            jasperhu@usc.edu
          </div>
        </div>
        <div
          className="footer shadow gradient no-select"
          onClick={() => scrollToTop()}
        >
          JASPER HUANG &copy; 2020
        </div>
      </div>
    </>
  );
}
