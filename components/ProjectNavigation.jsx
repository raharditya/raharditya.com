import React from "react";
import PropTypes from "prop-types";

function ProjectNavigation(props) {
  return (
    <div className="project-nav">
      <div className="nav-left" onClick={() => props.posDec()}>
        <img src="/left.svg" alt="" />
      </div>
      <div className="nav-right" onClick={() => props.posInc()}>
        <img src="/right.svg" alt="" />
      </div>
    </div>
  );
}

ProjectNavigation.propTypes = {};

export default ProjectNavigation;
