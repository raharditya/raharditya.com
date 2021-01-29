import React from "react";
import PropTypes from "prop-types";

function ProjectSection(props) {
  return (
    <div className="mb-16">
      <h3 className="font-bold text-2xl text-heading-serif text-black">
        {props.title}
      </h3>
      <p className="italic text-defocused text-sm mt-3">{props.highlight}</p>
      <hr className="my-6" />
      {props.children}
    </div>
  );
}

ProjectSection.propTypes = {};

export default ProjectSection;
