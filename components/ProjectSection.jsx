import React from "react";
import PropTypes from "prop-types";

function ProjectSection(props) {
  return (
    <div className="mb-16 md:flex md:gap-6 px-6">
      <div className="md:w-2/6 md:flex-shrink-0">
        <h3 className="font-bold text-2xl text-heading-serif text-black">
          {props.title}
        </h3>
        <hr className="my-6 hidden md:block" />
        <p className="italic text-defocused text-sm mt-3">{props.highlight}</p>
        <hr className="my-6 md:hidden" />
      </div>

      <div className="md:flex-grow">{props.children}</div>
    </div>
  );
}

ProjectSection.propTypes = {};

export default ProjectSection;
